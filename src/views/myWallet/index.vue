<template>
  <div>
    <!-- 金额显示 -->
    <div class="backgroun_color_4A font_color_ff" style="text-align: center;">
      <!-- <div class="div_display_flex" style=" margin-left: 38%;    padding-top: 8%;">
        <div class="wallet_font font_size_16">当前余额(币)</div>
        <div
          class="font_size_14"
          style=" margin-left: 28%;margin-top:-6%"
        
        >账单记录</div>
      </div> -->
      <div class=" text_right margin_right_div3  padding_top_div3 font_size_14"   @click="goToBillRecord">
        账单记录
      </div>
      <div class="wallet_font font_size_16 padding_top_div3">
        当前余额(币)
      </div>
      <div class="font_size_30 margin_top_div5" style="padding-bottom: 4%;">00</div>
    </div>
    <!-- 充值 -->
    <div v-show="false">
      <div class="font_color_1A wallet_font margin_top_div5">选择充值金额</div>
      <div class="div_display_flex">
        <div class="div_width_50" >
          <div class="wallet_bt">¥899</div>
        </div>
        <div class="div_width_50">
          <div class="wallet_bt">¥899</div>
        </div>
      </div>
    </div>
    <!-- 其他金额 -->
    <div v-show="false">
      <input type="text" class="input_m">
      <div class="div_display_flex margin_top_div5 margin_left_div3">
        <div class="img_26">
          <img src="../../assets/images/提醒 (3)@2x.png" width="100%">
        </div>
        <div class="font_color_4A font_size_13">
          充500元减100元
        </div>
      </div>
    </div>
    <!-- 充值按钮 -->
    <div v-show="false">
      <div class="wallet_cz_bt backgroun_color_4A font_color_ff font_size_16">立即充值</div>
      <div class="font_size_12 margin_top_div5 text_center">
        <span class="font_color_4A">点击[立即充值]</span>,表示您已同意《购卡协议》 和 《购卡流程》
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "myWallet",
  data() {
    return {};
  },
  methods: {
    goToBillRecord() {
      this.$router.push({
        name: "billRecord",
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
  created() {
    settitle("我的钱包");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("我的钱包");
  }
};
</script>
<style scoped>
.wallet_bt {
  width: 85%;
  border: 1px solid #4a7b67;
  font-size: 30px;
  text-align: center;
  margin-left: 9%;
  line-height: 2.5;
  border-radius: 8px;
}
.wallet_font {
  margin-left: 5%;
  margin-bottom: 5%;
}
.wallet_cz_bt {
  width: 60%;
  border-radius: 30px;
  height: 45px;
  text-align: center;
  margin-left: 21%;
  margin-top: 8%;
  line-height: 2.8;
}
.input_m {
  width: 92%;
  margin-left: 4%;
  line-height: 3;
  border: 1px solid #4a7b67;
  margin-top: 5%;
}
.img_26{
  width: 13px;
  height: 15px;
  overflow: hidden;
}
</style>