<template>
  <div>
    <div class="font_size_15 font_color_010 div_display_flex me_d margin_top_div3">
      <div class="s_t" style="margin-top:3%"></div>
      <div style="margin-top:-2.5%;margin-left:3%">{{allOrderList.name}}</div>
      <span class="margin_left_div3" style="margin-top:-2%;">{{allOrderList.phone}}</span>
    </div>
    <div class="background_color_F8" style="height:8px"></div>
    <div
      v-for="(item,index) in allOrderList.orderLists"
      :key="index"
      style="border-top:1px solid #f8f8f8"
      @click="goTOallMembersDD(item.id)"
    >
      <div class="div_display_flex margin_top_div5 font_size_14 font_color_1A margin_left_div3">
        <div class="div_width_25 margin_left_div3" @click="goToDetails(item.id)">{{item.recipe}}</div>
        <div class="div_width_70 text_right">{{item.time}}</div>
        <div class="div_width_8 text_right">></div>
      </div>
      <div class="div_display_flex font_size_14 margin_top_div2 margin_left_div3">
        <div class="div_width_50 margin_left_div3">¥{{item.price}}</div>
        <div
          class="div_width_50 text_right"
          style="color:#4A7B67;padding-right:8%"
          v-if="item.state == 0 "
        >未开始</div>
        <div
          class="div_width_50 text_right"
          style="color:#4A7B67;padding-right:8%"
          v-if="item.state == 1 "
        >服务中</div>
        <div
          class="div_width_50 text_right"
          style="color:#E6435A;padding-right:8%"
          v-if="item.state == 2 "
        >已暂停</div>
        <div
          class="div_width_50 text_right"
          style="color:#828B8C;padding-right:8%"
          v-if="item.state == 3 "
        >已完成</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "allMembersDetails",
  data() {
    return {
      phone: "",
      allOrderList: {
        name: "詹某某",
        phone: "18600000000",
        orderLists: ''
      }
    };
  },
  methods: {
    //   去详情
    goTOallMembersDD(id) {
      console.log(id);
      this.$router.push({
        name: "allMembersDetailsD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: id
            }
          })
        }
      });
    },
    // 查询订单会员
    getAllOrder() {
      let keywords = {
        openId: localStorage.getItem("openId"),
        id: this.routeParams.data.id
      };
      this.$fetch.post(url.getAllOrder, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.allOrderList = data.obj;
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("全部会员详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams)
  },

  mounted() {
    //获取列表
    this.getAllOrder();
  }
};
</script>
<style scoped>
.me_d {
  line-height: 3;
  /* border-radius: 5px; */
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_n {
  line-height: 3;
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_s {
  background-color: #4a7b67;
  height: 16px;
  width: 2%;
}
</style>