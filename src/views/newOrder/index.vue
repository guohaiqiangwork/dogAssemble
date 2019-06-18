<template>
  <div>
    <div>
      <div class="pass_list_w">
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
          <i>{{checkCustomerName}}</i>
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
    <div>
      <div class="margin_top_div5" v-if="classA == '0'">
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
          <img src="../../assets/images/tS@2x.png" class="width_16">
          贴心小提示
        </div>
        <div class="t_S_b">
          <div class="margin_top_div3">配方：{{memberRecipe.recipeName}}</div>
          <div class="margin_top_div3">注意事项：{{memberRecipe.notice}}</div>
          <div class="margin_top_div3">适宜人群：{{memberRecipe.crowd}}</div>
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
          <Select style="width:70%" @change="getMemberRecipe($event)">
          <option>请选择</option>
          <Option v-for="item in recipeList" :value="item.id" :key="item.id">{{item.recipe}}</Option>
        </Select>
      </div>
      <div class="margin_top_div5 font_size_11">
        <span class="font_size_14 font_color_1A margin_left_div6">开始时间：</span>
        <!-- <calendar v-model="demo2"  disable-past></calendar> -->
        <!-- <select name id style="width:70%">
          <option value="1">fjsdljflskdj</option>
        </select> -->
        <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
    ></Calendar>

      </div>
      <div class="margin_top_div5">
        <span class="font_size_14 font_color_1A margin_left_div6">结束时间：</span>
         <calendar @on-change="onChange" v-model="demo3"  disable-future></calendar>
      </div>
      <!-- 按钮 -->
      <div class="div_display_flex" style="position: fixed;bottom: 0;width: 100%;line-height: 3;">
        <div class="div_width_70 backgroun_color_E9 padding_left_div3">
          金额：
          <span class="red">23423</span>
        </div>
        <div
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
          <div @click="payShowD = false" class="text_right margin_right_div3 padding_top_div3">X</div>
          <div class="font_size_16 font_color_10">输入会员支付密码{{ni}}</div>
          <div class="pass_input_6">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
            <input type="password" v-model="ni" class="pass_input" maxlength="1">
          </div>
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
import { Confirm, XDialog,Calendar } from "vux";

export default {
  components: {
    TabBar,
    Confirm,
    XDialog,
    Calendar
  },
  name: "newOrder",
  data() {
    return {
      item: 0,
      newFalge: false, //是否新建
      newPay: true, //新建订单支付
      classA: "", //选择标示
      payShowD: false, //支付
      ni: "",
      recipeList: [], //会员下拉框数据
      memberRecipe: "", //配方详情
      phone: "", //会员手机号
      memberID: "", //会员套餐id
      position: "middle", //弹出框类型
      showPositionValue: false, //弹出框
      checkCustomerName: "" ,//姓名
         demo2: 'TODAY',//时间只能选今天
         demo3:'TODAY',
    };
  },
  methods: {
    // 日期选择
     onChange (val) {
      console.log('on change', val)
    },
    // 弹窗取消
    onCancel() {},

    // 弹窗确认
    onConfirm() {
      // 会员订单保存
      let _obj = {
        openId: url.openId,
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
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );

      this.newPay = false; //去支付
    },
    // 去支付
    payPassW() {
      this.payShowD = true;
    },
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
      if (this.phone.length != 11) {
        return;
      }
      let _obj = {
        openId: url.openId,
        phone: phone
      };
      this.$fetch.post(url.checkCustomer, _obj).then(
        data => {
          if (data.code == 0) {
            this.checkCustomerName = data.obj.name;
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 选择套餐
    newOrderXZ(falge) {
      // 获取套餐内容
        let _obj = {
          openId: url.openId,
          type: falge
        };
        this.$fetch.post(url.getRecipe, _obj).then(
          data => {
            if (data.code == 0) {
              this.recipeList = data.obj;
            }
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      this.classA = falge;
    },
    // 套餐详情
    getMemberRecipe(event) {
      this.memberID = event.target.value;
      let _obj = {
        openId: url.openId,
        id: this.memberID
      };
      this.$fetch.post(url.getMemberRecipe, _obj).then(
        data => {
          if (data.code == 0) {
            this.memberRecipe = data.obj;
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    //订单保存
    newOrderq() {
      if (this.phone.length != 11) {
        this.showPositionValue = true;
        return;
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
  }
};
</script>
<style scoped>
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
  width: 90%;
  border: none;
  border-bottom: 1px solid rgb(173, 165, 165);
}
.width_16 {
  width: 16px;
  height: 16px;
  margin-right: 3%;
}
.new_order_b1 {
  width: 33%;
  text-align: center;
  background-color: #4a7b67;
  color: #ffffff;
  margin-left: 14%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 2;
}
.new_order_b2 {
  width: 33%;
  text-align: center;
  background-color: #ffffff;
  color: #4a7b67;
  margin-left: 14%;
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