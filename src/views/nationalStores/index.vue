<template>
  <div class="backgroun_color_fff" style="min-height:700px">
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的产品"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 推荐门店列表 -->
    <div class="div_display_flex margin_left_div3 padding_top_div3">
      <div class="national_flag_title"></div>
      <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">附近门店推荐</div>
    </div>
    <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3">
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">内蒙古包头市昆都仑区钢铁大街店</div>
        <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">钢铁大街16号</div>
        <div class="div_width_30 margin_right_div2 text_right" @click="goToMap">0.8公里</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">营业时间</div>
        <div class="div_width_30 margin_right_div2 text_right">08:30-21:00</div>
      </div>
      <div class="div_display_flex margin_top_div3 padding_bottom_4">
        <div class="div_width_70 margin_left_div2">门店电话</div>
        <div class="div_width_30 margin_right_div2 text_right">17870987</div>
      </div>
    </div>
    <!-- 其他门店列表 -->
    <div class="div_display_flex margin_left_div3 margin_top_div3">
      <div class="national_flag_title"></div>
      <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">其他门店</div>
    </div>
    <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3">
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">内蒙古包头市昆都仑区钢铁大街店</div>
        <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">钢铁大街16号</div>
        <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
      </div>
      <div class="div_display_flex margin_top_div3">
        <div class="div_width_70 margin_left_div2">营业时间</div>
        <div class="div_width_30 margin_right_div2 text_right">08:30-21:00</div>
      </div>
      <div class="div_display_flex margin_top_div3 padding_bottom_4">
        <div class="div_width_70 margin_left_div2">门店电话</div>
        <div class="div_width_30 margin_right_div2 text_right">17870987</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";

export default {
  components: {
    TabBar
  },
  name: "nationalStor",
  data() {
    return {
      item: 0
    };
  },
  methods: {
    goToMap() {
      console.log("7897");
      this.$router.push({
        name: "map",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("我是全国们店");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("全国门店");
  }
};
</script>
<style scoped>
.national_flag_title {
  width: 2px;
  height: 15px;
  background-color: #ff8156;
  margin-top: 1%;
  border: 1px solid #ff8156;
  border-radius: 10px;
}
.national_list {
  width: 93%;
  margin-left: 2%;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
}
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
  border: 1px solid #888888;
  margin-top: 5%;
  width: 95%;
}
</style>