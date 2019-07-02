<template>
  <div id="home">
    <div class="head_box">
      <!-- <img :src="'//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId='+this.str" alt="" width="500" height="500"> -->
      <swiper :list="imgList" :min-moving-distance="120" @on-index-change="onIndexChange" auto loop></swiper>
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input type="text" placeholder="搜索您想找的产品" v-model="iptVal" @input="input">
        <i></i>
      </div>
    </div>

    <itemes v-on:getList="goToList1"></itemes>
    <div style="height:8px;background-color:#F6F6F6"></div>
    <!-- <div class="hot_tit">热门推荐</div> -->
    <hot v-on:goToDetail="goToDetail1"></hot>
    <div class="bg_gray">
      <div class="hot_tit mt-space" @click="Test" v-if="goodsList.length">全部商品</div>
      <div id="whole">
        <div class="flex-between wrap" style="margin-bottom: 0.9rem;">
          <div
            class="goods_item"
            v-for="(item,index) in goodsList"
            :key="index"
            @click="goDetail(item)"
          >
            <div class="img_box">
              <img class="goods_img" :src="item.picId" alt="">
            </div>
            <div class="goods_msg">
              <p class="goods_name">{{item.name}}</p>
              <p>
                <span class="red" >¥{{type==1?item.original:item.price}}</span>
                <span class="goods_discount" v-if="type!=1&&type">¥{{item.original}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <whoel :listId="this.listId2"></whoel> -->
    </div>
    <!-- <item-goods></item-goods> -->
  </div>
</template>
<script>
import { Swiper } from "vux";
import { setTimeout, clearTimeout } from "timers";
import url from "../../bin/url";
let timer;
export default {
  components: {
    Swiper,
    Itemes: resolve => require(["./goods/index.vue"], resolve),
    hot: resolve => require(["./hotness/index.vue"], resolve),
    whoel: resolve => require(["./wholegoods/index.vue"], resolve)
  },

  watch: {
    // imgList: {
    //   handler(newName, oldName) {
    //     // this.imgList = newName;
    //     console.log(newName, 56456);
    //   }
    // }
  },
  data() {
    return {
      str: "",
      iptVal: null,
      imgList: [{}, {}],
      listId2: "",
      key: "value",
      goodsList: ""
    };
  },
  computed: {
    type(){
      return localStorage.getItem("type");
    }
  },
  methods: {
    goDetail(item) {
      this.$router.push("/goodsdetail?id=" + item.id);
    },
    // 监听
    goToList1(id) {
      this.listId2 = id;
      this.getGoodsList();
    },
    goToDetail1(item) {
      this.goDetail(item);
    },
    Test() {
      this.$fetch
        .post("fruits/app/personal/checkCustomer", {
          openId: localStorage.getItem("openId"),
          phone: "1"
        })
        .then(res => {
          console.log(res);
        });
    },
    onIndexChange(currentIndex) {},
    debounce(func, time, ctx) {},
    queryImg(str) {
      this.str = str;
      this.imgList = [];
      this.imgList.push(
        {
          url: "javascript:",
          img:
            "http://www.gsb.yuntunet.cn/fruits/app/blank/showPicture?attachmentId=" +
            str
          // title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "http://m.imeitou.com/uploads/allimg/2019021309/ipijc3xjpfo.jpg"
          // title: "送你一朵fua1"
        }
      );
    },
    input() {
      if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        console.log(this.iptVal);
        this.getGoods(this.iptVal)
        // this.filterList(this.list,this.iptVal);
        timer = null;
      }, 2000);
    },
    getGoods(val=''){
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.listId2 || "",
        name:val,
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getGoodsList, _obj).then(
        data => {
          console.log(data,'kjljlk');
          if (data.code == 0) {
            this.goodsList = data.obj;
            this.goodsList.forEach(item => {
              item.price = item.price.toFixed(2);
              item.original = item.original.toFixed(2)
              item.picId = url.imgUrl + item.picId;
            });
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 获取全部列表
    getGoodsList() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.listId2 || "",
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getGoodsList, _obj).then(
        data => {
          console.log(data,'kjljlk');
          if (data.code == 0) {
            this.goodsList = data.obj;
            this.goodsList.forEach(item => {
              item.price = item.price.toFixed(2);
              item.original = item.original.toFixed(2)
              item.picId = url.imgUrl + item.picId;
            });
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("商城");
  },
  mounted() {
    this.$fetch
      .post("fruits/app/blank/getBannerImg", { openId: localStorage.getItem("openId")})
      .then(res => {
        console.log(res);
        res.obj.forEach(e => {
          this.queryImg(e);
        });
      });
    this.getGoodsList(); //
  }
};
</script>
<style lang="less">
#home {
  height: auto;
  .mt-space {
    margin-top: 0.35rem;
  }
  .bg_gray {
    background: #f6f6f6;
    overflow: hidden;
  }
  .hot_tit {
    display: flex;
    align-items: center;
    padding: 0 0.31rem;
    margin-bottom: 0.09rem;
    font-size: .28rem;
    color: #000000;
  }
  .hot_tit::before {
    content: "";
    display: inline-block;
    width: 0.06rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    // margin-top: 0.6rem;
    background: #FF8156;
    border-radius: 0.03rem;
    line-height: 0.3rem;
  }
  .head_box {
    position: relative;
    height: 3.51rem;
    background-size: 100% 100%;
    overflow: hidden;
    // padding-top:1rem;
    background: #F5F5F5;
    .search_box {
      position: absolute;
      top: 0.14rem;
      left: 0.3rem;
      height: 0.7rem;
      width: 6.9rem;
      margin: 0 auto;
      padding: 0 0.31rem;
      // margin: 0.65rem 1.5rem 0;
      border-radius: 0.35rem;

      box-sizing: border-box;
      z-index: 1;
      display: flex;
      align-items: center;
      background: #fff;
      line-height: 3.5rem;
      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
      }
      .search_icon {
        font-size: 0.28rem;
        padding-right: 0.2rem;
      }
    }
    .vux-icon-dot{
      width: 7px;
      height: 3px;
      background:rgba(255,255,255,1);
      opacity:0.68;
      border-radius:10px;
    }
    .active{
      opacity: 1;
    }
  }
}
</style>
 <style lang="less">
#whole {
  padding: 0.35rem 0.42rem 0;
  .wrap {
    flex-wrap: wrap;
  }
  .goods_item {
    border-radius: 0.12rem;
    background: #fff;
    font-size: 0;
    margin-bottom: 7px;
    .img_box {
      border-bottom: 1px solid #e9e9e9;
      .goods_img {
        width: 2.57rem;
        height: 2.57rem;
        padding: 0.3rem 0.3rem;
      }
    }
    .goods_msg {
      width: 2.57rem;
      font-size: 0.28rem;
      padding: 0.21rem 0.31rem;
      .goods_name {
        color: #000;
        line-height: 0.4rem;
        font-family:PingFang SC;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .goods_discount{
        color:rgb(16,32,35);
        opacity:0.52;
        text-decoration: line-through;
        margin-right: 0.2rem;
        font-size: 0.18rem;
      }
    }
  }
}
</style>
