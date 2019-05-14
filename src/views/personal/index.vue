<template>
  <div class="backgroun_color_f3">
    <!-- 头部 -->
    <div class="personal_img_bj">
      <div class="div_display_flex">
        <div class="headr_img_circular">
          <img src="../../assets/images/404@2x.png" width="100%">
        </div>
        <div class="font_color_ff font_size_15 personal_font_m">李娜</div>
        <div class="personal_falg_member">至尊会员</div>
      </div>
    </div>
    <!-- 账户 -->
    <div class="personal_div_money" style="margin-top:-8%">
      <div class="font_color_102 font_size_13 personal_money_m">账户余额（元）</div>
      <div class="div_display_flex personal_price_m">
        <div class="font_color_102 font_size_25 div_width_50">￥0.00</div>
        <div class="div_display_flex font_color_102 font_size_13 div_width_50" @click="goToWallet">
          <div style="padding-top: 6%; margin-left: 48%">我要提现</div>
          <div class="width_26" style="margin-top: 3%;">
            <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
          </div>
        </div>
      </div>
    </div>
    <!-- 服务订单记录 -->
    <div class="backgroun_color_fff personal_order_m margin_top_div3">
      <div class="div_display_flex">
        <div class="font_color_1A personal_order_font div_width_50">服务订单记录</div>
        <div class="div_width_50" style="width:26px;margin-left:38%;margin-top:18px">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex margin_top_div5" style="padding-bottom: 8%;">
        <div class="div_width_50">
          <div class="personal_bt_tc">辟谷套餐</div>
        </div>
        <div class="div_width_50">
          <div class="personal_bt_tc">会员套餐</div>
        </div>
      </div>
    </div>
    <!-- 菜单列表 -->
    <div class="margin_top_div3 personal_div_money" style=" margin-bottom: 24%;">
       <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">我的订单</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="personal_div_border"></div>
       <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">专属门店</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="personal_div_border"></div>
       <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">地址管理</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="personal_div_border"></div>
       <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">帮助中心</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="personal_div_border"></div>
       <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">意见反馈</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="personal_div_border"></div>
         <div class="div_display_flex">
        <div class="div_width_50 font_color_1A personal_list_font">联系客服</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
    </div>
    <!-- 底部菜单栏 -->
    <TabBar ref="TabBar"/>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
import { Flexbox } from "vux";
export default {
  components: {
    TabBar
  },
  name: "personal",
  data() {
    return {};
  },
  created() {
    settitle("个人中心");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  computed: {},
  methods: {
    // 去我的钱包
    goToWallet:function(){
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
    }
  },

  mounted() {
    this.$refs.TabBar.didClickedItem("2");
  }
};
</script>
<style>
.weui-dialog__btn_primary {
  color: #ffe001 !important;
}
.msg_timeline .weui-icon-success-no-circle {
  /* font-size: 1rem !important; */
}
</style>

<style scoped>
.personal_img_bj {
  background-image: url("../../assets/images/404@2x.png");
  height: 175px;
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
  width: 60px;
  height: 18px;
  background-color: #e8bb7a;
  text-align: center;
  color: #896628;
  border-radius: 5px;
  margin-top: 35px;
  font-size: 12px;
  margin-left: 47%;
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
.personal_money_m {
  margin-left: 15px;
  padding-top: 20px;
}
.personal_price_m {
  margin-left: 15px;
  margin-top: 13px;
  padding-bottom: 20px;
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
  color: #1A202C;
  font-size: 15px
}
.personal_div_border {
  border: 1px solid #e9e9e9;
  width: 94%;
  margin-left: 3%;
}
</style>

