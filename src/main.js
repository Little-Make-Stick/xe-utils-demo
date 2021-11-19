import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

Vue.config.productionTip = false

// import XEUtils from 'xe-utils'
// const XEUtils = require('xe-utils')
// Vue.use(XEUtils);

// import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'
// Vue.use($);

// [Error] Vue is a constructor and should be called with the `new` keyword
// Vue.use()滥用
// 在vue项目中使用第三方依赖，当依赖不是vue插件而又了使用Vue.use的时候，会报此错误；

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
