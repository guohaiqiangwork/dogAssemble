<template>
  <div>
    <!-- 订单列表 -->
    <div
      class="div_display_flex backgroun_color_fff"
      v-for="(item,index) in orderList"
      style="margin-bottom :3%"
    >
      <div class="order_header_border">
        <img src="../../assets/logo.png" style="width:100%">
      </div>
      <div>
        <div>
          <span>共N件</span>
          <span>总金额¥{{item.money}}</span>
        </div>
        <div class="div_display_flex">
          <div>风味猫粮风味猫粮</div>
          <div>
            <div class="order_bt_b">
              <span>主食</span>
              <span>|</span>
              <span>牛肉味</span>
            </div>
          </div>
          <div>
            <span>*68</span>
            <span v-if="!moreLFalg" @click="openListDetails(1)">></span>
            <span v-if="moreLFalg" @click="openListDetails">>></span>
          </div>
        </div>
        <!-- 隐藏内容 -->
        <div class="div_display_flex" v-if="orderFalge">
          <div>风味猫粮风味猫粮</div>
          <div>
            <div class="order_bt_b">
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid;
}

</style>