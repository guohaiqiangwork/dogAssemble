<template>
  <div id="TabBar">
    <div class="tabBar_bt">
      <flexbox style="text-align: center;padding: 4%;    background-color: #fff;">
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(0,'nationalStores')">
            <img src="../assets/images/404@2x.png" style="width: 30%;">
          </div>
          <div :class="{ 'active': actives == '0'}">首页</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(1)">
            <img src="../assets/images/404@2x.png" style="width: 30%;">
          </div>
          <div :class="{ 'active': actives == '1'}">商户</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(2,'personal')">
            <img src="../assets/images/404@2x.png" style="width: 30%;">
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