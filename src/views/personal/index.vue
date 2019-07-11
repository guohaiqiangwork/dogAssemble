<template>
  <!-- style="background-color:#F3F5F8; min-height:700px" -->
  <div>
    <!-- 商铺 -->
    <div class="backgroun_color_f3" style="background:#fff;" v-if="personalMsg.type == 2">
      <!-- 头部 -->
      <div class="personal_img_bj">
        <div class="div_display_flex">
          <div class="div_width_25" style="height:2rem;">
            <div class="headr_img_circular">
              <img :src="personalMsg.headimgurl" width="100%" />
            </div>
          </div>
          <div class="div_width_75 div_display_flex" style="margin-left:-3%">
            <div
              class="font_color_ff font_size_15 margin_top_div8"
              style="width:75%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-indent:5%;margin-top:5%;"
            >{{personalMsg.storeName}}</div>
            <div class="personal_falg_member">
              <img
                src="../../assets/images/122@2x.png"
                width="60px"
                v-if="personalMsg.storeState == 1"
              />
              <img
                src="../../assets/images/td@2x.png"
                width="33px"
                v-if="personalMsg.storeState != 1"
                style="margin-top:0.2rem;margin-left:1.2rem;"
              />
            </div>
            <!-- 打烊 -->
            <!-- <div class="div_display_flex" style="margin-left: 54%; margin-top: 10%;">
              <div class="font_color_ff" style="margin-top:16%">打烊中…</div>
              <div>
                <img src="../../assets/images/td@2x.png" width="30px">
              </div>
            </!-->
            -->
          </div>
        </div>
        <div class="div_display_flex" style="margin-top:-13%">
          <div class="div_width_25"></div>
          <div
            class="div_width_75 div_display_flex"
            @click="goToRecharge"
            style="margin-left: -3%; margin-top: 2%;"
          >
            <div
              class="font_color_E8 font_size_15"
              style="width:60%;margin-top:-5%;text-indent:5%;"
            >押金：{{personalMsg.deposit.toFixed(2)}}元</div>
            <div class="personal_falg_m" style="margin-left:15%" v-if="personalMsg.storeState == 1">
              营业中
              <!-- {{personalMsg.storeState == 1 ? "营业中":"已打烊"}} -->
            </div>
            <div
              class="personal_falg_m"
              v-if="personalMsg.storeState == 2"
              style="margin-top:-0.5rem;color:#AD8852;margin-left:0.1rem;"
            >
              打烊中...
              <!-- {{personalMsg.storeState == 1 ? "营业中":"已打烊"}} -->
            </div>
          </div>
        </div>
        <!-- 账户 -->
        <div class="personal_money text_center margin_top_div5">
          <!-- style="margin-top:-21%" -->
          <div class="font_color_76 font_size_13 padding_top_div3">总金额(元)</div>
          <div
            class="font_color_76 font_size_25"
            style="padding-bottom: 3%; padding-top: 2%;font-size:.5rem;"
          >{{personalMsg.total.toFixed(2)}}</div>
          <!-- {{personalMsg.total.toFixed(2)}} -->
          <!-- -->
        </div>
      </div>

      <!-- 菜单列表 -->
      <div style="margin-top:0%;padding-bottom:1rem;background:#fff;" class="clearfix">
        <!-- <div class=""> -->
        <div class="personal_cd text_center" @click="goToNewOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/dingdan@2x.png" width="25px" height="25px" />
          </div>
          <div>新建订单</div>
        </div>
        <div class="personal_cd text_center" @click="goToMemberOperation">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1574@2x.png" width="25px" height="25px" />
          </div>
          <div>会员操作</div>
        </div>
        <div class="personal_cd text_center" @click="goToTBook" style="border-right:0;">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1569@2x.png" width="25px" height="25px" />
          </div>
          <div>食养配方</div>
        </div>
        <div class="personal_cd text_center" @click="goToStatistics">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/wenjianjia@2x.png" width="25px" height="25px" />
          </div>
          <div>数据统计</div>
        </div>
        <div class="personal_cd text_center" @click="goToRecharge">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1562@2x.png" width="25px" height="25px" />
          </div>
          <div>金额充值</div>
        </div>
        <div class="personal_cd text_center" @click="goToHealthBonus" style="border-right:0;">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1570@2x.png" width="25px" height="25px" />
          </div>
          <div>健康奖金</div>
        </div>

        <div class="personal_cd text_center" @click="goToOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1554@2x.png" width="25px" height="25px" />
          </div>
          <div>商城订单</div>
        </div>

        <!-- <div class="personal_cd text_center" @click="goToSetUp">
          <div class="margin_top28">
            <img src="../../assets/images/1566@2x.png" width="25px" height="30px">
          </div>
          <div>视频管理</div>
        </div>-->

        <div class="personal_cd text_center" @click="goToSetUp">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1579@2x.png" width="25px" height="25px" />
          </div>
          <div>设置中心</div>
        </div>
        <div
          class="personal_cd text_center"
          @click="goToRecommend"
          v-if="personalMsg.isChange  == 1"
          style="border-right:0;"
        >
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1609@2x.png" width="25px" height="25px" />
          </div>
          <div>推荐信息</div>
        </div>
      </div>
      <!-- 底部菜单栏 -->
      <!-- <TabBar ref="TabBar"/> -->
    </div>
    <!-- 家庭 -->
    <div class="backgroun_color_f3" v-if="personalMsg.type == 3">
      <!-- 头部 -->
      <div class="personal_img_bj">
        <div class="div_display_flex">
          <div class="div_width_25">
            <div class="headr_img_circular">
              <img :src="personalMsg.headimgurl" width="100%" />
            </div>
          </div>
          <div class="div_width_75 div_display_flex">
            <div class="font_color_ff font_size_15" style="margin-top:14%">{{personalMsg.storeName}}</div>
          </div>
        </div>
      </div>
      <!-- 账户 -->
      <div class="personal_money text_center" style="margin-top:-29%">
        <div class="font_color_76 font_size_13 padding_top_div3">总金额(元)</div>
        <div
          class="font_color_76 font_size_25"
          style="padding-bottom: 2%;"
        >{{personalMsg.total.toFixed(2)}}</div>
        <!-- {{personalMsg.total.toFixed(2)}} -->
      </div>
      <!-- 菜单列表 -->
      <div class="margin_top_div4">
        <div class="personal_cd_j text_center" @click="goToOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1554@2x.png" width="25px" height="25px" />
          </div>
          <div>商城订单</div>
        </div>
        <div class="personal_cd_j text_center" @click="goToStatistics">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/wenjianjia@2x.png" width="25px" height="25px" />
          </div>
          <div>数据统计</div>
        </div>
        <div class="personal_cd_j text_center" @click="goToHealthBonus">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1570@2x.png" width="25px" height="25px" />
          </div>
          <div>健康奖金</div>
        </div>

        <!-- <div class="personal_cd_j text_center" @click="goToSetUp">
          <div class="margin_top28">
            <img src="../../assets/images/1566@2x.png" width="25px" height="30px">
          </div>
          <div>视频管理</div>
        </div>-->
        <div class="personal_cd_j text_center" @click="goToSetUp">
          <div class="margin_top28">
            <img src="../../assets/images/1579@2x.png" width="25px" height="25px" />
          </div>
          <div>设置中心</div>
        </div>
        <div class="personal_cd_j text_center" @click="goToRecommend">
          <div class="margin_top28">
            <img src="../../assets/images/1609@2x.png" width="25px" height="25px" />
          </div>
          <div>推荐信息</div>
        </div>
        <div class="personal_cd_j text_center" @click="falgQH" v-if="personalMsg.isChange  == 1">
          <div class="margin_top28">
            <img src="../../assets/images/1609.png" width="25px" height="25px" />
          </div>
          <div>切换身份</div>
        </div>
        <!-- <div
          class="personal_cd text_center"
          @click="goToRecommend"
          v-if="personalMsg.isChange  == 1"
          style="border-right:0;"
        >
          <div class="margin_top28">
            class="img_width25" class="img_width_100"
            <img src="../../assets/images/1609@2x.png" width="25px" height="25px" />
          </div>
          <div>推荐信息</div>
        </div>-->
      </div>
      <!-- 底部菜单栏 -->
      <!-- <TabBar ref="TabBar"/> -->
    </div>
    <!-- 个人 -->
    <div class="backgroun_color_f3" v-if="personalMsg.type == 1">
      <!-- 头部 -->
      <div class="personal_img_bjgl">
        <div class="billList" @click="goToBillRecord">账单记录</div>
        <div class="div_display_flex">
          <div class="div_width_25">
            <div class="headr_img_circular">
              <img :src="personalMsg.headimgurl" width="100%" />
            </div>
          </div>
          <div class="div_width_75 div_display_flex">
            <div class="font_color_ff font_size_15 margin_top_div12">{{personalMsg.nickname}}</div>
          </div>
        </div>
      </div>
      <!-- 账户 -->
      <div class="personal_div_money" style="margin-top:-20%;line-height:2.5" @click="goToWallet">
        <div
          class="font_color_102 font_size_13 personal_money_m margin_left_div3 padding_top_div3"
        >账户余额（元）</div>
        <div class="div_display_flex personal_price_m padding_bottom_4">
          <div
            class="font_color_102 font_size_25 div_width_50 margin_left_div3"
          >￥ {{personalMsg.remain.toFixed(2)}}</div>
          <!-- -->
          <!-- <div
            class="div_display_flex font_color_102 font_size_13 div_width_50"
           
          >
             <div style="padding-top: 6%; margin-left: 48%">我要提现</div>
            <div class="width_26" style="margin-top: 3%;">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
            </div>
          </div>-->
        </div>
      </div>
      <!-- 未冻结账户 -->
      <div v-if="accountFalge">
        <!-- 服务订单记录 -->
        <div class="backgroun_color_fff personal_order_m margin_top_div3">
          <div class="div_display_flex" @click="goToSOrderList">
            <div class="font_color_1A personal_order_font div_width_50">服务订单记录</div>
            <div class="div_width_50" style="width:26px;margin-left:38%;margin-top:18px">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>
          <div
            class="div_display_flex margin_top_div5"
            style="padding-bottom: 8%;"
            @click="goToService"
          >
            <div class="personal_bt_tc">进行中套餐</div>
          </div>
        </div>
        <!-- 菜单列表 -->
        <div
          class="margin_top_div3 personal_div_money"
          style=" padding-bottom: 24%;height:auto;overflow-x:hidden;"
        >
          <div class="div_display_flex" @click="goToOrder">
            <div class="div_width_50 font_color_1A personal_list_font">我的订单</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToExclusive">
            <div class="div_width_50 font_color_1A personal_list_font">专属门店</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToAddressment">
            <div class="div_width_50 font_color_1A personal_list_font">地址管理</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="falgQH" v-if="personalMsg.isChange  == 1">
            <div class="div_width_50 font_color_1A personal_list_font">切换身份</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>

          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToSetUp">
            <div class="div_width_50 font_color_1A personal_list_font">设置</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%" />
            </div>
          </div>

          <div class="personal_div_border" v-if="personalMsg.isChange  == 1"></div>
        </div>
      </div>
      <!-- 冻结账户 -->
      <div v-if="!accountFalge">
        <div
          class="backgroun_color_fff personal_order_m margin_top_div3 text_center font_color_1A"
          style="font-size:8px"
        >
          <img src="../../assets/images/提醒 (3)@2x.png" class="per_img_width_18 margin_top_div8" />
          <div class="margin_top_div3">您当前帐户已被冻结</div>
          <div class="margin_top_div3">需解冻才可以正常使用</div>
          <div class="margin_top_div3">1231313***33</div>
          <div class="pass_list_w">
            <div class="search_box">
              <img src="../../assets/images/验证码@2x.png" class="width_16" />
              <input
                type="text"
                placeholder="请输⼊验证码"
                style="width:56%;height:100%;outline: none;border:none"
              />
              <span
                v-show="sendAuthCode"
                class="margin_left_div3 font_color_4A"
                style="font-size:6px"
                @click="getAuthCode"
              >获取验证码</span>
              <span
                v-show="!sendAuthCode"
                class="margin_left_div3 font_color_4A"
                style="font-size:6px"
              >{{auth_time}}重新获取验证码</span>
            </div>
          </div>
          <!-- 确认 -->
          <div class="text_center" style="padding-bottom: 8%;">
            <div class="b_t_t">确认解冻</div>
          </div>
        </div>
      </div>
      <!-- 底部菜单栏 -->
    </div>
    <TabBar ref="TabBar" />
    <!-- 店铺设置 -->
    <confirm v-model="outPayFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">是否要打烊？</div>
    </confirm>
    <!-- 身份切换 -->
    <confirm v-model="outPayFalge1" title @on-cancel="onCancel1" @on-confirm="onConfirm1">
      <div style="text-align:center;font-size:18px;">是否进行身份切换</div>
    </confirm>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
import url from "../../bin/url";
import { Flexbox, Confirm } from "vux";
import { open } from "fs";
require("../../static/des");
export default {
  components: {
    TabBar,
    Confirm
  },
  // name: "personal",
  data() {
    return {
      personalMsg: {},
      falg: "sj", //个人 商家 展示标记
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      accountFalge: true, //账户冻结
      outPayFalge: false, //是否打烊
      outPayFalge1: false //身份切换
    };
  },
  created() {
    settitle("个人中心");
    // this.routeParams = JSON.parse(this.$route.params.obj);
    // console.log(this.routeParams);
  },
  computed: {},
  methods: {
    //店铺打烊
    shopDY() {
      this.outPayFalge = true;
    },
    // 弹窗取消
    onCancel() {
      console.log("2");
    },
    //
    goToBillRecord() {
      this.$router.push({
        name: "billRecord",
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
    // 弹窗确认
    onConfirm() {
      console.log("233");
    },
    //身份切换
    falgQH() {
      if (this.personalMsg.isChange == 1) {
        this.outPayFalge1 = true;
        // this.$router.go(0)
      } else {
        alert("您现在不能进行切换");
      }
    },
    // 弹窗取消
    onCancel1() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm1() {
      let _obj = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.changeCustomer, _obj).then(
        data => {
          if (data.code == 0) {
            console.log(data)
            localStorage.setItem("type", data.attributes.type);
            localStorage.setItem("appUserId", data.attributes.appUserId);

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
            localStorage.setItem("catnum", res.obj);
            this.$vux.toast.text("身份已切换");
            setTimeout(() => {
              this.$router.push("/home?id=" + 1);
              // this.$router.go(0)
            }, 1000);
          }
        });
    },
    // 去我的钱包
    goToWallet: function() {
      this.$router.push({
        name: "myWallet",
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
    // 去我的订单
    goToOrder: function() {
      this.$router.push({
        name: "order",
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
    // 去服务订单
    goToService: function() {
      this.$router.push({
        name: "serviceOrder",
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
    // 去服务订单
    goToSOrderList: function() {
      this.$router.push({
        name: "sOrderList",
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
    // 数据统计healthBonus
    goToStatistics: function() {
      this.$router.push({
        name: "dataStatistics"
        // params: {
        //   obj: JSON.stringify({
        //     type: "profession",
        //     data: {
        //       id: "蚕丝"
        //     }
        //   })
        // }
      });
    },
    // 健康奖金
    goToHealthBonus: function() {
      this.$router.push({
        name: "healthBonus",
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
    // 去设置exclusive
    goToSetUp: function() {
      this.$router.push({
        name: "setUp",
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
    // 去配方
    goToTBook: function() {
      if (this.personalMsg.storeState != 1) {
        this.$vux.toast.text("店铺已打烊，该功能无法操作");
        return;
      }
      this.$router.push("/eatbook");
    },
    // 去专属门店
    goToExclusive: function() {
      this.$router.push({
        name: "exclusive",
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
    // 去地址管理
    goToAddressment: function() {
      this.$router.push({
        name: "addressment"
        // params: {
        //   obj: JSON.stringify({
        //     type: "profession",
        //     data: {
        //       id: "蚕丝"
        //     }
        //   })
        // }
      });
    },
    // 押金充值
    goToRecharge: function() {
      if (this.personalMsg.storeState != 1) {
        this.$vux.toast.text("店铺已打烊，该功能无法操作");

        return;
      }
      this.$router.push({
        name: "recharge",
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
    // 新建订单
    goToNewOrder() {
      if (this.personalMsg.storeState != 1) {
        this.$vux.toast.text("店铺已打烊，该功能无法操作");

        return;
      }
      this.$router.push({
        name: "newOrder",
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
    // 会员操作
    goToMemberOperation() {
      if (this.personalMsg.storeState != 1) {
        this.$vux.toast.text("店铺已打烊，该功能无法操作");
        return;
      }
      this.$router.push({
        name: "memberOperation",
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
    // 修改密码
    goToPassword() {
      this.$router.push("/changePassword/" + 1);
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
    // 获取验证码
    getAuthCode: function() {
      this.sendAuthCode = false;
      this.auth_time = 6;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    }
  },

  mounted() {
    console.log(window.location.href.split("#")[0]);
    this.$fetch
      .post("fruits/app/personal/getPersonalInfo", {
        openId: localStorage.getItem("openId")
      })
      .then(res => {
        var state = res.obj.state;
        localStorage.setItem("state", state);
        this.personalMsg = { ...res.obj };
      });
  }
};
</script>

<style scoped>
/* 拨打电话 */
a:link {
  color: #333333;
  text-decoration: none;
}
.billList {
  margin-top: 0.15rem;
  padding: 0 3%;
  color: #fff;
  text-align: right;
  text-decoration: underline;
  overflow: hidden;
}
.personal_img_bj {
  background-image: url("../../assets/images/bg@3x.png");
  background-size: 100% 100%;
  height: 3.8rem;
  background-repeat: no-repeat;
}
.personal_img_bjg {
  background-image: url("../../assets/images/bg.png");
  background-size: 100%;
  height: 184px;
  background-repeat: no-repeat;
}
.personal_img_bjgl {
  background-image: url("../../assets/images/bgl@3x.png");
  background-size: 100%;
  height: 184px;
  background-repeat: no-repeat;
  overflow: hidden;
}
.headr_img_circular {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  overflow: hidden;
  margin-left: 24%;
  margin-top: 15%;
}
.personal_falg_member {
  /* margin-left: 60%; */
  margin-top: 3%;
}
.personal_falg_m {
  color: #ffffff;
  font-size: 13px;
  margin-left: 3%;
}
.personal_font_m {
  margin-left: 13px;
  margin-top: 36px;
}
.personal_div_money {
  width: 95%;
  background-color: #ffffff;
  margin-left: 2%;
  border-radius: 5px;
}

.personal_order_m {
  width: 95%;
  margin-left: 2%;
  border-radius: 5px;
}
.personal_order_font {
  margin-top: 18px;
  margin-left: 3%;
}

.personal_bt_tc {
  width: 80%;
  text-align: center;
  margin-left: 10%;
  color: #ffffff;
  font-size: 14px;
  border-radius: 8px;
  line-height: 3.5;
  background-color: #4a7b67;
}
.width_26 {
  width: 26px;
}
.personal_list_font {
  margin-left: 13px;
  margin-top: 3%;
  margin-bottom: 1%;
  margin-right: 1%;
  color: #1a202c;
  font-size: 15px;
}
.personal_div_border {
  border-bottom: 1px solid #e9e9e9;
  width: 94%;
  margin-left: 3%;
}
.personal_money {
  width: 90%;
  margin-left: 5%;
  background: linear-gradient(#ffdfb1, #e2ae64);
  border-radius: 8px;
}
/* 菜单块 */
.personal_cd {
  border: 1px solid #ededed;
  float: left;
  width: 33%;
  border-left: none;
  color: #333333;
  font-size: 14px;
  padding-bottom: 6%;
  border-top: none;
  background-color: #fff;
  height: 1.9rem;
}
.personal_cd_j {
  float: left;
  width: 33%;
  border-left: none;
  color: #333333;
  font-size: 14px;
  padding-bottom: 6%;
  border-top: none;
  background-color: #fff;
  height: 96px;
}
.search_box {
  width: 90%;
  margin: 5% auto;
  margin-left: 5%;
  padding-left: -5%;
  height: 30px;
  border-bottom: 1px solid rgb(173, 165, 165);
}
.width_16 {
  width: 16px;
  height: 16px;
  margin-right: 3%;
}
.per_img_width_18 {
  width: 18px;
  height: 18px;
}
.b_t_t {
  width: 90%;
  background-color: #4a7b67;
  color: #fff;
  font-size: 16px;
  line-height: 3;
  border-radius: 5px;
  margin-left: 5%;
  margin-top: 8%;
}
.margin_top28 {
  margin-top: 28%;
}
</style>

