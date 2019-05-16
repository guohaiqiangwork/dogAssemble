<template>
    <div id="goods_detail">
        <div class="goods_picbox"> 
            <img class="goods_pic" src="../../assets/images/WechatIMG101(1).png" alt="">
        </div>
        <div class="goods_item">
            <p class=" goods_price">熊孩子蔬菜干</p>
            <div>熊孩子蔬菜干副标题最长26个文字</div>
            <p class="goods_name">
                <span class="red">￥13.9</span>
                <!-- <span>*3</span> -->
            </p>
        </div>
        <div class="">
            <div class="goods_tit">商品详情图</div>
            <img class="detail_pic" src="../../assets/images/WechatIMG106_看图王.png" alt="">
        </div> 
         <div class="foryou">为您推荐</div>
        <hot></hot>   
    </div>
</template>
<script>
import hot from '../Assemble/hotness/index'
export default {
    components:{
        hot
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
#goods_detail{
    .foryou{
        padding: 0.64rem 0 0.52rem 0;
        font-size: 0.3rem;
        color: #4A7B67;
        text-align: center;
        background: #fff;
    }
    .foryou:before{
        content: '';
        display: inline-block;
        width:1.7rem;
        margin:0  0.26rem 0.1rem 0;
        border-top:1px solid rgb(222,222,222);
    }
    .foryou:after{
        content: '';
        display: inline-block;
        width:1.7rem;
        margin:0 0 0.1rem  0.26rem; 
        border-top:1px solid rgb(222,222,222);
    }
    .goods_picbox{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7.49rem;
        border-bottom: 1px solid #E9E9E9;
        .goods_pic{
            height: 5.7rem;
            width: 5.7rem;
            margin: 0 auto;
        }
    }
    .goods_item{
        padding:0.3rem 0.28rem 0.3rem;
        .goods_price{
            line-height: 0.53rem;
        }
        .goods_name{
            display: flex;
            justify-content: space-between;
            line-height: 0.45rem;
        }
    }
    .detail_pic{
        width: 100%;
        height: 7.19rem;
    }
    .goods_tit{
        margin-bottom: 0.59rem;
        text-align: center;
    }
    .goods_tit:before{
        content: '';
        display: inline-block;
        width:1.81rem;
        border-top: 1px solid #dedede;
        margin-right: 0.22rem;
        margin-bottom: 0.1rem;
        // background:rgba;
    }
    .goods_tit:after{
        content: '';
        display: inline-block;
        width:1.81rem;
        border-top: 1px solid  #dedede;
        margin-left:0.22rem;
        margin-bottom: 0.1rem;
    }
}
</style>
