<template>
  <div>
       <div id="container">
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { TMap } from '../../bin/TMap'
export default {

  name: "Tmap",
  data() {
    return {
     
    };
  },
  methods: {


  },
  created() {
    settitle("地图");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('我是登陆页面')

   TMap('D2JBZ-JB4RQ-RVE5W-GVKCE-N6LBH-EWBFO').then(qq => {
            var map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                 zoom: 8
            });
        });

  }
};
</script>
<style scoped>
#container {
    min-width:600px;
    min-height:767px;
}
</style>