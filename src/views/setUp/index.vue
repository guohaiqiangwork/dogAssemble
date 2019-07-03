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
        <div class="div_width_50 font_color_1A personal_list_font">{{type == 1 ?'冻结账户' :"关闭店铺"}}</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m">
        <div class="div_width_50 font_color_1A personal_list_font">联系客服</div>
        <div
          class="div_width_50 personal_list_font"
          style=" text-align: right; margin-right: 4%;"
        >3155765</div>
      </div>
    </div>
    <!-- 推出按钮 -->
    <div class="text_center" @click="goOut">
      <div class="b_t_t">退出登录</div>
    </div>
    <!-- 账户冻结 -->
    <confirm v-model="outPayFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">{{type == 1?"您确认将会员卡冻结吗？" :"是否要打烊"}}</div>
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
      outPayFalge: false, //冻结账户弹窗
      text: "",
      confirmShow:false,
    };
  },
  computed: {
    type() {
      return localStorage.getItem("type");
    }
  },
  methods: {
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
            this.$router.go(0);
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
      this.outPayFalge = true;
    },
    // 弹窗取消
    onCancel() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm() {
      if (this.type == 1) {
        this.$fetch
          .post("/fruits/app/personal/freezingCustomer", {
            openId: localStorage.getItem("openId")
          })
          .then(res => {
            if (res.code == 0) {
              alert("冻结成功");
            } else if (res.msg == "user_has_frozen") {
              alert("该账号已冻结");
            } else {
              alert(res.msg);
            }
          });
      } else {
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
    console.log("设置");
  }
};
</script>
<style scoped>
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