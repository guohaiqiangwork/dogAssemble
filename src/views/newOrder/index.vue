<template>
  <div>
    <div>
      <div class="pass_list_w">
        <div class="search_box">
          <img src="../../assets/images/phone@2x.png" class="width_16">
          <input
            type="text"
            placeholder="请输入您的手机号充值"
            style="width:100%;height:100%;outline: none;border:none"
          >
          <i></i>
        </div>
      </div>
    </div>
    <div>
      <div class="font_color_1A font_size_14 margin_left_div6 margin_top_div5">选择套餐类型：</div>
      <div class="div_display_flex margin_top_div5">
        <div class="new_order_b1">会员套餐</div>
        <div class="new_order_b2">辟谷套餐</div>
      </div>
    </div>

    <!-- 未支付 -->
    <div v-if="newPay">
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">配方名称：</span>
        <select name id style="width:70%">
          <option value="1">fjsdljflskdj</option>
        </select>
      </div>
      <div class="background_color_F8 margin_top_div5" style="height:10px"></div>
      <!-- 贴心提示 -->
      <div>
        <div class="font_color_4A margin_left_div6 margin_top_div5">
          <img src="../../assets/images/tS@2x.png" class="width_16">
          贴心小提示
        </div>
        <div class="t_S_b">
          <div class="margin_top_div3">
            配方：可选用淡竹叶5克、莲子心5克、炒栀子6克、
            单皮3克。
          </div>
          <div class="margin_top_div3">注意事项：忌酒、忌烟、忌辛辣</div>
          <div class="margin_top_div3">适宜人群：脾胃不好的人群</div>
        </div>
      </div>
      <!-- 按钮 -->
      <div
        class="text_center font_color_ff backgroun_color_4A font_size_16 b_t_w"
        @click="newOrderq"
      >确认套餐</div>
    </div>
    <!-- 支付 -->
    <div v-if="!newPay">
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">购买天数：</span>
        <select name id style="width:70%">
          <option value="1">fjsdljflskdj</option>
        </select>
      </div>
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">开始时间：</span>
        <select name id style="width:70%">
          <option value="1">fjsdljflskdj</option>
        </select>
      </div>
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">结束时间：</span>
        <select name id style="width:70%">
          <option value="1">fjsdljflskdj</option>
        </select>
      </div>
      <!-- 按钮 -->
      <div class="div_display_flex" style="position: fixed;bottom: 0;width: 100%;line-height: 3;">
        <div class="div_width_70 backgroun_color_E9  padding_left_div3">
          金额：
          <span class="red">23423</span>
        </div>
        <div class="div_width_30 text_center backgroun_color_4A font_color_ff font_size_14" @click="goToPay">确认支付</div>
      </div>
    </div>
    <!-- 套餐建立 -->
    <confirm v-model="newFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">套餐已建好是否建立第一单？</div>
    </confirm>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
import { Confirm } from "vux";

export default {
  components: {
    TabBar,
    Confirm
  },
  name: "newOrder",
  data() {
    return {
      item: 0,
      newFalge: false, //是否新建
      newPay: true //新建订单支付
    };
  },
  methods: {
    //订单新建
    newOrderq() {
      this.newFalge = true;
     
    },
    // 弹窗取消
    onCancel() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm() {
     this.newPay = false;//去支付
    },
      // 去支付
    goToPay(){
      this.$router.push({
        name: "paysure",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: 'pay'
            }
          })
        }
      });
    }
  },
  created() {
    settitle("新建订单");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("新建订单");
  }
};
</script>
<style scoped>
.pass_list_w {
  width: 95%;
  margin-left: 2%;
}
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 90%;
  border: none;
  border-bottom: 1px solid rgb(173, 165, 165);
}
.width_16 {
  width: 16px;
  height: 16px;
  margin-right: 3%;
}
.new_order_b1 {
  width: 33%;
  text-align: center;
  background-color: #4a7b67;
  color: #ffffff;
  margin-left: 14%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 2;
}
.new_order_b2 {
  width: 33%;
  text-align: center;
  background-color: #ffffff;
  color: #4a7b67;
  margin-left: 14%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 2;
}
.t_S_b {
  width: 86%;
  margin-left: 6%;
  margin-top: 2%;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 2%;
}
.b_t_w {
  width: 90%;
  margin-left: 6%;
  line-height: 3;
  border-radius: 5px;
  margin-top: 34%;
}
</style>