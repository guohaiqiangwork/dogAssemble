<template>
  <div id="TabBar">
    <router-view class="routeview"></router-view>
    <div class="tabBar_bt flex-between align-center">
      <flexbox style="text-align: center; background-color: #fff;">
        <flexbox-item>
          <router-link to="/home">
            <div class="flex-demo" v-if="actives != '0'">
              <img src="../assets/images/home@2x.png" style="width: .4rem;height:0.4rem;">
            </div>
          </router-link>
          <router-link to="/home">
            <div class="flex-demo" v-if="actives == '0'">
              <img src="../assets/images/home_active@2x.png" style="width: .4rem;height:0.4rem;">
            </div>
            <div :class="{ 'active': actives == '0'}" class="font_color_BF">首页</div>
          </router-link>
        </flexbox-item>

        <flexbox-item>
          <div class="flex-demo pos" @click="didClickedItem(1,'cart')" v-if="actives != '1'">
            <img src="../assets/images/goodsCar.png" style="width: .4rem;height:0.4rem;">
            <badge class="msg-sign" :text="buyNum" v-if="buyNum!=0"></badge>
          </div>
          <div class="flex-demo pos" @click="didClickedItem(1,'cart')" v-if="actives == '1'">
            <img src="../assets/images/goodsCar_active.png" style="width: .4rem;height:0.4rem;">
            <badge class="msg-sign" :text="buyNum" v-if="buyNum!=0"></badge>
          </div>
          <div :class="{ 'active': actives == '1'}" class="font_color_BF">购物车</div>
        </flexbox-item>

        <flexbox-item v-if="this.route == '/goodsdetail'">
          <div class="flex-start">
            <div class="foot-btn green" @click="addCart('cart')">加入购物车</div>
            <div class="foot-btn yello" @click="ImmeBuy('imme')">立即购买</div>
          </div>
        </flexbox-item>
        <flexbox-item v-else>
          <div class="flex-demo" @click="didClickedItem(2,'personal')" v-if="actives != '2'">
            <img src="../assets/images/personCenter.png" style="width: .4rem;height:0.4rem;">
          </div>
          <div class="flex-demo" @click="didClickedItem(2,'personal')" v-if="actives == '2'">
            <img src="../assets/images/personCenter_active.png" style="width: .4rem;height:0.4rem;">
          </div>
          <div :class="{ 'active': actives == '2'}" class="font_color_BF">个人中心</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Badge } from "vux";
export default {
  name: "TabBar",
  components: {
    Flexbox,
    FlexboxItem,
    Badge
  },
  computed: {
    route() {
      return this.$route.path;
    },
    cartNum() {
      return localStorage.getItem("catnum");
    }
  },
  props: {},
  data: function() {
    return {
      actives: 0,
      show: false,
      buyNum: 0,
      title: ""
    };
  },
  methods: {
    ImmeBuy(word) {
      this.show = true;
      this.title = word;
    },
    addCart(word) {
      this.show = true;
      this.title = word;
      // this.buyNum++;
    },
    didClickedItem: function(tag, name) {
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
    },
    setBage() {
      this.buyNum = localStorage.getItem("catnum");
    }
  },
  mounted() {
    this.setBage();
    // console.log(this.route)
  }
};
</script>

<style scoped>
#TabBar {
  height: 100%;
}
.flex-demo{
  margin-top: 0.05rem;
}
.vux-flexbox .vux-flexbox-item {
  width: auto;
  min-width: unset;
  font-size: 0;
  margin-left: 0 !important;
}
.pos {
  position: relative;
}
.msg-sign {
  position: absolute;
  top: 0;
  left: calc(50% + 8px);
}
.routeview {
  margin-bottom: .9rem;
}
.tabBar_bt {
  position: fixed;
  bottom: 0;
  color: red;
  width: 100%;
  height: 0.9rem;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #eee;
}
.active {
  color: #4A7B67;
}

.foot-btn {
  width: 1.8rem;
  height: .9rem;
  text-align: center;
  line-height: .9rem;
  font-size: .26rem;
  color: #fff;
}
.green {
  background: #4a7b67;
}
.yello {
  background: #f78447;
}
</style>