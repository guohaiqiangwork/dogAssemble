<template>
  <div>
    <div class="backgroun_color_fff a_m_w">
      <div class="font_size_14 font_color_66 a_m_m">
        <span>王佳宇</span>
        13654550023
      </div>
      <div class="margin_top_div3 font_size_14 font_color_33" style="margin-left:4%">
        内蒙古包头市青山区青山区区包头商会大厦27楼
        2710
      </div>
      <div class="div_display_flex margin_top_div5" style="padding-bottom: 5%;">
        <div style="width:30%">
          <check-icon :value.sync="demo1"></check-icon>默认地址
        </div>
        <div style="width:65%" class="div_display_flex">
          <div class="div_display_flex">
            <img src="../../assets/images/edit@3x.png" style="width:27%;height:80%">
            <div>编辑</div>
          </div>
          <div class="div_display_flex">
            <img src="../../assets/images/delete@3x.png" style="width:27%;height:80%">
            <div>删除</div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 20%; margin-top: 10%;">
      <div class="a_m_b backgroun_color_fe01">+添加新的地址</div>
    </div>
  </div>
</template>
<script>
// import url from "../../bin/url";
import { CheckIcon } from "vux";
export default {
  components: {
    CheckIcon
  },
  name: "addressManagement",
  data() {
    return {
      demo1: false
    };
  },
  methods: {},
  created() {
    settitle("地址管理");
    // this.routeParams = JSON.parse(this.$route.params.obj);
    // console.log(this.routeParams);
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.a_m_w {
  width: 90%;
  margin-top: 8%;
  margin-left: 5%;
}
.a_m_m {
  margin-left: 4%;
  padding-top: 8%;
}
.a_m_b {
  width: 250px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 3;
  font-size: 14px;
  color: #000;
}
</style>