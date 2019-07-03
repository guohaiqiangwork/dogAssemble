<template>
  <div style="width:100%;height:100%;background:#F3F5F8;">
    <!-- 头部 -->
    <div class="personal_img_bj">
      <div
        class="font_size_12 font_color_ff text_right margin_right_div3 padding_top_div3"
        @click="goToActivityRules"
      >活动规则></div>
      <div class="text_center font_size_12 font_color_ff margin_top_div3">交易总额</div>
      <div
        class="font_size_25 font_color_ff text_center margin_top_div5"
      >{{getHealthBonusD.recommend}}</div>
      <div class="div_display_flex margin_top_div5">
        <div class="div_width_33 text_center font_size_12 font_color_ff">
          <div>{{getHealthBonusD.totalBonus}}</div>
          <div>推荐返佣金额</div>
        </div>
        <div class="div_width_33 text_center font_size_12 font_color_ff">
          <div>{{getHealthBonusD.videoDistri}}</div>
          <div>视频返佣金额</div>
        </div>
        <div class="div_width_33 text_center font_size_12 font_color_ff">
          <div>{{getHealthBonusD.orderDistri}}</div>
          <div>商城返佣金额</div>
        </div>
      </div>
    </div>
    <div
      class="health_title_f font_size_14 font_color_76 text_center"
      style="margin-top:-8%"
    >赶快邀请好友共赢健康奖金>></div>
    <!-- tab -->
    <div class="div_display_flex backgroun_color_fff personal_title">
      <div v-for="(item,index) in  tabList" @click="tabSwitch(item.id)" :key="index">
        <div :style="{color:(switchFlage != item.id ? '' :'#D09E56')}">{{item.name}}</div>
        <div class="switchBorder" v-if="switchFlage == item.id"></div>
      </div>
    </div>
    <!-- 推荐返佣 -->
    <div v-if="switchFlage == '001'">
      <div class="backgroun_color_f3" style="min-height:400px">
        <div class="div_display_flex padding_top_div3 backgroun_color_f3">
          <div class="national_flag_title margin_left_div3"></div>
          <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">推荐返佣</div>
          <div
            class="font_size_13 font_color_00 margin_top_div1"
            style="padding-left: 60%;"
            @click="goToHealthDetail"
          >全部返佣></div>
        </div>
        <div v-if="getRecommendBList.length !=  0">
          <div v-for="(item,index) in getRecommendBList" :key="index">
            <div class="div_display_flex margin_left_div3 margin_top_div3">
              <div class="div_width_70 font_size_14">
                {{item.name}}
                <span
                  v-if="item.state == 1"
                  style="border: 1px solid #4A7B67; padding: 1%;font-size: 12px;color:#4A7B67;"
                >开业</span>
                <span
                  v-if="item.state == 0"
                  style="border: 1px solid #E6435A; padding: 1%;font-size: 12px;color:#E6435A;"
                >未开店</span>
              </div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 1">家庭版</div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 0">店铺版</div>
            </div>
            <div class="margin_left_div3 margin_top_div2 font_color_A1 font_size_13">{{item.time}}</div>
          </div>
        </div>
        <div v-if="getRecommendBList.length ==  0">
          <div class="text_center margin_top_div3" style="margin-top:15%;">
            <img src="../../assets/images/1581@2x.png" width="45%" alt>
          </div>
          <div class="text_center font_size_15 font_color_99 margin_top_div3">您当前还没有返佣</div>
        </div>
      </div>
    </div>
    <!-- 视频返佣 -->
    <div v-if="switchFlage == '002'">
      <div class="backgroun_color_f3" style="min-height:400px">
        <div class="div_display_flex padding_top_div3 backgroun_color_f3">
          <div class="national_flag_title margin_left_div3"></div>
          <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">视频返佣</div>
          <div
            class="font_size_14 font_color_00 margin_top_div1"
            style="margin-left: 60%;"
            @click="goToHealthDetail"
          >全部返佣></div>
        </div>
        <div v-if="getVideoDistriList.length !=  0">
          <div v-for="(item,index) in getVideoDistriList" :key="index">
            <div class="div_display_flex margin_left_div3 margin_top_div3">
              <div class="div_width_70 font_size_14">
                {{item.name}}
                <span
                  v-if="item.state == 1"
                  style="border: 1px solid #4A7B67; padding: 1%;font-size: 12px;color:#4A7B67;"
                >开业</span>
                <span
                  v-if="item.state == 0"
                  style="border: 1px solid #E6435A; padding: 1%;font-size: 12px;color:#E6435A;"
                >未开店</span>
              </div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 1">家庭版</div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 0">店铺版</div>
            </div>
            <div class="margin_left_div3 margin_top_div2 font_color_A1 font_size_13">{{item.time}}</div>
          </div>
        </div>
        <div v-if="getVideoDistriList.length ==  0">
          <div class="text_center margin_top_div3" style="margin-top:15%;">
            <img src="../../assets/images/1581@2x.png" width="45%" alt>
          </div>
          <div class="text_center font_size_15 font_color_99 margin_top_div3">您当前还没有返佣</div>
        </div>
      </div>
    </div>
    <!-- 商城返佣 -->
    <div v-if="switchFlage == '003'">
      <div class="backgroun_color_f3" style="min-height:400px">
        <div class="div_display_flex padding_top_div3 backgroun_color_f3">
          <div class="national_flag_title margin_left_div3"></div>
          <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">商城返佣</div>
          <div
            class="font_size_14 font_color_00 margin_top_div1"
            style="margin-left: 60%;"
            @click="goToHealthDetail"
          >全部返佣></div>
        </div>
        <div v-if="getOrderDistriList.length !=  0">
          <div v-for="(item,index) in getOrderDistriList" :key="index">
            <div class="div_display_flex margin_left_div3 margin_top_div3">
              <div class="div_width_70 font_size_14">
                {{item.name}}
                <span
                  v-if="item.state == 1"
                  style="border: 1px solid #4A7B67; padding: 1%;font-size: 12px;color:#4A7B67;"
                >开业</span>
                <span
                  v-if="item.state == 0"
                  style="border: 1px solid #E6435A; padding: 1%;font-size: 12px;color:#E6435A;"
                >未开店</span>
              </div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 1">家庭版</div>
              <div class="div_with_30" style="margin-left:10%" v-if="item.type == 0">店铺版</div>
            </div>
            <div class="margin_left_div3 margin_top_div2 font_color_A1 font_size_13">{{item.time}}</div>
          </div>
        </div>
        <div v-if="getOrderDistriList.length ==  0">
          <div class="text_center margin_top_div3" style="margin-top:15%;">
            <img src="../../assets/images/1581@2x.png" width="45%" alt>
          </div>
          <div class="text_center font_size_15 font_color_99 margin_top_div3">您当前还没有返佣</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "healthBonus",
  data() {
    return {
      tabList: [
        {
          name: "推荐返佣",
          id: "001"
        },
        {
          name: "视频返佣",
          id: "002"
        },
        {
          name: "商城返佣",
          id: "003"
        }
      ],
      switchFlage: "001",
      getRecommendBList: "", //推荐返佣
      getVideoDistriList: "", //视频返佣
      getOrderDistriList: "", //订单返佣
      getHealthBonusD: "" //返佣
    };
  },
  methods: {
    //   tab切换
    tabSwitch(id) {
      switch (id) {
        case "001":
          this.getRecommendB();
          break;
        case "002":
          this.getVideoDistri();
          break;
        case "003":
          this.getOrderDistri();
          break;
      }
      this.switchFlage = id;
    },
    // 健康奖金详情
    goToHealthDetail() {
      this.$router.push({
        name: "healthDetail",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: this.switchFlage
            }
          })
        }
      });
    },
    // 活动规则
    goToActivityRules() {
      this.$router.push({
        name: "activityRules",
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
    // 健康奖金金额统计
    getHealthBonus() {
      let _obj = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.getHealthBonus, _obj).then(
        data => {
          if (data.code == 0) {
            this.getHealthBonusD = data.obj;
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 健康奖金--推荐返佣列表
    getRecommendB() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: "",
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getRecommendB, _obj).then(
        data => {
          if (data.code == 0) {
            this.getRecommendBList = data.obj;
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 视频返佣列表
    getVideoDistri() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: "",
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getVideoDistri, _obj).then(
        data => {
          if (data.code == 0) {
            this.getVideoDistriList = data.obj;
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 健康奖金商城
    getOrderDistri() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: "",
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getOrderDistri, _obj).then(
        data => {
          if (data.code == 0) {
            this.getOrderDistriList = data.obj;
          }else{
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
    settitle("健康奖金");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    // console.log("我是健康奖金");
    this.getHealthBonus();
    this.getRecommendB();
  }
};
</script>
<style scoped>
.personal_img_bj {
  background-image: url("../../assets/images/bg@2x.png");
  background-size: 100%;
  height: 200px;
  background-repeat: no-repeat;
}
.health_title_f {
  background: linear-gradient(#ffdfb1, #e2ae64);
  line-height: 3;
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
  border: 2px solid #e8bb7a;
  width: 90%;
  margin-top: 0%;
  border-radius: 4px;
}
.national_flag_title {
  width: 2px;
  height: 15px;
  background-color: #4a7b67;
  margin-top: 1%;
  border: 1px solid #4a7b67;
  border-radius: 10px;
}
</style>