<template>
  <div style="height:100%;overflow:hidden;">
    <div class="div_display_flex backgroun_color_fff" style="padding-bottom: 4%;">
      <div class="ofo_img_header">
        <img src="../../assets/images/logo@3x.png" style="width:100%">
      </div>
      <div class="ofo_heasdr_font">开团后拼团成功，团长发货，若人数不足系统自动退款关单</div>
    </div>
    <div :class="['backgroun_color_fff','margin_top_div3',AddressFalge ? 'pb-2':'' ]">
      <div class="ofo_s_h" style="padding-top: 3%;">收货地址</div>
      <div style="margin-left: 20%;padding-bottom: 4%;">
        <div
          v-if="!AddressFalge && !showMenus"
          class="ofo_b_j backgroun_color_fe01"
          @click="harvestAddress"
        >+ 新增收货地址</div>
      </div>
      <div v-if="AddressFalge" class="ofo_address_w">
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
        <div class="margin_top_div5" style="display:flex;justify-content:space-between;height:1.6rem;align-items:center;">
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
        <div style="padding-bottom: 1%;">
          <div class="ofo_b_c_d" @click="saveAddress">保存地址</div>
        </div>
      </div>
      <!-- 默认地址 -->
      <div class="div_display_flex" v-if="showMenus">
        <div style="width:10% ;margin-left: 4%; margin-top: 3%;">
          <div class="ofo_d_z_d">
            <img src="../../assets/images/local@3x.png" style="width:100%;height:30px;">
          </div>
        </div>
        <div>
          <div class="font_size_14 font_color_66">
            王佳宇
            <span>13654550023</span>
          </div>
          <div @click="redirectPath">
            <img
              src="../../assets/images/dingdan_weizhankai@3x.png"
              style="width: 8%;float: right;margin-top: -3%;margin-left: 2%;"
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
      <div class="div_display_flex" style="justify-content:space-between;">
        <div style="width:auto;margin-top:5%;">
          <div class="ofo_img_w">
            <img src="../../assets/images/404@2x.png" style="width:100%">
          </div>
        </div>
        <div class="ofo_w_m">
          <div class="div_display_flex" >
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
            <div class="ofo_t_c backgroun_color_fe01" @click="dialogShow">套餐明细</div>
          </div>
        </div>
      </div>
    </div>
    <div class="backgroun_color_fff margin_top_div3" style="height:100%;">
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

      <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo dialog_pos" hide-on-blur :dialog-style="{width: '90%','max-width': '90%','border-radius':'0.6rem'}">
        <div class="close_dialog" @click="show = false">X</div>
          <card  :header="{title: '查看套餐'}" class="card_title">
            <div  slot="content" class="card-demo-flex card-demo-content01 mb-9">
              <div class="vux-1px-r" v-for="(item,index) in mealList" :key="index">
                <div class="flex_box">
                  <p>{{ item.singletitle }}</p>
                  <p>x{{ item.num }}</p>
                </div>
            </div>
            </div>
          </card>
      </x-dialog>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
import {  XInput,XAddress,XDialog,Card ,ChinaAddressV4Data ,Value2nameFilter as value2name,TransferDomDirective as TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,XAddress,XDialog,Card
  },
  name: "confirmationOfOrder",
  data() {
    return {
      select: "Home",
      showMenus: false,
      AddressFalge: false, //收货地址
      showAddress:false,
      addressValue:[],
       addressData: ChinaAddressV4Data,
       address:'',
       show:false,
      mealList:[
        {
          singletitle:'风味猫粮风味猫粮风味猫粮风味',
          num:1

        },
        {
          singletitle:'风味猫粮',
          num:1

        },
        {
          singletitle:'风味猫粮',
          num:1

        },
        {
          singletitle:'风味猫粮似懂非懂如风达说啥呢',
          num:1

        }
      ]
    };
  },
  methods: {
    saveAddress(){
      this.AddressFalge =false;
      this.showMenus = true;
    },
     dialogShow(){
       this.show = true;
     },
    //  地址点击完成时
    logHide (str) {
      if(str){
        var name = value2name(this.addressValue, ChinaAddressV4Data);
        this.address = name;
      }
    },
   
    //   添加收获地址
    harvestAddress() {
      this.AddressFalge = true;
    },
    
    goToAddressManagement(id) {
      this.showAddress = true;
      // this.$router.push({
      //   name: "addressManagement",
      //   params: {
      //     obj: JSON.stringify({
      //       type: "profession",
      //       data: {
      //         id: "我就是参数"
      //       }
      //     })
      //   }
      // });
    },
     // 去地址管理
  redirectPath(){
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
  },
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
<style>
.weui-panel__hd:after{
  content: "";
  left: 0 !important;
}
/* .weui-panel{
  margin-top: 0;
} */
.weui-dialog{
  overflow: visible !important;
}
.weui-dialog  .weui-panel__hd{
  font-size: 15px;
  font-weight: 700;
  color: #333;
  text-align: left;
}

.weui-panel{
  margin-top: 0  !important;
  border-radius: 0.6rem !important;
}
</style>

<style scoped>
.pb-2{
  padding-bottom: 1.2rem;
}
.mb-9{
  margin-bottom: 0.9rem;
}
.dialog_pos{
  position: relative;
}
.close_dialog{
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  right: -16px;
  top: -16px;
  background: #fff;
  line-height: 32px;
  border: 1px;
  z-index: 1000;
  color: #C5C5C5;
  font-size: 13px;
}
.flex_box{
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 0 0.5rem 0 0.9rem;
  color: #666;
  font-size: 14px;
}
input{
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 13px;
  font-family:PingFang-SC-Medium;
}
input:disabled{
  color: #101010;
}
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
  margin-left: 4%;
}
.ofo_b_j {
  width: 250px;
  height: 35px;
  border-radius: 18px;
  text-align: center;
  font-size: 13px;
  color: #101010;
  line-height: 35px;
}
.ofo_img_w {
  width: 67px;
  height: 74px;
  overflow: hidden;
  padding-left: 25%;
  padding-right: 4%;
  /* margin-top: 23%; */
}
.ofo_w_m {
  width: 66%;
  margin-left: 4%;
  margin-top: 5%;
  margin-right: 4%;
}
.ofo_w_78 {
  width: 78%;
  font-size: 14px;
  color: #000;
}
.ofo_n_w {
    display: flex;
    justify-content: flex-end
}
.ofo_t_c {
  width: 77px;
  height: 22px;
  border-radius: 11px;
  font-size: 11px;
  text-align: center;
  color: #333;
  line-height: 22px;
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
  line-height: 54px;
}
.ofo_g_g {
  width: 85px;
  height: 17px;
  border-radius: 9px;
  text-align: center;
  line-height: 17px;
}
.ofo_address_w {
  width: 94%;
  margin-left: 3%;
  /* background:rgba(255,255,255,1); */
box-shadow:0 8px 32px 3px rgba(132,148,168,0.21);
    padding: 1rem;
    box-sizing: border-box;
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
  margin:  0 auto;
  margin-top: 8%;
  /* margin-left: 40%; */
}
.ofo_d_z_d {
  width: 24px;
  height: 30px;
  overflow: hidden;
}
</style>