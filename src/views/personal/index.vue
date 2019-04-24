<template>
  <div style="width:100%;height:100%;">
    <div class="backgroun_color_fff" v-if="true">
      <!-- tab -->
      <div class="div_display_flex backgroun_color_fe01 personal_title">
        <div
          class="personal_tab_width"
          v-for="(item,index) in  tabList"
          @click="tabSwitch(item.id)"
          :key="index"
        >
          <div>{{item.name}}</div>
          <div class="switchBorder" v-if="switchFlage == item.id"></div>
        </div>
      </div>
      <!-- 拼团中 -->
      <div v-if="switchFlage == '001'">
        <!-- 产品列 -->
        <div>
          <div class="div_display_flex personal_time_div flex_between">
            <div>2019-03-29 12:00</div>
            <div class="personal_time_div_font">待发货</div>
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
                <div class="num_color">*1</div>
              </div>
              <!-- 边线 -->
              <div class="personal_border_bottom_1"></div>
            </div>
          </div>
        </div>
        <!-- 总加 -->
        <div class="margin_top_div5">
          <div class="personal_z_j font_size_15 font_colo_33">共N件商品 合计:￥230.0(含运费45.0)</div>
          <div class="div_display_flex" style="margin-right: 4%;margin-top: 5%;padding-bottom: 3%;justify-content:flex-end;">
            <div class="personal_c_x_z" style="margin-right: 15px;"  @click="outPay('放弃当前订单？')">放弃支付</div>
            <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:1px solid #ffe001">重新支付</div>
          </div>
        </div>
      </div>
      <!-- 已完成 -->
      <div v-if="switchFlage == '002'">
        <div>
          <!-- 产品列 -->
          <div>
            <div class="div_display_flex personal_time_div flex_between">
              <div>2019-03-29 12:00</div>
              <div class="personal_time_div_font">待发货</div>
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
                  <div class="num_color">*1</div>
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
              style="margin-right: 4%;margin-top: 5%;padding-bottom: 3%;justify-content:flex-end;"
            >
              <div class="personal_c_x_z" style="margin-right: 15px;" @click="outPay('删除当前订单？','del')">删除订单</div>
              <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:1px solid #ffe001">查看物流</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全部 -->
      <div v-if="switchFlage == '003'">
        <div>
          <!-- 产品列 -->
          <div>
            <div class="div_display_flex personal_time_div flex_between">
              <div>2019-03-29 12:00</div>
              <div class="personal_time_div_font">待发货</div>
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
                      <span @click="outPay">主食</span>
                      <span>|</span>
                      <span>牛肉味</span>
                    </div>
                  </div>
                  <div class="num_color">*1</div>
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
              style="margin-right: 4%;margin-top: 5%;padding-bottom: 3%;justify-content:flex-end;"
            >
              <div class="personal_c_x_z" style="margin-right: 15px;" @click="outPay('放弃当前订单？','aba')">放弃支付</div>
              <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:1px solid #ffe001" @click="console.log(13213)">重新支付</div>
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
        <div style="text-align:center;font-size:18px;">{{title}}</div>
      </confirm>
    </div>
    <div class="nodata" v-else>

      <img  class="mt-50"  src="../../assets/images/mynull@2x.png"/>
     <p> 主人~快去参与拼团吧~</p>
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
      outPayFalge: false,
      payClass:'',
      title:''
    };
  },
  created() {
    settitle("我的");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  computed:{
    token(){
      return localStorage.getItem('user');
    }
  },
  methods: {
    // tab 切换
    tabSwitch: function(id) {
      this.switchFlage = id;
      var obj ={
        '001':'',
        '002':4,
        '003': ''
      }
      this.getList(obj.id);
      
    },
    // 获取列表数据
    getList(state){
      this.$fetch.post("weChat/order/getMyOrderList/"+this.token.activityId+'/'+ this.token.employeeId + '/'+state).then(res => {
        console.log(res)
      })
    },
    // 打开弹窗
    open_model() {
      this.showDialogStyle = true;
    },
    // 放弃支付
    outPay(e,tit) {
      this.title =e;
      this.outPayFalge = true;
    },
    onHide() {
      
    },
    onShow() {
      
    },
    // 取消
    onCancel() {
      console.log("on cancel");
    },
    // 放弃支付确认
    onConfirm(msg) {
      console.log("on confirm");
      let obj = {
        'aba':'weChat/mineOrder/giveUpOrder/',
        'del':'weChat/mineOrder/invisibleOrder/'
      }
      this.$fetch.post(obj[this.payClass] + this.token.employeeId +'/'+'orderId').then(res =>{
        console.log(res);
      })
      
    },
    GiveUpOrder(){
      
    },
    DeleteOrder(){},
  }
};
</script>
<style>

.weui-dialog__btn_primary{
  color: #ffe001 !important;
}
</style>

<style scoped>
.num_color{
  color: #666;
}
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
  display: flex;
  justify-content: space-around;
}

.flex_between{
  display: flex;
  justify-content: space-between;
}
.personal_time_div {
  height: 42px;
  line-height: 3;
  padding:0 4%;
  border-bottom: 1px solid #e5e5e5;
}
.personal_time_div_font {
  /* margin-left: 53%; */
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
  border-radius: 16px;
  padding: 0.1rem;
  font-size: 11px;
  color: #333;
  background-color: #ffe001;
  text-align: center;
  line-height: 17px;
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
  line-height: 22px;
  color: #666666;
}
.personal_border_bottom_1 {
  border-top: 1px solid #e5e5e5;
  width: 123%;
  margin-left: -29%;
  margin-top: 6%;
}

</style>

