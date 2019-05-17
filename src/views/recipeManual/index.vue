<template>
  <div>
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon" style="color:#999999"></i>
      <input
        type="text"
        placeholder="搜索您想找的配方…"
        style="width:100%;height:100%; outline: none;border:none;background-color:#EFEFEF;color:#999999"
      >
      <i></i>
    </div>
    <!-- 配方列表 -->
    <div class="font_size_14 font_color_10" v-for="item in [1,2,3,4,]">
      <div class="margin_top_div5 margin_left_div6">配方1</div>
      <div class="margin_top_div3 margin_left_div8">苹果4g 、 芹菜5g 、 芒果10g、 冰40g克</div>
      <div class="margin_top_div3 margin_left_div8">适应：</div>
      <div style="overflow:hidden;zoom:1;">
        <div class="backgroun_color_E9 b_z_b font_size_12" v-for="item in [1,2,3,333,44]">糖尿病</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "recipeManual",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("我是配方手册");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("配方手册");
  }
};
</script>
<style scoped>
.search_box {
  height: 0.7rem;
  margin: 0.65rem 1.5rem 0;
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  border: 1px solid #efefef;
  margin-top: 5%;
  width: 94%;
  margin-left: 3%;
}
.b_z_b {
  width: 25%;
  text-align: center;
  border-radius: 5px;
  line-height: 2;
  margin-left: 5;
  margin-left: 8%;
  margin-top: 3%;
  float: left;
}
</style>