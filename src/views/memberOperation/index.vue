<template>
  <div>
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="请输入手机号"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 列表 -->
    <div>
      <div class="div_display_flex margin_top_div5 font_size_14 font_color_1A" v-for="item in [1,2,3,4,5]">
        <div class="div_width_15 margin_left_div3">张新的</div>
        <div class="div_width_25">2019-04-23</div>
        <div class="div_width_50 text_right">辟谷套餐</div>
      </div>
    </div>
    <!-- 无数据 -->
    <div class=" font_size_25 text_center" v-if="false">
        <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
        该用户不存在
    </div>
    <!-- 按钮 -->
    <div class=" font_color_ff font_size_16 backgroun_color_4A text_center bt_m_o">
        新建套餐
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "memberOperation",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("会员操作");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("会员操作");
  }
};
</script>
<style scoped>
/* 搜索框 */
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin-top: 5%;
  width: 94%;
}
.bt_m_o{
    line-height: 3;
    border-radius: 5px;
    width: 90%;
    margin-left: 5%;
    position: fixed;
    bottom: 8%
}
</style>