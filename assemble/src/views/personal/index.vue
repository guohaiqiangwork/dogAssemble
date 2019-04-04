<template>
  <div>
    <div class="backgroun_color_fff">
      <!-- tab -->
      <div class="div_display_flex backgroun_color_fe01">
        <div
          class="personal_tab_width"
          v-for="(item,index) in  tabList"
          @click="tabSwitch(item.id)"
        >
          <div>{{item.name}}</div>
          <div class="switchBorder" v-if="switchFlage == item.id"></div>
        </div>
      </div>
      <!-- 拼团中 -->
      <div v-if="switchFlage == '001'">
        <div>
          <div class="div_display_flex">
            <div>2019-03-29</div>
            <div>代发货</div>
          </div>
          <div class="div_display_flex">
            <div class="personal_list_div">
              <img src="../../assets/logo.png" style="width: 80%;">
            </div>
            <div class="div_display_flex">
              <div>天然计划全犬期深海鱼狗粮</div>
              <div>¥700</div>
            </div>
          </div>
          <div class="div_display_flex">
            <div>
              <div class="order_bt_b">
                <span>主食</span>
                <span>|</span>
                <span>牛肉味</span>
              </div>
            </div>
            <div>*1</div>
          </div>
        </div>
      </div>
      <!-- 已完成 -->
      <div v-if="switchFlage == '002'">
        <div>
          <div class="div_display_flex">
            <div>2019-03-29</div>
            <div>代发货</div>
          </div>
          <div v-for="item in [1,2]">
            <div class="div_display_flex">
              <div class="personal_list_div">
                <img src="../../assets/logo.png" style="width: 80%;">
              </div>
              <div class="div_display_flex">
                <div>天然计划全犬期深海鱼狗粮</div>
                <div>¥700</div>
              </div>
            </div>
            <div class="div_display_flex">
              <div>
                <div class="order_bt_b">
                  <span>主食</span>
                  <span>|</span>
                  <span>牛肉味</span>
                </div>
              </div>
              <div>*1</div>
            </div>
          </div>
          <div>
            <div>共N件商品 合计：¥230.0（含运费455.0）</div>
            <div class="div_display_flex">
              <div class="personal_btn_d">删除订单</div>
              <div class="personal_btn_d backgroun_color_fe01">查看物流</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全部 -->
      <div v-if="switchFlage == '003'">
        <div>
          <div class="div_display_flex">
            <div>2019-03-29</div>
            <div>代发货</div>
          </div>
          <div v-for="item in [1,2]">
            <div class="div_display_flex">
              <div class="personal_list_div">
                <img src="../../assets/logo.png" style="width: 80%;">
              </div>
              <div class="div_display_flex">
                <div>天然计划全犬期深海鱼狗粮</div>
                <div>¥700</div>
              </div>
            </div>
            <div class="div_display_flex">
              <div>
                <div class="order_bt_b">
                  <span>主食</span>
                  <span>|</span>
                  <span>牛肉味</span>
                </div>
              </div>
              <div>*1</div>
            </div>
          </div>
          <div>
            <div>共N件商品 合计：¥230.0（含运费455.0）</div>
            <div class="div_display_flex">
              <div class="personal_btn_d" @click="out_pay">放弃支付</div>
              <div class="personal_btn_d backgroun_color_fe01" @click="open_model">查看物流</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 弹出层 -->
      <div>
        <x-dialog
          v-model="showDialogStyle"
          hide-on-blur
          :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
        >
          <div class="personal_model_w backgroun_color_fff"></div>
        </x-dialog>
      </div>
      <!-- 放弃支付 -->

      <confirm
        v-model="outPayFalge"
        title
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide"
      >
        <div style="text-align:center;">放弃当前订单？</div>
      </confirm>
    </div>
  </div>
</template>
<script>
import {
  XHeader,
  XDialog,
  TransferDomDirective as TransferDom,
  Confirm
} from "vux";
export default {
  components: {
    XHeader,
    XDialog,
    Confirm
  },
  name: "personal",
  data() {
    return {
      tabList: [
        {
          name: "拼团中",
          id: "001"
        },
        {
          name: "已完成",
          id: "002"
        },
        {
          name: "全部",
          id: "003"
        }
      ],
      switchFlage: "001",
      showDialogStyle: false, //弹窗
      outPayFalge: false
    };
  },
  created() {
    settitle("我的");
    console.log($);
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  methods: {
    // tab 切换
    tabSwitch: function(id) {
      this.switchFlage = id;
    },
    // 打开弹窗
    open_model() {
      this.showDialogStyle = true;
    },
    // 放弃支付
    out_pay() {
      this.outPayFalge = true;
    },
    onHide() {
      console.log("on hide");
    },
    onShow() {
      console.log("on show");
    },
    // 取消
    onCancel() {
      console.log("on cancel");
    },
    // 放弃支付确认 
    onConfirm(msg) {
      console.log("on confirm");
      if (msg) {
        alert(msg);
      }
    }
  }
};
</script>
<style scoped>
.personal_tab_width {
  width: 30%;
  text-align: center;
}
.switchBorder {
  border-top: 1px solid red;
  height: 1px;
  width: 40%;
  margin-left: 28%;
}
.personal_list_div {
  width: 30%;
  margin-left: 1%;
  padding: 3%;
}
.personal_btn_d {
  width: 80px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid;
  text-align: center;
}
.personal_model_w {
  width: 95%;
  margin-left: 2%;
}
</style>

