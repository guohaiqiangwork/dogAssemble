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
        padding:0 1.5rem; 
        margin-bottom: 0.45rem;
    }
    .head_box{
      height: 17.53rem;
      background: url('../../assets/images/head.png') no-repeat;
      background-size:100% 100%;
      overflow: hidden;
      .search_box{
        height: 3.5rem;
        margin: 0.65rem 1.5rem 0;
        border-radius:2rem;
        position: relative;
        padding: 0 1.55rem;
  
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
          font-size: 1.4rem;
          padding-right: 0.2rem;
        }
      }
    }
  }
</style>
