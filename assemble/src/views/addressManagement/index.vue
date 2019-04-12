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
      <div class="div_display_flex margin_top_div5" style="padding:0 5% 5% 4%;justify-content:space-between;">
        <div style="width:30%">
          <check-icon :value.sync="demo1" size='12px'></check-icon>
          <span style="font-size:12px;color:#666"> 默认地址</span>
        </div>
        <div  class="div_display_flex operat_box">
          <div class="div_display_flex">
            <img src="../../assets/images/edit@2x.png" width="18px" height="18px" class="middle">
            <div style="font-size:12px;color:#666">编辑</div>
          </div>
          <div class="div_display_flex">
            <img src="../../assets/images/delete@2x.png" width="18px" height="18px" class="middle">
            <div style="font-size:12px;color:#666">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 20%; margin-top: 10%;">
      <div class="a_m_b backgroun_color_fe01" @click="openAddressM">+添加新的地址</div>
    </div>
    <!-- 新增地址 -->
        <!-- <div v-if="AddressMFalge" class="ofo_address_w">
        <div class="div_display_flex" style="width:100%;align-items:center;">
          <div class="" style="margin-right:2%;display:flex;align-items:center;">
            <span class="font_size_13 font_color_00">联系人:</span>
            <input  placeholder="请输入您的名字" style="margin-left:6px;width: calc(100% -  54px);vertical-align: middle;">
          </div>
          <div class=""  style="margin-left:2%;">
            <span class="font_size_13 font_color_00">手机号:</span>
            <input type="text" placeholder="请输入手机号 "  style="margin-left:6px;width: calc(100% -  54px)">
          </div>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">所在地区：</span>
          <input type="text" placeholder="请选择您当前所在的地区" :style="{'width': '66%',color: address ? '#101010' : ''}" v-model="address" disabled>
          <img
            src="../../assets/images/dingdan_weizhankai@3x.png"
            style="width:8%;vertical-align: middle;"
            @click="goToAddressManagement"
          >
          <x-address style="display:none" @on-hide="logHide"  title="title" v-model="addressValue" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">详细地址：</span>
          <input type="text" placeholder="请输入您的详细地址">
        </div>
        <div style="padding-bottom: 8%;">
          <div class="ofo_b_c_d" @click="saveAddress">保存地址</div>
        </div>
      </div> -->
    <div v-if="AddressMFalge">
      <div class="model_background" @click="closeAddressMFalge($event)">
        <div class="model_a_m" id="card">
          <div style="padding:1.2rem;">
              <div class="div_display_flex" style="width:100%;align-items:center;">
          <div class="" style="margin-right:2%;display:flex;align-items:center;">
            <span class="font_size_13 font_color_00">联系人:</span>
            <input  placeholder="请输入您的名字" style="margin-left:6px;width: calc(100% -  54px);vertical-align: middle;">
          </div>
          <div class=""  style="margin-left:2%;">
            <span class="font_size_13 font_color_00">手机号:</span>
            <input type="text" placeholder="请输入手机号 "  style="margin-left:6px;width: calc(100% -  54px)">
          </div>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">所在地区：</span>
          <input type="text" placeholder="请选择您当前所在的地区" :style="{'width': '66%',color: address ? '#101010' : ''}" v-model="address" disabled>
          <img
            src="../../assets/images/dingdan_weizhankai@3x.png"
            style="width:8%;vertical-align: middle;"
            @click.stop="goToAddressManagement"
          >
          <x-address style="display:none" @on-hide="logHide"  title="title" v-model="addressValue" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">详细地址：</span>
          <input type="text" placeholder="请输入您的详细地址">
        </div>
        <div>
          <div class="ofo_b_c_d" @click="saveAddress">保存地址</div>
        </div>
            <!-- <div class="div_display_flex a_m_left4 margin_top_div5">
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
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import url from "../../bin/url";
import { CheckIcon,XAddress,ChinaAddressV4Data ,Value2nameFilter as value2name,TransferDomDirective as TransferDom  } from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    CheckIcon,XAddress,
  },
  name: "addressManagement",
  data() {
    return {
      showAddress:false,
      addressValue:[],
       addressData: ChinaAddressV4Data,
       address:'',
      demo1: false, //默认
      AddressMFalge: false //添加地址
    };
  },
  methods: {
      //  地址点击完成时
    logHide (str) {
      if(str){
        var name = value2name(this.addressValue, ChinaAddressV4Data);
        this.address = name;
      }
    },
   saveAddress(){},
    //  新增地址
    openAddressM() {
      this.AddressMFalge = true;
    },
    goToAddressManagement(){
      this.showAddress = true;
    },
    //   关闭
    closeAddressMFalge(e) {
      // console.log(e.target.offsetParent.id);
      if(!e.target.offsetParent){
        this.AddressMFalge = false;
        this.showAddress = false;
      }
      // this.AddressMFalge = false;
    }
  },
  created() {
    console.log(this);
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
<style >
  .weui-icon-success,.weui-icon-circle{
    font-size: 12px !important;
  }
</style>
<style scoped>
input{
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 13px;
  font-family:PingFang-SC-Medium;
}
.space_round{
  justify-content: space-around;
}
.operat_box{
  width: 120px;
  justify-content: space-between;
  align-items: center;
}

.middle{
  vertical-align: middle;
}
.model_background{
  z-index: 10;
}
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
  display: block;
  z-index: 5000;
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  top: 50%;
  margin-left: 5%;
  transform: translateY(-50%);
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