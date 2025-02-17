import antfu from '@antfu/eslint-config'

export default antfu({
  // enable UnoCSS support
  // https://unocss.dev/integrations/vscode
  unocss: true,

  formatters: {
    css: true,
  },

  ignores: [
    '.github/**',
    'scripts/**',
  ],
  rules: {
    'no-console': 'off',
    'no-arrow-functions': 'off',
  },
})
