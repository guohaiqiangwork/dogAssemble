<template>
    <div id="goods_detail">
        <div class="goods_picbox"> 
            <img class="goods_pic" src="../../assets/images/WechatIMG101(1).png" alt="">
        </div>
        <div class="goods_item">
            <p class="red goods_price">￥13.9</p>
            <p class="goods_name">
                <span>熊孩子蔬菜干</span>
                <span>*3</span>
            </p>
        </div>
        <div class="">
            <div class="goods_tit">商品详情图</div>
            <img class="detail_pic" src="../../assets/images/WechatIMG106_看图王.png" alt="">
        </div>    
    </div>
</template>
<script>
export default {
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
    .goods_picbox{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 37rem;
        border-bottom: 0.05rem solid #E9E9E9;
        .goods_pic{
            height: 28.49rem;
            width: 28.49rem;
            margin: 0 auto;
        }
    }
    .goods_item{
        padding: 1.6rem 1.5rem 3.15rem;
        .goods_price{
            line-height: 2.65rem;
        }
        .goods_name{
            display: flex;
            justify-content: space-between;
            line-height: 2rem;
        }
    }
    .detail_pic{
        width: 100%;
        height: 28.3rem;
    }
    .goods_tit{
        margin-bottom: 2.45rem;
        text-align: center;
    }
    .goods_tit:before{
        content: '';
        display: inline-block;
        width:9.05rem;
        border-top: 1px solid #dedede;
        margin-right: 1.1rem;
        margin-bottom: 0.3rem;
        // background:rgba;
    }
    .goods_tit:after{
        content: '';
        display: inline-block;
        width:9.05rem;
        border-top: 1px solid  #dedede;
        margin-left: 1.1rem;
        margin-bottom: 0.3rem;
    }
}
</style>
