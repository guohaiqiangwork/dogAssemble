<template>
  <div>
    <!-- <div type="primary" @click="goToPersonal">去我的</div>
    <div type="primary" @click="getList">获取数据</div>-->
    <!-- 头部 -->
    <div class="div_display_flex" style="margin-left: 11%;margin-top:3%">
      <div class="div_left_border"></div>
      <div>距结束</div>
      <div class="div_left_border"></div>
    </div>
    <!-- 倒计时 -->
  
    <!-- 货物详情 -->

    <!-- <div class="click" @click="downApp">点击触发</div>
      <div>您已拼团成功，我们会尽快安排发货</div>
      <div style="display: flex">
        <div class="assemble_div_w">
          <img src="../../assets/logo.png" style="width:100%">
        </div>
        <div class="assemble_div_w">
          <div>商品名称</div>
          <div>规格</div>
          <div>¥200.00</div>
        </div>
        <div class="assemble_div_w">
          <div>待发货</div>
          <div>*22</div>
        </div>
    </div>-->
    <!-- </div> -->
    <!-- 弹窗内容 -->
  </div>
</template>
<script>
import url from "../../bin/url";
import { XHeader } from "vux";

export default {
  components: {
    XHeader
  },
  name: "Assemble",
  data() {
    return {
      popupVisible: false
    };
  },
  created() {
    settitle("拼团");
    // this.getCode();
  },
  methods: {
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
  border-top: 1px solid red;
  height: 1px;
  margin: 3% 8% 0 8%;
}
</style>