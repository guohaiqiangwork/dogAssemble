<template>
    <div id="goodsList">

        
        <div  class="goods-item flex-between align-center" v-for="(item,index) in list.goodList" :key="index">
           
            <img class="goods-img" :src="item.img" alt="">
           
            <div class="goods-msg">
                <p>{{item.name}}</p>
                <p class="mt-12 flex-between">
                    <span class="flex-between align-center wrap">
                        <span class="goods-price">¥{{item.price}}</span>
                        <span v-for="(el,ind) in item.specList" :key="ind">
                            <span class="ml-2">{{el.specName}}:{{el.value}}</span>
                            <!-- <span class="ml-2">规格:800g</span> -->
                        </span>
                    </span>
                    <span>X{{item.num}}</span>
                </p>
            </div>
        </div>

        <!-- <div  class="goods-item flex-between align-center">
           
            <img class="goods-img" src="../../../assets/images/WechatIMG99.png" alt="">
           
            <div class="goods-msg">
                <p>熊孩子综合蔬菜干香菇脆秋葵干330g袋果蔬脆</p>
                <p class="mt-12 flex-between">
                    <span class="flex-between align-center">
                        <span class="goods-price">¥13.9</span>
                        <span class="ml-2">规格:800g</span>
                        <span class="ml-2">规格:800g</span>
                    </span>
                    <span>X3</span>
                </p>
            </div>
        </div> -->
 
        <!-- <div  class="goods-item flex-between align-center">
           
            <img class="goods-img" src="../../../assets/images/WechatIMG99.png" alt="">
           
            <div class="goods-msg">
                <p>熊孩子综合蔬菜干香菇脆秋葵干330g袋果蔬脆</p>
                <p class="mt-12 flex-between">
                    <span class="flex-between align-center">
                        <span class="goods-price">¥13.9</span>
                        <span class="ml-2">规格:800g</span>
                        <span class="ml-2">规格:800g</span>
                    </span>
                    <span>X3</span>
                </p>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            key: 'value'
        }
    },
    computed:{
        list(){
            return JSON.parse(this.$route.query.list);
        }
    },
    methods: {
        name() {
            
        }
    },
    mounted() {
        console.log(this.list)
    },
}
</script>
<style lang="less">
#goodsList{
    height: 100%;
    width: 100%;
    overflow-x:hidden;
    .wrap{
        flex-wrap: wrap;
    }
    .goods-item{
        padding: 0.3rem 0.45rem;
        border-bottom: 1px solid #E9E9E9;
        .goods-img{
            width: 1.4rem;
            height: 1.4rem;
        }
        .goods-msg{
            width: 100%;
            margin-left: 0.3rem;
            .mt-12{
                margin-top: 0.12rem;
                .goods-price{
                    font-size:0.38rem;
                    color:rgba(16,32,35,1);
                }
                .ml-2{
                    margin-left: 0.2rem;
                    font-size:0.26rem;
                    color:rgb(16,32,35);
                    opacity:0.52;
                }
            }
        }
       
    }
}
</style>
