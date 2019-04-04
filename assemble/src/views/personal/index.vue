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
      <div v-if="switchFlage == '002'">已完成</div>
      <!-- 全部 -->
      <div v-if="switchFlage == '003'">全部</div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
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
      switchFlage: "001"
    };
  },
  created() {
    settitle("我的");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  methods: {
    tabSwitch: function(id) {
      this.switchFlage = id;
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
</style>

