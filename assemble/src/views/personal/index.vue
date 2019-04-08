<template>
  <div>
    <div class="backgroun_color_fff">
      <!-- tab -->
      <div class="div_display_flex backgroun_color_fe01 personal_title">
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
        <!-- 产品列 -->
        <div>
          <div class="div_display_flex personal_time_div">
            <div>2019-03-29</div>
            <div class="personal_time_div_font">代发货</div>
          </div>
          <div v-for="item in [1,3,4]" class="div_display_flex">
            <!-- 产品图片 -->
            <div class="personal_list_div">
              <div class="personal_list_div_img">
                <img src="../../assets/logo.png" style="width: 100%;">
              </div>
            </div>
            <!-- 产品详情 -->
            <div class="margin_top_div5 font_color_00 font_size_14" style="width:80%">
              <div class="div_display_flex">
                <div style=" width: 80%;">天然计划全犬期深海鱼狗粮</div>
                <div>¥700</div>
              </div>
              <!-- 胶囊 -->
              <div class="div_display_flex margin_top_div5">
                <div style="width:80%">
                  <div class="personal_bt_b_w">
                    <span>主食</span>
                    <span>|</span>
                    <span>牛肉味</span>
                  </div>
                </div>
                <div>*1</div>
              </div>
              <!-- 边线 -->
              <div class="personal_border_bottom_1"></div>
            </div>
          </div>
        </div>
        <!-- 总加 -->
        <div class="margin_top_div5">
          <div class="personal_z_j font_size_15 font_colo_33">共N件商品 合计:￥230.0(含运费45.0)</div>
          <div class="div_display_flex" style="margin-left: 54%;margin-top: 5%;padding-bottom: 3%;">
            <div class="personal_c_x_z" style="margin-right: 15px;">放弃支付</div>
            <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:none">重新支付</div>
          </div>
        </div>
      </div>
      <!-- 已完成 -->
      <div v-if="switchFlage == '002'">
        <div>
          <!-- 产品列 -->
          <div>
            <div class="div_display_flex personal_time_div">
              <div>2019-03-29</div>
              <div class="personal_time_div_font">代发货</div>
            </div>
            <div v-for="item in [1,3,4]" class="div_display_flex">
              <!-- 产品图片 -->
              <div class="personal_list_div">
                <div class="personal_list_div_img">
                  <img src="../../assets/logo.png" style="width: 100%;">
                </div>
              </div>
              <!-- 产品详情 -->
              <div class="margin_top_div5 font_color_00 font_size_14" style="width:80%">
                <div class="div_display_flex">
                  <div style=" width: 80%;">天然计划全犬期深海鱼狗粮</div>
                  <div>¥700</div>
                </div>
                <!-- 胶囊 -->
                <div class="div_display_flex margin_top_div5">
                  <div style="width:80%">
                    <div class="personal_bt_b_w">
                      <span>主食</span>
                      <span>|</span>
                      <span>牛肉味</span>
                    </div>
                  </div>
                  <div>*1</div>
                </div>
                <!-- 边线 -->
                <div class="personal_border_bottom_1"></div>
              </div>
            </div>
          </div>
          <!-- 总加 -->
          <div class="margin_top_div5">
            <div class="personal_z_j font_size_15 font_colo_33">共N件商品 合计:￥230.0(含运费45.0)</div>
            <div
              class="div_display_flex"
              style="margin-left: 54%;margin-top: 5%;padding-bottom: 3%;"
            >
              <div class="personal_c_x_z" style="margin-right: 15px;">删除订单</div>
              <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:none">查看物流</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全部 -->
      <div v-if="switchFlage == '003'">
        <div>
          <!-- 产品列 -->
          <div>
            <div class="div_display_flex personal_time_div">
              <div>2019-03-29</div>
              <div class="personal_time_div_font">代发货</div>
            </div>
            <div v-for="item in [1,3,4]" class="div_display_flex">
              <!-- 产品图片 -->
              <div class="personal_list_div">
                <div class="personal_list_div_img">
                  <img src="../../assets/logo.png" style="width: 100%;">
                </div>
              </div>
              <!-- 产品详情 -->
              <div class="margin_top_div5 font_color_00 font_size_14" style="width:80%">
                <div class="div_display_flex">
                  <div style=" width: 80%;">天然计划全犬期深海鱼狗粮</div>
                  <div>¥700</div>
                </div>
                <!-- 胶囊 -->
                <div class="div_display_flex margin_top_div5">
                  <div style="width:80%">
                    <div class="personal_bt_b_w">
                      <span>主食</span>
                      <span>|</span>
                      <span>牛肉味</span>
                    </div>
                  </div>
                  <div>*1</div>
                </div>
                <!-- 边线 -->
                <div class="personal_border_bottom_1"></div>
              </div>
            </div>
          </div>
          <!-- 总加 -->
          <div class="margin_top_div5">
            <div class="personal_z_j font_size_15 font_colo_33">共N件商品 合计:￥230.0(含运费45.0)</div>
            <div
              class="div_display_flex"
              style="margin-left: 54%;margin-top: 5%;padding-bottom: 3%;"
            >
              <div class="personal_c_x_z" style="margin-right: 15px;">放弃支付</div>
              <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:none">重新支付</div>
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
    },
  }
};
</script>
<style scoped>
.personal_tab_width {
  width: 30%;
  text-align: center;
}
.switchBorder {
  border-top: 1px solid #000;
  width: 45%;
  margin-left: 26%;
  border-top-width: 2px;
  margin-top: -5%;
}
.personal_list_div {
  width: 20%;
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
.personal_title {
  height: 48px;
  font-size: 17px;
  line-height: 3;
}
.personal_time_div {
  height: 42px;
  line-height: 3;
  padding-left: 4%;
  border-bottom: 1px solid #e5e5e5;
}
.personal_time_div_font {
  margin-left: 53%;
  color: #fe5b4a;
}
.personal_list_div_img {
  width: 64px;
  height: 74px;
  overflow: hidden;
}
.personal_bt_b_w {
  width: 85px;
  height: 17px;
  border-radius: 8px;
  font-size: 11px;
  color: #333;
  background-color: #ffe001;
  text-align: center;
}
.personal_z_j {
  text-align: right;
  margin-right: 4%;
}
.personal_c_x_z {
  width: 77px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid #999999;
  text-align: center;
  font-size: 12px;
  line-height: 2;
  color: #666666;
}
.personal_border_bottom_1 {
  border-top: 1px solid #e5e5e5;
  width: 120%;
  margin-left: -29%;
  margin-top: 6%;
}
</style>

