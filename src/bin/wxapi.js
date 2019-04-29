// wxapi.js
import wx from 'weixin-js-sdk'
import fetch from './fetch'
const wxApi = {
  /**
   * [isweixin 判断是否微信浏览器]
   */
  isweixin() {
    const ua = window.navigator.userAgent.toLowerCase()
    console.log(ua)
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      this.$router.push({
        path: '/wxkj/isnotWechat'
      })
      return false
    }
  },
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  wxRegister(callback) {
    let data = {
      params: {
        reqUrl: window.location.href
      }
    }
console.log(data.params)
    fetch.post('http://192.168.3.2:8085/weChat/weChat/setJsSdkMsg').then((res) => {
      console.log(res,'kkkkkkkkkkkkk');
      wx.config({
        debug: false, // 开启调试模式
        appId: res.obj.appId, // 必填，公众号的唯一标识
        timestamp: res.obj.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.obj.noncestr, // 必填，生成签名的随机串
        signature: res.signature, // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
          'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
    }).catch((error) => {
      console.log(error)
    })
    // wx.ready((res) => {
    //   // 如果需要定制ready回调方法
    //   if (callback) {
    //     callback()
    //   }
    // })
  },
  /**
   * [ShareTimeline 微信分享到朋友圈]
   * @param {[type]} opstion [分享信息]
   * @param {[type]} success [成功回调]
   * @param {[type]} error   [失败回调]
   */
  ShareTimeline(opstion) {
    wx.onMenuShareTimeline({
      title: opstion.title, // 分享标题
      link: opstion.link, // 分享链接
      imgUrl: opstion.imgUrl, // 分享图标
      success() {
        // 用户成功分享后执行的回调函数
        opstion.success()
      },
      cancel() {
        // 用户取消分享后执行的回调函数
        opstion.error()
      }
    })
  },
  /**
 * [isWxAuth 微信授权]
 */
 isWxAuth () {
    let localUid = localStorage.getItem('localUid')
    let localToken = localStorage.getItem('localToken')
    if (!localToken) {
     let token = this.$route.query.token
     let uid = this.$route.query.uid
     if (token) {
      localStorage.setItem('localToken', token)
      localStorage.setItem('localUid', uid)
     } else {
      // 将url编码后传给后端，解决微信过滤Vue hash模式 #被过滤的问题
      var u = encodeURIComponent(window.location.href)
      window.location.href = hostName + '/wxpl/oauth?forwardUrl=' + u
     }
    }
   }
}
export default wxApi
