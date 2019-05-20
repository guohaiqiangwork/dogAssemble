<template>
  <div>
    <!-- 押金充值 -->
    <div class="recharge_div_b margin_top_div3">
      <div class="div_display_flex padding_top_div6">
        <div class="div_width_50 margin_left_div6 font_size_16 font_color_1A">押金充值</div>
        <div class="div_width_50 text_right margin_right_div6 font_size_14 font_color_4A">充值记录</div>
      </div>
      <div class="margin_top_div8">
        <input type="text" class="recharge_input_b" placeholder="输入您想充值的金额…">
      </div>
      <div class="div_display_flex margin_top_div3 padding_bottom_4">
        <div class="div_width_70"></div>
        <div class="recharge_button_b">立即充值</div>
      </div>
    </div>
    <!-- 会员充值 -->
    <div class="recharge_div_b margin_top_div5">
      <div class="font_size_16 font_color_1A margin_left_div6">会员充值</div>
      <div>
        <div class="pass_list_w">
          <div class="search_box">
            <img src="../../assets/images/phone@2x.png" class="width_16">
            <input
              type="text"
              placeholder="请输⼊您的手机号"
              style="width:100%;height:100%;outline: none;border:none"
            >
            <i></i>
          </div>
        </div>
      </div>
      <div class="div_display_flex">
        <div class="div_width_43 text_center b_t_c">
          <div class="margin_top_div3 font_color_10 font_size_25">899</div>
          <div class="margin_top_div3 font_size_13 font_color_1A padding_bottom_4">充899返200元</div>
        </div>
        <div class="div_width_43 text_center b_t_c">
          <div class="margin_top_div3 font_color_10 font_size_25">1009</div>
          <div class="margin_top_div3 font_size_13 font_color_1A padding_bottom_4">充1009减200元</div>
        </div>
      </div>
      <div>
        <input type="text" class="recharge_input_b2 margin_top_div8" placeholder="输入您想充值的金额…">
      </div>
      <div class="div_display_flex margin_top_div8">
        <div class="div_width_43 backgroun_color_4A bt_d_c">支付宝</div>
        <div class="div_width_43 backgroun_color_4A bt_d_c">现金</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "recharge",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("押金充值");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("押金充值");
  }
};
</script>
<style scoped>
.recharge_div_b {
  width: 95%;
  margin-left: 2%;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #f3f5f8;
}

.recharge_input_b {
  width: 90%;
  margin-left: 4%;
  background-color: #dee8e3;
  border-radius: 5px;
  border: none;
  font-size: 13px;
  color: #000;
  height: 48px;
  padding-left: 2%;
}
.recharge_input_b2 {
  width: 90%;
  margin-left: 3%;
  border-radius: 5px;
  border: none;
  font-size: 13px;
  color: #000;
  height: 48px;
  padding-left: 2%;
  background-color: #ffffff;
  border: 1px solid #4a7b67;
}
.recharge_button_b {
  text-align: center;
  background-color: #4a7b67;
  color: #fff;
  width: 20%;
  line-height: 3;
  border-radius: 5px;
  margin-left: 8%;
}
/* 图标输入框 */
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
  width: 95%;
  border: none;
  border-bottom: 1px solid rgb(173, 165, 165);
}
.width_16 {
  width: 16px;
  height: 16px;
  margin-right: 3%;
}
.b_t_c {
  border: 1px solid #4a7b67;
  border-radius: 5px;
  margin-left: 4%;
  margin-top: 5%;
}
.bt_d_c {
  border: 1px solid #4a7b67;
  border-radius: 5px;
  margin-left: 4%;
  margin-top: 5%;
  font-size: 14px;
  color: #fff;
  line-height: 3;
  text-align: center
}
</style>