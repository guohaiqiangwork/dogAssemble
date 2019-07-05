<template>
  <div>
    <div v-if="list.length != 0 ">
      <div class="s_0_lb padding_bottom_4" v-for="(item,index) in list" :key="index">
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30 margin_left_div3">{{item.recipe}}</div>
          <div class="div_width_70 text_right margin_right_div3">{{item.time}}</div>
          <span @click="goDetail(item)">></span>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30 margin_left_div3">￥ {{item.price}}</div>
          <div
            class="div_width_70 text_right font_color_4A margin_right_div3"
          >{{item.state == 0?"未开始":item.state == 1?"服务中":item.state ==2?"已暂停":item.state==3?"已完成":""}}</div>
        </div>
      </div>
    </div>
    <div v-if="list.length == 0 ">
      <div class="text_center" style="margin-top16%">
        <img src="../../assets/images/1581@2x.png" width="65%" alt />
      </div>
      <div class="text_center font_size_15 font_color_99">暂无订单</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "sOrderList",
  data() {
    return {
      list: []
    };
  },
  methods: {
    getSereveList(id, state) {
      this.$fetch
        .post("fruits/app/member/getMyAllOrder", {
          openId: localStorage.getItem("openId"),
          id: localStorage.getItem("appUserId")
        })
        .then(res => {
          console.log(res);
          this.list = res.obj;
        });
    },
    goDetail(item) {
      this.$router.push({
        name: "serviceOrderD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: item.type == 1 ? "b" : "h",
              state: item.state,
              item: item
            }
          })
        }
      });
      // this.$router.push("/serviceOrder?id=" + id + "&state=" + state);
    }
  },
  created() {
    settitle("服务订单列表");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getSereveList(); //获取服务订单
    console.log("服务订单列表");
  }
};
</script>
<style scoped>
.s_0_lb {
  border-bottom: 1px solid #e9e9e9;
}
</style>