<template>
  <div>
    <!-- 详情列表 -->
    <div v-if=" rechargeRecordList.length > 0">
      <div class="data_d_b" v-for="(item,index) in rechargeRecordList" :key="index">
        <div class="div_display_flex font_size_16 font_color_33 margin_top_div5">
          <div class="div_width_50">{{item.payType == 3?"现金充值":item.payType == 2?"支付宝充值":item.payType == 4?"微信充值":""}}</div>
          <div class="div_width_50 text_right">+ {{item.recharge}}</div>
        </div>
        <div
          class="font_size_13 font_color_A1 margin_top_div3 padding_bottom_4"
        >{{item.rechargeTime}}</div>
      </div>
    </div>
    <div v-if=" depositRecordList.length > 0">
      <div class="data_d_b" v-for="(item,index) in rechargeRecordList" :key="index">
        <div class="div_display_flex font_size_16 font_color_33 margin_top_div5">
          <div class="div_width_50">{{item.payType == 3?"现金充值":item.payType == 2?"支付宝充值":item.payType == 4?"微信充值":""}}</div>
          <div class="div_width_50 text_right">+ {{item.recharge}}</div>
        </div>
        <div
          class="font_size_13 font_color_A1 margin_top_div3 padding_bottom_4"
        >{{item.rechargeTime}}</div>
      </div>
    </div>
    <div v-if=" depositRecordList.length == 0 && rechargeRecordList.length == 0">
      <img
        src="../../assets/images/1581@2x.png"
        style="width: 80%;margin-left: 10%;margin-top: 30%;"
        alt
      >
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "rechargeList",
  data() {
    return {
      depositRecordList: [],
      rechargeRecordList: []
    };
  },
  methods: {
    // 获取充值记录
    getList() {
      this.$vux.loading.show({
        text: "Loading"
      });
      this.$fetch
        .post("fruits/app/personal/rechargeRecord", {
          openId: localStorage.getItem("openId"),
          phone: this.routeParams.data.phone
        })
        .then(res => {
          console.log(res);
          if (res.msg == "success") {
            this.rechargeRecordList = [...res.obj];
          } else {
            alert(res.msg);
          }

          this.$vux.loading.hide();
        });
    },
    // 获取押金充值记录
    getDepositRecord() {
      this.$vux.loading.show({
        text: "Loading"
      });
      this.$fetch
        .post("/fruits/app/personal/depositRecord", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          console.log(res);
          if (res.msg == "success") {
            this.depositRecordList = [...res.obj];
          } else {
            alert(res.msg);
          }

          this.$vux.loading.hide();
        });
    }
  },
  created() {
    settitle("充值记录页面");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log();
    if (this.routeParams.data.type == 0) {
      this.getDepositRecord(); //获取押金充值记录
    } else {
      this.getList();
    }
  },

  mounted() {
    console.log("我是充值记录页面", this.routeParams);
  }
};
</script>
<style>
.weui-toast {
  width: 200px;
  min-height: 50px;
}
</style>

<style scoped>
.data_d_b {
  width: 92%;
  border-bottom: 1px solid #e9e9e9;
  margin-left: 4%;
}
</style>