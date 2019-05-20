<template>
  <div class="s_0_lb padding_bottom_4">
    <div class="div_display_flex margin_top_div3">
      <div class="div_width_30 margin_left_div3">辟谷套餐</div>
      <div class="div_width_70 text_right margin_right_div3">2018.09.20 12:00:00></div>
    </div>
    <div class="div_display_flex margin_top_div3">
      <div class="div_width_30 margin_left_div3">辟谷套餐</div>
      <div class="div_width_70 text_right font_color_4A margin_right_div3">服务中</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "sOrderList",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("服务订单列表");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("服务订单列表");
  }
};
</script>
<style scoped>
.s_0_lb {
  border-bottom: 1px solid #e9e9e9;
}
</style>