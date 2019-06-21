<template>
  <div id="login">
        <div class="logo_box">
          <img  class='logo' src="../../assets/images/logo.png" alt="">
          <p class="logo_title">果蔬精粹吧</p>
        </div>

        <div class="form" v-if="haslogin == 2">
           <!-- <x-input label-width="4em"  placeholder="I'm placeholder"></x-input> -->
            <x-input placeholder="请输入您的姓名" v-model="form.name" required @on-change="change">
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/name.png">
            </x-input>
            <x-input class="mt-40"  placeholder="请输入手机号码" @on-click-clear-icon='clear' ref="inputTel"  required is-type="china-mobile" keyboard="number" v-model="form.phone">
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/phone@2x.png">
            </x-input>
            <x-input class="mt-40"  keyboard="number"  placeholder="请输⼊验证码"  :min="4" :max="4" @on-click-clear-icon='clear' required v-model="form.code">
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/验证码@2x.png">
              <a slot="right" class="code_btn" href="#" @click ="sendCode">{{codeValue}}</a>
            </x-input>
            <x-input class="mt-40" @on-change="change"  v-model="form.password"  type="password" :min="6" :max="6" placeholder="请设置您的密码,用于套餐支付和登录" @on-click-clear-icon='clear' required >
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/密码@2x.png">
            </x-input>
            <x-input disabled v-model="btn"></x-input>
  
        </div>

        <div class="form" v-else>
           <x-input  keyboard="number" is-type="china-mobile" placeholder="请输入手机号码" @on-click-clear-icon='clear' required v-model="Logform.phone">
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/phone@2x.png">
            </x-input>
            <x-input class="mt-40"  type="password" placeholder="请输入密码" @on-click-clear-icon='clear' required v-model="Logform.password" >
              <img slot="label" style="padding-right:10px;display:block;with:0.33rem;height:0.33rem" src="../../assets/images/密码@2x.png">
            </x-input>
            <x-input disabled v-model="btn"></x-input>
            <p class="flex-between px-15">
              <a href="#" @click="editPass">忘记密码</a><a href="#" @click="regTest">立即注册</a>
            </p>
        </div>

        <div class="login_btn" @click="LoginOrReg">{{haslogin == 1 ? '登录'  : '注册'}}</div>
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
  computed: {
    haslogin(){
      return this.$route.params.id
    }
  },
  data() {
    return {
      btn:'注册',
      style:'',
      timer:'',
     maskValue:"",
      codeValue:"获取验证码",
      form:{
        openId:'1313121231',
        password:"",
        name:"",
        phone:"",
        code:"",
        headimgurl:"http://m.imeitou.com/uploads/allimg/2019021309/ipijc3xjpfo.jpg",
        nickname:"随便",
      },
      Logform:{
        openId:'1313121231',
        password:"",
        phone:""
      },
    
      validTel:false,
    };
  },
  methods: {
    clear(){

    },
    change(){
      console.log(123)
    },
    LoginOrReg(){
      this.haslogin == 1 ? this.Login() : this.Reg();
    },
   
    //登录
    Login(){
      console.log(this.Logform)
      this.$fetch.post("fruits/app/user/login",this.Logform).then(
        res =>{
          if(res.msg =="success"){
            this.$vux.toast.text('登录成功');
            localStorage.setItem("user",res.attributes.sessionId)
            localStorage.setItem("type",res.attributes.type)
            this.$router.push("/home");
          }else{
             this.$vux.toast.text('登录时出现问题，请重新登录');
          }
        }
      )
    },
    //注册
    Reg(){
      this.$fetch.post("fruits/app/user/register",this.form).then(res =>{
        if(res.msg == "success"){
          this.$vux.toast.text('注册成功');
          setTimeout(() =>{
            var form = JSON.stringify(this.form)
            this.$router.push('/login/1?parm='+form);
          },1000)
        }else{
          this.$vux.toast.text('出现错误，请重试');
        }
        

      })
    },
    editPass(){
      
      this.$router.push('/changePassword/:obj',{obj:1});
    },
    regTest(){
      this.$router.push('/login/2')
    },
    sendCode(){
      var validTel = this.$refs.inputTel.valid;
      console.log(validTel)
      if(this.timer || !this.form.phone || !validTel){
        return
      }
      var count = 10;
      this.$fetch.post('fruits/app/user/getSmsCode',{openId:this.form.openId,phone:this.form.phone}).then(res =>{
        this.form.code = '1234';
       
      })
       
     
      this.timer = setInterval(() => {
        if(count<=1){
          clearInterval(this.timer);
          this.codeValue = "重新获取验证码";
          this.timer = "";
          return
        }
        count--;
        this.codeValue = count;
      },1000)
    }
  },
  created() {
    settitle("我是登录页面");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },
  created(){
      settitle('注册与登录');
  },
  mounted() {
    if(this.$route.query["parm"]){
      var obj = JSON.parse(this.$route.query["parm"]);
      this.Logform.phone = obj.phone;
      this.Logform.password = obj.password;
      this.Logform.openId = obj.openId;
    }
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