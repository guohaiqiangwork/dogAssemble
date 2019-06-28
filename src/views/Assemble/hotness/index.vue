<template>
  <div id="hot">
    <div class="hot_tit" v-if="home&&hotList.length">热门推荐</div>
       <div class="foryou" v-if="!home&&hotList.length">为您推荐</div>
    <div class="hot_item">
      <div v-for="(item,index) in hotList" :key="index" class="mt_size" @click="goToDetail(item)">
        <img class="hot_logo" :src="item.picId" alt>
        <p class="hot_msg">
          <span>{{item.name}}</span>
          <br>
          <span class="hot_price">{{`￥${type == 1?item.original:item.price}`}}</span>
          <span class="goods_discount" v-if="type!=1">¥{{item.original}}</span>
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
        }
      ]
    };
  },
  computed:{
    type(){
      return localStorage.getItem('type');
    },
    home(){
      return this.$route.path == '/home'
    }
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
              item.price = item.price.toFixed(2);
              item.original = item.original.toFixed(2);
              item.picId = url.imgUrl + item.picId;
              console.log(item.picId);
            });
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    goToDetail(id) {
      this.$emit("goToDetail", id);
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      
      span {
        white-space: wrap;
      }
      .hot_price {
        color: #ff3636;
        font-size: 0.16rem;
      }
     
    }
  }
   .goods_discount{
        color:rgb(16,32,35);
        opacity:0.52;
        text-decoration: line-through;
        margin-right: 0.2rem;
        font-size: 0.13rem;
      }
}
</style>
