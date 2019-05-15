<template>
    <div id="cartList">
        <div v-if="charList.length">
            <div  class= "cartlist"  v-for="(item,index) in charList" :key="index">
               <div class="foods_select"></div>
                <img class="gooods_avatar"   :src="item.logo" alt="">
                <div class="goods_item">
                    <p class="goods_title">{{item.title}}</p>
                    <p class="goods_flex">
                        <span class="goods_price red">{{item.price}}</span><span>{{item.num}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="cart_none">
            <img src="" alt="">
            <p>那么多好商品，您不加入购物车吗？</p>
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
        height: 7rem;
        padding: 2.4rem 1.5rem;
        margin-bottom: 1rem;
        background: #fff;
        .gooods_avatar{
            width: 7rem;
            height: 7rem;
            margin-left: 1.9rem;
        }
        .goods_item{
            height: 7rem;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 1.25rem;
            .goods_price{
                font-size: 1.9rem;
               
            }
            .goods_flex{
                display: flex;
                justify-content: space-between;
                 line-height: 2.65rem;
            }
        }
        .foods_select{
            width: 19px;
            height:19px;
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
}
</style>
