<template>
  <div>
    <div class="ex_img_top">
      <img src="../../assets/images/WechatIMG106_看图王.png" width="100%">
    </div>
    <div class="ex_border margin_top_div3">
      <div class="div_display_flex">
        <div style="width:80%" class="font_size_16 font_color_10">内蒙古包头市昆都仑区钢铁大街店</div>
        <div style="width:20%" class="font_size_13 font_color_10">1.8km</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="font_size_16 font_color_10 ex_img_b">
          <img src="../../assets/images/phone@2x.png" class="img_width_100">
        </div>
        <div style="width:80%" class="font_size_13 font_color_10">钢铁大街16号</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="font_size_16 font_color_10 ex_img_b">
          <img src="../../assets/images/phone@2x.png" class="img_width_100">
        </div>
        <div style="width:80%" class="font_size_13 font_color_10">门店电话：17870987</div>
      </div>
    </div>
    <div class="margin_top_div5" @click="goToNationalStores">
      <div class="backgroun_color_4A font_color_ff font_size_14 text_center" style="line-height:3">我要换门店</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "exclusive",
  data() {
    return {};
  },
  methods: {
    // 门店更换
    goToNationalStores(){
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
    }
  },
  created() {
    settitle("我是专属门店");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
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
  width: 29px;
  height: 29px;
}
</style>