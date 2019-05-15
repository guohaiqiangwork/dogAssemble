<template>
    <div id="cart">
        <cart-list></cart-list>
        <div>
            <div class="foryou">为您推荐</div>
            <hot></hot>
            <div class="cart_btm">
                <span>已选1</span>
                <div>
                    <span>合计: <span class="red final_price">300.00</span></span>
                    <span class="deal_down">去结算</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { resolve } from 'path';
export default {
    components:{
        CartList:resolve => require(['./chatList/index.vue'],resolve),
        hot:resolve => require(['@/views/Assemble/hotness/index.vue'],resolve)
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
#cart{
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    .foryou{
        padding: 2.85rem 0 2.45rem 0;
        font-size: 1.5rem;
        color: #4A7B67;
        text-align: center;
        background: #fff;
    }
    .foryou:before{
        content: '';
        display: inline-block;
        width:8.5rem;
        margin:0  2.4rem 0.4rem 0;
        border-top:1px solid rgb(222,222,222);
    }
    .foryou:after{
        content: '';
        display: inline-block;
        width:8.5rem;
        margin:0 0 0.4rem  2.4rem; 
        border-top:1px solid rgb(222,222,222);
    }
    .cart_btm{
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 1.5rem;
        line-height: 2.6rem;
        .deal_down{
            width:9.65rem;
            height:3.5rem;
            padding: 0.8rem 2.9rem;
            margin-left: 1.4rem;
            color: #fff;
            background:rgba(74,123,103,1);
            opacity:1;
            border-radius:2rem;

        }
        .final_price{
            font-size: 1.8rem;
        }

    }
}
</style>
