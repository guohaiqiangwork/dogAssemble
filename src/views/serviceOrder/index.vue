<template>
  <div>
    <!-- 每日辟谷套餐记录 -->
    <div class="service_div_k margin_top_div5">
      <div class="div_display_flex font_color_ff backgroun_color_4A service_list">
        <div class="font_size_15 service_font">每日辟谷套餐记录</div>
        <div class="font_size_13 service_title_font">2018.09.30-2019.09.30</div>
      </div>
      <div
        v-for="(item,index) in [1,2,3]"
        class="div_display_flex font_color_00 font_size_13 text_center service_list_border"
      >
        <div class="service_width_25">序号</div>
        <div class="service_width_25">次数</div>
        <div class="service_width_25">食用时间</div>
        <div class="service_width_25">状态</div>
      </div>
    </div>
    <!-- 会员套餐 -->
    <div class="service_div_k margin_top_div5">
      <div class="div_display_flex font_color_ff backgroun_color_D5 service_list">
        <div class="font_size_15 service_font">会员套餐</div>
        <div class="font_size_13 service_title_font">2018.09.30-2019.09.30</div>
      </div>
      <div
        v-for="(item,index) in [1,2,3]"
        class="div_display_flex font_color_00 font_size_13 text_center service_list_border"
      >
        <div class="service_width_25">序号</div>
        <div class="service_width_25">次数</div>
        <div class="service_width_25">食用时间</div>
        <div class="service_width_25">状态</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "serviceOrder",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("健康界的轻奢");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },

  mounted() {
    console.log("服务订单");
  }
};
</script>
<style scoped>
.service_title_font {
  width: 60%;
  text-align: right;
  margin-right: 3%;
  padding-top: 1%;
}
.service_div_k {
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
  background-color: #fff;
}
.service_font {
  width: 40%;
  padding-left: 3%;
}
.service_width_25 {
  width: 25%;
}
.service_list_border {
  border-bottom: 1px solid #e9e9e9;
  line-height: 3;
}
.service_list_border {
  line-height: 3;
}
.service_list {
  line-height: 3;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>