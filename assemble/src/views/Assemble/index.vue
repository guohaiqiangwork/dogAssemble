<template>
  <div>
    <!-- <div type="primary" @click="goToPersonal">去我的</div>
    <div type="primary" @click="getList">获取数据</div>-->
    <!-- 头部 -->
    <div class="backgroun_color_fff">
      <div class="div_display_flex" style="margin-left: 11%;padding-top:3%">
        <div class="div_left_border"></div>
        <div>距结束</div>
        <div class="div_left_border"></div>
      </div>
      <!-- 倒计时 -->
      <countdown :endTime="time" :callback="callback" endText="已经结束了"></countdown>
      <div class="assemble_div_font">N 人成团，当前已有N人参团</div>
      <!-- 参团人员 -->
      <div class="div_display_flex" style="margin-top:4%;padding-bottom: 4%;">
        <div class="header_border_circular"></div>
        <div class="header_border_circular"></div>
        <div class="header_border_circular"></div>
        <div class="header_border_circular"></div>
        <div class="header_border_circular"></div>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="div_display_flex backgroun_color_fff" style="margin-top:2%" v-for="item in lists">
      <div class="assemble_list_div">
        <img src="../../assets/logo.png" width="85%">
      </div>
      <div style="width:60%">
        <div class="margin_top_div8">{{item.name}}</div>
        <div class="margin_top_div3">
          <span>¥{{item.prict}}</span>
          <span style="text-decoration:line-through">{{item.money}}</span>
        </div>
        <div>
          <div class="assemble_specifications">选择规格</div>
        </div>
      </div>
    </div>
    <!-- 购买 -->
    <div class="div_display_flex backgroun_color_fff assemble_buttom_div">
      <div style="width:20%">
        <img src="../../assets/logo.png" alt width="100%">
      </div>
      <div style="width:60%">
        <div>
          <span>¥700</span>
          <span>$720</span>
        </div>
        <div>满N件包邮</div>
      </div>
      <div class="assemble_buttom_buy">去拼团</div>
    </div>
    <!-- <div class="click" @click="downApp">点击触发</div>-->
  </div>
</template>
<script>
import url from "../../bin/url";
import { XHeader } from "vux";
import countdown from "./time";

export default {
  components: {
    XHeader,
    countdown
  },
  name: "Assemble",
  data() {
    return {
      popupVisible: false,
      time: "1554291380",
      lists: [
        { name: "天人计划全期深海鱼狗粮", prict: "700", money: "900.00" },
        { name: "天人计海鱼狗粮", prict: "300", money: "1000.00" },
        { name: "天人计海鱼狗粮", prict: "300", money: "1000.00" },
        { name: "天人计海鱼狗粮", prict: "300", money: "1000.00" },
        { name: "天人计海鱼狗粮", prict: "300", money: "1000.00" },
        { name: "全期深海鱼狗粮", prict: "1000", money: "400.00" }
      ]
    };
  },
  created() {
    settitle("拼团");
    // this.getCode();
  },
  methods: {
    // 倒计时回调函数
    callback(id) {
      console.log(id);
    },
    // 检测机型
    downApp() {
      let ua = navigator.userAgent.toLowerCase();
      let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1; //Ios终端
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      console.log(ua);
      console.log(isAndroid);
      console.log(isiOS);
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
    // 获取接口
    getList() {
      const _param = `?_=${new Date().getTime()}`;
      const a = "/" + "1";
      console.log(_param);
      const _obj = {
        buttonType: "2"
      };
      this.$fetch.post(url.wei + a, _obj).then(data => {
        console.log(data);
        if (data) {
          this.total = data.Total || 0;
          this.searchData = data;
        }
      });
    },
    // 获取微信
    getCode() {
      // 非静默授权，第一次有弹框
      const code = ""; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const local = window.location.href;
      if (code == null || code === "") {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          window.APPID
        }&redirect_uri=${encodeURIComponent(
          local
        )}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
      } else {
        this.getOpenId(code); // 把code传给后台获取用户信息
      }
    },
    getOpenId(code) {
      // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
      const _this = this;
      this.$http
        .post("/api/user/wechat/login", {
          code
        })
        .then(res => {
          const datas = res.data;
          if (datas.code === 0) {
            console.log("成功");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    wxRegCallback() {
      this.wxShareTimeline();
    },
    /**
     * [wxShareTimeline 微信自定义分享到朋友圈]
     */
    wxShareTimeline() {
      let opstion = {
        title: "拼团", // 分享标题
        link: "http://www.jzdlink.com", // 分享链接
        imgUrl:
          "http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png", // 分享图标
        success: function() {
          alert("分享成功");
        },
        error: function() {
          alert("分享失败");
        }
      };
      // 将配置注入通用方法
      this.ShareTimeline(opstion);
    }
  },
  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
/* .model_width {
  width: 80%;
  height: 40%;
}
.assemble_div_w{
  width: 32%;
} */
.div_left_border {
  width: 22%;
  border-top: 1px solid #ffe001;
  height: 1px;
  margin: 3% 8% 0 8%;
}
.header_border_circular {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ffe001;
  margin-left: 6%;
}
.assemble_div_font {
  text-align: center;
  margin-top: 8%;
}
.assemble_specifications {
  width: 98px;
  height: 30px;
  text-align: center;
  background-color: #ffe001;
  color: #333;
  border-radius: 15px;
  line-height: 1.8;
  margin-top: 3%;
  margin-left: 58%;
}
.assemble_list_div {
  width: 30%;
  margin-left: 1%;
  padding: 3%;
}
.assemble_buttom_buy {
  background-color: #ffe001;
  text-align: center;
  line-height: 5;
  width: 30%;
}
.assemble_buttom_div{
      position: fixed;
      bottom: 0;
      width: 100%
}
</style>