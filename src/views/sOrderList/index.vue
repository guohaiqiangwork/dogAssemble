<template>
<div>
  <div class="s_0_lb padding_bottom_4" v-for="(item,index) in list" :key="index">
    <div class="div_display_flex margin_top_div3">
      <div class="div_width_30 margin_left_div3">{{item.recipe}}</div>
      <div class="div_width_70 text_right margin_right_div3">item.num/item.time</div>
      <span @click="goDetail(item.id,item.state)">></span>
    </div>
    <div class="div_display_flex margin_top_div3">
      <div class="div_width_30 margin_left_div3">￥item.price</div>
      <div class="div_width_70 text_right font_color_4A margin_right_div3">{{item.state == 0?"未开始":item.state == 1?"服务中":item.state ==2?"已暂停":item.state==3?"已完成":""}}</div>
    </div>
  </div>
</div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "sOrderList",
  data() {
    return {
      list:[],
    };
  },
  methods: {
    getSereveList(id,state){
      this.$fetch.post('fruits/app/member/getMyAllOrder',{openId:localStorage.getItem('openId'),id:localStorage.getItem("appUserId")}).then(res=>{
        console.log(res);
        this.list = res.obj;
      })
    },
    goDetail(){
      this.$router.push('/serviceOrder?id='+id+"&state="+state);
      
    }
  },
  created() {
    settitle("服务订单列表");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getSereveList();
    console.log("服务订单列表");
  }
};
</script>
<style scoped>
.s_0_lb {
  border-bottom: 1px solid #e9e9e9;
}
</style>