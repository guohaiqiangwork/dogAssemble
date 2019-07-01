<template>
  <div style="text-align: center;">
    <div style="margin-top: 24%;">
      <img src="../../assets/images/cgcz.png" width=" 24%" alt>
    </div>
    <div class="font_size_23 font_color_33" style="margin-top:3%">恭喜您，充值成功</div>
    <div @click="goToHome" class="backgroun_color_4A bt_s_y">返回首页</div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { TMap } from "../../bin/TMap";
export default {
  name: "successful",
  data() {
    return {};
  },
  methods: {
    goToHome() {
      this.$router.push({
        path: "/home"
      });
    }
  },
  created() {
   
  },

  mounted() {}
};
</script>
<style scoped>
#container {
  min-width: 600px;
  min-height: 767px;
}
.bt_s_y {
  margin-top: 16%;
  width: 30%;
  line-height: 3;
  border-radius: 8px;
  margin-left: 36%;
  color: #fff;
  font-size: 13px;
}
</style>