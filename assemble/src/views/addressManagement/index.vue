<template>
  <div>
    <div class="backgroun_color_fff a_m_w">
      <div class="font_size_14 font_color_66 a_m_m">
        <span>王佳宇</span>
        13654550023
      </div>
      <div class="margin_top_div3 font_size_14 font_color_33" style="margin-left:4%">
        内蒙古包头市青山区青山区区包头商会大厦27楼
        2710
      </div>
      <div class="div_display_flex margin_top_div5" style="padding-bottom: 5%;">
        <div style="width:30%">
          <check-icon :value.sync="demo1"></check-icon>默认地址
        </div>
        <div style="width:65%" class="div_display_flex">
          <div class="div_display_flex">
            <img src="../../assets/images/edit@3x.png" style="width:27%;height:80%">
            <div>编辑</div>
          </div>
          <div class="div_display_flex">
            <img src="../../assets/images/delete@3x.png" style="width:27%;height:80%">
            <div>删除</div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 20%; margin-top: 10%;">
      <div class="a_m_b backgroun_color_fe01" @click="openAddressM">+添加新的地址</div>
    </div>
    <!-- 新增地址 -->
    <div v-if="AddressMFalge">
      <div class="model_background" @click="closeAddressMFalge">
        <div class="model_a_m">
          <div>
            <div class="div_display_flex a_m_left4 margin_top_div5">
              <div class="ofo_w_50 ">
                <span class="font_size_13 font_color_00">联系人:</span>
                <input type="text" placeholder="请输入您的名字">
              </div>
              <div class="ofo_w_50">
                <span class="font_size_13 font_color_00">手机号:</span>
                <input type="text" placeholder="请输入手机号">
              </div>
            </div>
            <div class="margin_top_div5 a_m_left4" >
              <span class="font_size_13 font_color_00">所在地区：</span>
              <input type="text" placeholder="请选择您当前所在的地区" style=" width: 70%;">
              <img
                src="../../assets/images/dingdan_weizhankai@3x.png"
                style="width:8%;"
              >
            </div>
            <div class="margin_top_div5 a_m_left4">
              <span class="font_size_13 font_color_00">详细地址：</span>
              <input type="text" placeholder="请选择您的详细地址">
            </div>
            <div style="padding-bottom: 8%;">
              <div class="ofo_b_c_d">保存地址</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import url from "../../bin/url";
import { CheckIcon } from "vux";
export default {
  components: {
    CheckIcon
  },
  name: "addressManagement",
  data() {
    return {
      demo1: false, //默认
      AddressMFalge: false //添加地址
    };
  },
  methods: {
    //  新增地址
    openAddressM() {
      this.AddressMFalge = true;
    },
    //   关闭
    closeAddressMFalge() {
      this.AddressMFalge = false;
    }
  },
  created() {
    settitle("地址管理");
    // this.routeParams = JSON.parse(this.$route.params.obj);
    // console.log(this.routeParams);
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.a_m_w {
  width: 90%;
  margin-top: 8%;
  margin-left: 5%;
}
.a_m_m {
  margin-left: 4%;
  padding-top: 8%;
}
.a_m_b {
  width: 250px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 3;
  font-size: 14px;
  color: #000;
}
.model_a_m {
  position: fixed;
  display: table;
  z-index: 5000;
  width: 95%;
  margin: auto;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  top: 24%;
  margin-left: 2%;
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
.ofo_w_50 {
  width: 50%;
}
.a_m_left4{
    margin-left:4%
}
</style>