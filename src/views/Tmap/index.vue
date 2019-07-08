<template>
  <div>
    <div id="map_container"></div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { TMap } from "../../bin/TMap";
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
      longitudeZ: ""
    };
  },
  methods: {
    //  获取当前位置
    drawMap() {
      // 专车--画地图
      let that = this;
      var map = new AMap.Map("map_container", {
        resizeEnable: true,
        zoom: 14,
        center: [that.latitude, that.longitude] // 地图中心点的经纬度
      });
      AMap.plugin("AMap.Driving", function() {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式,还有其他几种方式见Api文档
          policy: AMap.DrivingPolicy.LEAST_TIME
        });
        //起、终点
        var start_xy = new AMap.LngLat(that.longitude, that.latitude); // 起点的经纬度
        var end_xy = new AMap.LngLat(
           Number(that.longitudeZ),
          Number(that.latitudeZ)
        ); // 终点的经纬度
        // 根据起终点经纬度规划驾车导航路线
        driving.search(start_xy, end_xy, function(status, result) {
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
    },
    // 获取当前位置
    getAdd() {
      //获取地理位置
      var self = this;
      //全局的this在方法中不能使用，需要重新定义一下
      var geolocation = new BMap.Geolocation();
      //调用百度地图api 中的获取当前位置接口
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          //获取当前位置经纬度
          var myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
            result
          ) {
            if (result) {
              console.log(result);
              self.latitude = result.point.lat;
              self.longitude = result.point.lng;
              self.drawMap();
            }
          });
        }
      });
    }
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
    this.getAdd();
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