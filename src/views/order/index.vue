<template>
  <div style="background-color:#F3F5F8;min-height:600px">
    <div class="div_display_flex backgroun_color_fff personal_title">
      <div v-for="(item,index) in  tabList" @click="tabSwitch(item.id)" :key="index">
        <div :style="{color:(switchFlage != item.id ? '' :'#000000')}">{{item.name}}</div>
        <div class="switchBorder" v-if="switchFlage == item.id"></div>
      </div>
    </div>
    <!-- 全部订单 -->
    <div v-if="switchFlage == '001'">
      <div class="order_block">
        <div class="div_display_flex">
          <div
            class="font_size_13"
            style="width:75% ;margin-left: 19px;margin-top: 14px;"
          >订单编号：3242342342423423</div>
          <div class="font_size_14" style="margin-top: 14px;">
            <span class="order_red">.</span> 待付款
          </div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30 margin_right_div3">
            <div class="order_width_height">
              <img src="../../assets/images/WechatIMG101@2x.png" width="100%">
            </div>
          </div>
          <div style="width:63%">
            <div class="font_color_00 font_size_14">
              熊孩子综合蔬菜干香菇脆秋葵干330g
              果蔬脆
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="order_price_font">¥13.9</div>
              <div class="text_right" style="margin-left: 61%;">*3</div>
              <!-- order_price_bt -->
            </div>
          </div>
        </div>
        <div class="order_border margin_top_div5"></div>
        <div class="order_bt_p margin_top_div3" @click="goToPay">
          <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
        </div>
      </div>
      <div>
        <div class="text_center">
          <img src="../../assets/images/1581@2x.png" width="80%" alt>
        </div>
        <div class="text_center font_size_15 font_color_99">暂无订单</div>
      </div>
    </div>
    <!-- 待付款 -->
    <div v-if="switchFlage == '002'">待付款</div>
    <!-- 待收费 -->
    <div v-if="switchFlage == '003'">待收费</div>
    <!-- 已发货 -->
    <div v-if="switchFlage == '004'">已发货</div>
    <!-- 已完成 -->
    <div v-if="switchFlage == '005'">已完成</div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "myWallet",
  data() {
    return {
      tabList: [
        {
          name: "全部",
          id: "001"
        },
        {
          name: "待付款",
          id: "002"
        },
        {
          name: "待发货",
          id: "003"
        },
        {
          name: "已发货",
          id: "004"
        },
        {
          name: "已完成",
          id: "005"
        }
      ],
      switchFlage: "001"
    };
  },
  methods: {
    // tab切换
    tabSwitch(id) {
      console.log(id);
      this.switchFlage = id;
    },
    // 去支付
    goToPay() {
      this.$router.push({
        name: "paysure",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "pay"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("我的订单");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("我的订单");
  }
};
</script>
<style scoped>
.personal_title {
  height: 48px;
  font-size: 14px;
  line-height: 3;
  display: flex;
  color: #908c8c;
  justify-content: space-around;
}
.switchBorder {
  border: 1px solid #ff8156;
  height: 3px;
  width: 90%;
  margin-top: 0%;
  background-color: #ff8156;
  border-radius: 4px;
}
.order_block {
  width: 95%;
  margin-left: 2%;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 5%;
}
.order_width_height {
  width: 70px;
  overflow: hidden;
  height: 70px;
  border: 1px dashed #707070;
  margin-left: 18%;
}
.order_price_bt {
  background-color: #f5f5f5;
  color: #102023;
  font-size: 13px;
  padding: 0 5%;
  border-radius: 5px;
  text-align: center;
  width: 20%;
  margin-left: 3%;
  line-height: 2;
}
.order_price_font {
  color: #ff3636;
  font-size: 19px;
}
.order_red {
  color: #ff3636;
}
.order_border {
  border-top: 1px solid #f4f4f4;
}
.oreder_bt_pay {
  width: 24%;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  height: 26px;
  font-size: 12px;
  line-height: 2.1;
  margin-left: 70%;
}
.order_bt_p {
  padding-bottom: 3%;
}
</style>