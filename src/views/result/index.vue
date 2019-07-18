<template>
  <div style="background-color: #4A7B67;">
    <div class="result_B">
      <!-- 寒性1有提示 -->
      <div v-if=" idFalge < -2">
        <!-- 有提示 -->
        <img src="../../assets/images/han1@2x.png" class="img_result" alt v-if="idFalgeT" />
        <!-- 无提示 -->
        <img src="../../assets/images/han2@2x.png" class="img_result" alt v-if="!idFalgeT" />
        <div class="result_bt" @click="goToNearby">去附近门店看看</div>
      </div>
      <!-- 热信2 无提示-->
      <div v-if=" idFalge > 2">
        <!-- 有提示 -->
        <img src="../../assets/images/re1@2x.png" class="img_result" alt v-if="idFalgeT" />
        <!-- 无提示 -->
        <img src="../../assets/images/re2@3x.png" class="img_result" alt v-if="!idFalgeT" />
        <div class="result_bt" @click="goToNearby">去附近门店看看</div>
      </div>
      <!-- 平行 -->
      <div v-if="0 <= idFalge <=  2 || -2 <= idFalge < 0">
        <!-- 有提示 -->
        <img src="../../assets/images/ping2@2x.png" class="img_result" alt v-if="idFalgeT" />
        <!-- 无提示 -->
        <img src="../../assets/images/ping1@2x.png" class="img_result" alt v-if="!idFalgeT" />
        <div class="result_bt" @click="goToNearby">去附近门店看看</div>
      </div>
      <!-- 不用检查 -->
      <div v-if="  resultFalgA >  15 && resultFalgB < -15">
        <!-- 有提示 -->
        <img src="../../assets/images/zhuanshu@2x.png" class="img_result" alt />
        <div class="result_bt" @click="goToNearby">去附近门店看看</div>
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
    return {
      idFalge: "",
      idFalgeT: "",
      resultFalgA: "",
      resultFalgB: ""
    };
  },

  methods: {
    //   去附近门店
    goToNearby() {
      this.$router.push({
        name: "nearby"
        // params: {
        //   obj: JSON.stringify({
        //     type: "profession",
        //     data: {
        //       id: "我就是参数"
        //     }
        //   })
        // }
      });
    },
  },
  created() {
    settitle("答题结果");
    this.routeParams = JSON.parse(this.$route.params.obj);
    this.idFalge = this.routeParams.data.id;
    this.idFalgeT = this.routeParams.data.flage;
    this.resultFalgA = this.routeParams.data.resultFalgA;
    this.resultFalgB = this.routeParams.data.resultFalgB;
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