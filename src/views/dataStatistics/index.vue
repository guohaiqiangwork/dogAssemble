<template>
  <div>
    <!-- 头部 -->
    <div class="personal_img_bj text_center">
      <div class="font_size_12 margin_top_div8">总金额(元)</div>
      <div class="font_size_25 margin_top_div3">1000.00</div>
      <div class="font_size_12 margin_top_div3">数据统计截止：2019-05-14 13:15</div>
    </div>
    <!-- tab切换 -->
    <div>
      <div class="div_display_flex backgroun_color_fff personal_title">
        <div v-for="(item,index) in  tabList" @click="tabSwitch(item.id)" :key="index">
          <div :style="{color:(switchFlage != item.id ? '' :'#D09E56')}">{{item.name}}</div>
          <div class="switchBorder" v-if="switchFlage == item.id"></div>
        </div>
      </div>
      <div class="tab_fg_border"></div>
      <!-- 全部订单 -->
      <div v-if="switchFlage == '001'">
        <div class="div_width_45 font_color_ff text_center backgroun_color_76" @click="goTODataDetails">
          <div class="font_size_25 margin_top_div8">300.00</div>
          <div class="font_size_13 margin_top_div5">充值金额(元)</div>
        </div>
        <div class="div_width_45 font_color_ff text_center backgroun_color_17">
          <div class="font_size_25 margin_top_div8">300.00</div>
          <div class="font_size_13 margin_top_div5">跨店服务费(元)</div>
        </div>
        <div class="div_width_45 font_color_ff text_center backgroun_color_E8">
          <div class="font_size_25 margin_top_div8">300.00</div>
          <div class="font_size_13 margin_top_div5">视频返佣(元)</div>
        </div>
        <div class="div_width_45 font_color_ff text_center backgroun_color_FF8">
          <div class="font_size_25 margin_top_div8">300.00</div>
          <div class="font_size_13 margin_top_div5">推荐返佣(元)</div>
        </div>
        <div class="div_width_45 font_color_ff text_center backgroun_color_B6">
          <div class="font_size_25 margin_top_div8">300.00</div>
          <div class="font_size_13 margin_top_div5">商城返佣(元)</div>
        </div>
      </div>
      <!-- 待付款 -->
      <div v-if="switchFlage == '002'">待付款</div>
      <!-- 待收费 -->
      <div v-if="switchFlage == '003'">待收费</div>
      <!-- 已发货 -->
      <div v-if="switchFlage == '004'">已发货</div>
      <!-- 已完成 -->
      <div v-if="switchFlage == '005'">已完成</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "dataStatistics",
  data() {
    return {
      tabList: [
        {
          name: "今天",
          id: "001"
        },
        {
          name: "昨天",
          id: "002"
        },
        {
          name: "近7天",
          id: "003"
        },
        {
          name: "近30天",
          id: "004"
        },
        {
          name: "自定义",
          id: "005"
        }
      ],
      switchFlage: "001"
    };
  },
  methods: {
    // tab切换
    tabSwitch(id) {
      console.log(id);
      this.switchFlage = id;
    },
    // 去数据详情
    goTODataDetails(){
 this.$router.push({
        name: "dataDetails",
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
  created() {
    settitle("数据统计");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("数据统计");
  }
};
</script>
<style scoped>
.personal_img_bj {
  background-image: url("../../assets/images/404@2x.png");
  height: 175px;
  background-repeat: no-repeat;
}
.personal_title {
  height: 48px;
  font-size: 14px;
  line-height: 3;
  display: flex;
  color: #908c8c;
  justify-content: space-around;
}
.switchBorder {
  border: 1px solid #d09e56;
  width: 90%;
  margin-top: 0%;
  background-color: #d09e56;
  border-radius: 4px;
}
.tab_fg_border {
  border: 2px solid #fff3f5f8;
}
.div_width_45 {
  width: 45%;
  float: left;
  margin-left: 4%;
  margin-top: 3%;
  height: 93px;
}
</style>