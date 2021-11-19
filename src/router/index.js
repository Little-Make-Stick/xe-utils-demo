import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'base/isNaN',
    children:[
      {
        path: 'base/isNaN',
        name: 'base-isNaN',
        component: () => import( '../views/Base/isNaN.vue')
      },
      {
        path: 'web/browse',
        name: 'web-browse',
        component: () => import( '../views/Web/browse.vue')
      },
      {
        path: 'web/local',
        name: 'web-local',
        component: () => import( '../views/Web/local.vue')
      },
      {
        path: 'web/getBaseURL',
        name: 'web-getBaseURL',
        component: () => import( '../views/Web/getBaseURL.vue')
      },
      {
        path: 'web/cookie',
        name: 'web-cookie',
        component: () => import( '../views/Web/cookie.vue')
      },
      {
        path: 'setting/setting',
        name: 'setting-setting',
        component: () => import( '../views/Setting/setting.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
