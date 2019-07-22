<template>
  <div>
    <div class="result_B">
      <!-- 寒性1有提示 -->
      <div v-if=" !resultFalgC ">
        <div v-if=" idFalge < -2">
          <!-- 有提示 -->
          <img src="../../assets/images/han1@2x.png" class="img_result" alt v-if="idFalgeT" />
          <!-- 无提示 -->
          <img src="../../assets/images/han2@2x.png" class="img_result" alt v-if="!idFalgeT" />
          <div class="result_btH" @click="goToNearby" v-if="!idFalgeT">去附近门店看看</div>
          <div class="result_bt_ABH" @click="goToNearby" v-if="idFalgeT">去附近门店看看</div>
        </div>
      </div>
      <!-- 热信2 无提示-->
      <div v-if=" !resultFalgC ">
        <div v-if=" idFalge > 2">
          <!-- 有提示 -->
          <img src="../../assets/images/re1@2x.png" class="img_result" alt v-if="idFalgeT" />
          <!-- 无提示 -->
          <img src="../../assets/images/re2@3x.png" class="img_result" alt v-if="!idFalgeT" />
          <div class="result_bt" @click="goToNearby" v-if="!idFalgeT">去附近门店看看</div>
          <div class="result_bt_AB" @click="goToNearby" v-if="idFalgeT">去附近门店看看</div>
        </div>
      </div>
      <!-- 平行 -->
      <div v-if=" !resultFalgC ">
        <!-- idFalgeP -->
        <!-- <=  2 || -2 <= idFalge < 0 -->
        <div v-if=" 0 <= idFalge &&   idFalge<=  2 ||  -2 <= idFalge && idFalge < 0 ">
          <!-- 无提示 -->
          <img src="../../assets/images/ping2@2x.png" class="img_result" alt v-if="!idFalgeT" />
          <!-- 有提示 -->
          <img src="../../assets/images/ping1@2x.png" class="img_result" alt v-if="idFalgeT" />
          <div class="result_bt" @click="goToNearby" v-if="idFalgeT">去附近门店看看</div>
          <div class="result_bt_AB" @click="goToNearby" v-if="!idFalgeT">去附近门店看看</div>
        </div>
      </div>

      <!-- 不用检查 resultFalgA >  15 && resultFalgB < -15-->
      <div v-if="resultFalgC">
        <!-- 有提示 -->
        <img src="../../assets/images/zhuanshu@2x.png" class="img_result" alt />
        <!-- <div class="result_bt" @click="goToNearby">去附近门店看看</div> -->
        <div class="result_bt_A" @click="goToNearby">去附近门店看看</div>
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
      resultFalgB: "",
      resultFalgC: false,
      resultFalgD: false,
      idFalgeP: false
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
    }
  },
  created() {
    settitle("答题结果");
    this.routeParams = JSON.parse(this.$route.params.obj);
    this.idFalge = this.routeParams.data.id;
    if (0 <= this.idFalge) {
      if (this.idFalge <= 2) {
        this.idFalgeP = true;
      }
    }
    if (-2 <= this.idFalge) {
      if (this.idFalge < 0) {
        this.idFalgeP = true;
      }
    }
    console.log(this.idFalge + "总分");
    this.idFalgeT = this.routeParams.data.flage; //总分
    console.log(this.idFalgeT + "是否展示提示");
    this.resultFalgA = this.routeParams.data.resultFalgA; //寒性
    console.log(this.resultFalgA + "寒性");
    this.resultFalgB = this.routeParams.data.resultFalgB; //热性
    console.log(this.resultFalgB + "热性");
    if (this.resultFalgA > 15 && this.resultFalgB < -15) {
      this.resultFalgC = true;
    }
    console.log(this.resultFalgC);
  },

  mounted() {}
};
</script>
<style scoped>
.result_B {
  background-image: url("../../assets/images/bgN1@2x.png");
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
  margin-top: -27%;
  position: relative;
  line-height: 3;
}
.result_bt_A {
  width: 60%;
  background-color: #4a7b67;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20%;
  margin-top: -48%;
  position: relative;
  line-height: 3;
}
.result_btH {
  width: 60%;
  background-color: #4a7b67;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20%;
  margin-top: -21%;
  position: relative;
  line-height: 3;
}
.result_bt_AB {
  width: 60%;
  background-color: #4a7b67;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20%;
  margin-top: -30%;
  position: relative;
  line-height: 3;
}
.result_bt_ABH {
  width: 60%;
  background-color: #4a7b67;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20%;
  margin-top: -20%;
  position: relative;
  line-height: 3;
}
</style>