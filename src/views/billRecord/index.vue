<template>
  <div class="backgroun_color_fff" style="min-height: 700px;">
    <!-- 账单列表 -->
    <div v-for="item in [1,2,3]">
      <div class="div_display_flex font_color_33 bill_font_p">
        <div class="font_size_16 div_width_50">充值金额</div>
        <div class="font_size_18 div_width_50 bill_font_right">+899.00</div>
      </div>
      <div class="bill_font_p padding_bottom_4 font_size_13 font_color_A1">2019-01-25 15:00:00</div>
      <div class="bill_border"></div>
    </div>
    <!-- 底部菜单栏 -->
    <TabBar ref="TabBar"/>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
export default {
  components: {
    TabBar
  },
  name: "billRecord",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("健康界的轻奢");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.$refs.TabBar.didClickedItem("2");
    console.log("健康界的轻奢");
  }
};
</script>
<style scoped>
.bill_font_right {
  text-align: right;
  margin-right: 3%;
}
.bill_font_p {
  padding-top: 3%;
  padding-left: 4%;
}
.bill_border {
  border-top: 1px solid #e9e9e9;
  width: 94%;
  margin-left: 3%;
}
</style>