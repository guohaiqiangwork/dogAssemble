<template>
  <div id="home">
    <div class="head_box">
      <swiper :list="imgList"  :min-moving-distance="120" @on-index-change="onIndexChange" auto loop></swiper>
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input type="text" placeholder="搜索您想找的产品">
        <i></i>
      </div>
    </div>
    <itemes></itemes>
    <div class="hot_tit">热门推荐</div>
    <hot></hot>
    <div class="bg_gray">
        <div class="hot_tit mt-space">全部商品</div>
        <whoel></whoel>
    </div>
    <!-- <item-goods></item-goods> -->
  </div>
</template>
<script>
import { Swiper } from 'vux'
export default {
  components:{
    Swiper,
    Itemes:resolve => require(['./goods/index.vue'],resolve),
    hot:resolve => require(['./hotness/index.vue'],resolve),
    whoel:resolve => require(['./wholegoods/index.vue'],resolve)
  },
  data() {
    return {
      imgList: [
        {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/1.jpg',
            title: '送你一朵fua'
          }, {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/5.jpg',
            title: '送你一次旅行',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }
      ]
    }
  },
  methods: {
    onIndexChange(currentIndex) {
      
    }
  },
  created(){
    settitle('商城')
  },
  mounted() {
    
  },
}
</script>
<style lang="less">
  #home{
    height: 100%;
    .mt-space{
      margin-top: 0.35rem;
     
    }
    .bg_gray{
      background: #F6F6F6;
      overflow: hidden;
    }
     .hot_tit{
        display: flex;
        align-items: center;
        padding:0 0.31rem; 
        margin-bottom: 0.09rem;
    }
    .hot_tit::before{
        content: '';
        display: inline-block;
        width: 0.06rem;
        height: 0.3rem;
        margin-right:0.1rem;
        // margin-top: 0.6rem;
        background: #FF8156;
        border-radius:.03rem;
        line-height: 0.3rem;
    }
    .head_box{
      position: relative;
      height: 3.51rem;
      background-size:100% 100%;
      overflow: hidden;
      .search_box{
        position: absolute;
        top: 0.14rem;
        left: 0.3rem;
        height: 0.7rem;
        width: 6.9rem;
        margin: 0 auto;
        padding: 0 0.31rem;
        // margin: 0.65rem 1.5rem 0;
        border-radius:0.35rem;
       
       
  
        box-sizing: border-box;
        z-index: 1;
        display: flex;
        align-items: center;
        background: #fff;
        line-height: 3.5rem;
        input{
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
        }
        .search_icon{
          font-size: 0.28rem;
          padding-right: 0.2rem;
        }
      }
    }
  }
</style>
