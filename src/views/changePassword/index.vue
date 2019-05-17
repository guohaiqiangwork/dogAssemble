<template>
  <div>
    <div class="pass_list_w">
      <div class="search_box">
        <img src="../../assets/images/phone@2x.png" class="width_16">
        <input
          type="text"
          placeholder="请输⼊您的手机号"
          style="width:100%;height:100%;outline: none;border:none"
        >
        <i></i>
      </div>
    </div>
    <div class="pass_list_w">
      <div class="search_box">
        <img src="../../assets/images/验证码@2x.png" class="width_16">
        <input
          type="text"
          placeholder="请输⼊验证码"
          style="width:56%;height:100%;outline: none;border:none"
        >
        <span v-show="sendAuthCode" class="margin_left_div3 font_color_4A" style="font-size:6px" @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode"  class="margin_left_div3 font_color_4A" style="font-size:6px">{{auth_time}}重新获取验证码</span>
      </div>
    </div>
    <div class="pass_list_w">
      <div class="search_box">
        <img src="../../assets/images/密码@2x.png" class="width_16">
        <input
          type="text"
          placeholder="请设置您的新密码"
          style="width:100%;height:100%;outline: none;border:none"
        >
        <i></i>
      </div>
    </div>
    <!-- 确认 -->
    <div class="text_center">
      <div class="b_t_t">确认</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "changepassword",
  data() {
    return {
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/
    };
  },
  methods: {
    getAuthCode: function() {
      this.sendAuthCode = false;
      this.auth_time = 6;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    }
  },
  created() {
    settitle("修改密码");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("修改密码");
  }
};
</script>
<style scoped>
.pass_list_w {
  width: 95%;
  margin-left: 2%;
}
.search_box {
  height: 3.5rem;
  margin: 0.65rem 1.5rem 0;
  position: relative;
  padding: 0 1.55rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  line-height: 3.5rem;
  margin-top: 5%;
  border: none;
  border-bottom: 1px solid rgb(173, 165, 165);
}
.width_16 {
  width: 16px;
  height: 16px;
  margin-right: 3%;
}
.b_t_t {
  width: 96%;
  background-color: #4a7b67;
  color: #fff;
  font-size: 16px;
  line-height: 3;
  border-radius: 5px;
  margin-left: 2%;
  position: fixed;
  bottom: 5%;
}
</style>