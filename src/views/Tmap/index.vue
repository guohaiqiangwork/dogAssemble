<template>
  <div>
    <div id="map_container"></div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { TMap } from "../../bin/TMap";
import wx from "weixin-jsapi";
export default {
  name: "Tmap",
  data() {
    return {
      Clng: "120.267842",
      Clat: "30.19439",
      Flng: "120.267417907715",
      Flat: "30.19460105896",
      Tlng: "120.269302368164",
      Tlat: "30.2087898254395",
      latitude: "",
      longitude: "",
      latitudeZ: "",
      longitudeZ: "",
      latitudeQ: "", // 纬度，浮点数，范围为90 ~ -90
      longitudeQ: ""
    };
  },
  methods: {
    // 获取地理位置配置
    getSharedBonus() {
      this.$fetch
        .post("/fruits/app/weChat/getWechatConfig", {
          url: window.location.href.split("#")[0]
        })
        .then(
          data => {
            if (data.code == 0) {
              this.wexinGetLog(data.obj);
            } else {
              alert(data.msg);
            }
          },
          err => {
            alert("网络缓慢。。");
          }
        );
    },
    // 微信获取位置
    wexinGetLog(data) {
      let that = this;
      wx.config({
        debug: false,
        appId: data.appId,
        nonceStr: data.noncestr,
        timestamp: data.timestamp,
        signature: data.sign,
        jsApiList: ["checkJsApi", "openLocation", "getLocation"]
      });
      wx.checkJsApi({
        jsApiList: ["getLocation"],
        success: function(res) {
          if (res.checkResult.getLocation == false) {
            alert(
              "你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！"
            );
            return;
          }
        }
      });
      wx.ready(function() {
        wx.getLocation({
          success: function(res) {
            console.log("微信获取" + JSON.stringify(res));
            that.longitudeQ = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            that.latitudeQ = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            console.log(that.latitudeQ + "发顺丰" + that.longitudeQ);
            that.drawMap();
          },
          cancel: function(res) {
            alert("用户拒绝授权获取地理位置");
            // that.getShopFjStudio()
          }
        });
      });
      wx.error(function(res) {
        //                        console.log(res)
        // that.getShopFjStudio()
      });
    },
    //  获取当前位置
    drawMap() {
      // 专车--画地图
      let that = this;
      console.log(that.latitudeQ + "fasa是的" + that.longitudeQ);
      var map = new AMap.Map("map_container", {
        resizeEnable: true,
        zoom: 14,
        center: [that.latitudeQ, that.longitudeQ] // 地图中心点的经纬度
      });
      AMap.plugin("AMap.Driving", function() {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式,还有其他几种方式见Api文档
          policy: AMap.DrivingPolicy.LEAST_TIME
        });
        //起、终点
        var start_xy = new AMap.LngLat(that.latitudeQ, that.longitudeQ); // 起点的经纬度
        console.log(start_xy + "jfkls");
        var end_xy = new AMap.LngLat(
          Number(that.longitudeZ),
          Number(that.latitudeZ)
        ); // 终点的经纬度
        // 根据起终点经纬度规划驾车导航路线
        driving.search(start_xy, end_xy, function(status, result) {
          console.log(JSON.stringify(status));
          if (status === "complete") {
            if (result.routes && result.routes.length) {
              console.log(result.routes[0]);
              // 绘制第一条路线，也可以按需求绘制其它几条路线
              var path = that.parseRouteToPath(result.routes[0]);
              var startMarker = new AMap.Marker({
                position: path[0],
                icon: "https://webapi.amap.com/theme/v1.3/markers/n/start.png",
                map: map
              });
              var endMarker = new AMap.Marker({
                position: path[path.length - 1],
                icon: "https://webapi.amap.com/theme/v1.3/markers/n/end.png",
                map: map
              });
              var routeLine = new AMap.Polyline({
                path: path,
                isOutline: true,
                outlineColor: "#ffeeee",
                borderWeight: 2,
                strokeWeight: 5,
                strokeColor: "#0091ff",
                lineJoin: "round"
              });
              routeLine.setMap(map);
              // 调整视野达到最佳显示区域
              map.setFitView([startMarker, endMarker, routeLine]);
              console.log("绘制驾车路线完成");
            }
          } else {
            console.log("获取驾车数据失败：" + result);
          }
        });
      });
    },
    parseRouteToPath(route) {
      var path = [];
      for (var i = 0, l = route.steps.length; i < l; i++) {
        var step = route.steps[i];
        for (var j = 0, n = step.path.length; j < n; j++) {
          path.push(step.path[j]);
        }
      }
      return path;
    }
    // 获取当前位置
    // getAdd() {
    //   //获取地理位置
    //   var self = this;
    //   //全局的this在方法中不能使用，需要重新定义一下
    //   var geolocation = new BMap.Geolocation();
    //   //调用百度地图api 中的获取当前位置接口
    //   geolocation.getCurrentPosition(function(r) {
    //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //       //获取当前位置经纬度
    //       var myGeo = new BMap.Geocoder();
    //       myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
    //         result
    //       ) {
    //         if (result) {
    //           console.log(result);
    //           self.latitude = result.point.lat;
    //           self.longitude = result.point.lng;
    //           self.drawMap();
    //         }
    //       });
    //     }
    //   });
    // }
  },
  created() {
    settitle("地图");
    if (this.$route.params.obj) {
      this.routeParams = JSON.parse(this.$route.params.obj);
      this.latitudeZ = this.routeParams.data.latitude;
      this.longitudeZ = this.routeParams.data.longitude;
    }

    console.log(this.routeParams);
  },

  mounted() {
    console.log("我是登陆页面");
    this.getSharedBonus(); //微信获取位置 百度绘制路线
    // this.getAdd();
    // TMap("D2JBZ-JB4RQ-RVE5W-GVKCE-N6LBH-EWBFO").then(qq => {
    //   var map = new qq.maps.Map(document.getElementById("container"), {
    //     // 地图的中心地理坐标。
    //     center: new qq.maps.LatLng(39.916527, 116.397128),
    //     zoom: 8
    //   });
    // });
    // this.geolocation = new qq.maps.Geolocation(
    //   "JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW",
    //   "myapp"
    // );
  }
};
</script>
<style scoped>
#container {
  min-width: 600px;
  min-height: 767px;
}
#map_container {
  min-width: 600px;
  min-height: 767px;
}
</style>