<template>
  <div class="backgroun_color_fff" style="min-height: 700px;padding-bottom:.9rem;">
    <!-- 账单列表 -->
    <div v-if="customerRecordList.length > 0">
      <div v-for="(item,index) in customerRecordList" :key="index">
        <div class="div_display_flex font_color_33 bill_font_p">
          <div class="font_size_16 div_width_50" v-if="item.payType == 1">充值金额</div>
          <div class="font_size_16 div_width_50" v-if="item.payType == 2">辟谷套餐消费</div>
          <div class="font_size_16 div_width_50" v-if="item.payType == 3">会员套餐消费</div>
          <div class="font_size_16 div_width_50" v-if="item.payType == 4">退单</div>
          <div class="font_size_18 div_width_50 bill_font_right">
            <span v-if="item.payType == 4 || item.payType == 1">+</span>
            <span v-if="item.payType == 2 || item.payType == 3">-</span>
            {{item.recharge}}
          </div>
        </div>
        <div class="bill_font_p padding_bottom_4 font_size_13 font_color_A1">{{item.rechargeTime}}</div>
        <div class="bill_border"></div>
      </div>
    </div>
    <div v-if="customerRecordList.length == 0">
      <div>
        <img
          src="../../assets/images/1581@2x.png"
          style="width: 80%;margin-left: 10%;margin-top: 30%;"
          alt
        >
      </div>
      <div style="text-align: center;margin-top: 6%;">暂无订单</div>
    </div>
    <!-- 底部菜单栏 -->
    <TabBar ref="TabBar"/>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
export default {
  components: {
    TabBar
  },
  name: "billRecord",
  data() {
    return {
      customerRecordList: "" //数据列表
    };
  },
  methods: {
    //获取账单列表
    getCustomerRecord() {
      this.$fetch
        .post("/fruits/app/personal/customerRecord", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          if (res.code == 0) {
            console.log(res);
            this.customerRecordList = res.obj;
          } else {
            alert(res.msg);
          }
        });
    }
  },
  created() {
    settitle("健康界的轻奢");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getCustomerRecord(); //获取数据
    // this.$refs.TabBar.didClickedItem("2");
  }
};
</script>
<style scoped>
.bill_font_right {
  text-align: right;
  margin-right: 3%;
}
.bill_font_p {
  padding-top: 3%;
  padding-left: 4%;
}
.bill_border {
  border-top: 1px solid #e9e9e9;
  width: 94%;
  margin-left: 3%;
}
</style>