<template>
  <div>
    <!-- 详情列表 -->
    <div class="data_d_b" v-for="item in [1,3,4]">
      <div class="div_display_flex font_size_16 font_color_33 margin_top_div5">
        <div class="div_width_50">微信充值</div>
        <div class="div_width_50 text_right">+899.00</div>
      </div>
      <div class="font_size_13 font_color_A1 margin_top_div3 padding_bottom_4">2019-01-25 15:00:00</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "rechargeList",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("充值记录页面");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("我是充值记录页面");
  }
};
</script>
<style scoped>
.data_d_b {
  width: 94%;
  border-bottom: 1px solid #e9e9e9;
  margin-left: 3%;
}
</style>