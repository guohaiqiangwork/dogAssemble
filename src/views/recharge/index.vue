<template>
  <div style="background-color:#F3F5F8;padding:1%">
    <!-- 押金充值 -->
    <div class="recharge_div_b margin_top_div3">
      <div class="div_display_flex padding_top_div6">
        <div class="div_width_50 margin_left_div6 font_size_16 font_color_1A">押金充值</div>
        <div
          class="div_width_50 text_right margin_right_div6 font_size_14 font_color_4A"
          @click="goToRechargeList"
        >充值记录</div>
      </div>
      <div class="margin_top_div8">
        <input type="text" class="recharge_input_b" placeholder="输入您想充值的金额…">
      </div>
      <div class="div_display_flex margin_top_div6 padding_bottom_4">
        <div class="recharge_button_b">立即充值</div>
      </div>
    </div>
    <!-- 会员充值 -->
    <div class="recharge_div_b margin_top_div5">
      <div class="div_display_flex padding_top_div6">
        <div class="div_width_50 margin_left_div6 font_size_16 font_color_1A">会员充值</div>
        <div
          class="div_width_50 text_right margin_right_div6 font_size_14 font_color_4A"
          @click="goToRechargeList"
        >充值记录</div>
      </div>
      <div>
        <div class="pass_list_w">
          <div class="search_box">
            <img src="../../assets/images/phone@2x.png" class="width_16">
            <input
              type="text"
              placeholder="请输⼊您的手机号"
              style="width:100%;height:100%;outline: none;border:none"
              @input="phoneSearch"
              v-model="phone"
            >
            <i style="display: inline-block;height: 0.7rem;width: 120px;line-height: 0.7rem;">{{name}}</i>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap">
            <div class="div_display_flex margin_top_div5" v-for="(item,index) in countList" :key="index" style="width:50%;">
              <div
                class=" text_center b_t_c"
                :style="{ backgroundColor:(classA  == item.id && item.log ? '#DEE8E3' : ''),width:'90%'}"
                @click="moneyXz(item.id,index)"
              >
                <div class="margin_top_div3 font_color_10 font_size_25">{{item.topup}}</div>
                <div class="margin_top_div3 font_size_13 font_color_1A padding_bottom_4">充{{item.topup}}返{{item.returnmoney}}元</div>
              </div>
            </div>
      </div>
      <div>
        <input type="text" class="recharge_input_b2 margin_top_div8" placeholder="输入其他金额" v-model="form.amount" :disabled="ifChoic?true:false">
      </div>
      <div class="div_display_flex margin_top_div8">
        <div class="div_width_43 backgroun_color_4A bt_d_c" @click="rechargeq('2')">支付宝充值</div>
        <div class="div_width_43 backgroun_color_4A bt_d_c" @click="rechargeq('3')">现金充值</div>
      </div>
        <!-- 确认充值 -->
      <confirm v-model="rechargeFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
        <div style="text-align:center;font-size:18px;">您确认要充值吗？</div>
      </confirm>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Confirm } from "vux";

export default {
  components: {
    Confirm
  },
  name: "recharge",
  data() {
    return {
       classA: "",
       rechargeFalge: false, //是否新建
       count:3,
       timer:null,
       phone:null,
       name:"",
       countList:[],
       form:{
         openId:"1313121231",
         type:"",
         phone:null,
         amount:null,
         id:"",
         payType:""
       },
       ifHas:false,//判断是否有手机号
       ifChoic:false,
    };
  },
  methods: {
    // 选择金额
    moneyXz(falge,index) {
      this.countList[index].log = !this.countList[index].log;
      this.countList.forEach((e,i) =>{
        if(i == index){
          if(e.log){
            this.ifChoic = true;
            this.form.amount = null;
          }else{
            this.ifChoic = false;
          }
          return
        }
        e.log = false;
      })
     
      this.classA = falge;
      this.form.id = falge;
    },
    // 去充值记录页面
    goToRechargeList: function() {
      if(this.ifHas){
        this.$router.push({
          name: "rechargeList",
          params: {
            obj: JSON.stringify({
              type: "profession",
              data: {
                phone: this.phone
              }
            })
          }
        });
      }else{
        this.$vux.toast.text('请输入正确的手机号');
      }
    
    },
    //获取充值金额
    getCount(){
      this.$vux.loading.show({
            text: 'Loading'
      })
      this.$fetch.post('fruits/app/personal/getPupList',{openId:"1313121231"}).then(res =>{
        console.log(res);
        res.obj.forEach(item => {
          item.log = false;
          this.countList.push(item)
        });
        this.$vux.loading.hide();
      })
    },
    // 点击充值
    cashMethod(){
      this.$fetch.post("fruits/app/personal/remainRecharge",this.form).then(res =>{
        console.log(res);
        if(res.msg == "success"){
          this.$vux.toast.text('充值成功');
        }else{
          this.$vux.toast.text('遇到了错误，请重试');
        }
      })
    },
    // 确认充值
      rechargeq(val) {
        if(this.ifHas){
            this.rechargeFalge = true;
            this.form.payType = val;
            this.form.type = this.form.amount? "1" : "0";
            this.form.phone = this.phone;
        }else{
          this.$vux.toast.text('请输入正确的手机号');
        }
     
    },
     // 弹窗取消
    onCancel() {
    
    },
    // 弹窗确认
    onConfirm() {
     this.newPay = false;//去支付
     this.cashMethod();
    },
    showMember(value){
      this.$fetch.post('fruits/app/personal/checkCustomer',{openId:"1313121231",phone:value}).then(res =>{
        this.$vux.loading.hide();
        if(res.msg == 'find_none_user'){
          this.$vux.toast.text('没有找到该用户');
        }
        if(res.msg == "success"){
          this.name = res.obj.name;
          this.ifHas = true;
        }
       
      })
    },
    //查找
    phoneSearch(){
      var reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
      if( this.timer ){
        
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() =>{
        if(reg.test(this.phone)){
          this.showMember(this.phone);
          this.$vux.loading.show({
              text: '查询中'
          })
        }else{
          this.$vux.toast.text('请输入正确的手机号');
        }
      },2500)
    }
  },
  created() {
    settitle("押金充值");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getCount();
  }
};
</script>
<style>
.weui-toast{
    width: 200px;
    min-height: 50px;
}
</style>

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
  line-height: 3;
  border-radius: 5px;
  margin-left: 4%;
  width: 92%;
}
/* 图标输入框 */
.pass_list_w {
  width: 95%;
  margin-left: 2%;
}
.search_box {
  height: 0.7rem;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 92%;
  border: none;
  border-bottom: 1px solid rgb(173, 165, 165);
  margin-left: 4%;
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
  text-align: center;
}
</style>