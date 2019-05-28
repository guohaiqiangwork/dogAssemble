<template>
  <div id="TabBar">

    <router-view class="routeview"></router-view>
    <div class="tabBar_bt flex-between  align-center">
      <flexbox style="text-align: center;height:48px; background-color: #fff;">
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(0,'home')">
            <img src="../assets/images/Signal.png" style="width: 30%;">
          </div>
          <div :class="{ 'active': actives == '0'}">首页</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(1,'cart')">
            <img src="../assets/images/Signal.png" style="width: 30%;">
          </div>
          <div :class="{ 'active': actives == '1'}">商户</div>
        </flexbox-item>
       
        <flexbox-item v-if="this.route == '/goodsdetail'">
            <div class="flex-start">
              <div class="foot-btn green">加入购物车</div>
              <div class="foot-btn yello" @click="ImmeBuy">立即购买</div>
            </div>
        </flexbox-item>
         <flexbox-item v-else>
          <div class="flex-demo" @click="didClickedItem(2,'personal')">
            <img src="../assets/images/Signal.png" style="width: 30%;">
          </div>
          <div :class="{ 'active': actives == '2'}">个人中心</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
   name: "TabBar",
  components: {
    Flexbox,
    FlexboxItem
  },
  computed:{
    route(){
      return this.$route.path
    }
  },
  props: {},
  data: function() {
    return {
      actives: 0,
      show:false
    };
  },
  methods: {
    ImmeBuy(){
      this.show = true;
    },
    didClickedItem: function(tag, name) {
      console.log(tag);
      this.actives = tag;
      this.$router.push({
        name: name,
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
  mounted() {
    // console.log(this.route)
  },
};
</script>

<style scoped>
.vux-flexbox .vux-flexbox-item{
  width: auto;
  min-width: unset;
}
.routeview{
  margin-bottom: 48px;
}
.tabBar_bt {
  position: fixed;
  bottom: 0;
  color: red;
 
  width: 100%;
}
.active {
  color: #1e90ff;
}

.foot-btn{
  width:80px;
  height:48px;
  text-align: center;
  line-height: 48px;
  font-size:13px;
  color: #fff;
}
.green{
  background: #4A7B67;
}
.yello{
  background: #F78447;
}
</style>