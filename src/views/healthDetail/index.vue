<template>
  <div>
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的产品"
        style="width:100%;height:100%; outline: none;border:none"
      >
      <i></i>
    </div>
    <div class="div_display_flex margin_left_div6 margin_top_div3">
      <div class="div_width_70 font_size_14">
        李娜
        <span class="font_size_12 font_color_A1">2019-01-25 15:00:00</span>
      </div>
      <div class="div_with_30 red margin_left_div6">¥565755</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "healthDetail",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("健康奖金详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("健康奖金详情");
  }
};
</script>
<style scope>
.search_box {
  height: 3.5rem;
  margin: 0.65rem 1.5rem 0;
  border-radius: 2rem;
  position: relative;
  padding: 0 1.55rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #fff;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
}
</style>