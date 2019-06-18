<template>
  <!-- style="background-color:#F3F5F8; min-height:700px" -->
  <div>
    <!-- 商铺 -->
    <div class="backgroun_color_f3" v-if="falg == 'sj'">
      <!-- 头部 -->
      <div class="personal_img_bj">
        <div class="div_display_flex">
          <div class="div_width_25">
            <div class="headr_img_circular">
              <img src="../../assets/images/dingdan@2x.png" width="100%">
            </div>
          </div>
          <div class="div_width_75 div_display_flex">
            <div class="font_color_ff font_size_15 margin_top_div12">李娜1</div>
            <div class="personal_falg_member">
              <img src="../../assets/images/122@2x.png" width="60px">
            </div>
            <!-- 打烊 -->
            <!-- <div class="div_display_flex" style="margin-left: 54%; margin-top: 10%;">
              <div class="font_color_ff" style="margin-top:16%">打烊中…</div>
              <div>
                <img src="../../assets/images/td@2x.png" width="30px">
              </div>
            </div>-->
          </div>
        </div>
        <div class="div_display_flex" style="margin-top:-3%">
          <div class="div_width_25"></div>
          <div class="div_width_75 div_display_flex" @click="goToRecharge">
            <div class="font_color_E8 font_size_15">押金：500元 ></div>
            <div class="personal_falg_m">营业中</div>
          </div>
        </div>
      </div>

      <!-- 账户 -->
      <div class="personal_money text_center" style="margin-top:-21%">
        <!-- style="margin-top:-21%" -->
        <div class="font_color_76 font_size_13 padding_top_div3">总金额(元)</div>
        <div class="font_color_76 font_size_25" style="padding-bottom: 2%;">1000.00</div>
      </div>
      <!-- 菜单列表 -->
      <div class="margin_top_div4">
        <!-- <div class=""> -->
        <div class="personal_cd text_center" @click="goToNewOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/dingdan@2x.png" width="25px" height="30px">
          </div>
          <div>新建订单</div>
        </div>
        <div class="personal_cd text_center" @click="goToMemberOperation">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1574@2x.png" width="25px" height="30px">
          </div>
          <div>会员操作</div>
        </div>
        <div class="personal_cd text_center" @click="goToTBook">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1569@2x.png" width="25px">
          </div>
          <div>食养配方</div>
        </div>
        <div class="personal_cd text_center" @click="goToStatistics">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/wenjianjia@2x.png" width="25px" height="30px">
          </div>
          <div>数据统计</div>
        </div>
        <div class="personal_cd text_center" @click="goToRecharge">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1562@2x.png" width="25px" height="30px">
          </div>
          <div>金额充值</div>
        </div>
        <div class="personal_cd text_center" @click="goToHealthBonus">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1570@2x.png" width="25px" height="30px">
          </div>
          <div>健康奖金</div>
        </div>

        <div class="personal_cd text_center" @click="goToOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1554@2x.png" width="25px" height="30px">
          </div>
          <div>商城订单</div>
        </div>

        <!-- <div class="personal_cd text_center" @click="goToSetUp">
          <div class="margin_top28">
            <img src="../../assets/images/1566@2x.png" width="25px" height="30px">
          </div>
          <div>视频管理</div>
        </div> -->

        <div class="personal_cd text_center" @click="goToSetUp">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1579@2x.png" width="25px" height="30px">
          </div>
          <div>设置中心</div>
        </div>
      </div>
      <!-- 底部菜单栏 -->
      <TabBar ref="TabBar"/>
    </div>
    <!-- 家庭 -->
    <div class="backgroun_color_f3" v-if="falg == 'jt'">
      <!-- 头部 -->
      <div class="personal_img_bj">
        <div class="div_display_flex">
          <div class="div_width_25">
            <div class="headr_img_circular">
              <img src="../../assets/images/dingdan@2x.png" width="100%">
            </div>
          </div>
          <div class="div_width_75 div_display_flex">
            <div class="font_color_ff font_size_15" style="margin-top:14%">果蔬精粹吧（万达店）</div>
          </div>
        </div>
      </div>
      <!-- 账户 -->
      <div class="personal_money text_center" style="margin-top:-24%">
        <!-- style="margin-top:-21%" -->
        <div class="font_color_76 font_size_13 padding_top_div3">总金额(元)</div>
        <div class="font_color_76 font_size_25" style="padding-bottom: 2%;">1000.00</div>
      </div>
      <!-- 菜单列表 -->
      <div class="margin_top_div4">
        <div class="personal_cd_j text_center" @click="goToOrder">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1554@2x.png" width="25px" height="30px">
          </div>
          <div>商城订单</div>
        </div>
        <div class="personal_cd_j text_center" @click="goToStatistics">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/wenjianjia@2x.png" width="25px" height="30px">
          </div>
          <div>数据统计</div>
        </div>
        <div class="personal_cd_j text_center" @click="goToHealthBonus">
          <div class="margin_top28">
            <!-- class="img_width25" class="img_width_100"-->
            <img src="../../assets/images/1570@2x.png" width="25px" height="30px">
          </div>
          <div>健康奖金</div>
        </div>

        <!-- <div class="personal_cd_j text_center" @click="goToSetUp">
          <div class="margin_top28">
            <img src="../../assets/images/1566@2x.png" width="25px" height="30px">
          </div>
          <div>视频管理</div>
        </div> -->
        <div class="personal_cd_j text_center" @click="goToPassword">
          <div class="margin_top28">
            <img src="../../assets/images/1582@2x.png" width="25px" height="30px">
          </div>
          <div>修改密码</div>
        </div>
        <div class="personal_cd_j text_center">
          <div class="margin_top28">
            <img src="../../assets/images/1578@2x.png" width="25px" height="30px">
          </div>
          <div>联系客服</div>
        </div>
      </div>
      <!-- 底部菜单栏 -->
      <TabBar ref="TabBar"/>
    </div>
    <!-- 个人 -->
    <div class="backgroun_color_f3" v-if="falg == 'gr'">
      <!-- 头部 -->
      <div class="personal_img_bjg">
        <div class="div_display_flex">
          <div class="div_width_25">
            <div class="headr_img_circular">
              <img src="../../assets/images/dingdan@2x.png" width="100%">
            </div>
          </div>
          <div class="div_width_75 div_display_flex">
            <div class="font_color_ff font_size_15 margin_top_div12">4李娜2</div>
          </div>
        </div>
      </div>
      <!-- 账户 -->
      <div class="personal_div_money" style="margin-top:-20%;line-height:2.5" @click="goToWallet">
        <div
          class="font_color_102 font_size_13 personal_money_m margin_left_div3 padding_top_div3"
        >账户余额（元）</div>
        <div class="div_display_flex personal_price_m padding_bottom_4">
          <div class="font_color_102 font_size_25 div_width_50 margin_left_div3">￥0.00</div>
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
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
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
        <div class="margin_top_div3 personal_div_money" style=" margin-bottom: 24%;">
          <div class="div_display_flex" @click="goToOrder">
            <div class="div_width_50 font_color_1A personal_list_font">我的订单</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToExclusive">
            <div class="div_width_50 font_color_1A personal_list_font">专属门店</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToAddressment">
            <div class="div_width_50 font_color_1A personal_list_font">地址管理</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
            </div>
          </div>
          <div class="personal_div_border"></div>
          <div class="div_display_flex" @click="goToSetUp">
            <div class="div_width_50 font_color_1A personal_list_font">设置</div>
            <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
              <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
            </div>
          </div>
          <div class="personal_div_border"></div>
        </div>
      </div>
      <!-- 冻结账户 -->
      <div v-if="!accountFalge">
        <div
          class="backgroun_color_fff personal_order_m margin_top_div3 text_center font_color_1A"
          style="font-size:8px"
        >
          <img src="../../assets/images/提醒 (3)@2x.png" class="per_img_width_18 margin_top_div8">
          <div class="margin_top_div3">您当前帐户已被冻结</div>
          <div class="margin_top_div3">需解冻才可以正常使用</div>
          <div class="margin_top_div3">1231313***33</div>
          <div class="pass_list_w">
            <div class="search_box">
              <img src="../../assets/images/验证码@2x.png" class="width_16">
              <input
                type="text"
                placeholder="请输⼊验证码"
                style="width:56%;height:100%;outline: none;border:none"
              >
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
      <TabBar ref="TabBar"/>
    </div>
    <!-- 店铺设置 -->
    <confirm v-model="outPayFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">是否要打烊？</div>
    </confirm>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
import { Flexbox, Confirm } from "vux";
require ('../../static/des')
export default {
  components: {
    TabBar,
    Confirm
  },
  name: "personal",
  data() {
    return {
      falg: "sj", //个人 商家 展示标记
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      accountFalge: true, //账户冻结
      outPayFalge: false //是否打烊
    };
  },
  created() {
    settitle("个人中心");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
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
    // 弹窗确认
    onConfirm() {
      console.log("233");
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
        name: "dataStatistics",
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
    // 押金充值
    goToRecharge: function() {
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
      this.$router.push({
        name: "changePassword",
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
    console.log(window.DesUtils.encode('1232313',"fruits-app,yuntu,com"))
    this.$refs.TabBar.didClickedItem("2");
  }
};
</script>

<style scoped>
/* 拨打电话 */
a:link {
  color: #333333;
  text-decoration: none;
}
.personal_img_bj {
  background-image: url("../../assets/images/bg.png");
  background-size: 100%;
  height: 200px;
  background-repeat: no-repeat;
}
.personal_img_bjg {
  background-image: url("../../assets/images/bg.png");
  background-size: 100%;
  height: 184px;
  background-repeat: no-repeat;
}
.headr_img_circular {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  overflow: hidden;
  margin-left: 36px;
  margin-top: 30px;
}
.personal_falg_member {
  margin-left: 58%;
  margin-top: 3%;
}
.personal_falg_m {
  color: #ffffff;
  font-size: 13px;
  margin-left: 40%;
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
  margin-left: 15px;
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
  margin-bottom: 3%;
  color: #1a202c;
  font-size: 15px;
}
.personal_div_border {
  border: 1px solid #e9e9e9;
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
  height: 96px;
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
  margin-left: 5%;
  margin-top: 5%;
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

