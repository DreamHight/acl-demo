// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHistory } from "vue-router";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { EnhancedRouteLocation } from './types'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useRouteCacheStore from '@/stores/modules/routeCache'

NProgress.configure({ showSpinner: true, parent: '#app' })

const basicRoutes = [
  {
    path: "/",
    name: "home",
    // meta:{
    //   title: "基础表单",
    // },
    component: () => import(/* webpackChunkName: "home" */ "../pages/index.vue"),
  },
  {
    path: "/home/homeIndex",
    name: "homeIndex",
    component: () => import(/* webpackChunkName: "home" */ "../pages/home/homeIndex.vue"),
  },
  {
    path: "/explain/awarding",
    name: "awarding",
    component: () => import(/* webpackChunkName: "explain" */ "../pages/explain/awarding.vue"),
  },
  {
    path: "/explain/illustration",
    name: "illustration",
    component: () => import(/* webpackChunkName: "explain" */ "../pages/explain/illustration.vue"),
  },
  {
    path: "/product/details",
    name: "details",
    component: () => import(/* webpackChunkName: "details" */ "../pages/product/details.vue"),
  },
  {
    path: "/fail",
    name: "fail",
    component: () => import(/* webpackChunkName: "fail" */ "../pages/result/fail.vue"),
  },
]
const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  // routes,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes,
})

router.beforeEach((to: EnhancedRouteLocation, from, next) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  const routeTransitionNameStore = useRouteTransitionNameStore()

  // Route cache
  routeCacheStore.addRoute(to)

  if (to.meta.level > from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-left')

  else if (to.meta.level < from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-right')

  else
    routeTransitionNameStore.setName('')

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
