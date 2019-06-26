<template>
  <div id="TabBar">
    <router-view class="routeview"></router-view>
    <div class="tabBar_bt flex-between align-center">
      <flexbox style="text-align: center;height:48px; background-color: #fff;">
        <flexbox-item>
          <div class="flex-demo" @click="didClickedItem(0,'home')" v-if="actives != '0'">
            <img src="../assets/images/1@2x.png" style="width: 18%;">
          </div>
          <div class="flex-demo" @click="didClickedItem(0,'home')" v-if="actives == '0'">
            <img src="../assets/images/1z@2x.png" style="width: 18%;">
          </div>
          <div :class="{ 'active': actives == '0'}" class=" font_color_33">首页</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo pos" @click="didClickedItem(1,'cart')" v-if="actives != '1'">
            <img src="../assets/images/4@2x.png" style="width: 18%;">
            <badge class="msg-sign" :text="buyNum" v-if="buyNum"></badge>
          </div>
          <div class="flex-demo pos" @click="didClickedItem(1,'cart')" v-if="actives == '1'">
            <img src="../assets/images/2z@2x.png" style="width:18%;">
            <badge class="msg-sign" :text="buyNum" v-if="buyNum"></badge>
          </div>
          <div :class="{ 'active': actives == '1'}" class=" font_color_33">
          商户
          </div>
        </flexbox-item>

        <flexbox-item v-if="this.route == '/goodsdetail'">
          <div class="flex-start">
            <div class="foot-btn green" @click="addCart('cart')">加入购物车</div>
            <div class="foot-btn yello" @click="ImmeBuy('imme')">立即购买</div>
          </div>
        </flexbox-item>
        <flexbox-item v-else>
          <div class="flex-demo" @click="didClickedItem(2,'personal')" v-if="actives != '2'">
            <img src="../assets/images/geren@2x.png" style="width: 18%;">
          </div>
          <div class="flex-demo" @click="didClickedItem(2,'personal')" v-if="actives == '2'">
            <img src="../assets/images/gerenzhongxin@2x.png" style="width: 18%;">
          </div>
          <div :class="{ 'active': actives == '2'}" class=" font_color_33">个人中心</div>
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
    }
  },
  props: {},
  data: function() {
    return {
      actives: 0,
      show: false,
      buyNum: 0,
      title:""
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
    setBage(){
      this.buyNum = localStorage.getItem('catnum')
    }
  },
  mounted() {
    this.setBage();
    // console.log(this.route)
  }
};
</script>

<style scoped>
#TabBar{
  height: 100%;
}
.vux-flexbox .vux-flexbox-item {
  width: auto;
  min-width: unset;
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
  margin-bottom: 48px;
}
.tabBar_bt {
  position: fixed;
  bottom: 0;
  color: red;
  width: 100%;
}
.active {
  color: #896628;
}

.foot-btn {
  width: 80px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  font-size: 13px;
  color: #fff;
}
.green {
  background: #4a7b67;
}
.yello {
  background: #f78447;
}
</style>