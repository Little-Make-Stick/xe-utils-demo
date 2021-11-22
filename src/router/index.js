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
        path: 'string/toValueString',
        name: 'string-toValueString',
        component: () => import( '../views/String/toValueString.vue')
      },
      {
        path: 'string/camelCase_kebabCase',
        name: 'string-camelCase_kebabCase',
        component: () => import( '../views/String/camelCase_kebabCase.vue')
      },
      {
        path: 'string/escape_unescape',
        name: 'string-escape_unescape',
        component: () => import( '../views/String/escape_unescape.vue')
      },
      {
        path: 'string/startsWith_endsWith',
        name: 'string-startsWith_endsWith',
        component: () => import( '../views/String/startsWith_endsWith.vue')
      },
      {
        path: 'string/template',
        name: 'string-template',
        component: () => import( '../views/String/template.vue')
      },
      {
        path: 'string/string',
        name: 'string-string',
        component: () => import( '../views/String/string.vue')
      },
      {
        path: 'url/url',
        name: 'url-url',
        component: () => import( '../views/URL/url.vue')
      },
      {
        path: 'web/browse',
        name: 'web-browse',
        component: () => import( '../views/Web/browse.vue')
      },
      {
        path: 'web/locat',
        name: 'web-locat',
        component: () => import( '../views/Web/locat.vue')
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
