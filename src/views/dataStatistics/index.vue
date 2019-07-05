<template>
  <div>
    <!-- 头部 -->
    <div class="personal_img_bj text_center font_color_ff">
      <div class="font_size_16 padding_top_div8">总金额(元)</div>
      <div class="font_size_33 margin_top_div3">{{moneyList.count}}</div>
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
      <!-- 今天 -->
      <div>
        <div
          v-if="switchFlage == '4'"
          class="div_display_flex font_size_13 font_color_10"
          style="margin-top: 3%;margin-left: 4%;"
        >
          <div class="s_t" style="margin-top:0;"></div>
          <div class="margin_left_div3">
            <datetime
              v-model="valueS"
              @on-change="changeS"
              :title="''"
              clear-text
              @on-clear="setToday"
              :min-year="2019"
              :max-year="2300"
            ></datetime>
          </div>
          <div class="margin_left_div3 margin_top_div12">--</div>
          <div class="margin_left_div3">
            <datetime
              class="data_colse"
              v-model="valueE"
              @on-change="changeE"
              :title="''"
              clear-text
              @on-clear="setToday"
              :min-year="2019"
              :max-year="2300"
            ></datetime>
          </div>
        </div>
        <div
          v-if="type!=3"
          class="div_width_45 font_color_ff text_center backgroun_color_76"
          @click="goTODataDetails('1')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.customerRecharge}}</div>
          <div class="font_size_13 margin_top_div5">会员充值(元)</div>
        </div>
        <div
          v-if="type!=3"
          class="div_width_45 font_color_ff text_center backgroun_color_17"
          @click="goTODataDetails('4')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.crossCharge}}</div>
          <div class="font_size_13 margin_top_div5">跨店服务费(元)</div>
        </div>
        <div
          class="div_width_45 font_color_ff text_center"
          style="background-color:#B691FD"
          @click="goTODataDetails('5')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.videoCharge}}</div>
          <div class="font_size_13 margin_top_div5">视频收入(元)</div>
        </div>
        <div
          class="div_width_45 font_color_ff text_center"
          style="background-color:#E091FD"
          @click="goTODataDetails('6')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.videoCommission}}</div>
          <div class="font_size_13 margin_top_div5">视频返佣(元)</div>
        </div>
        <div
          class="div_width_45 font_color_ff text_center"
          style="background-color:#88C3FD"
          @click="goTODataDetails('7')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.recommendCommission}}</div>
          <div class="font_size_13 margin_top_div5">推荐返佣(元)</div>
        </div>
        <div
          class="div_width_45 font_color_ff text_center"
          style="background-color:#E8BB7A"
          @click="goTODataDetails('8')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.shopCommission}}</div>
          <div class="font_size_13 margin_top_div5">商城返佣(元)</div>
        </div>
        <div
          v-if="type!=3"
          class="div_width_45 font_color_ff text_center"
          style="background-color:#FFB469"
          @click="goTODataDetails('3')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.transferCharge}}</div>
          <div class="font_size_13 margin_top_div5">转店收入(元)</div>
        </div>
        <div
        	v-if="type!=3"          class="div_width_45 font_color_ff text_center"
          style="background-color:#FF776C"
          @click="goTODataDetails('8')"
        >
          <div class="font_size_25 margin_top_div8">{{moneyList.expendCharge}}</div>
          <div class="font_size_13 margin_top_div5">押金支出(元)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Datetime } from "vux";
export default {
  components: {
    Datetime
  },
  name: "dataStatistics",
  data() {
    return {
      tabList: [
        {
          name: "今天",
          id: "0"
        },
        {
          name: "昨天",
          id: "1"
        },
        {
          name: "近7天",
          id: "2"
        },
        {
          name: "近30天",
          id: "3"
        },
        {
          name: "自定义",
          id: "4"
        }
      ],
      switchFlage: "0", //默认展示tab
      valueS: "2019-09-09",
      valueE: "2020-09-09",
      moneyList: ""
    };
  },
  computed: {
    type() {
      return localStorage.getItem("type");
    }
  },
  methods: {
    // tab切换
    tabSwitch(id) {
      console.log(id);
      this.switchFlage = id;
      this.getStatistics(); //获取数据
    },
    // 去数据详情
    goTODataDetails(item) {
      console.log(item);
      this.$router.push({
        name: "dataDetails",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: item
            }
          })
        }
      });
    },
    //  时间事件
    changeS(value) {
      console.log("chan3ge", value);
      this.getStatistics(); //获取数据
    },
    changeE(value) {
      console.log("chang2e", value);
      this.getStatistics(); //获取数据
    },
    //时间
    setToday(value) {
      console.log(value);
      let now = new Date();
      let cmonth = now.getMonth() + 1;
      let day = now.getDate();
      if (cmonth < 10) cmonth = "0" + cmonth;
      if (day < 10) day = "0" + day;
      this.value1 = now.getFullYear() + "-" + cmonth + "-" + day;
      console.log(this.value1);
    },
    // 获取数据
    getStatistics() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        flag: this.switchFlage,
        startTime: this.valueS,
        endTime: this.valueE
      };
      this.$fetch.post(url.getStatistics, _obj).then(data => {
        if (data.code == 0) {
          this.moneyList = data.obj;
        } else {
          alert(data.msg);
        }
      });
    }
  },
  created() {
    settitle("数据统计");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getStatistics(); //获取数据
    console.log("数据统计");
  }
};
</script>
<style>
.date_choose .weui-cell__ft:after {
  display: none;
}
</style>

<style scoped>
.personal_img_bj {
  background-image: url(/static/img/bg@3x.b188845.png);
  height: 135px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.personal_title {
  height: 48px;
  font-size: 14px;
  line-height: 3.4;
  display: flex;
  color: #908c8c;
  justify-content: space-around;
  font-weight: 700;
  position: relative;
}
.switchBorder {
  border: 1px solid #d09e56;
  width: 90%;
  background-color: #d09e56;
  margin-bottom: 0;
  border-radius: 4px;
}
.tab_fg_border {
  border: 2px solid #fff3f5f8;
}
.div_width_45 {
  width: 45%;
  float: left;
  margin-left: 3.333%;
  margin-top: 3%;
  height: 93px;
}
</style>