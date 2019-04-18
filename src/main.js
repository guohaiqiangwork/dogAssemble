// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from "./bin/fetch";
import  wxapi from "./bin/wxapi"
import settitle from "./assets/Tool/settitle"
import "./assets/css/public.css"
Vue.config.productionTip = false
Vue.prototype.$fetch = service;
Vue.prototype.wxapi = wxapi;
Vue.prototype.toNumber = function (num) {
  return Number(num).toFixed(1);
}
window.settitle = settitle;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
