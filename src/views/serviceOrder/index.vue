<template>
  <div>
    <!-- 每日辟谷套餐记录   -->
    <div v-if="biGList.length !=0">
      <div
        class="service_div_k backgroun_color_fff margin_top_div5"
        v-for="(item,index) in biGList"
        :key="index"
      >
        <div class="div_display_flex font_color_ff backgroun_color_4A service_list">
          <div class="font_size_15 service_font">{{item.recipe}}</div>
          <div class="font_size_13 service_title_font">{{item.time}}</div>
        </div>

        <div class="div_display_flex font_color_00 font_size_13 text_center service_list_border">
          <div class="service_width_25" @click="goToSOrderD('b',item.id)">序号</div>
          <div class="service_width_25">次数</div>
          <div class="service_width_25">食用时间</div>
          <div class="service_width_25">状态</div>
        </div>
        <div
          v-for="(items,index) in item.biguDayLists"
          :key="index"
          class="div_display_flex font_color_00 font_size_13 text_center service_list_border"
        >
          <div class="service_width_25" @click="goToSOrderD('b')">{{index + 1}}</div>
          <div class="service_width_25">{{items.num}}</div>
          <div class="service_width_25">{{items.time}}</div>
          <div class="service_width_25" v-if="item.state == 0">未开始</div>
          <div class="service_width_25" v-if="item.state == 1">已消费</div>
          <div class="service_width_25" v-if="item.state == 2">已暂停</div>
          <div class="service_width_25" v-if="item.state == 3">已完成</div>
        </div>
      </div>
    </div>
    <!-- 会员套餐 -->
    <div v-if="huiYList.length !=0">
      <div
        class="service_Order_b backgroun_color_4A font_color_ff"
        v-for="(item,index) in huiYList"
        :key="index"
      >
      <div @click="goToSOrderD('h',item)">
        <div class="div_display_flex margin_top_div5 padding_top_div3 font_size_16">
          <div class="div_width_80 margin_left_div3">{{item.recipe}}</div>
          <div class="div_width_20">{{item.num}}</div>
        </div>
        <div class="div_display_flex margin_top_div3 font_size_13">
          <div class="div_width_80 margin_left_div3">{{item.time}}</div>
          <div class="div_width_20">已喝次数</div>
        </div>
        <div class="div_display_flex margin_top_div8 padding_bottom_4 font_size_13">
          <div
            class="div_width_80 margin_left_div2"
           
          >适应症：{{item.disease}}</div>
          <div class="div_width_20" v-if="item.state == 0">未开始</div>
          <div class="div_width_20" v-if="item.state == 1">已消费</div>
          <div class="div_width_20" v-if="item.state == 2">已暂停</div>
          <div class="div_width_20" v-if="item.state == 3">已完成</div>
        </div>

        </div>
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
      list: [],
      huiYList: [],
      biGList: []
    };
  },
  methods: {
    goToSOrderD(falg, item) {
      this.$router.push({
        name: "serviceOrderD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: falg,
              item: item
            }
          })
        }
      });
    },
    // 获取数据
    getItem() {
      this.$fetch
        .post("fruits/app/member/getMyOrder", {
          openId: localStorage.getItem("openId"),
          id: this.$route.query.id
        })
        .then(res => {
          if (res.code == 0) {
            console.log(res.obj);
            res.obj.forEach(item => {
              if (item.type == 0) {
                this.huiYList.push(item);
              } else {
                this.biGList.push(item);
              }
            });
            // this.list = res.obj;
          } else {
            alert(res.msg);
          }
        });
    }
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