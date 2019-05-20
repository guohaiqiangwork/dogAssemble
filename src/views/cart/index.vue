<template>
    <div id="cart">
        <div class="package_tit">
            <div class="if_post red">包邮条件</div>
            <p class="word_tit">全场满160包邮，欢迎抢购</p>
        </div>
        <cart-list></cart-list>
        <div>
            <!-- <checklist ref="demoObject" :title="('Option Array with key and value (key must be string)')" :options="objectList" v-model="objectListValue"></checklist> -->
            <!-- <check-icon :value.sync="demo1"> ({{ demo1 }})</check-icon> -->
           
             <i class=""></i>
            <div class="foryou">为您推荐</div>
            <hot></hot>
            <div class="cart_btm">
                <span>已选1</span>
                <div class="flex_countrow">
                    <span class="count_box">
                         <span>合计: <span class="red final_price">300.00</span></span>
                         <span>还差20元可享包邮</span>
                    </span>
                   

                    <div class="deal_down">去结算</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Checklist,CheckIcon  } from 'vux'
export default {
    components:{
        Checklist,CheckIcon,
        CartList:resolve => require(['./chatList/index.vue'],resolve),
        hot:resolve => require(['@/views/Assemble/hotness/index.vue'],resolve)
    },
    data() {
        return {
            key: 'value',
            demo1:false,
            //  objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
            //  objectListValue:null,

        }
    },
    methods: {
        name() {
            
        }
    },
    created(){
        settitle('购物车');
    },
    mounted() {
        
    },
}
</script>
<style lang="less">
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
#cart{
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    .package_tit{
        display: flex;
        align-items: center;
        padding: 0.09rem 0.3rem;
         font-size: 0.24rem;
        // height:0.58rem;
        background:#F8F8F8;
        .if_post{
            padding:0.03rem  0.1rem;
            margin-right: 0.17rem;
            border: 1px solid #E6435A;
           
        }
        .word_tit{
            font-weight: 700;
            line-height: 0.33rem;
        }
    }
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
    .cart_btm{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 0.3rem;
        line-height: 0.4rem;
        background: #E9EFEC;
        .deal_down{
            // width:1.9rem;
            // height:0.98rem;
            padding: 0.3rem  0.56rem;
            margin-left: 0.28rem;
            color: #fff;
            background:rgba(74,123,103,1);

        }
        .final_price{
            font-size: 0.26rem;
        }
        .count_box{
            display:flex;
            justify-content: space-around;
            flex-direction: column;
            // font-size: 0.36rem;
            // line-height: 0.5rem;
        }
        .flex_countrow{
            display: flex;
            justify-content: space-between;
        }

    }
}
</style>
