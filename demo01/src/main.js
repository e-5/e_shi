// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/base.css' /*引入公共样式*/
import util from './util/index'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$h = util._axios

/* eslint-disable no-new */
var v = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})