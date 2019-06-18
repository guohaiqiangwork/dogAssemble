// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from "./bin/fetch";
import wxapi from "./bin/wxapi"
import settitle from "./assets/Tool/settitle"
import "./assets/css/public.css"
import we from "./bin/weChat_jsSdk.js"
import sha1 from "./bin/jquery.sha1"
import { ToastPlugin, LoadingPlugin } from 'vux'
import { Toast } from 'vux'
Vue.use(ToastPlugin, { position: 'middle' })
Vue.use(sha1);
Vue.use(we);
Vue.use(LoadingPlugin, { position: 'absolute' })
Vue.config.productionTip = false
Vue.prototype.$fetch = service;
Vue.prototype.wxapi = wxapi;
Vue.prototype.toNumber = function (num) {
  return Number(num).toFixed(1);
}
Vue.component('toast', Toast)
window.settitle = settitle;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
