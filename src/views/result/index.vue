<template>
  <div style="background-color: #4A7B67;">
    <div class="result_B">
      <!-- 寒性1 -->
      <div>
        <img src="../../assets/images/han1@2x.png" class="img_result" alt />
        <div class="result_bt">去附近门店看看</div>
      </div>
       <!-- 寒性2-->
      <div>
        <img src="../../assets/images/han1@2x.png" class="img_result" alt />
        <div class="result_bt">去附近门店看看</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Alert } from "vux";
export default {
  name: "result",
  data() {
    return {};
  },

  methods: {},
  created() {
    settitle("答题结果");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams.data.id);
  },

  mounted() {}
};
</script>
<style scoped>
.result_B {
  background-image: url("../../assets/images/bgN@2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 700px;
}
.img_result {
  width: 95%;
  margin-top: 39%;
  margin-left: 2.5%;
}
.result_bt {
  width: 60%;
  background-color: #4a7b67;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20%;
  margin-top: -16%;
  position: relative;
  line-height: 3;
}
</style>