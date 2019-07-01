<template>
  <div>
    <!-- 每日辟谷套餐记录 -->
    <div class="service_div_k backgroun_color_fff margin_top_div5">
      <div class="div_display_flex font_color_ff backgroun_color_4A service_list">
        <div class="font_size_15 service_font">辟谷套餐</div>
        <div class="font_size_13 service_title_font">2018.09.30-2019.09.30</div>
      </div>

      <div
        v-for="(item,index) in [1,2,3]"
        class="div_display_flex font_color_00 font_size_13 text_center service_list_border"
      >
        <div class="service_width_25" @click="goToSOrderD('b')">序号</div>
        <div class="service_width_25">次数</div>
        <div class="service_width_25">食用时间</div>
        <div class="service_width_25">状态</div>
      </div>
    </div>

    <div class="service_Order_b backgroun_color_4A font_color_ff" @click="goToSOrderD('h')">
      <div class="div_display_flex margin_top_div5 padding_top_div3 font_size_16">
        <div class="div_width_80 margin_left_div3">会员套餐名称</div>
        <div class="div_width_20">24</div>
      </div>
      <div class="div_display_flex margin_top_div3 font_size_13">
        <div class="div_width_80 margin_left_div3">2018.09.30 12:00:00</div>
        <div class="div_width_20">已喝次数</div>
      </div>
      <div class="div_display_flex margin_top_div8 padding_bottom_4 font_size_13">
        <div class="div_width_80 margin_left_div2">适应症：脾胃不舒服的</div>
        <div class="div_width_20">已消费</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
// import func from "../../../vue-temp/vue-editor-bridge";
export default {
  name: "serviceOrder",
  data() {
    return {
      list:[],
    };
  },
  methods: {
    goToSOrderD(falg) {
      this.$router.push({
        name: "serviceOrderD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: falg
            }
          })
        }
      });
    },
    getItem(){
      this.$fetch.post('fruits/app/member/getMyOrder',{openId:localStorage.getItem('openId'),id:this.$route.query.id}).then(res =>{
        console.log(res);
        this.list = res.obj;
      })
    },
  },
  created() {
    settitle("健康界的轻奢");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },

  mounted() {
    console.log("服务订单");
    this.getItem();
  }
};
</script>
<style scoped>
.service_title_font {
  width: 60%;
  text-align: right;
  margin-right: 3%;
  padding-top: 1%;
}
.service_div_k {
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
}
.service_font {
  width: 40%;
  padding-left: 3%;
}
.service_width_25 {
  width: 25%;
}
.service_list_border {
  border-bottom: 1px solid #e9e9e9;
  line-height: 3;
}
.service_list_border {
  line-height: 3;
}
.service_list {
  line-height: 3;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.service_Order_b {
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
}
</style>