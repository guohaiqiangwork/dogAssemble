<template>
  <div>
    <div>
      <div class="pass_list_w">
        <!-- <p v-if="transferFlag" class="red font_size_14">当前用户为跨店会员</p> -->
        <div class="search_box">
          <img src="../../assets/images/phone@2x.png" class="width_16">
          <input
            type="text"
            placeholder="请输入您的手机号充值"
            v-model="phone"
            v-on:input="getCheckCustomer(phone)"
            maxlength="11"
            style="width:100%;height:100%;outline: none;border:none"
          >
          <span style="max-width: 80px;display: inline-block;height: 38px;flex: 1;white-space: nowrap;line-height: 38px;text-overflow: ellipsis;overflow:hidden;min-width: 80px;" v-if="checkCustomerName&&this.phone">{{checkCustomerName}}</span>
          <!-- <span style="width: 50%;" v-if='!checkCustomerName&&this.phone'>未查询到用户</span> -->
        </div>
      </div>
    </div>
    <div>
      <div class="font_color_1A font_size_14 margin_left_div6 margin_top_div5">选择套餐类型：</div>
      <div class="div_display_flex margin_top_div5">
        <div :class="classA  == '0'? 'new_order_b1' : 'new_order_b2' " @click="newOrderXZ('0')">会员套餐</div>
        <div :class="classA  == '1'? 'new_order_b1' : 'new_order_b2' " @click="newOrderXZ('1')">辟谷套餐</div>
      </div>
    </div>

    <!-- 未支付 -->
    <div v-if="classA == '0'">
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">配方名称：</span>
        <Select style="width:70%" @change="getMemberRecipe($event)">
          <option>请选择</option>
          <Option v-for="item in recipeList" :value="item.id" :key="item.id">{{item.recipe}}</Option>
        </Select>
      </div>
      <div class="background_color_F8 margin_top_div5" style="height:10px"></div>
      <!-- 贴心提示 -->
      <div v-if="memberRecipe">
        <div class="font_color_4A margin_left_div6 margin_top_div5">
          <img style="vertical-align: middle;" src="../../assets/images/tS@2x.png" class="width_16">
          贴心小提示
        </div>
        <div class="t_S_b">
   
          <div style="margin-top:0;" class="margin_top_div3">配方：{{memberRecipe.recipeName}}</div>
          <div style="margin-top:0.2rem;" class="margin_top_div3">注意事项：{{memberRecipe.notice}}</div>
          <div style="margin-top:0.2rem;" class="margin_top_div3">适宜人群：{{memberRecipe.crowd}}</div>
        </div>
      </div>
      <!-- 按钮 -->
      <div
        class="text_center font_color_ff backgroun_color_4A font_size_16 b_t_w"
        @click="newOrderq"
      >确认套餐</div>
    </div>
    <!-- 辟谷套餐 -->
    <div v-if="classA == '1'">
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">购买天数：</span>
      <select v-model="selected" @change="getMemberRecipeDay">
          <option v-for="(option,index) in recipeList" :key="index" :value="option">{{ option.recipe }}</option>
        </select>
      </div>
      <div class="margin_top_div5 font_size_11 div_display_flex">
        <span class="font_size_14 font_color_1A margin_left_div6">开始时间：</span>
        <datetime
          v-model="value7"
          @on-change="change"
          clear-text="today"
          @on-clear="setToday"
          :start-date="startDate"
        >{{startTime}}</datetime>
      </div>
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">结束时间：</span>
        {{memberIDNumber==1 ?startTime :endTime }}
      </div>
      <!-- 按钮 -->
      <div class="div_display_flex" style="position: fixed;bottom: 0;width: 100%;line-height: 3;">
        <div style="line-height:3.5;" class="div_width_70 backgroun_color_E9 padding_left_div3">
          金额：
          <span class="red">{{payMoney}}</span>
        </div>
        <div style="line-height:3.5;"
          class="div_width_30 text_center backgroun_color_4A font_color_ff font_size_14"
          @click="payPassW"
        >确认支付</div>
      </div>
    </div>
    <!-- 套餐建立 -->
    <confirm v-model="newFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">
        确认给{{checkCustomerName}}新建吗？
        <br>
        {{phone}}
      </div>
    </confirm>
    <!-- 密码支付 -->
    <div>
      <x-dialog
        v-model="payShowD"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
      >
        <div class="backgroun_color_fff model_password">
          <div @click="overMonen" class="text_right margin_right_div3 padding_top_div3">X</div>
          <div class="font_size_16 font_color_10">输入会员支付密码</div>
          <!-- <div class="pass_input_6">
            <input type="password" v-model="miMa" class="pass_input" maxlength="6">
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
            <div class="font_color_4A margin_left_div2" style="line-height: 1;">密码为您登录时设置的密码</div>
          </div>
        </div>
      </x-dialog>
    </div>

    <toast
      v-model="showPositionValue"
      type="text"
      :time="800"
      is-show-mask
      text="手机号错误"
      :position="position"
    ></toast>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
import { Confirm, XDialog, Datetime } from "vux";

export default {
  components: {
    TabBar,
    Confirm,
    XDialog,
    Datetime
  },
  name: "newOrder",
  data() {
    return {
      item: 0,
      newFalge: false, //是否新建
      transferFlag: false,
      newPay: true, //新建订单支付
      classA: 0, //选择标示
      payShowD: false, //支付
      miMa: "",
      recipeList: [], //会员下拉框数据
      memberRecipe: "", //配方详情
      phone: "", //会员手机号
      memberID: "", //会员套餐id
      position: "middle", //弹出框类型
      showPositionValue: false, //弹出框
      checkCustomerName: "", //姓名
      value7: "", //开始时间
      startDate: "2015-11-11", //时间控制
      startTime: "请选择", //开始日期
      endTime: "", //结束日期
      memberIDNumber: "", //
      payMoney: "", //金额
      selected: "",
      passwordNumber: "", //支付密码
      msgPAW: "",
      msgLength: 0,
      msg: ""
    };
  },
  watch: {
    msgPAW(curVal) {
      console.log(curVal);
      if (/[^\d]/g.test(curVal)) {
        this.msgPAW = this.msgPAW.replace(/[^\d]/g, "");
      } else {
        this.msgLength = curVal.length;
        this.msg = curVal;
      }
      if (this.msgLength == 6) {
          this.payShowD = false;
        this.payPassWGB();
      }
    }
  },
  methods: {
    focus() {
      this.$refs.pwd.focus();
    },
    // 日期选择
    change(value) {
      this.startTime = value;
      console.log(this.memberID);
      var dateTemp = value;
      var dataTemp = dateTemp.replace(/\-/g, "/");
      // var nDate = new Date(dateTemp[1] + "-" + dateTemp[2] + "-" + dateTemp[0]); //转换为MM-DD-YYYY格式
      var nDate = new Date(dataTemp); //转换为MM-DD-YYYY格式
   
      var millSeconds =
        Math.abs(nDate) + this.memberIDNumber * 24 * 60 * 60 * 1000;
      console.log(millSeconds)
      var rDate = new Date(millSeconds);
      console.log(rDate)
      var year = rDate.getFullYear();
      var month = rDate.getMonth() + 1;
      if (month < 10) month = "0" + month;
      var date = rDate.getDate();
      if (date < 10) date = "0" + date;
      this.endTime = year + "-" + month + "-" + date;
    },
    // 获取当前时间
    timeNow() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.startDate = year + seperator1 + month + seperator1 + strDate;
    },
    setToday(value) {
      let now = new Date();
      let cmonth = now.getMonth() + 1;
      let day = now.getDate();
      if (cmonth < 10) cmonth = "0" + cmonth;
      if (day < 10) day = "0" + day;
      this.value7 = now.getFullYear() + "-" + cmonth + "-" + day;
    },
    // 弹窗取消
    onCancel() {},

    // 弹窗确认
    onConfirm() {
      // 会员订单保存
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.memberID, //会员套餐id
        phone: this.phone
      };
      this.$fetch.post(url.saveMemberRecipe, _obj).then(
        data => {
          if (data.code == 0) {
            this.$router.push({
              name: "orderSuccess",
              params: {
                obj: JSON.stringify({
                  type: "profession",
                  data: {
                    id: "参数"
                  }
                })
              }
            });
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );

      this.newPay = false; //去支付
    },
    // 打开密码输入框
    payPassW() {
      this.payShowD = true;
    },
    // 关闭弹窗
    overMonen() {
      this.payShowD = false;
    },
    // 关闭密码输入框
    payPassWGB() {
      this.passwordNumber = DesUtils.encode(this.msg, "fruits-app,yuntu,com");
      //  辟谷套餐保存
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.selected.id,
        phone: this.phone,
        password: this.passwordNumber,
        startDate: this.startTime
      };
      this.$fetch.post(url.saveInediaRecipe, _obj).then(
        data => {
          if (data.code == 0) {
            alert('新建成功')
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    //
    // goToPay() {
    //   this.$router.push({
    //     name: "paysure",
    //     params: {
    //       obj: JSON.stringify({
    //         type: "profession",
    //         data: {
    //           id: "pay"
    //         }
    //       })
    //     }
    //   });
    // },
    // 通过手机号查询姓名
    getCheckCustomer(phone) {
      this.checkCustomerName = "";
      if (this.phone.length != 11) {
        return;
      }
      let _obj = {
        openId: localStorage.getItem("openId"),
        phone: phone
      };
      
      this.$fetch.post(url.checkCustomer, _obj).then(
        data => {
          if (data.code == 0) {
            this.checkCustomerName = data.obj.name;
            if (!this.checkCustomerName && this.phone) {
              this.$vux.toast.text("未查询到用户");
            }
            // if (data.obj.type == 3) {
            //   this.transferFlag = true;
            // }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 选择套餐
    newOrderXZ(falge) {
      this.classA = falge;
      // 获取套餐内容
      let _obj = {
        openId: localStorage.getItem("openId"),
        type: falge
      };
      this.$fetch.post(url.getRecipe, _obj).then(
        data => {
          if (data.code == 0) {
            this.recipeList = data.obj;
          } else {
            // alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 套餐详情配方
    getMemberRecipe(event) {
      this.memberID = event.target.value;
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.memberID
      };
      this.$fetch.post(url.getMemberRecipe, _obj).then(
        data => {
          if (data.code == 0) {
            this.memberRecipe = data.obj;
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 辟谷天数
    getMemberRecipeDay(item) {  
      this.memberID = this.selected.id;
      this.memberIDNumber = this.selected.recipe;
      this.payMoney = this.selected.retail;
      // this.change();
    },
    //订单保存
    newOrderq() {
      if (this.phone.length != 11) {
        this.showPositionValue = true;
        return;
      }
      if(this.transferFlag){
        this.$vux.toast.text('该用户为跨店会员,不能新建套餐');
        return
      }
      this.newFalge = true;
    }
  },
  created() {
    settitle("新建订单");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("新建订单");
    this.timeNow(); //获取当前时间
    this.newOrderXZ("0");
  }
};
</script>
<style scoped lang="less">
.pass_list_w {
  width: 95%;
  margin-left: 2%;
}
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  position: relative;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  line-height: normal;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 90%;
  border: none;
  border-bottom: 1px solid #E9E9E9;
  background: #fff;
}
.width_16 {
  width: 16px;
  margin-right: 3%;
}
.new_order_b1 {
  width: 33%;
  text-align: center;
  background-color: #4a7b67;
  color: #ffffff;
  margin-left: 11%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 2;
}
.new_order_b2 {
  width: 33%;
  text-align: center;
  background-color: #ffffff;
  color: #4a7b67;
  margin-left: 11%;
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