<template>
  <div>
    <div class="pass_list_w">
      <div class="search_box">
        <img src="../../assets/images/phone@2x.png" class="width_16">
        <input
          type="text"
          placeholder="请输⼊您的手机号"
          maxlength="11"
          v-model="phone"
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
          v-model="code"
          placeholder="请输⼊验证码"
          style="width:56%;height:100%;outline: none;border:none"
        >
        <span
          v-show="sendAuthCode"
          class="margin_left_div3 font_color_4A"
          style="font-size:12px"
          @click="getAuthCode"
        >{{tip}}</span>
        <span
          v-show="!sendAuthCode"
          class="margin_left_div3 font_color_4A"
          style="font-size:12px"
        >{{auth_time}}s</span>
      </div>
    </div>
    <div class="pass_list_w">
      <div class="search_box">
        <img src="../../assets/images/密码@2x.png" class="width_16">
        <input
          type="password"
          v-model="password"
          maxlength="6"
          placeholder="请设置您的新密码"
          style="width:100%;height:100%;outline: none;border:none"
        >
        <i></i>
      </div>
    </div>
    <!-- 确认 -->
    <div class="text_center">
      <div class="b_t_t" @click="changePassword">确认</div>
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
      auth_time: 0 /*倒计时 计数器*/,
      tip: "获取验证码",
      phone: "",
      password: "",
      code: ""
    };
  },
  methods: {
    // 获取验证
    getAuthCode: function() {
      if (!this.phone) {
        alert("请输入手机号");
        return;
      } else if (this.phone.length != 11) {
        alert("请输入正确手机号");
        return;
      }
      // this.sendAuthCode = false;
      
      this.$fetch
        .post("fruits/app/user/getSmsCode", {
          phone: this.phone,
          openId: localStorage.getItem("openId"),
          type: 2
        })
        .then(res => {
          if(res.msg == "find_none_user"){
            clearInterval(auth_timetimer);
            this.sendAuthCode = true;
            this.tip = "获取验证码";
            this.$vux.toast.text("当前账号不存在");
            return
          }
          // this.form.code = "1234";
        });
        this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
          this.tip = "重新获取验证码";
        }
      }, 1000);
    },
    // 修改密码
    changePassword() {
      if (!this.code || !this.phone || !this.password) {
        this.$vux.toast.text("所有内容均为必填项，请检查");
      }
      let data = {
        openId: localStorage.getItem("openId"),
        code: this.code,
        password: DesUtils.encode(this.password, "fruits-app,yuntu,com")
      };
      this.$fetch.post(url.changePassword, data).then(res => {
        console.log(res);
        if (res.code = 0) {
          localStorage.clear();
          this.$router.push('/login/1');
          // alert("修改成功");
        } else {
          if(res.msg == 'smsCode_error'){
            this.$vux.toast.text('验证码错误')
          }
          // alert(data.msg);
        }
      });
    }
  },
  created() {
    this.routeParams = JSON.parse(this.$route.params.obj);
    if(this.routeParams ==1){
      settitle("修改密码");
    }else{
      settitle("忘记密码");
    }
  },

  mounted() {}
};
</script>
<style scoped>
.pass_list_w {
  width: 95%;
  margin-left: 2%;
}
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 95%;
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