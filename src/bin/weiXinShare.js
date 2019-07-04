//微信支付方法（点击按键调用）
// let wx = require('weixin-js-sdk');
import wx from 'weixin-jsapi'
/*
微信支付方法
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/
let wexinShare = (data, cb, errorCb) => {
    let appId = data.appId;
    let timestamp = data.timestamp;
    let nonceStr = data.noncestr;
    let signature = data.signature;
    let packages = data.package;
    let paySign = data.paySign;
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timeStamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: [
            'onMenuShareTimeline', //分享到朋友圈
            'onMenuShareAppMessage', //分享给朋友
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        wx.checkJsApi({
            jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                console.log(res);
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });
        // var shareUrl = 'http://mxp.chinacmcp.com/html';
        var obj = {//朋友圈
            title: shareUserPhone1 + '给您的悄悄话', // 分享标题
            desc: '点击查看那些未曾对你说出口的话吧！', // 分享描述
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            // 该链接是重定向链接，因为需要获取用户code，但是该链接又无法直接写微信获取code的链接，
            // 所以需要点击后重新加载新的页面，来实现重定向，重新打开获取code的微信链接，实现获取用户信息的功能；
            imgUrl: 'http://mxp.chinacmcp.com/html/images/shareBack.png', // 分享图标
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        };
        var obj1 = {//好友
            title: shareUserPhone1 + '有些话，早就想对您说', // 分享标题
            desc: '点击查看那些未曾对你说出口的话吧！', // 分享描述
            link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            // 该链接是重定向链接，因为需要获取用户code，但是该链接又无法直接写微信获取code的链接，
            // 所以需要点击后重新加载新的页面，来实现重定向，重新打开获取code的微信链接，实现获取用户信息的功能；
            imgUrl: 'http://mxp.chinacmcp.com/html/images/shareBack.png', // 分享图标
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        };
        // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareAppMessage(obj1);

        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareTimeline(obj);

        // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareQQ(obj);

        // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareWeibo(obj);

        // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
        wx.onMenuShareQZone(obj);
    });
    // wx.ready(function () {
    //     wx.chooseWXPay({
    //         timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    //         nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
    //         package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    //         signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    //         paySign: paySign, // 支付签名
    //         success: function (res) {
    //             // 支付成功后的回调函数
    //             // alert('支付状态')
    //             cb(res);
    //         },
    //         fail: function (res) {
    //             errorCb(res);
    //         }
    //     });
    // });
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        /*alert("config信息验证失败");*/
    });
}
export default wexinShare;