import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import viewport from 'postcss-mobile-forever'
import autoprefixer from 'autoprefixer'
import { createVitePlugins } from './build/vite'
import { exclude, include } from './build/vite/optimize'
import { fileURLToPath } from 'node:url'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: './', //'./acl-demo/',//env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(),

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/admin-api': {
          target: 'http://127.0.0.1:8090',
          // target: 'http://47.121.213.167:80/api', // prod
          ws: false,
          changeOrigin: true,
        },
      },
    },

    resolve: {
      alias: {
        // '~@': path.join(__dirname, './src'),
        // '@': path.join(__dirname, './src'),
        // '~': path.join(__dirname, './src/assets'),
        "~@": fileURLToPath(new URL("./src", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          // https://github.com/wswmsword/postcss-mobile-forever
          viewport({
            appSelector: '#app',
            viewportWidth: 375,
            maxDisplayWidth: 600,
            rootContainingBlockSelectorList: [
              'van-tabbar',
              'van-popup',
            ],
          }),
        ],
      },
      preprocessorOptions: {
        less: {
          additionalData: '@import "~@/styles/theme.less";',
        },
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },

    optimizeDeps: { include, exclude },
  }
}
