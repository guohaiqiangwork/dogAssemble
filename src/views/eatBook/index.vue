<template>
    <div id="eat-book">
        <div class="opt-list flex-between align-center" @click="goAllBook">
            <div class="" >
                 <img class="kind-icon" src="../../assets/images/bottle.png" alt=""><span class="book-kind">全部配方</span>
            </div>
           <img src="../../assets/images/right.png" alt="">
        </div>
        <div class="mt-2">
            <div class="opt-list  flex-between align-center">
                <div>
                    <img class="kind-icon" src="../../assets/images/list.png" alt=""><span class="book-kind">全部订单</span>
                </div>
            </div>
            <div class="" v-if="orderList.length">
                
                <ul class="mt-15" v-for="(item,index) in orderList" :key="index">
                    <li class="book-item flex-between align-center">
                        <div>
                            <p><span>{{index+1}}.</span><span>{{item.time}}</span></p>
                            <p><span>{{item.name}}</span><span class="ml-3">{{item.recipe}}</span></p>
                        </div>
                        <div class="complete-btn" v-if="item.isComplete == 0">
                            完成
                        </div>
                    </li>

    <!--                 
                    <li class="book-item flex-between align-center">
                        <div>
                            <p><span>1.</span><span>2019-04-23 12:00:00</span></p>
                            <p><span>张新</span><span class="ml-3">脾胃套餐</span></p>
                        </div>
                        <div class="complete-btn">
                            完成
                        </div>
                    </li> -->
                </ul>
            </div>
            <div v-else style="background:#fff;text-align:center">
                暂无数据
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            orderList: []
        }
    },
    methods: {
        getOrder() {
            this.$fetch.post("fruits/app/recipe/getTodayOrder",{openId:'1313121231'}).then(res=>{
                console.log(res);
                if(res.msg == "success"){
                    this.orderList = res.obj;
                }
               
            })
        },
        goAllBook(){
            this.$router.push('/bookList');
        },
    },
    mounted() {
        
        this.getOrder();
    },
}
</script>
<style lang="less">
#eat-book{
    background: #F8F8F8;
    .opt-list{
        padding: 0 0.4rem;
        height: 1rem;
        background: #fff;
        .kind-icon{
            width: 0.3rem;
            height: 0.3rem;
            vertical-align: -3px;
        }
        .book-kind{
            margin-left: 0.15rem;
        }

    }   
    .opt-list > img{
        height: 0.26rem;
        width: 0.16rem;
    }
    .mt-2{
        margin-top: 0.2rem;
        .mt-15{
            padding-top: 0.14rem;
            background: #fff;
            .book-item{
                padding: 0.26rem 0.4rem;
                background: #fff;
                border-bottom: 1px solid #e9e9e9;
                .complete-btn{
                    padding: 0.07rem 0.52rem;
                    background: #4A7B67;
                    font-size:0.26rem;
                    color: #fff;
                }
                .ml-3{
                    margin-left: 0.3rem;
                }
            }

        }
    }
}
</style>
