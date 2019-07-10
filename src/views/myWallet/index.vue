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
      <!-- <div class=" text_right margin_right_div3  padding_top_div3 font_size_14"   @click="goToBillRecord">
        账单记录
      </div> -->
      <div class="wallet_font font_size_16 padding_top_div3">
        当前余额(币)
      </div>
      <div class="font_size_30 margin_top_div5" style="padding-bottom: 4%;">{{remain}}</div>
    </div>
    <!-- 充值 -->
    <!-- <div>
      <div class="font_color_1A wallet_font margin_top_div5">选择充值金额</div>
      <div class="div_display_flex">
        <div class="div_width_50" v-for="(item,index) in countList" :key="index">
          <div class="wallet_bt">¥899</div>
        </div>
        <div class="div_width_50">
          <div class="wallet_bt">¥899</div>
        </div>
      </div>
    </div> -->
     <div style="display:flex;justify-content:space-between;flex-wrap:wrap;padding:0.25rem;">
        <div
          class="div_display_flex margin_top_div5"
          v-for="(item,index) in countList"
          :key="index"
          style="width:50%;margin-top:2%"
        >
          <div
            class="text_center b_t_c"
            :style="{ backgroundColor:(classA  == item.id && item.log ? '#DEE8E3' : ''),width:'90%'}"
            @click="moneyXz(item.id,index,item.topup)"
          >
            <div class="moneyWeight margin_top_div3 font_color_10 font_size_25">{{item.topup}}</div>
            <div
              class="margin_top_div3 font_size_13 font_color_1A padding_bottom_4"
            >充{{item.topup}}返{{item.returnmoney}}元</div>
          </div>
        </div>
      </div>
         <!-- <div> -->
        <!-- :disabled="ifChoic?true:false" -->
        <!-- <input
        style="margin-top:5%;"
          type="text"
          class="recharge_input_b2 margin_top_div8"
          placeholder="输入其他金额"
          v-model="amount"
          @blur ="onBlur"
          @focus="otherFocus"
        >
      </div> -->
    <!-- 其他金额 -->
    <div >
      <input type="number" class="input_m"  placeholder="输入其他金额"
          v-model="amount" @focus="otherFocus">
      <div class="div_display_flex margin_top_div5 margin_left_div3">
        <!-- <div class="img_26">
          <img src="../../assets/images/提醒 (3)@2x.png" width="100%">
        </div> -->
        <!-- <div class="font_color_4A font_size_13">
          充500元减100元
        </div> -->
      </div>
    </div>
    <!-- 充值按钮 -->
    <div >
      <div class="wallet_cz_bt backgroun_color_4A font_color_ff font_size_16" @click="paysure">立即充值</div>
      <div class="font_size_12 margin_top_div5 text_center">
        <span class="font_color_4A">点击[立即充值]</span>,表示您已同意《购卡协议》 和 《购卡流程》
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import url from "../../bin/url";
import weiXinPay from "../../bin/weiXinPay"
export default {
  name: "myWallet",
  data() {
    return {
       classA: "",
      rechargeFalge: false, //是否新建
      count: 3,
      timer: null,
      phone: null,
      name: "",
      countList: [],
      amount: null,
      form: {
        openId: localStorage.getItem("openId"),
        type: "",
        amount: null,
        id: "",
      },
      remain:"",
    };
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
    },
     //点击确认支付
    paysure() {
      console.log(this.form,'fds');
      // return
      // if(this.amount){
      //   this.form.type ="1";
      //   this.form.id = "";
      //   this.form.amount =""
      // }else{
      //   this.form.type = "0";
        
      //    this.form.amount = this.amount;
      // }
 this.form.type = this.amount ? "1" : "0";
      this.form.amount = this.amount ? this.amount : "";
      console.log(this.form, "oooo",this.form);
      this.$fetch.post("fruits/app/personal/customerRecharge", this.form).then(res => {
        if (res.msg == "success") {
          this.redirect(res.attributes.orderId);

          var a =JSON.parse(res.obj)
        
          weiXinPay(a,function(val){
          
          },function(err){
            alert(JSON.stringify(err),132);
            console.log(err);
          })
      
        }
      });
    },
    //轮询支付状态
    redirect(val){
      var count = 0;
      var timer = setInterval(()=>{
        this.$fetch.post('fruits/app/personal/getrechargeState',{openId:localStorage.getItem('openId'),orderId:val}).then(res =>{
          count++;
          if(res.obj){
           this.$vux.toast.text('充值成功')
            this.$router.push('/home');
            clearInterval(timer)
          }
          if(count>3){
            clearInterval(timer)
          setTimeout(() =>{
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
          },1000)
             
          }
        })
      },1000)
    },
      // 选择金额
    moneyXz(falge, index, topup) {
      // console.log(,890)
      this.countList[index].log = !this.countList[index].log;
      this.countList.forEach((e, i) => {
        if (i == index) {
          if (e.log) {
            // this.ifChoic = true;
            this.amount = null;
            this.form.amount = topup;
          } else {
            this.form.amount = this.amount;
            // this.ifChoic = false;
          }
          return;
        }
        e.log = false;
      });

      this.classA = falge;
      this.form.id = falge;
    },
    otherFocus() {
      console.log(this.countList, 123);
      this.countList.forEach(e => {
        e.log = false;
      });
    },
       //获取充值金额
    getCount() {
      // this.$vux.loading.show({
      //   text: "Loading"
      // });
      this.$fetch
        .post("fruits/app/personal/getPupList", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          // this.$vux.loading.hide();
          if(res.obj.length){
             res.obj.forEach(item => {
            item.log = false;
            this.countList.push(item);
            });
          }else{
            this.$vux.toast.text('暂无数据')
          }
        });
    },
  },
  created() {
    settitle("我的钱包");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getCount();
     this.$fetch
      .post("fruits/app/personal/getPersonalInfo", {
        openId: localStorage.getItem("openId")
      })
      .then(res => {
        this.remain =res.obj.remain.toFixed(2);
        // var state = res.obj.state;
        // localStorage.setItem("state", state);
        // this.personalMsg = { ...res.obj };
      });
    console.log("我的钱包");
  }
};
</script>
<style scoped>
.b_t_c {
  border: 1px solid #4a7b67;
  border-radius: 5px;
  margin-left: 4%;
  margin-top: 5%;
}
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