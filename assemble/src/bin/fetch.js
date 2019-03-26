import axios from 'axios'
const config = require('../config/config.dev')
// 创建axios实例
const options = {
  baseURL: '/',
  timeout: 300000

}
const service = axios.create(options)

// request拦截器
service
  .interceptors
  .request
  .use(request => {
    request.headers.common["Access-Control-Allow-Origin"]="*"
    return request
  }, error => {
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
    if (response.status !== 200) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  }, error => {
    // 错误提示
    // ElementUI.Message({
    //   type: 'error',
    //   message: error.response.data.msg
    // })
    MintUI.MessageBox('提示', error.message);
    document.dispatchEvent(new Event('error'))

    return Promise.reject(error)
  })

export default service
