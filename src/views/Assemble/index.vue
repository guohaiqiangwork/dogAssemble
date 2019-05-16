<template>
  <div id="home">
    <div class="head_box">
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input type="text" placeholder="搜索您想找的产品">
        <i></i>
      </div>
    </div>
    <itemes></itemes>
    <div class="hot_tit">热门推荐</div>
    <hot></hot>
    <!-- <item-goods></item-goods> -->
  </div>
</template>
<script>
// import { Search, Group, Cell, XButton } from 'vux'
// import { Itemes } from './ItemGoods/index.vue';
// const
export default {
  components:{
    // Itemes
    Itemes:resolve => require(['./goods/index.vue'],resolve),
    hot:resolve => require(['./hotness/index.vue'],resolve)
  },
  data() {
    return {
      key: 'value'
    }
  },
  methods: {
    name() {
      
    }
  },
  mounted() {
    
  },
}
</script>
<style lang="less">
  #home{
    height: 100%;
     .hot_tit{
        padding:0 0.31rem; 
        margin-bottom: 0.09rem;
    }
    .head_box{
      height: 3.51rem;
      background: url('../../assets/images/head.png') no-repeat;
      background-size:100% 100%;
      overflow: hidden;
      .search_box{
        height: 0.7rem;
        width: 6.9rem;
        margin: 0 auto;
        // margin: 0.65rem 1.5rem 0;
        border-radius:0.35rem;
        position: relative;
        padding: 0 0.31rem;
  
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
