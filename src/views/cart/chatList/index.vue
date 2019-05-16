<template>
    <div id="cartList">
        <div v-if="charList.length">
            <div  class= "cartlist"  v-for="(item,index) in charList" :key="index">
               <div class="foods_select"></div>
                <img class="gooods_avatar"   :src="item.logo" alt="">
                <div class="goods_item">
                    <p class="goods_title">{{item.title}}</p>
                    <p class="goods_flex">
                        <span class="goods_price red">￥{{item.price}}</span><span>{{item.num}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="cart_none">
            <img src="" alt="">
            <p class="tip_none">那么多好商品，您不加入购物车吗？</p>
            <div class="">去逛逛</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            charList:[
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    title:'熊孩子综合蔬菜干香菇脆秋葵干330g 果蔬脆',
                    num:1,
                    id:null,
                    price:13.9
                },
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    title:'熊孩子综合蔬菜干香菇脆秋葵干330g 果蔬脆',
                    num:1,
                    id:null,
                    price:13.9
                }
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
#cartList{
    
    .cartlist{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 1.4rem;
        padding: 0.46rem 0.3rem;
        margin-bottom: 0.2rem;
        background: #fff;
        .gooods_avatar{
            width: 1.4rem;
            height: 1.4rem;
            margin-left: 0.28rem;
        }
        .goods_item{
            height: 1.4rem;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0.3rem;
            .goods_price{
                font-size: 0.38rem;
               
            }
            .goods_flex{
                display: flex;
                justify-content: space-between;
                 line-height: 0.53rem;
            }
        }
        .foods_select{
            width: 0.32rem;
            height:0.32rem;
            border-radius: 50%;
             -moz-border-radius:  50%; 
       -webkit-border-radius:  50%; 
       border-radius:  50%;
    //    border: 0 solid rgba(255, 255, 255, 0); 
            // border: 0;
            background: url('../../../assets/images/check.png') no-repeat;
            background-size: 100% 100%; 
        }

    }
    .cart_none{
        .tip_none{
            color: rgba(0,0,0,0.52);
        }
    }
}
</style>
