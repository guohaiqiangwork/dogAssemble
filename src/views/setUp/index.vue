<template>
  <div>
    <div class="margin_top_div3 personal_div_money" style=" margin-bottom: 24%;">
      <div class="div_display_flex width_m" @click="goToPassword">
        <div class="div_width_50 font_color_1A personal_list_font">修改密码</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m" v-if="type == 2" @click="Confirm">
        <div class="div_width_50 font_color_1A personal_list_font">切换身份</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m" v-if="type == 2 || type==3 " @click="goToAddress">
        <div class="div_width_50 font_color_1A personal_list_font">地址管理</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m" @click="accountD" v-if="type != 3 ">
        <div class="div_width_50 font_color_1A personal_list_font">{{type==1&&state!=3?'冻结账户':type==1&&state == 3?"解冻账户" :storeState == 2?  "开始营业": "关闭店铺"}}</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m">
        <div class="div_width_50 font_color_1A personal_list_font">联系客服</div>
        <div
          class="div_width_50 personal_list_font"
          style=" text-align: right; margin-right: 4%;"
        >4008382727</div>
      </div>
    </div>
    <!-- 推出按钮 -->
    <div class="text_center" @click="goOut">
      <div class="b_t_t">退出登录</div>
    </div>
    <!-- 账户冻结 -->
    <confirm v-model="outPayFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">{{type == 1?"您确认将会员卡冻结吗？" : storeState == 2?"是否要开店": "是否要打烊" }}</div>
    </confirm>
     <confirm v-model="PayFalge" :title="'您当前用户'+tel+'已被冻结需解冻才可以正常使用'" :hide-on-blur="true" :show-cancel-button="false" confirm-text="确认解冻" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;display:flex;">
        <input type="number" class="codeWrite" v-model="code">
        <span class="font-12" @click="sendCode"><a>{{codeValue}}</a></span>
      </div>
    </confirm>
    <!-- 切换身份 -->
    <confirm v-model="confirmShow" title @on-cancel="onCancel" @on-confirm="changeIDE">
      <div style="text-align:center;font-size:18px;">{{'您确定要切换身份吗？'}}</div>
    </confirm>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Confirm } from "vux";
export default {
  components: {
    Confirm
  },
  name: "setUp",
  data() {
    return {
      PayFalge:false,//解冻账户弹窗
      outPayFalge: false, //冻结账户弹窗
      text: "",
      confirmShow:false,
      code:null,
      codeValue:'获取验证码',
      form:{
        phone:localStorage.getItem('phone')||"15010825114",
       

      },
      timer:null,
    };
  },
  computed: {
    type() {
      return localStorage.getItem("type");
    },
    state(){
      return localStorage.getItem("state")
    },
    tel(){
      var str = localStorage.getItem('phone');
      var reg = /(\d{3})\d{4}(\d{4})/;
      str = str.replace(reg,'$1****$2');
      return str
    },
    storeState(){
      return localStorage.getItem('storeState');
    }
  },
  methods: {
     //发送验证码
    sendCode() {
      var count = 60;
      this.$fetch
        .post("fruits/app/user/getSmsCode", {
          phone: this.form.phone,
          openId: localStorage.getItem("openId"),
          type: 1
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
    //   去修改密码
    goToPassword() {
      this.$router.push("/changePassword/"+1);

      // this.$router.push({
      //   name: "changePassword",
      //   params: {
      //     obj: JSON.stringify({
      //       type: "profession",
      //       data: {
      //         id: "参数"
      //       }
      //     })
      //   }
      // });
    },
    Confirm(){
      this.confirmShow = true;
    },
    //切换身份
    changeIDE(){
       let _obj = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.changeCustomer, _obj).then(
        data => {
          if (data.code == 0) {
            localStorage.setItem("type", data.attributes.type);
            this.getCartNum();
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
     //获取购物车数量
    getCartNum() {
      this.$fetch
        .post("fruits/app/cart/getCartNum", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          if (res.msg == "success") {
            // this.$router.push("/home");
            localStorage.setItem("catnum", res.obj);
            this.$router.push({
              name: 'personal',
              params: {
                obj: JSON.stringify({
                  type: "profession",
                  data: {
                    id: "参数"
                  }
                })
              }
            });
          }
        });
    },
    // 去地址管理
    goToAddress() {
      this.$router.push({
        name: "addressment",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "蚕丝"
            }
          })
        }
      });
    },
    //账户冻结
    accountD() {
      if(this.state ==3){
        this.PayFalge = true;
      }else{
         this.outPayFalge = true;
      }
     
    },
    // 弹窗取消
    onCancel() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm() {
      if (this.type == 1) {
        if(this.state == 3 ){
          this.$fetch.post("fruits/app/personal/thawCustomer",{openId:localStorage.getItem('openId'),code:this.code}).then(res =>{
            if(res.msg == 'success'){
              this.$vux.toast.text('解冻成功!');
              // this.$router.go(0);
             window.location.reload();
            }
          })
        }else{
           this.$fetch
          .post("/fruits/app/personal/freezingCustomer", {
            openId: localStorage.getItem("openId")
          })
          .then(res => {
            if (res.code == 0) {
              localStorage.setItem('state',3);
              // this.$router.go(0)
             window.location.reload();
              alert("冻结成功");
            } else if (res.msg == "user_has_frozen") {
              alert("该账号已冻结");
            } else {
              alert(res.msg);
            }
          });
        }
        
      } else {
        var obj={}
        if(this.storeState == 2){
          obj = {openId:localStorage.getItem('openId'),state:"1"}
        }else{
          obj = {openId:localStorage.getItem('openId'),state:"2"}
        }
         this.$fetch.post('fruits/app/personal/changeStoreState',obj).then(res =>{
          console.log(res,'gfdgd')
          if(res.code ==0){
            this.$router.push('/personal');
            this.$vux.toast.text(obj.state == 2?'店铺已打烊':'已经开始营业');
            localStorage.setItem('storeState',res.obj);
          }
            
        })
        console.log('打烊')
      }
      console.log("233");
    },
    goOut() {
      // localStorage.clear();
      this.$fetch.post("/fruits/app/logout").then(res => {
        if (res == "{code=301, message=退出登录成功!}") {
          this.$router.push("/login/1");
        }
      });
    }
  },
  created() {
    settitle("设置");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.$fetch
      .post("fruits/app/personal/getPersonalInfo", {
        openId: localStorage.getItem("openId")
      })
      .then(res => {
        this.personalMsg = { ...res.obj };
      });
    console.log("设置",this.tel);
  }
};
</script>
<style scoped>
.codeWrite{
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #fefefe;
}
.font-12{
  white-space: nowrap;
  font-size: 12px;
}
.personal_div_money {
  width: 95%;
  background-color: #ffffff;
  margin-left: 2%;
  border-radius: 5px;
}
.personal_list_font {
  margin-left: 13px;
  margin-top: 3%;
  margin-bottom: 3%;
  color: #1a202c;
  font-size: 15px;
}
.width_26 {
  width: 26px;
}
.width_m {
  width: 96%;
  margin-left: 2%;
  border-bottom: 1px solid #e9e9e9;
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