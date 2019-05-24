<template>
  <div id="TabBar">

    <router-view class="routeview"></router-view>
    <div class="tabBar_bt flex-between  align-center">
      <flexbox style="text-align: center;height:80px; background-color: #fff;">
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
        <flexbox-item>
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
  components: {
    Flexbox,
    FlexboxItem
  },
  name: "TabBar",
  props: {},
  data: function() {
    return {
      actives: 0
    };
  },
  methods: {
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
  }
};
</script>

<style scoped>
.routeview{
  margin-bottom: 80px;
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
</style>