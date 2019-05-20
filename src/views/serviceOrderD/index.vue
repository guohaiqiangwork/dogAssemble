<template>
  <div>
    <!-- 辟谷套餐 -->
    <div v-if="falg == 'b'">
      <div
        class="font_size_14 font_color_ff backgroun_color_4A padding_left_div3"
        style="line-height:2;"
      >第1天/2018.09.30</div>
      <div
        v-for="(item,index) in [1,2,3]"
        class="div_display_flex font_color_00 font_size_13 text_center margin_top_div3"
      >
        <div class="service_width_25" @click="goToSOrderD('b')">次数</div>
        <div class="service_width_25">建议时间</div>
        <div class="service_width_25">食用时间</div>
        <div class="service_width_25">状态</div>
      </div>
    </div>
    <!--会员套餐 -->
    <div v-if="falg == 'h'">
      <div
        class="font_size_14 font_color_ff backgroun_color_4A padding_left_div3"
        style="line-height:2;"
      >会员套餐</div>
      <div   v-for="(item,index) in [1,2,3]"
        class="font_color_00 font_size_13 text_center margin_top_div3"
      >
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30" @click="goToSOrderD('b')">1.2018.09.20</div>
          <div class="div_width_30">东河区店</div>
          <div class="div_width_30">东河维多利店</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30" @click="goToSOrderD('b')">价格：20.00</div>
          <div class="div_width_30 font_color_4A">（小杯）</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "serviceOrderD",
  data() {
    return {
        falg:''
    };
  },
  methods: {},
  created() {
    settitle("套餐详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log( this.routeParams.data.id)
    this.falg =  this.routeParams.data.id
  },
  mounted() {
    console.log("套餐详情");
  }
};
</script>
<style scoped>
.service_width_25 {
  width: 25%;
}
</style>