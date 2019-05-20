<template>
    <div id="cartList">
        <div v-if="charList.length">
            <div  class= "cartlist"  v-for="(item,index) in charList" :key="index">
               <div class="foods_select"></div>
                <img class="gooods_avatar"   :src="item.logo" alt="">
                <div class="goods_item">
                    <p class="goods_title">{{item.title}}</p>
                    <p class="goods_flex">
                        <span class="goods_price red">￥{{item.price}}</span>
                        <inline-x-number width="30px" :min="0" v-model="item.num"></inline-x-number>
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="cart_none">
            <img class="non_cart" src="../../../assets/images/non_cart.png" alt="">
            <p class="tip_none">那么多好商品，您不加入购物车吗？</p>
            <div class="cart_btn">去逛逛</div>
        </div>
    </div>
</template>
<script>
import { InlineXNumber } from 'vux'
export default {
    components:{
        InlineXNumber
    },
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
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        background: #fff;
        .tip_none{
            padding: 0.4rem 0;
            color: rgba(0,0,0,0.52);
        }
        .non_cart{
            width: 2.06rem;
            height: 2.03rem;
        }
        .cart_btn{
            height: 0.8rem;
            width: 2.64rem;
            margin-bottom: 0.08rem;
            border-radius:0.1rem;
            background: #4A7B67;
            text-align: center;
            line-height: 0.8rem;
            color: #fff; 
        }
    }
}
</style>
