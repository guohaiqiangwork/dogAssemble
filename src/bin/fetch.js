import axios from 'axios';
import router from '../router';
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

const config = require('../config/config.dev')
// 创建axios实例
let options = {
  baseURL: config.baseURL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
    'AuthorizationKey': window.localStorage.user || '',
  }

}
let service = axios.create(options)

// request拦截器
service
  .interceptors
  .request
  .use(request => {
    request.headers = { "AuthorizationKey": window.localStorage.getItem("user") };
    // request.headers.common["Access-Control-Allow-Origin"]="*"
    return request
  }, error => {
    console.log(error)
    Promise.reject(error)

  })

// respone拦截器
service
  .interceptors
  .response
  .use(response => {
    /**
     * code为非200是错误的请求
     */
    if (response.data.code == "702") {
      alert(response.data.obj + '接口返回链接')
      window.location.href = response.data.obj
    }
    if (response.data.msg == "openId_none!") {
      alert(response.data.obj + '接口返回链接')
      window.location.href = response.data.obj
    }
    if (response.data.msg == "openId_error") {
      alert(response.data.obj + '接口返回链接')
      window.location.href = response.data.obj
    }
    if (response.data.msg == "openId_error!") {
      alert(response.data.obj + '接口返回链接')
      window.location.href = response.data.obj
    }
    if (response.data.msg == "no_login") {
      router.push('/login/1');
    }
    if (response.data.code == 300) {
      // alert(response.data.message)
      // Vue.$vux.toast.show({
      //   text:response.data.message
      //  })

      router.push('/login/1');
    }

    if (response.status !== 200) {
      return Promise.reject('error')
    } else {
      // var res = JSON.parse(response.data)
      // Params.reslove()

      return response.data
    }
  }, error => {
    console.log(error)
    // 错误提示
    // ElementUI.Message({
    //   type: 'error',
    //   message: error.response.data.msg
    // })
    // MintUI.MessageBox('提示', error.message);
    // document.dispatchEvent(new Event('error'))

    return Promise.reject(error)
  })

export default service