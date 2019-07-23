<template>
  <div>
    <!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header>
    <router-link to="/home">首页</router-link>
    <router-link to="/goodsdetail">商品详情</router-link>
    <router-link to="/cart">购物车页面</router-link>
    <router-link to="/paysure">去支付页面</router-link>
    <router-link to="/addressment">地址管理页面</router-link>
    <router-link to="/addressopt">添加地址</router-link>
    <router-link to="/immendilypay">立即支付</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/videopage">视频页面</router-link>
    <router-link to="/login/1">登录和注册页面</router-link>
    <router-link to="/videomangment">视频管理</router-link>
    <button @click="goToLogin">登陆页面</button>
    <button @click="goToNationalStores">全国门店</button>
    <button @click="goToRecipeManual">配方手册</button>
    <button @click="goTocaseVideo">案例视频</button>
    <button @click="goToShareVideo">分享视频</button>
    <button @click="goToIntroduce">公司介绍</button>
    <button @click="goToSymptoms">检测病症</button>
    <button @click="goToPersonal">个人中心</button>
    <button @click="goToRecommend">推荐信息</button>
    <button @click="goToExclusive">专属门店</button>-->
    <!-- <button @click="goTol">获取当前路径</button> -->
    <!-- <button @click="goToPrivacyProtocol">协议</button>
    <button @click="goToSuccessful">支付成功页面</button>
    <router-link to="/sharedBonus">共享奖金</router-link>-->
    <!-- <button @click="goToSymptoms">检测病症</button>
    <button @click="goToNationalStores">全国门店</button>
    <button @click="goToRecommend">推荐信息</button>
    <button @click="goToExclusive">专属门店</button>
     <router-link to="/sharedBonus">共享奖金</router-link>
       <button @click="goTocaseVideo">案例视频</button>
    <button @click="goToSharedBonus">共享奖金</button>-->
    <!-- <button @click="goToSymptoms">检测病症</button>
           <button @click="goToSharedBonus">共享奖金</button>
    <button @click="goTocaseVideo">案例视频</button> -->
 
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  name: "home",
  data() {
    return {
      code: ""
    };
  },
  methods: {
    getData() {
      var self = this;
      $.ajax({
        url: "http://f.apiplus.cn/bj11x5.json",
        type: "GET",
        dataType: "JSONP",
        success: function(res) {
          self.data = res.data.slice(0, 3);
          self.opencode = res.data[0].opencode.split(",");
        }
      });
    },
    // 登陆
    goToLogin() {
      this.$router.push({
        name: "login",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    //   去个人中心
    goToPersonal(id) {
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   去分享
    goToSharedBonus(id) {
      this.$router.push({
        name: "sharedBonus",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              shareId: "我就是参数"
            }
          })
        }
      });
    },
    //   去全国门店
    goToNationalStores(id) {
      this.$router.push({
        name: "nationalStores",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   去全国门店
    goToRecipeManual(id) {
      this.$router.push({
        name: "recipeManual",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   案例视频
    goTocaseVideo(id) {
      this.$router.push({
        name: "caseVideo",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    // 视频分享
    goToShareVideo() {
      this.$router.push({
        name: "shareVideo",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 公司介绍
    goToIntroduce() {
      this.$router.push({
        name: "introduce",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 病症检测
    goToSymptoms() {
      this.$router.push({
        name: "symptoms",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 个人中心
    goToPersonal() {
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 推荐信息
    goToRecommend() {
      this.$router.push({
        name: "recommend",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 专属门店
    goToExclusive() {
      this.$router.push({
        name: "exclusive",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 专属门店
    goToPrivacyProtocol() {
      this.$router.push({
        name: "privacyProtocol"
      });
    },
    // 支付成功
    goToSuccessful() {
      this.$router.push({
        name: "successful"
      });
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },

    //获取用户openId
    getOpenId() {
      if (this.code == null) {
        this.code = "";
      }
      var data = {
        code: this.code,
        state: ""
      };
      this.$fetch.post(url.getOpenId, data).then(res => {
        if (res.code == 0) {
          localStorage.setItem("openId", res.obj.openid);
          localStorage.setItem("nickname", res.obj.nickname);
          localStorage.setItem("headimgurl", res.obj.headimgurl);
          this.$router.push("/login/1");
        }
      });
    },
    goTol() {
      //  alert(window.location.href)
    }
  },
  created() {
    settitle("授权页面");
    // this.getCode();
  },

  mounted() {
    this.code = this.getQueryString("code");
    setTimeout(() => {
      this.getOpenId();
    }, 1000);
  }
};
</script>
<style scoped>
button {
  background-color: blue;
  color: #fff;
  padding: 2%;
  border: none;
  font-size: 16px;
  border-radius: 5%;
  margin-top: 2%;
  margin-left: 3%;
}
</style>