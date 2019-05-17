<template>
  <div id="login">
        <div class="logo_box">
          <img  class='logo' src="../../assets/images/logo.png" alt="">
          <p class="logo_title">果蔬精粹吧</p>
        </div>

        <div class="form" v-if="false">
           <!-- <x-input label-width="4em"  placeholder="I'm placeholder"></x-input> -->

            <x-input  keyboard="number" is-type="china-mobile" placeholder="请输入手机号码" @on-click-clear-icon='clear'>
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/phone@2x.png">
            </x-input>
            <x-input class="mt-40"  keyboard="number" is-type="china-mobile" placeholder="请输⼊验证码" @on-click-clear-icon='clear'>
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/验证码@2x.png">
              <a slot="right" class="code_btn" href="#">获取验证码</a>
            </x-input>
            <x-input class="mt-40" keyboard="number" is-type="china-mobile" placeholder="请设置您的密码,用于套餐支付和登录" @on-click-clear-icon='clear'>
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/密码@2x.png">
            </x-input>
            <x-input disabled></x-input>
        </div>

        <div class="form">
           <x-input  keyboard="number" is-type="china-mobile" placeholder="请输入手机号码" @on-click-clear-icon='clear'>
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/phone@2x.png">
            </x-input>
            <x-input class="mt-40"  is-type="china-mobile" placeholder="请输入密码" @on-click-clear-icon='clear'>
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/密码@2x.png">
            </x-input>
            <x-input disabled></x-input>
            <p class="flex-between px-15">
              <a href="#">忘记密码</a><a href="#">立即注册</a>
            </p>
        </div>

        <div class="login_btn">{{btn}}</div>
        <p class="login_tit">登录即代表您已同意《御康商贸用户隐私政策》</p>
  </div>
</template>
<script>
import { XInput } from 'vux'

export default {
  name: "login",
  components: {
    XInput,
  },
  data() {
    return {
      btn:'注册',
      style:''
    };
  },
  methods: {
    clear(){

    }
  },
  created() {
    settitle("我是登录页面");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('我是登录页面')

  }
};
</script>
<style lang='less'>
#login{
  overflow-x: hidden;
  padding: 0 0.4rem;
  .logo_box{
    text-align: center;
    margin: 0.45rem 0 1rem 0;
    font-weight: 600;
    .logo{
      width: 1.25rem;
      height: 1.25rem;
      
    }
    .logo_title{
      line-height: 0.4rem;
    }
  }
  .form{
    overflow: hidden;
    a{
      color:#4A7B67
    }
    .mt-40{
      padding-top:45px;
    }
    .code_btn{

    }
    .px-15{
      padding:0 0 0 15px;
    }
  }
  .login_btn{
    height:0.9rem;
    margin-top: 1.24rem;
    background:#4A7B67;
    border-radius:0.12rem;
    font-size:0.28rem;
    line-height: 0.9rem;
    color: #fff;
    text-align: center;
  }
  .login_tit{
    margin: 0.28rem 0 0 0.1rem;
    font-size:0.24rem;
    line-height:0.33rem;
    color:rgba(153,153,153,1);
  }
}

</style>