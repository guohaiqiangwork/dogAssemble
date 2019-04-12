<template>
  <div>
    <!-- 订单列表 -->
    <div
      class="div_display_flex backgroun_color_fff"
      v-for="(item,index) in orderList"
      style="margin-bottom :3%"
    >
      <div class="order_heder_img_w">
        <div class="order_header_border">
          <img src="../../assets/logo.png" style="width:100%">
        </div>
      </div>

      <div class="order_headr_font_w">
        <div class="order_font_j font_color_00">
          <span>共N件</span>
          <span>总金额¥{{item.money}}</span>
        </div>
        <div class="div_display_flex order_font_js font_color_66">
          <div>风味猫粮风味猫粮</div>
          <div v-if="!moreLFalg" @click="openListDetails(1)" style="    margin-left: 52%;">></div>
          <div v-if="moreLFalg" @click="openListDetails" style="    margin-left: 52%;">>></div>
        </div>
        <div class="number_font_Order">*68</div>
        <div style="margin-bottom: 13px;">
          <div class="order_bt_btn">
            <span>主食</span>
            <span>|</span>
            <span>牛肉味</span>
          </div>
        </div>

        <!-- 隐藏内容 -->
        <div v-if="orderFalge">
          <div class="order_font_js font_color_66 div_display_flex">
            <div>风味猫粮风味猫粮</div>
            <div style="margin-left: 40%;">*1</div>
          </div>
          <div style="margin-top: 14px;margin-bottom: 30px;">
            <div class="order_bt_btn">
              <span>主食</span>
              <span>|</span>
              <span>牛肉味</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import url from "../../bin/url";

export default {
  components: {},
  name: "order",
  data() {
    return {
      orderFalge: false,
      moreLFalg: false,
      orderList: [
        {
          money: "78977"
        },

        {
          money: "78977"
        },
        {
          money: "78977"
        },
        {
          money: "78977"
        }
      ]
    };
  },
  methods: {
    openListDetails(falge) {
      if (falge == 1) {
        this.orderFalge = true;
        this.moreLFalg = true;
      } else {
        this.orderFalge = false;
        this.moreLFalg = false;
      }
    }
  },
  created() {
    settitle("拼团");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.order_header_border {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid;
  overflow: hidden;
}
.order_font_j {
  font-size: 17px;
}
.order_font_js {
  font-size: 14px;
  margin-top: 15px;
}
.order_bt_btn {
  font-size: 10px;
  color: #333333;
  line-height: 1.3 !important;
  padding: 1%;
  background-color: #ffe001;
  text-align: center;
  border-radius: 8px;
  width: 75px;
  height: 15px;
}
.number_font_Order {
  font-size: 15px;
  text-align: right;
  margin-right: 16%;
  color: #666666;
}
.order_heder_img_w {
  width: 20%;
  margin-top: 3%;
  margin-left: 3%;
}
.order_headr_font_w {
  width: 78%;
  margin-top: 5%;
  margin-left: -3%;
}
</style>