<template>
  <div>
    <div class="div_display_flex backgroun_color_fff" style="padding-bottom: 4%;">
      <div class="ofo_img_header">
        <img src="../../assets/images/logo@3x.png" style="width:100%">
      </div>
      <div class="ofo_heasdr_font">开团后拼团成功，团长发货，若人数不足系统自动退款关单</div>
    </div>
    <div class="backgroun_color_fff margin_top_div3">
      <div class="ofo_s_h" style="padding-top: 3%;">收货地址</div>
      <div style="margin-top: 4%;margin-left: 20%;padding-bottom: 4%;">
        <div
          v-if="!AddressFalge"
          class="ofo_b_j backgroun_color_fe01"
          @click="harvestAddress"
        >+新增收货地址</div>
      </div>
      <div v-if="AddressFalge" class="ofo_address_w">
        <div class="div_display_flex">
          <div class="ofo_w_50">
            <span class="font_size_13 font_color_00">联系人:</span>
            <input type="text" placeholder="请输入您的名字">
          </div>
          <div class="ofo_w_50">
            <span class="font_size_13 font_color_00">手机号:</span>
            <input type="text" placeholder="请输入手机号">
          </div>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">所在地区：</span>
          <input type="text" placeholder="请选择您当前所在的地区" style=" width: 70%;">
          <img
            src="../../assets/images/dingdan_weizhankai@3x.png"
            style="width:8%;"
            @click="goToAddressManagement"
          >
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">详细地址：</span>
          <input type="text" placeholder="请选择您的详细地址">
        </div>
        <div style="padding-bottom: 8%;">
          <div class="ofo_b_c_d">保存地址</div>
        </div>
      </div>
      <!-- 默认地址 -->
      <div class="div_display_flex" v-if="false">
        <div style="width:20% ;margin-left: 12%; margin-top: 3%;">
          <div class="ofo_d_z_d">
            <img src="../../assets/images/local@3x.png" style="width:100%">
          </div>
        </div>
        <div>
          <div class="font_size_14 font_color_66">
            王佳宇
            <span>13654550023</span>
          </div>
          <div>
            <img
              src="../../assets/images/dingdan_weizhankai@3x.png"
              style="width: 15%;float: right;margin-top: -7%;"
            >
          </div>
          <div
            class="font_size_15 font_color_33 margin_top_div3"
            style="margin-bottom: 3%;width: 90%;"
          >
            <span style="color:#128DED">[默认]</span>
            内蒙古包头市青山区青山区包头
            商会大厦2710
          </div>
        </div>
      </div>
    </div>
    <div class="backgroun_color_fff margin_top_div3">
      <div class="div_display_flex">
        <div style="width:20%">
          <div class="ofo_img_w">
            <img src="../../assets/images/404@2x.png" style="width:100%">
          </div>
        </div>
        <div class="ofo_w_m">
          <div class="div_display_flex">
            <div class="ofo_w_78">天然计划全犬期深海鱼狗粮</div>
            <div>￥700.0</div>
          </div>
          <div class="div_display_flex margin_top_div5">
            <div style="width:80%">
              <div class="ofo_g_g backgroun_color_fe01 font_size_11 font_color_33">主食 | 牛肉味</div>
            </div>
            <div class="ofo_n_w font_size_14 font_color_66" style="   width:20%">*1</div>
          </div>

          <div class="ofo_n_w">
            <div class="ofo_t_c backgroun_color_fe01">套餐明细</div>
          </div>
        </div>
      </div>
    </div>
    <div class="backgroun_color_fff margin_top_div3" style="height: 500px;">
      <div class="div_display_flex">
        <div class="ofo_s_z ofo_w_50 font_size_13 font_color_00">商品总价</div>
        <div class="ofo_j_z ofo_s_z ofo_w_50 font_size_14 font_color_010">￥48.0</div>
      </div>
      <div class="div_display_flex">
        <div class="ofo_s_z ofo_w_50 font_size_13 font_color_00">
          邮费
          <span class="font-size_11 font_color_99">(不包邮)</span>
        </div>
        <div class="ofo_j_z ofo_s_z ofo_w_50 font_size_14 font_color_010">￥0.0</div>
      </div>
      <div class="div_display_flex">
        <div class="ofo_s_z ofo_w_50 font_size_13 font_color_00">订单总价</div>
        <div class="ofo_j_z ofo_s_z ofo_w_50 font_size_14 font_color_010">￥48.0</div>
      </div>
    </div>
    <div class="ofo_w_Z">微信支付</div>
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
// import {  } from "vux";
export default {
  components: {},
  name: "confirmationOfOrder",
  data() {
    return {
      select: "Home",
      showMenus: false,
      AddressFalge: false //收货地址
    };
  },
  methods: {
    //   添加收获地址
    harvestAddress() {
      this.AddressFalge = true;
    },
    // 去地址管理
    goToAddressManagement(id) {
      this.$router.push({
        name: "addressManagement",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("确认订单");
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.overwrite-title-demo {
  margin-top: 5px;
}
.ofo_img_header {
  width: 30px;
  height: 29px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 8%;
  margin-top: 3%;
}
.ofo_heasdr_font {
  text-align: center;
  font-size: 13px;
  color: #333;
  width: 59%;
  margin-top: 4%;
  margin-left: 5%;
}
.ofo_s_h {
  font-size: 14px;
  color: #000000;
  margin-left: 8%;
}
.ofo_b_j {
  width: 250px;
  height: 35px;
  border-radius: 18px;
  text-align: center;
  font-size: 13px;
  color: #101010;
  line-height: 3;
}
.ofo_img_w {
  width: 67px;
  height: 74px;
  overflow: hidden;
  margin-top: 23%;
  margin-left: 25%;
}
.ofo_w_m {
  width: 78%;
  margin-left: 8%;
  margin-top: 5%;
}
.ofo_w_78 {
  width: 78%;
  font-size: 14px;
  color: #000;
}
.ofo_n_w {
  text-align: right;
  margin-right: 4%;
}
.ofo_t_c {
  width: 77px;
  height: 22px;
  border-radius: 11px;
  font-size: 11px;
  text-align: center;
  color: #333;
  line-height: 2;
  margin-left: 76%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.ofo_w_50 {
  width: 50%;
}
.ofo_j_z {
  text-align: right;
  margin-right: 4%;
}
.ofo_s_z {
  margin-left: 4%;
  margin-top: 5%;
}
.ofo_w_Z {
  position: fixed;
  bottom: 0;
  height: 54px;
  background-color: #ffdf00;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #0e050a;
  line-height: 3;
}
.ofo_g_g {
  width: 85px;
  height: 17px;
  border-radius: 9px;
  text-align: center;
}
.ofo_address_w {
  width: 90%;
  margin-left: 5%;
}
.ofo_b_c_d {
  width: 89px;
  height: 25px;
  border-radius: 13px;
  background-color: #101010;
  color: #fff;
  text-align: center;
  font-size: 13px;
  line-height: 2;
  margin-top: 8%;
  margin-left: 40%;
}
.ofo_d_z_d {
  width: 24px;
  height: 30px;
  overflow: hidden;
}
</style>