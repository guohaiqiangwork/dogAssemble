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
             <div class="font_size_13 service_title_fontP">¥{{item.price}}</div>
        </div>

        <!-- <div class="div_display_flex font_color_00 font_size_13 text_center service_list_border">
          <div class="service_width_25" @click="goToSOrderD('b',item.id)">序号</div>
          <div class="service_width_25">次数</div>
          <div class="service_width_25">食用时间</div>
          <div class="service_width_25">状态</div>
        </div> -->
        <div
          v-for="(items,index) in item.biguDayLists"
          :key="index"
          class="div_display_flex font_color_00 font_size_13 text_center service_list_border"
        >
          <!-- <div class="service_width_25" >{{index + 1}}</div> -->
          <div class="service_width_50" @click="goToSOrderD('b',item,items.num)"> 第{{items.num}}天</div>
          <!-- <div class="service_width_25">{{items.time}}</div> -->
          <!-- <div class="service_width_51" @click="goToSOrderD('b',item,items.num)" v-if="item.state == 0">未开始  <img src="../../assets/images/right.png" style="width:8px;height:13px;margin-left: 4%" alt=""></div> -->
          <div class="service_width_51" @click="goToSOrderD('b',item,items.num)" style="color:#000000" v-if="item.state == 1">待完成  <img src="../../assets/images/right.png" style="width:8px;height:13px;margin-left: 4%" alt=""></div>
          <div class="service_width_51" @click="goToSOrderD('b',item,items.num)" style="color:#E6435A" v-if="item.state == 2">已完成  <img src="../../assets/images/right.png" style="width:8px;height:13px;margin-left: 4%" alt=""></div>
          <div class="service_width_51" @click="goToSOrderD('b',item,items.num)" style="color:#4AB67" v-if="item.state == 3">已作废  <img src="../../assets/images/right.png" style="width:8px;height:13px;margin-left: 4%" alt=""></div>
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
            <div class="div_width_20" style="text-align:center">{{item.num}}</div>
          </div>
          <div class="div_display_flex margin_top_div3 font_size_13">
            <div class="div_width_80 margin_left_div3">{{item.time}}</div>
            <div class="div_width_20" style="text-align:center">已喝次数</div>
          </div>
          <div class="div_display_flex margin_top_div3 font_size_13">
            <div class="div_width_80 margin_left_div3"></div>
            <div class="div_width_20" style="text-align:center">{{item.price}}</div>
          </div>
          <div class="div_display_flex margin_top_div8 padding_bottom_4 font_size_13">
            <div class="div_width_80 margin_left_div2">适应症：{{item.disease}}</div>
            <div class="div_width_20" style="text-align:center" v-if="item.state == 0">未开始</div>
            <div class="div_width_20" style="text-align:center" v-if="item.state == 1">已消费</div>
            <div class="div_width_20" style="text-align:center" v-if="item.state == 2">已暂停</div>
            <div class="div_width_20" style="text-align:center" v-if="item.state == 3">已完成</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="noneList.length == 0 ">
      <div class="text_center" style="margin-top16%">
        <img src="../../assets/images/1581@2x.png" width="65%" alt />
      </div>
      <div class="text_center font_size_15 font_color_99">暂无数据</div>
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
      biGList: [],
      noneList:''
    };
  },
  methods: {
    goToSOrderD(falg, item,num) {
      this.$router.push({
        name: "serviceOrderD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: falg,
              item: item,
              num:num
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
            this.noneList = res.obj
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
  width: 100%;
  /* text-align: right; */
  margin-right: 3%;
  padding-top: 1%;
}
.service_title_fontP {
  width: 30%;
  text-align: right;
  font-size: 18px;
  margin-right: 3%;
  padding-top: 1%;
}
.service_div_k {
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
}
.service_font {
  width: 20%;
  padding-left: 3%;
}
.service_width_25 {
  width: 25%;
}
.service_width_50 {
  width: 50%;
  text-align: left;
    margin-left: 3%;
}
.service_width_51 {
  width: 50%;
      text-align: right;
    margin-right: 3%;
}
.service_list_border {
  border-bottom: 1px solid #e9e9e9;
  line-height: 3;
}
.service_list_border {
  line-height: 3;
}
.service_list {
  line-height: 2;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.service_Order_b {
  width: 95%;
  margin-left: 2%;
  border-radius: 8px;
}
</style>