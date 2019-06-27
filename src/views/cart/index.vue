<template>
  <div id="cart">
    <div class="package_tit">
      <div class="if_post red" v-if="freeState.isFree == 1">包邮条件</div>
      <p class="word_tit">全场满{{freeState.free == 0?freeState.free:''}}包邮，欢迎抢购</p>
    </div>
    <cart-list
      @changeNum="changeNum"
      @package="pack"
      @bottomEve="getBottom"
      @receiveArray="getArray"
    ></cart-list>
    <div style="overflow:hidden">
      <!-- <checklist ref="demoObject" :title="('Option Array with key and value (key must be string)')" :options="objectList" v-model="objectListValue"></checklist> -->
      <!-- <check-icon :value.sync="demo1"> ({{ demo1 }})</check-icon> -->

      <i class></i>
      <div class="foryou">为您推荐</div>
      <hot class="mb-space" v-on:goToDetail="goDetail"></hot>
      <div class="cart_btm" v-if="Object.keys(bottomMsge).length">
        <span>已选{{bottomMsge.checkcount}}</span>
        <div class="flex_countrow">
          <span class="count_box">
            <span>
              合计:
              <span class="red final_price">{{bottomMsge.totalprice.toFixed(2)}}元</span>
            </span>
            <span
              v-if="freeState.isFree == 1 && freeState.free - bottomMsge.totalprice>0"
            >还差{{(freeState.free - bottomMsge.totalprice).toFixed(2)}}元可享包邮</span>
          </span>

          <div class="deal_down" @click="payPage">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checklist, CheckIcon } from "vux";
export default {
  components: {
    Checklist,
    CheckIcon,
    CartList: resolve => require(["./chatList/index.vue"], resolve),
    hot: resolve => require(["@/views/Assemble/hotness/index.vue"], resolve)
  },
  data() {
    return {
      key: "value",
      demo1: false,
      freeState: {},
      bottomMsge: {},
      arr: [],
      goodList: []
      //  objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
      //  objectListValue:null,
    };
  },
  watch: {
    bottomMsge: {
      handler(val) {
        this.bottomMsge = val;
      }
    }
  },
  methods: {
    //去支付页面
    payPage() { 
      var arr = [];
      var count = 0;
      this.goodList.forEach(e => {
        if (e.ischeck) {
          count += e.count;
          arr.push({
            id: e.goodsId,
            num: e.count

          });
        }
      });
      if (!arr.length) {
        return;
      }
      var obj = {
        openId: "1313121231",
        goodList: arr
      };
      obj = JSON.stringify(obj);
      this.$router.push("/paysure?data=" + obj + "&count="+count);
    },
    //数量改变
    changeNum(e, arr) {
      this.$parent.buyNum = e;
         localStorage.setItem('catnum',this.$parent.buyNum);
    },
    // 底部信息栏
    getBottom(val) {
      this.bottomMsge = val;
    },
    //邮费
    pack(val) {
      this.freeState = val;
    },
    //购物车数据
    getArray(arr, n) {
      if (!arr.length) {
        this.goodList = arr;
        return;
      }
      this.goodList = arr;
    },
    // 去详情
    goDetail(item) {
        console.log(item)
      this.$router.push("/goodsdetail?id=" + item.id);
    }
  },

  created() {
    settitle("购物车");
  },
  mounted() {
    // console.log()
  }
};
</script>
<style lang="less">
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8b8aee;
}
#cart{

    width: 100%;
    // height: 100%;
    background: #F8F8F8;
    min-height: calc(100% - 48px);
    .mb-space{
         margin-bottom:53px;
    }
    .vux-number-selector svg{
        fill:#4a7b67;
    }
  .vux-number-selector.vux-number-disabled svg {
    fill: #ccc;
  }
  .package_tit {
    display: flex;
    align-items: center;
    padding: 0.09rem 0.3rem;
    font-size: 0.24rem;
    // height:0.58rem;
    background: #f8f8f8;
    .if_post {
      padding: 0.03rem 0.1rem;
      margin-right: 0.17rem;
      border: 1px solid #e6435a;
    }
    .word_tit {
      font-weight: 700;
      line-height: 0.33rem;
    }
  }
  .foryou {
    padding: 0.64rem 0 0.52rem 0;
    font-size: 0.3rem;
    color: #4a7b67;
    text-align: center;
    background: #fff;
  }
  .foryou:before {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0.26rem 0.1rem 0;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .foryou:after {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0 0.1rem 0.26rem;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .cart_btm {
    position: fixed;
    width: 100%;
    bottom: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 0.3rem;
    box-sizing: border-box;
    line-height: 0.4rem;
    background: #e9efec;
    .deal_down {
      padding: 0.3rem 0.56rem;
      margin-left: 0.28rem;
      color: #fff;
      background: rgba(74, 123, 103, 1);
    }
    .final_price {
      font-size: 0.26rem;
    }
    .count_box {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      // font-size: 0.36rem;
      // line-height: 0.5rem;
    }
    .flex_countrow {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
