
//微信支付方法（点击按键调用）
// let wx = require('weixin-js-sdk');
import wx from 'weixin-jsapi'
/*
微信获取当前位置
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/
let wexinPay = (data, cb, errorCb) => {
    console.log(data)
    let appId = data.appId;
    let timestamp = data.timestamp;
    let nonceStr = data.noncestr;
    let signature = data.sign;
    wx.config({
        debug: true,
        appId: appId,
        nonceStr: nonceStr,
        timestamp: timestamp,
        signature: signature,
        jsApiList: [
            'checkJsApi', 'openLocation', 'getLocation'
        ],
    })
    wx.checkJsApi({
        jsApiList: ['getLocation'],
        success: function (res) {
            if (res.checkResult.getLocation == false) {
                alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
                return;
            }
        }
    });
    wx.ready(function () {
        wx.getLocation({
            success: function (res) {
                alert('微信获取' + JSON.stringify(res))
                that.pointY = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                that.pointX = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                // that.point = new BMap.Point(that.pointX,that.pointY);
                // that.marker = new BMap.Marker(that.point); // 创建点

                // that.getShopFjStudio()
            },
            cancel: function (res) {
                alert('用户拒绝授权获取地理位置');
                // that.getShopFjStudio()
            }
        });
    });

    wx.error(function (res) {
//                        console.log(res)
        // that.getShopFjStudio()
    });
}
export default wexinPay;
