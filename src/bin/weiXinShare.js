//微信分享（点击按键调用）
// let wx = require('weixin-js-sdk');
import wx from 'weixin-jsapi'
/*
微信分享方法
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/
let wexinShare = (data, cb, errorCb) => {
    let appId = data.appId;
    let timestamp = data.timestamp;
    let nonceStr = data.noncestr;
    let signature = data.sign;
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp || timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    });
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: '果蔬吧1', // 分享标题
            link: window.location.href.split('#')[0] + '#' + '/sharedBonusTwo/' + 'openId=' + localStorage.getItem("imgUrlShared") + '&shareId=' + localStorage.getItem("appUserId"), // 分享链接
            imgUrl: '../assets/images/000@3x.png', // 分享图标
            success: function () {
                dataForWeixin.callback();
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({//分享给朋友
            title: '果蔬吧2', // 分享标题
            desc: '果蔬吧介绍', // 分享描述
            link: window.location.href.split('#')[0] + '#' + '/sharedBonusTwo/' + 'openId=' + localStorage.getItem("imgUrlShared") + '&shareId=' + localStorage.getItem("appUserId"), // 分享链接
            imgUrl: '../assets/images/000@3x.png', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                dataForWeixin.callback();
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // alert(134)
                // 用户取消分享后执行的回调函数
            }
        });

    });

    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        /*alert("config信息验证失败");*/
    });
}
export default wexinShare;