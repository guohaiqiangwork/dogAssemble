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
    <itemes  v-on:getList="goToList1"></itemes>
    <div class="hot_tit">热门推荐</div>
    <hot></hot>
    <div class="bg_gray">
      <div class="hot_tit mt-space" @click="Test">全部商品</div>
      <whoel listId=this.listId2></whoel>
    </div>
    <!-- <item-goods></item-goods> -->
  </div>
</template>
<script>
import { Swiper } from "vux";
import { setTimeout, clearTimeout } from "timers";
let timer;
export default {
  components: {
    Swiper,
    Itemes: resolve => require(["./goods/index.vue"], resolve),
    hot: resolve => require(["./hotness/index.vue"], resolve),
    whoel: resolve => require(["./wholegoods/index.vue"], resolve)
  },
  
  watch: {
    imgList: {
      handler(newName, oldName) {
        // this.imgList = newName;
        console.log(newName, 56456);
      }
    }
  },
  data() {
    return {
      str: "",
      iptVal: null,
      imgList: [],
      listId2:''
    };
  },
  computed: {},
  methods: {
    // 监听
    goToList1(id) {
      console.log("监听" + id);
      this.listId2 =id
    },
    Test() {
      this.$fetch
        .post("fruits/app/personal/checkCustomer", {
          openId: "52646465465",
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
      this.imgList.push(
        {
          url: "javascript:",
          img:
            "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId=" +
            str,
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img:
            "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId=" +
            str,
          title: "送你一朵fua1"
        },
        {
          url: "javascript:",
          img:
            "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId=" +
            str,
          title: "送你一朵fua1"
        },
        {
          url: "javascript:",
          img:
            "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId=" +
            str,
          title: "送你一朵fua1"
        }
        // {
        //     url: 'javascript:',
        //     img: '//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId='+str,
        //     title: '送你一朵fua'
        // },
        // {
        //     // url: 'javascript:',
        //     img: 'https://static.vux.li/demo/5.jpg',
        //     title: '送你一次旅行',
        //     fallbackImg: 'https://static.vux.li/demo/3.jpg'
        // },
        // {
        //     url: 'javascript:',
        //     img: '192.168.3.12:80/fruits/app/blank/showPicture?attachmentId='+str,
        //     title: '送你一朵fua'
        // },
      );

      // this.$fetch.post("fruits/blank/showPicture?attachmentId="+str).then(res =>{
      //   console.log(res);
      // })
    },
    input() {
      if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        console.log(this.iptVal);
        // this.filterList(this.list,this.iptVal);
        timer = null;
      }, 2000);
    },
    filterList(arr, val) {
      var list = [...arr];
      var temp = [];
      list.map(e => {
        if (val) {
        } else {
        }
      });
      return temp;
    }
  },
  created() {
    settitle("商城");
  },
  mounted() {
    this.$fetch
      .post("fruits/app/blank/getBannerImg", { openId: 123456 })
      .then(res => {
        console.log(res);
        res.obj.forEach(e => {
          this.queryImg(e);
        });
      });
  }
};
</script>
<style lang="less">
#home {
  height: 100%;
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
  }
  .hot_tit::before {
    content: "";
    display: inline-block;
    width: 0.06rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    // margin-top: 0.6rem;
    background: #4a7b67;
    border-radius: 0.03rem;
    line-height: 0.3rem;
  }
  .head_box {
    position: relative;
    height: 3.51rem;
    background-size: 100% 100%;
    overflow: hidden;
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
  }
}
</style>
