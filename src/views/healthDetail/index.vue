<template>
  <div>
         <div class="div_display_flex margin_left_div3 margin_top_div3">
          <div class="div_width_70 font_size_14">
            李娜
            <span class="font_size_12 font_color_A1">2019-01-25 15:00:00</span>
          </div>
          <div class="div_with_30 red text_right">¥565755</div>
        </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "healthDetail",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("健康奖金详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('健康奖金详情')

  }
};
</script>
<style scoped>

</style>