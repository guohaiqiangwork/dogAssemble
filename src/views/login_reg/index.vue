<template>
  <div id="login">
    <div class="logo_box">
      <img class="logo" src="../../assets/images/logo.png" alt>
      <p class="logo_title">果蔬精萃吧</p>
    </div>

    <div class="form" v-if="haslogin == 2">
      <!-- <x-input label-width="4em"  placeholder="I'm placeholder"></x-input> -->
      <x-input
        placeholder="请输入您的真实姓名"
        v-model="form.name"
        required
        @on-change="change"
        :max="6"
        ref="name"
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/name.png"
        >
      </x-input>
      <x-input
        class="mt-40"
        placeholder="请输入手机号"
        @on-click-clear-icon="clear"
        ref="inputTel"
        required
        is-type="china-mobile"
        keyboard="number"
        v-model="form.phone"
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/phone@2x.png"
        >
      </x-input>
      <x-input
        class="mt-40"
        ref="code"
        keyboard="number"
        placeholder="请输⼊验证码"
        :min="4"
        :max="4"
        @on-click-clear-icon="clear"
        required
        v-model="form.code"
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/验证码@2x.png"
        >
        <a slot="right" class="code_btn" href="#" @click="sendCode">{{codeValue}}</a>
      </x-input>
      <x-input
        class="mt-40"
        @on-change="change"
        ref="inputPas"
        v-model="form.password"
        type="password"
        :min="6"
        :max="6"
        placeholder="请设置您的密码,用于套餐支付和登录"
        @on-click-clear-icon="clear"
        required
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/密码@2x.png"
        >
      </x-input>
      <x-input disabled v-model="disVal"></x-input>
    </div>

    <div class="form" v-else>
      <x-input
        keyboard="number"
        is-type="china-mobile"
        placeholder="请输入手机号码"
        ref="inputTel"
        @on-click-clear-icon="clear"
        required
        v-model="Logform.phone"
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/phone@2x.png"
        >
      </x-input>
      <x-input
        class="mt-40"
        type="password"
        placeholder="请输入密码"
        @on-click-clear-icon="clear"
        ref="inputPas"
        required
        v-model="Logform.password"
      >
        <img
          slot="label"
          style="padding-right:10px;display:block;with:0.33rem;height:0.33rem"
          src="../../assets/images/密码@2x.png"
        >
      </x-input>
      <x-input disabled v-model="disVal"></x-input>
      <p class="flex-between px-15">
        <a href="#" @click="editPass">忘记密码</a>
        <a href="#" @click="regTest">立即注册</a>
      </p>
    </div>
    <x-button
      type="primary"
      class="login_btn"
      :show-loading="btnload"
      @click.native="LoginOrReg"
    >{{haslogin == 1 ? '登录' : '注册'}}</x-button>
    <!-- <div  @click="LoginOrReg"  >{{haslogin == 1 ? '登录'  : '注册'}}</div> -->
    <p
      class="login_tit"
      @click="goToPrivacyProtocol"
    >{{haslogin == 1 ? '登录' : '注册'}}即代表您已同意<span class="foot-color">《御康商贸用户隐私政策》</span></p>
  </div>
</template>
<script>
import url from "../../bin/url";
import { XInput, XButton } from "vux";
export default {
  name: "login",
  components: {
    XInput,
    XButton
  },
  computed: {
    haslogin() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      disVal: "",
      btn: "注册",
      style: "",
      timer: "",
      btnload: false,
      maskValue: "",
      codeValue: "获取验证码",
      form: {
        openId: "",
        password: "",
        name: "",
        phone: "",
        code: "",
        headimgurl: "",
        nickname: ""
      },
      Logform: {
        openId: "",
        password: "",
        phone: "",
        nickname: "",
        headimgurl: ""
      },

      validTel: false,
      getoptnId: ""
    };
  },
  methods: {
    clear() {},
    change() {},
    LoginOrReg() {
      this.haslogin == 1 ? this.Login() : this.Reg();
    },

    //登录
    Login() {
      if (!this.$refs.inputTel.valid || !this.$refs.inputPas.valid) {
        this.$vux.toast.text("请检查输入的内容");
        return;
      }
      this.btnload = true;
      var obj = {};
      obj = { ...this.Logform };
      // this.Logform.password = DesUtils.encode(this.Logform.password,"fruits-app,yuntu,com")
      obj.password = DesUtils.encode(obj.password, "fruits-app,yuntu,com");
      obj.openId = localStorage.getItem("openId");
      obj.nickname = localStorage.getItem("nickname");
      obj.headimgurl = localStorage.getItem("headimgurl");
      this.$fetch.post("fruits/app/user/login", obj).then(res => {
        this.btnload = false;
        alert(res.msg);
        if (res.msg == "success") {
          this.$vux.toast.text("登录成功");
          localStorage.setItem("user", res.attributes.sessionId);
          localStorage.setItem("type", res.attributes.type);
          localStorage.setItem("appUserId", res.attributes.appUserId); //登陆用户id
          localStorage.setItem("phone",obj.phone)
          this.getCartNum();
        } else if (res.msg == "password_error") {
          alert("密码错误");
        } else if (res.msg == "account_is_not_exist") {
          this.$vux.toast.text("该用户不存在，请注册");
          setTimeout(() => {
            this.$router.push("/login/2");
          }, 2000);
        } else {
          alert(res.msg);
        }
      });
    },
    //注册
    Reg() {
      if (
        !this.$refs.inputTel.valid ||
        !this.$refs.name.valid ||
        !this.$refs.inputPas.valid ||
        !this.$refs.code.valid
      ) {
        this.$vux.toast.text("请检查输入的内容");
        return;
      }
      this.loginP = this.form.password;
      this.form.password = DesUtils.encode(
        this.form.password,
        "fruits-app,yuntu,com"
      );
      this.form.openId = localStorage.getItem("openId");
      this.form.nickname = localStorage.getItem("nickname");
      this.form.headimgurl = localStorage.getItem("headimgurl");
      this.$fetch.post("fruits/app/user/register", this.form).then(res => {
        if (res.msg == "registered") {
          this.$vux.toast.text("手机号已经被注册");
          return;
        }
        if (res.msg == "success") {
          this.$vux.toast.text("注册成功");
          // setTimeout(() => {
          //   var form = JSON.stringify(this.form);
          //   this.$router.push("/login/1?parm=" + form);
          // }, 1000);
          if (res.attributes.type == 1) {
            let _obj = {
              openId: localStorage.getItem("openId"),
              password: DesUtils.encode(this.loginP, "fruits-app,yuntu,com"),
              phone: this.form.phone,
              nickname: localStorage.getItem("nickname"),
              headimgurl:
                localStorage.getItem("headimgurl") ||
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJrDNnAKic6SaKbPB5FGldToRvRnlEgQwjIT9xaNoh1gspSk3xgUUX5Myvl4Sz68wSTZCHEOKOZsiag/132"
            };
            this.$fetch.post("fruits/app/user/login", _obj).then(res => {
              this.btnload = false;
              if (res.msg == "success") {
                this.$vux.toast.text("登录成功");
                localStorage.setItem("user", res.attributes.sessionId);
                localStorage.setItem("type", res.attributes.type);
                localStorage.setItem("appUserId", res.attributes.appUserId); //登陆用户id
                this.$router.push("/home");
              } else if (res.msg == "password_error") {
                alert("密码错误");
              } else {
                alert(res.msg);
              }
            });
          }
        } else {
          alert(res.msg);
        }
      });
    },
    editPass() {
      this.$router.push("/changePassword/" + 0);
    },
    regTest() {
      this.$router.push("/login/2");
    },
    //发送验证码
    sendCode() {
      var validTel = this.$refs.inputTel.valid;
      console.log(validTel);
      if (this.timer || !this.form.phone || !validTel) {
        return;
      }
      var count = 60;
      this.form.openId = localStorage.getItem("openId");
      this.$fetch
        .post("fruits/app/user/getSmsCode", {
          openId: this.form.openId,
          phone: this.form.phone,
          openId: localStorage.getItem("openId"),
          type: 0
        })
        .then(res => {
          console.log(res);
          // this.form.code = "1234";
        });

      this.timer = setInterval(() => {
        if (count <= 1) {
          clearInterval(this.timer);
          this.codeValue = "重新获取验证码";
          this.timer = "";
          return;
        }
        count--;
        this.codeValue = count;
      }, 1000);
    },
    //获取购物车数量
    getCartNum() {
      this.$fetch
        .post("fruits/app/cart/getCartNum", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          if (res.msg == "success") {
            this.$router.push("/home");
            localStorage.setItem("catnum", res.obj);
          } else {
            alert(res.msg);
          }
        });
    },
    // getQueryString(name) {
    //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //   var r = window.location.search.substr(1).match(reg);
    //   if (r != null) return unescape(r[2]);
    //   return null;
    // },
    //获取用户openId
    getOpenId() {
      var data = {
        code: this.code,
        state: ""
      };
      this.$fetch.post(url.getOpenId, data).then(res => {
        // alert(res.msg);
      });
    },
    // getAddress() {
    //   if (localStorage.getItem("openId") == "null") {
    //     this.getoptnId = "";
    //   } else {
    //     this.getoptnId = localStorage.getItem("openId");
    //   }
    //   this.$fetch
    //     .post("fruits/app/cart/getAddressList", {
    //       openId: this.getoptnId
    //     })
    //     .then(res => {});
    // },
    // 协议
    goToPrivacyProtocol() {
      this.$router.push({
        name: "privacyProtocol"
      });
    }
  },
  created() {
    settitle("我是登录页面");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },
  created() {
    settitle("注册与登录");
  },
  mounted() {
    this.getOpenId(); //获取用户open ID
    if (this.$route.query["parm"]) {
      var obj = JSON.parse(this.$route.query["parm"]);
      this.Logform.phone = obj.phone;
      this.Logform.password = obj.password;
      this.Logform.openId = obj.openId;
    }
    // this.getAddress();
  }
};
</script>
<style lang='less'>
#login {
  overflow-x: hidden;
  padding: 0 0.4rem;
  .logo_box {
    text-align: center;
    margin: 0.45rem 0 1rem 0;
    font-weight: 600;
    .logo {
      width: 1.25rem;
      height: 1.25rem;
    }
    .logo_title {
      line-height: 0.4rem;
    }
  }
  .form {
    overflow: hidden;
    a {
      color: #4a7b67;
    }
    .mt-40 {
      padding-top: 45px;
    }

    .px-15 {
      padding: 0 0 0 15px;
    }
  }
  .login_btn {
    height: 0.9rem;
    margin-top: 1.24rem;
    background: #4a7b67;
    border-radius: 0.12rem;
    font-size: 0.28rem;
    line-height: 0.9rem;
    color: #fff;
    text-align: center;
  }
  .login_tit {
    margin: 0.28rem 0 0 0.1rem;
    font-size: 0.24rem;
    line-height: 0.33rem;
    color: rgba(153, 153, 153, 1);
  }
  .foot-color{
    color: #4a7b67;
  }
}
</style>