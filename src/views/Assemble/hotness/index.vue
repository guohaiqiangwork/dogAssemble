<template>
    <div id="hot">
        <div class="hot_item">
            <div v-for="(item,index) in hotList" :key="index"  class="mt_size">
                <img class="hot_logo" :src="item.logo" alt="">
                <p class="hot_msg">
                    <span>{{item.tip}}</span>
                    <br/>
                    <span class="hot_price">{{`￥${item.price}`}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hotList: [
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'蔬菜置物架',
                    price:21.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'熊孩子蔬菜干',
                    price:19.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'香菇脆',
                    price:13.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'蔬菜置物架',
                    price:21.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'熊孩子蔬菜干',
                    price:19.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG102.png'),
                    tip:'香菇脆',
                    price:13.9
                },
            ]
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
#hot{
    background: #fff;
    .hot_tit::before{
        content: '';
        background:url('');
        padding-right:0.5rem;
    }
    .hot_item{
         display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 1.5rem;
        .mt_size{
            margin: 0.8rem 0;
        }
        .hot_logo{
            height: 8.22rem;
            width: 8.22rem;
        }
        .hot_msg{
            text-align: center;
            .hot_price{
                color: #FF3636;
                font-size: 1.4rem;
            }
        }
    }
    
}
</style>
