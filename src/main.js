// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from "./bin/fetch";
import wxapi from "./bin/wxapi"
import settitle from "./assets/Tool/settitle"
import "./assets/css/public.css"
// import we from "./bin/weChat_jsSdk.js"
import sha1 from "./bin/jquery.sha1"
import qs from 'qs'
import { ToastPlugin, LoadingPlugin } from 'vux'
import { Toast } from 'vux'
// import { Scroller } from '@nutui/nutui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Loadmore } from 'mint-ui'
// Scroller.install(Vue);
Vue.use(MintUI);
Vue.component(Loadmore.name, Loadmore);
Vue.use(ToastPlugin, { position: 'middle' })
Vue.use(sha1);
// Vue.use(we);
Vue.use(qs);
Vue.use(LoadingPlugin, { position: 'absolute' })
Vue.config.productionTip = false
Vue.prototype.$fetch = service;
Vue.prototype.wxapi = wxapi;
Vue.prototype.toNumber = function (num) {
  return Number(num).toFixed(1);
}
Vue.component('toast', Toast)
window.settitle = settitle;

 router.beforeEach((to, from, next) => {
  // && to.name!="answer" && to.name!="result"&& to.name!="nearby" 答题和结果
  console.log(to.name )
   if(!localStorage.getItem('user') && to.name !== "login" && to.name !== "shop" && to.name !=="home" && to.name!="changePassword" && to.name !=="introduce"&& to.name !=="sharedBonusTwo"&& to.name !=="nationalStores" && to.name !=="privacyProtocol"){
     next("/login/1");
     return 
   }
   next();
 })/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
