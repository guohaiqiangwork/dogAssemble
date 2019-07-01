<template>
  <div>
    <!-- 会员套餐 展示-->
    <div v-if="memberFalg">
      <!-- <div class="font_size_12 margin_left_div6 margin_top_div5">
        <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
        当前用户为跨店用户
      </div>-->
      <div class="margin_top_div5">
        <div class="font_size_15 font_color_010 div_display_flex me_d">
          <div class="s_t"></div>
          <div style="margin-top:-2.5%;margin-left:3%">{{infoList.name}}</div>
          <span class="margin_left_div3" style="margin-top:-2%;">{{infoList.phone}}</span>
        </div>
        <!-- <div class="div_display_flex">
          <div class="me_d_s" style="margin-left:24%"></div>
          <div class="me_d_s" style="margin-left:40%"></div>
        </div>-->
        <!-- <div class="div_display_flex font_size_15 font_color_ff backgroun_color_4A me_d_n">
          <div class="div_width_50">套餐名称</div>
          <div class="div_width_50 text_right margin_right_div3">2019.09.30</div>
        </div>-->

        <!-- 列表 -->
        <div class="m_b_DB border_tlr_b margin_top_div3">
          <div
            class="div_display_flex text_center font_size_15 font_color_10 padding_left_div3"
            style=" border-bottom:1px solid #e9e9e9;background-color:#DEE8E3 ;border-top-left-radius: 5px; border-top-right-radius: 5px;"
          >{{infoList.recipe}}</div>
          <div
            class="div_display_flex text_center font_size_13 font_color_1A margin_top_div8 margin_bottom_8"
          >
            <div
              v-for="(item,index) in infoList.cupTypeLists"
              :key="index"
              class="div_width_40 btn_ff font_size_13"
              @click="tabT(item)"
              :class="classA  == item.id? 'backgroun_color_4A font_color_ff' : 'font_color_4A' "
            >
              <div>{{item.name}}/¥{{item.retailPrice}}</div>
            </div>
            <!-- <div
              class="div_width_40 btn_ff font_size_13"
              @click="tabT('2')"
              :class="classA  == '2'? 'backgroun_color_4A font_color_ff' : 'font_color_4A' "
            >423/¥423</div>-->
          </div>
        </div>
        <!-- 支付 -->
        <div class="div_display_flex" style="position: fixed;bottom: 0;width: 100%;line-height: 3;">
          <div class="div_width_70 backgroun_color_E9 padding_left_div3">
            金额：
            <span class="red">{{priceHT}}</span>
          </div>
          <div
            class="div_width_30 text_center backgroun_color_4A font_color_ff font_size_14"
            @click="goOver()"
          >结束订单</div>
          <div
            class="div_width_30 text_center font_color_ff font_size_14"
            style="background-color:#E3824F"
            @click="goPay"
          >确认下单</div>
        </div>
      </div>
    </div>
    <!-- 辟谷套餐 -->
    <div v-if="!memberFalg">
      <div class="font_size_12 margin_left_div6 margin_top_div5" v-if="infoList.userType == '0'">
        <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
        当前用户为跨店用户
      </div>
      <div class="margin_top_div5">
        <div class="font_size_15 font_color_010 div_display_flex me_d">
          <div class="s_t"></div>
          <div style="margin-top:-2.5%;margin-left:3%">{{infoList.name}}</div>
          <span class="margin_left_div3" style="margin-top:-2%;">{{infoList.phone}}</span>
        </div>
        <div
          class="div_display_flex font_size_15 font_color_01 me_d_n border_tlr_b"
          style="background-color:#DEE8E3;"
        >
          <div class="div_width_50">辟谷套餐</div>
          <div class="div_width_50 text_right margin_right_div3">{{nowTime}}</div>
        </div>
        <!-- 规格 -->
        <div class="m_b_DB font_size_13 font_color_10">
          <div class="div_display_flex text_center">
            <div class="div_width_25">次数</div>
            <div class="div_width_25">食用时间</div>
            <div class="div_width_25">状态</div>
            <div class="div_width_25">操作</div>
          </div>
          <div
            class="div_display_flex text_center"
            v-for="(item,index) in infoList.biguDateLists"
            :key="index"
          >
            <div class="div_width_25">{{index +1}}</div>
            <div class="div_width_25">{{item.recommTime}}</div>
            <div class="div_width_25" style="color:#4A7B67" v-if="item.state == '1'">待完成</div>
            <div class="div_width_25" style="color:#E9E9E9" v-if="item.state == '2'">已完成</div>
            <div class="div_width_25" style="color:#E6435A" v-if="item.state == '3'">已作废</div>
            <div class="div_width_25" v-if="item.state != '1'">/</div>
            <div
              class="div_width_25"
              style="color:#4A7B67"
              v-if="item.state == '1'"
              @click="goPayB(item.id)"
            >确认</div>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <!-- 按钮 -->
      <div
        class="div_display_flex"
        style="position: fixed;bottom: 0;width: 100%;line-height: 3;"
        v-if="memberFalg"
      >
        <div class="div_width_70 backgroun_color_E9 padding_left_div3">
          金额：
          <span class="red">234234</span>
        </div>
        <div
          class="div_width_30 text_center backgroun_color_4A font_color_ff font_size_14"
          @click="goPayB"
        >确认支付</div>
      </div>
    </div>
    <!-- 辟谷消费 -->
    <!-- 套餐建立 -->
    <confirm v-model="payBFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">您确认此操作吗？</div>
    </confirm>
    <!-- 订单结束 -->
    <confirm v-model="orderOverFalge" title @on-cancel="onCancelOver" @on-confirm="onConfirmOVer">
      <div style="text-align:center;font-size:18px;">您确认要结束订单吗？</div>
    </confirm>
    <!-- 密码支付 -->
    <div>
      <x-dialog
        v-model="payShowD"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
      >
        <div class="backgroun_color_fff model_password">
          <div @click="payShowD = false" class="text_right margin_right_div3 padding_top_div3">X</div>
          <div class="font_size_16 font_color_10">输入会员支付密码</div>
          <!-- <div class="pass_input_6">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
          </div>-->
          <input
            ref="pwd"
            type="password"
            maxlength="6"
            v-model="msgPAW"
            style="position: absolute;z-index: -1;left:-100%;opacity: 0"
          >
          <ul class="pwd-wrap" @click="focus">
            <li>
              <i v-if="msgLength > 0"></i>
            </li>
            <li>
              <i v-if="msgLength > 1"></i>
            </li>
            <li>
              <i v-if="msgLength > 2"></i>
            </li>
            <li>
              <i v-if="msgLength > 3"></i>
            </li>
            <li>
              <i v-if="msgLength > 4"></i>
            </li>
            <li>
              <i v-if="msgLength > 5"></i>
            </li>
          </ul>
          <div class="div_display_flex margin_left_div8 margin_top_div3 padding_bottom_4">
            <div>
              <img src="../../assets/images/til@2x.png" width="14px">
            </div>
            <div class="font_color_4A margin_left_div2" style="line-height: 1;">密码为会员消费/登录时设置的密码</div>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Confirm, XDialog } from "vux";
export default {
  components: {
    Confirm,
    XDialog
  },
  name: "memberD",
  data() {
    return {
      classA: "1",
      memberFalg: "", //辟谷/会员套餐标记
      payShowD: false, //支付
      ni: "",
      payBFalge: false, //辟谷消费提示
      parameter: "", //参数
      infoList: "", //详情
      nowTime: new Date(), //当前日期
      priceHT: "", //会员套餐价格
      orderOverFalge: false, //结束标示
      msgPAW: "",
      msgLength: 0
    };
  },
  watch: {
    msgPAW(curVal) {
      console.log(curVal);
      if (/[^\d]/g.test(curVal)) {
        this.msgPAW = this.msgPAW.replace(/[^\d]/g, "");
      } else {
        this.msgLength = curVal.length;
        this.msg = DesUtils.encode(curVal, "fruits-app,yuntu,com");
      }
      if(this.msgLength == 6){
        console.log('我来了')
       this.getSaveMember()
       this.payShowD =false
      }
    }
  },
  methods: {
    focus() {
      this.$refs.pwd.focus();
    },
    // 选择套餐
    tabT(item) {
      this.classA = item.id;
      this.priceHT = item.retailPrice;
    },
    // 结束订单弹窗
    goOver() {
      this.orderOverFalge = true;
    },
    // 弹窗取消
    onCancelOver() {},
    // 结束弹窗确认
    onConfirmOVer() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.parameter.item.id
      };
      this.$fetch.post(url.closeMemberOrder, _obj).then(
        data => {
          if (data.code == 0) {
            console.log("会员订单结束");
          }else{
            if(data.msg =='user_not_allow'){
              this.$vux.toast.text('跨店订单不允许结束')
            }
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 会员打开支付
    goPay() {
      this.payShowD = true;
    },
    // 辟谷消费
    goPayB(id) {
      this.payId = id; //辟谷消费id
      this.payBFalge = true;
    },
    // 弹窗取消
    onCancel() {},
    // 弹窗确认
    onConfirm() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.payId
      };
      this.$fetch.post(url.sureBigu, _obj).then(
        data => {
          if (data.code == 0) {
            this.getInfo(this.parameter.item.id);
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
      // this.payShowD = true; //去支付
    },
    // 获取会员详情
    getInfo(id) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: id
      };
      this.$fetch.post(url.getOrderInfo, _obj).then(
        data => {
          if (data.code == 0) {
            this.infoList = data.obj;
            console.log(data);
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 获取当前时间
    timeNow() {
      var now = new Date(); //当前日期
      var nowDay = now.getDate(); //当前日
      var nowMonth = now.getMonth(); //当前月
      var nowYear = now.getFullYear(); //当前年
      this.nowTime = nowYear + "." + nowMonth + "." + nowDay;
    },
    // 会员套餐子订单处理
    getSaveMember() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.parameter.item.id,
        cupId: this.classA,
        password:  this.msg
      };
      this.$fetch.post(url.saveMember, _obj).then(
        data => {
          if (data.code == 0) {
            this.infoList = data.obj;
            console.log(data);
            this.$vux.toast.text('支付成功');
            setTimeout(() =>{
              this.$router.push({
                name: "memberOperation",
                params: {
                  obj: JSON.stringify({
                    type: "profession",
                    data: {
                      id: "蚕丝"
                    }
                  })
                }
              });
            },2000)
          }else{
            if(data.msg=='password_error'){
              this.$vux.toast.text('密码错误');
              this.msgPAW = null;
            }
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("会员操作详情");
    this.parameter = this.routeParams = JSON.parse(this.$route.params.obj).data;
    console.log(this.parameter.item.type + "套餐类型");
    if (this.parameter.item.type == "1") {
      this.memberFalg = false; //判断是否辟谷
    } else {
      this.memberFalg = true; //判断是否辟谷
    }
  },

  mounted() {
    this.getInfo(this.parameter.item.id); //订单id获取详情
    this.timeNow();
  }
};
</script>
<style scoped>
.me_d {
  line-height: 3;
  /* border-radius: 5px; */
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_n {
  line-height: 3;
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_s {
  background-color: #4a7b67;
  height: 16px;
  width: 2%;
}
.m_b_DB {
  width: 92.8%;
  margin-left: 3.8%;
  border: 1px solid #e9e9e9;
  line-height: 3;
}
.me_d_btn1 {
  background-color: #4a7b67;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  margin-left: 5%;
}
.me_d_btn2 {
  background-color: #ffffff;
  color: #4a7b67;
  border: 1px solid #4a7b67;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  margin-left: 5%;
}
.btn_ff {
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  margin-left: 7%;
}
.border_tlr_b {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>