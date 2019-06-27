<template>
  <div>
    <!-- 地址 -->
    <div class="margin_left_div6">
      <div class="div_display_flex font_size_14 font_color_66 padding_top_div3">
        <div>{{shopOrderList.receiverName}}</div>
        <div>{{shopOrderList.receiverPhone}}</div>
      </div>
      <div class="font_size_15 font_color_33 margin_top_div2">{{shopOrderList.receiverAddress}}</div>
    </div>
    <div class="orderD_t"></div>
    <!-- 商品 -->
    <div
      class="div_display_flex margin_top_div3"
      v-for="(items,index) in shopOrderList.goodsList"
      :key="index"
    >
      <div class="div_width_30 margin_right_div3">
        <div class="order_width_height">
          <img :src="items.picId" width="100%" alt>
        </div>
      </div>
      <div style="width:63%">
        <div class="font_color_00 font_size_14">{{items.name}}</div>
        <div class="div_display_flex margin_top_div3">
          <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
          <div class="text_right">*{{items.count}}</div>
          <!-- order_price_bt -->
        </div>
        <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
          <span>{{itemsg.specName}}</span>
          <span>{{itemsg.specValue}}</span>
        </div>
      </div>
    </div>
    <!-- 合计金额 -->
    <div class="div_display_flex money_orderD">
      <div class="div_width_50 font_size_14 font_color_1A">合计金额</div>
      <div class="div_width_50 text_right font_size_15 font_color_10">¥{{shopOrderList.totalMoney}}</div>
    </div>
    <!-- 运费 -->
    <div class="div_display_flex money_orderD">
      <div class="div_width_50 font_size_14 font_color_1A">运费</div>
      <div class="div_width_50 text_right font_size_15 font_color_10">¥{{shopOrderList.freight}}</div>
    </div>
    <!-- 实际支付费用 -->
    <div class="text_right font_color_10 font_size_23 margin_right_div6 margin_top_div4">
      <span class="font_size_14">实际支付：</span>
      {{shopOrderList.payMoney}}
    </div>
    <div class="orderD_t"></div>
    <!-- 留言 -->
    <div class="div_display_flex margin_top_div3">
      <div class="div_width_25 text_center font_size_14 font_color_1A" style="margin-left:-2%">留言：</div>
      <div class="div_width_70 font_size_14 font_color_1A">{{shopOrderList.leaveMessage}}</div>
    </div>
    <!-- 订单编号 -->
    <div class="div_display_flex money_orderD_h">
      <div class="div_width_50 font_size_14 font_color_1A">订单编号</div>
      <div class="div_width_50 text_right font_size_13 font_color_10">{{shopOrderList.orderNo}}</div>
    </div>
    <!-- 下单时间 -->
    <div class="div_display_flex money_orderD_h">
      <div class="div_width_50 font_size_14 font_color_1A">下单时间</div>
      <div class="div_width_50 text_right font_size_13 font_color_10">¥{{shopOrderList.time}}</div>
    </div>
    <!-- 立即支付 -->
    <div class="orderD_btn" @click="payOrder">立即支付</div>
  </div>
</template>
<script>
import url from "../../bin/url";
import wexinPay from '../../bin/weiXinPay'
import { XTextarea } from "vux";
export default {
  name: "orderDetails",
  components: {
    XTextarea
  },
  data() {
    return {
      key: "value",
      selectAddressN: "",
      postFee: "",
      goodsMsg: {},

      shopOrderList: "" //重
    };
  },
  computed: {},
  methods: {
    //   获取订单详情
    getShopOrder(item) {
      let _obj = {
        openId: url.openId,
        id: item
      };
      this.$fetch.post(url.getShopOrder, _obj).then(data => {
        if (data.code == 0) {
          data.obj.goodsList.forEach(item => {
            item.picId = url.imgUrl + item.picId;
          });

          this.shopOrderList = data.obj;
        }
      });
    },
    // 立即支付
    payOrder() {
      let _obj = {
        openId: url.openId,
        id: this.routeParams.data.id
      };
      this.$fetch.post(url.payOrder, _obj).then(data => {
        if (data.code == 0) {
           var obj = eval("(" + data.obj + ")"); 
          console.log(obj)
          wexinPay(obj)
        }
      });
    }
  },
  mounted() {
    console.log(wexinPay)
  },
  created() {
    if (this.$route.params.obj) {
      this.routeParams = JSON.parse(this.$route.params.obj);
      console.log(this.routeParams.data.id);
      this.getShopOrder(this.routeParams.data.id); //获取地址
    }
  }
};
// mounted() {},

// };
</script>
.<style scoped>
.orderD_t {
  background-color: #f6f6f6;
  height: 8px;
  margin-top: 4%;
}
.order_width_height {
  width: 70px;
  overflow: hidden;
  height: 70px;
  border: 1px dashed #707070;
  margin-left: 18%;
}
.order_price_font {
  color: #ff3636;
  font-size: 19px;
}
.GG_list {
  width: 35%;
  float: left;
  margin-top: 2%;
  margin-left: 2%;
  font-size: 13px;
  color: #102023;
}
.money_orderD {
  border-bottom: 1px solid #e9e9e9;
  width: 90%;
  margin-left: 5%;
  margin-top: 3%;
  line-height: 3;
}
.money_orderD_h {
  width: 90%;
  margin-left: 5%;
  margin-top: 3%;
  line-height: 2;
}
.orderD_btn {
  background-color: #4a7b67;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  line-height: 4;
  margin-top: 5%;
}
</style>
