<template>
  <div>
    <!-- <input type="button" value="点我加入购物车" @click="flag=!flag">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <p class="circle" v-show="flag"></p>
    </transition>-->

    <div class="backgroun_color_fff">
      <div class="div_display_flex" style="margin-left:26%;padding-top:21px">
        <div class="div_left_border"></div>
        <div class="font_color_00 font_size_16" style="margin: -8px 23px 0 23px;">距结束</div>
        <div class="div_left_border"></div>
        <div class="assemble_img_border" @click="goToPersonal">
          <img src="../../assets/logo.png" style="width:80%">
        </div>
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
        <div class="header_border_circular_g" @click="goToOrder">
          <img src="../../assets/logo.png" style="width:80%">
        </div>
      </div>
    </div>

    <!-- 产品列表 -->
    <div style="padding-bottom:57px">
      <div
        class="div_display_flex backgroun_color_fff"
        style="margin-top:2%"
        v-for="(item,index) in lists"
      >
        <!-- 产品内容 -->
        <div @click="goToProduct" class="div_display_flex">
          <!-- 产品图片 -->
          <div class="assemble_list_div">
            <img src="../../assets/logo.png" width="85%">
          </div>
          <div style="width:60%">
            <div
              class="margin_top_div8 font_color_00 font_size_16"
              style="width:187px;"
            >{{item.name}}</div>
            <div class="margin_top_div8">
              <span class="font_size_18 font_color_00">
                ¥{{item.prict}}
                <span class="font_size_11">起</span>
              </span>
              <span
                style="text-decoration:line-through; margin-left: 6%;"
                class="font_size_11"
              >{{item.money}}</span>
            </div>
            <div v-if="item.ni == 1" style="margin-top: 6%;padding-left: 69%;">
              <div class="assemble_specifications" @click="open_model">选择规格</div>
            </div>
            <div v-if="item.ni != 1" style="margin-top: 6%;padding-left: 69%;">
              <div
                v-if="!item.buyNumber"
                style="margin-left: 80%;"
                class="buy_circular"
                @click="assemble_buy_plus(index)"
              >+</div>
            </div>
            <div v-if="item.buyNumber > 0" style="margin-top: 6%;padding-left: 64%;">
              <div class="div_display_flex buy_circular_div">
                <!-- :class="{back_color :buyFalge==2  }" -->
                <div
                  class="buy_circular_n"
                  style="border:1px solid #eee"
                  @click="buy_minute(2,index)"
                >-</div>
                <div style="width:31px;text-align:center;line-height:1.8;font-size:13px">
                  <!-- <input class="input" v-model="item.buyNumber"> -->
                  {{item.buyNumber}}
                </div>
                <!-- :class="{ back_color :buyFalge==1 }" -->
                <div class="buy_circular_n back_color" @click="buyAdd(1,index)">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 购买 -->
    <div class="div_display_flex backgroun_color_fff assemble_buttom_div" style="z-index:5004">
      <!-- 活动正常 -->
      <div style="width: 100%;display: flex;" v-if="true">
        <div class="buy_border_number">{{numberZ}}</div>
        <div class="bt_buy_img">
          <img src="../../assets/logo.png" alt width="100%">
        </div>
        <div class="bt_buy_money" @click="openModelProductL">
          <div style="margin:3%">
            <span>¥700</span>
            <span class="font_color_99 font_size_13 font_text_decoration">$720</span>
          </div>
          <div class="font_color_99 font_size_11" style="margin-left: 3%;margin-top: -2%;">满N件包邮</div>
        </div>
        <div class="assemble_buttom_buy" @click="goToConfirmation">去拼团</div>
      </div>
      <!-- 活动结束 邀请好友-->
      <!-- <div v-if="false" style="width: 100%;">
        <div class="assemble_j_s" @click="goToInvitation">邀请好友去拼团</div>
      </div> -->
    </div>
    <!-- <div class="click" @click="downApp">点击触发</div>-->
    <!-- 弹出层 -->
    <div v-transfer-dom>
      <x-dialog
        v-model="showDialogStyle"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent','overflow': 'auto'}"
      >
        <div class="model_colse_X" @click="showDialogStyle = false">X</div>
        <div class="model_background_width">
          <div class="model_title_font">商品名称</div>
          <div>
            <div class="div_text_left font_color_33 font_size_14">规格一</div>
            <div style="margin-left:-8%;height:100px;">
              <div
                class="model_border_button"
                v-for="item in tasteList"
                @click="get_taste(item.id)"
              >{{item.tasteName}}</div>
            </div>
            <div class="mode_button_border"></div>
          </div>
          <div class="div_display_flex">
            <div class="model_buy_font_s">
              <span style="margin-left:-12%">¥700.00</span>
              <span style="text-decoration:line-through;font-size:11px" class="font_color_33">900.00</span>
            </div>
            <div class="model_buy_font_sb">
              <div class="model_assemble_specifications_w">+加入购物车</div>
            </div>
          </div>
        </div>
      </x-dialog>
    </div>
    <!-- 产品详情 -->
    <div v-if="ProductFalg">
      <!-- 标题 -->
      <div class="div_display_flex" style="margin-left: 11%;padding-top:3%">
        <div class="div_left_border"></div>
        <div>产品详情</div>
        <div class="div_left_border"></div>
      </div>
      <!--内容  -->
      <div>
        <img src="../../assets/logo.png" alt>
      </div>
    </div>
    <!-- 底部弹出层 -->
    <div v-if="modelFalgez">
      <div class="model_background" @click="colseModelProductL">
        <div class="model_center_n">
          <!-- 标题栏 -->
          <div class="div_display_flex backgroun_color_fe01" style="height:35px;line-height:2">
            <div class="font_size_15 font_color_33 buy_car">购物车</div>
            <div class="div_display_flex" style=" margin-left: 11%;margin-top: 1%;">
              <div style="width:13px;height:13px">
                <img src="../../assets/images/delete@2x.png" style="width:100%">
              </div>
              <div class="font_size_15 font_color_66">清空购物车</div>
            </div>
          </div>
          <!-- 列表 -->
          <div v-for="item in [1,2,3,4]">
            <div class="div_display_flex margin_top_div5">
              <div class="model_bottn_font">天然计划全犬期深海鱼狗粮</div>
              <div class="div_display_flex">
                <div style="margin-right:10%">￥1245.3</div>
                <div class="div_display_flex buy_circular_div">
                  <!-- :class="{back_color :buyFalge==2  }" -->
                  <div
                    class="buy_circular_n"
                    style="border:1px solid #eee"
                    @click="buy_minute(2,index)"
                  >-</div>
                  <div style="width:31px;text-align:center;line-height:1.8;font-size:13px">8908</div>
                  <div class="buy_circular_n back_color" @click="buyAdd(1,index)">+</div>
                </div>
              </div>
            </div>
            <div style="margin:4%">
              <div class="model_botton_g">主食 | 牛肉味</div>
            </div>
            <div class="model_botton_border_d"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 邀请好友 -->
    <div v-if="InvitationFalge">
      <div class="model_background" @click="colseModelProductL">
        <img src="../../assets/images/tupianjiazaishibai@3x.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { XHeader, XDialog, TransferDomDirective as TransferDom } from "vux";
import countdown from "./time";
import { fail } from "assert";

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    countdown,
    XDialog
  },
  name: "Assemble",
  data() {
    return {
      popupVisible: false,
      time: "3554291380",
      numberZ: "20",
      classA: "001",
      modelFalgez: false, //弹出层
      InvitationFalge: false,
      tasteList: [
        { tasteName: "牛肉味", id: "001" },
        { tasteName: "番茄味", id: "002" },
        { tasteName: "苦瓜味", id: "003" },
        { tasteName: "猪肉味", id: "004" },
        { tasteName: "驴肉味", id: "005" }
      ],
      lists: [
        {
          name: "天人计划全期深海鱼狗粮",
          prict: "700",
          money: "900.00",
          buyNumber: "",
          ni: "1"
        },
        {
          name: "天人计海鱼狗粮",
          prict: "300",
          money: "1000.00",
          buyNumber: "",
          ni: "2"
        },
        {
          name: "天人计海鱼狗粮",
          prict: "300",
          money: "1000.00",
          buyNumber: "",
          ni: "1"
        },
        {
          name: "天人计海鱼狗粮",
          prict: "300",
          money: "1000.00",
          buyNumber: 1,
          ni: "2"
        },
        {
          name: "天人计海鱼狗粮",
          prict: "300",
          money: "1000.00",
          buyNumber: 1,
          ni: "2"
        },
        {
          name: "全期深海鱼狗粮",
          prict: "1000",
          money: "400.00",
          buyNumber: 1,
          ni: "2"
        }
      ],
      showDialogStyle: false, //弹窗
      buyFalge: "", //样式
      showPrise: 99999, //显示购物数量
      flag: false,
      ProductFalg: false //产品详情
    };
  },
  created() {
    settitle("拼团");
    // this.getCode();
  },
  methods: {
    // 处理
    beforeEnter(el) {
      el.style.transform = "translate(200px, 100px)"; //起步位置
    },
    enter(el, done) {
      // el.offsetWidth 强制html渲染动画
      // el.offsetWidth 这句话如何不写就不会有动画效果直接渲染的
      el.offsetWidth;
      el.style.transform = "translate(-150px, 250px)";
      el.style.transition = "all 2s ease";
      console.log(done);
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    // 展示详情
    goToProduct(id) {
      console.log(id);
      // 获取详情接口
    },
    // 去订单
    goToOrder() {
      this.$router.push({
        name: "order",
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
    // 去确认订单
    goToConfirmation() {
      this.$router.push({
        name: "confirmationOfOrder",
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
    // 倒计时回调函数
    callback(id) {
      console.log(id);
    },

    // 打开弹窗
    open_model() {
      this.showDialogStyle = true;
    },
    // 弹窗选择
    get_taste(id) {
      console.log(id);
      this.classA = id;
    },
    // 添加购物车显示
    assemble_buy_plus(id) {
      // this.showPrise = id;
      this.buyFalge = 1;
      this.buyAdd(1, id);
    },
    // 增加购物
    buyAdd(id, index) {
      this.buyFalge = id;
      var lists = this.lists;
      var buyNumber = Number(lists[index].buyNumber);
      buyNumber = buyNumber + 1;
      lists[index].buyNumber = buyNumber;
    },
    // 减少购物
    buy_minute(id, index) {
      this.buyFalge = id;
      var lists = this.lists;
      var buyNumber = lists[index].buyNumber;
      if (buyNumber > 0) {
        buyNumber = buyNumber - 1;
        lists[index].buyNumber = buyNumber;
      }
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
    },
    // 点击购物车打开弹出层
    openModelProductL() {
      this.modelFalgez = true;
    },
    // 点击购物车打开弹出层
    colseModelProductL() {
      this.modelFalgez = false;
    },
    // 邀请好友
    goToInvitation() {
      this.InvitationFalge = true;
    },
    // 邀请好友
    closeToInvitation() {
      this.InvitationFalge = false;
    }
  },
  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.div_left_border {
  width: 50px;
  border-top: 1px solid #ffe001;
  height: 2px;
  /* margin: 3% 8% 0 8%; */
}
.header_border_circular {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px dashed #ffe001;
  margin-left: 6%;
}
.header_border_circular_g {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 6%;
  border: 2px solid rgb(255, 224, 1);
  overflow: hidden;
  text-align: center;
  line-height: 4.8;
}
.assemble_div_font {
  text-align: center;
  margin-top: 22px;
  color: #101010;
  font-size: 14px;
}
.assemble_specifications {
  width: 77px;
  height: 22px;
  text-align: center;
  background-color: #ffe001;
  color: #333;
  border-radius: 11px;
  line-height: 1.8;
  /* margin-top: 3%; */
  /* margin-left: 58%;s */
  font-size: 12px;
}
.assemble_list_div {
  min-width: 30%;
  max-width: 30%;
  margin-left: 1%;
  padding: 3%;
}
.assemble_buttom_buy {
  background-color: #ffe001;
  text-align: center;
  line-height: 3.5;
  width: 100px;
}
.assemble_buttom_div {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 54px;
}
.model_border_button {
  width: 16%;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid;
  margin-left: 13%;
  float: left;
  margin-top: 3%;
  margin-right: 3%;
}
.model_background_width {
  background-color: #fff;
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
}
.mode_button_border {
  border-top: 1px solid #333;
  width: 95%;
  margin-left: 2%;
  margin-top: 8%;
  margin-bottom: 8%;
}
.buy_circular {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  background-color: #ffe001;
  font-size: 18px;
  color: #333;
  margin-top: -1px;
  line-height: 1.2;
}
.buy_circular_n {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  color: #333;
  margin-top: -1px;
  line-height: 1.2;
  background-color: #fff;
}
.buy_circular_div {
  border: 1px solid;
  width: 77px;
  height: 22px;
  border-radius: 11px;
  border-color: #e5e5e5 #ffe001;
}
.back_color {
  background-color: #ffe001;
}

/* 购物动效 */
.circle {
  border: solid 1px red;
  background-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.assemble_img_border {
  width: 25px;
  border-radius: 50%;
  height: 25px;
  overflow: hidden;
  margin-left: 16%;
  margin-top: -3%;
  text-align: center;
  background-color: #ffe001;
  line-height: 2.4;
}
.btn_left_assemble {
  margin-left: 70%;
  margin-top: 3%;
}
/* 底部 */
.bt_buy_img {
  width: 66px;
  height: 70px;
  margin-top: -3%;
}
.bt_buy_money {
  background-color: #333;
  color: #fff;
  width: 60%;
  font-size: 18px;
}
.buy_border_number {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fe5b4a;
  color: #fff;
  margin-top: -5%;
  position: absolute;
  margin-left: 12%;
  font-size: 11px;
  line-height: 1.7;
  text-align: center;
}
.model_title_font {
  font-size: 16px;
  color: #333;
  padding-top: 16px;
}
.model_buy_font_s {
  color: #020202;
  font-size: 18px;
  width: 45%;
}
.model_buy_font_sb {
  width: 54%;
  text-align: -webkit-right;
  margin-right: 4%;
  margin-bottom: 23px;
}
.model_assemble_specifications_w {
  width: 81px;
  height: 23px;
  text-align: center;
  background-color: #ffe001;
  color: #333;
  border-radius: 11px;
  line-height: 1.8;
  font-size: 12px;
}
.model_colse_X {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #c5c5c5;
  font-size: 13px;
  background-color: #fff;
  line-height: 2.6;
  margin-left: 92%;
  margin-top: -4%;
  position: absolute;
}
.buy_car {
  width: 60%;
  text-align: left;
  margin-left: 3%;
  margin-top: 1%;
}
.model_botton_g {
  width: 85px;
  height: 17px;
  border-radius: 9px;
  background-color: #ffe001;
  font-size: 11px;
  color: #333;
  text-align: center;
}
.model_bottn_font {
  font-size: 14px;
  color: #000;
  width: 54%;
  margin-left: 4%;
}
.model_botton_border_d {
  border-top: 1px solid #e5e5e5;
  width: 90%;
  margin-left: 5%;
}
.assemble_j_s {
  background-color: #ffe001;
  font-size: 16px;
  color: #333;
  height: 54px;
  text-align: center;
  line-height: 3;
}
</style>