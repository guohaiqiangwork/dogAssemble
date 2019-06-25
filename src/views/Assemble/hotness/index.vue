<template>
  <div id="hot">
    <div class="hot_item">
      <div v-for="(item,index) in hotList" :key="index" class="mt_size">
        <img class="hot_logo" :src="item.picId" alt>
        <p class="hot_msg">
          <span>{{item.name}}</span>
          <br>
          <span class="hot_price">{{`￥${item.original}`}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../../bin/url";
export default {
  data() {
    return {
      hotList: [
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "蔬菜置物架",
          price: 21.9
        },
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "熊孩子蔬菜干",
          price: 19.9
        },
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "香菇脆",
          price: 13.9
        },
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "蔬菜置物架",
          price: 21.9
        },
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "熊孩子蔬菜干",
          price: 19.9
        },
        {
          logo: require("../../../assets/images/WechatIMG102.png"),
          tip: "香菇脆",
          price: 13.9
        }
      ]
    };
  },
  methods: {
    getRecommend() {
      let _obj = {
        openId: url.openId
      };
      this.$fetch.post(url.getRecommend, _obj).then(
        data => {
          if (data.code == 0) {
            this.hotList = data.obj;
            this.hotList.forEach(item => {
              item.picId = url.imgUrl + item.picId;
              console.log(item.picId)
            });
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  mounted() {
    this.getRecommend(); //获取推荐列表
  }
};
</script>
<style lang="less">
#hot {
  background: #fff;

  .hot_item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.42rem;
    .mt_size {
      margin: 0.2rem 0;
      min-width: 30%;
      max-width: 30%;
    }
    .hot_logo {
      height: 1.8rem;
      width: 1.8rem;
    }
    .hot_msg {
      
      text-align: left;
      span{
        white-space: wrap;
      }
      .hot_price {
        color: #ff3636;
        font-size: 0.28rem;
      }
    }
  }
}
</style>
