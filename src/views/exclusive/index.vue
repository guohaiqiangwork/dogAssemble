<template>
  <div>
    <div v-if="myStoreData ">
      <div class="ex_img_top">
        <img src="../../assets/images/zsbj.png" width="100%">
      </div>
      <div class="ex_border margin_top_div3">
        <div class="div_display_flex">
          <div
            style="width:80%"
            class="font_size_16 font_color_10"
          >{{myStoreData.province}}{{myStoreData.city}}{{myStoreData.area}}{{myStoreData.address}}</div>
          <div
            style="width:20%"
            class="font_size_13 font_color_10 text_right"
          >{{myStoreData.distance}}km</div>
        </div>
	<div class="div_display_flex margin_top_div3">
          <div class="font_size_16 font_color_10 ex_img_b">
            <img src="../../assets/images/1440@2x.png" class="img_width_100">
          </div>
          <div
            style="width:80%"
            class="font_size_13 font_color_10 margin_left_div2"
          >{{myStoreData.address}}</div>        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="font_size_16 font_color_10 ex_img_b">
            <img src="../../assets/images/电话 (1)@2x.png" class="img_width_100">
          </div>
          <div
            style="width:75%"
            class="font_size_13 font_color_10 margin_left_div2"
          >门店电话：1232132123123{{myStoreData.phone}}</div>
          <div v-if="myStoreData.state == 1" class="bt_ex">营业中</div>
          <div v-if="myStoreData.state == 2" class="bt_ex_G">已关店</div>
        </div>
      </div>
      <div class="margin_top_div5" @click="goToNationalStores" style="margin-top: 20%;">
        <div
          class="backgroun_color_4A font_color_ff font_size_14 text_center"
          style="line-height:3"
        >我要换门店</div>
      </div>
    </div>
    <div v-if="!myStoreData ">
      <div>
        <img
          src="../../assets/images/1585@2x.png"
          style="width: 80%;margin-left: 20%;margin-top: 30%;"
          alt
        >
      </div>
      <div class="font_size_15 font_color_33 text_center" style="margin-top:-16%">您当前没有专属门店，快去下单吧～</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "exclusive",
  data() {
    return {
      longitude: 0, //经度
      latitude: 0, //纬度
      myStoreData: ""
    };
  },
  methods: {
    // 门店更换
    goToNationalStores() {
      this.$router.push({
        name: "nationalStores",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "蚕丝"
            }
          })
        }
      });
    },
    // 获取专属门店数据
    getMyStore(item) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        latitude: this.latitude, //唯独
        longitude: this.longitude //进度
      };
      this.$fetch.post("/fruits/app/personal/myStore", _obj).then(
        data => {
          if (data.code == 0) {
            this.myStoreData = data.obj;
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    //第一部分
    //定位获得当前位置信息
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation(
        "JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW",
        "opo"
      );
      geolocation.getIpLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      console.log(position);
      this.latitude = position.lat; //唯独
      this.longitude = position.lng; //进度
      this.city = position.city;
      this.getMyStore(); //获取专属门店信息
    },
    showErr() {
      console.log("定位失败");
      this.getMyLocation(); //定位失败再请求定位，测试使用
    }
  },
  created() {
    settitle("我是专属门店");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getMyLocation();

    console.log("专属门店");
  }
};
</script>
<style scoped>
.ex_img_top {
  width: 100%;
  height: 320px;
  overflow: hidden;
}
.ex_border {
  width: 95%;
  margin-left: 2%;
}
.ex_img_b {
  width: 15px;
  height: 15px;
}
.bt_ex_G {
  border: 1px solid #e6435a;
  color: #e6435a;
  padding: 1%;
  font-size: 12px;
  float: right;}
.bt_ex {
 border: 1px solid #4A7B67;
  color: #4A7B67;
  padding: 1%;
  font-size: 12px
  font-size: 12px;
  position: absolute;
  right: 0;
  top: -6px;}
</style>