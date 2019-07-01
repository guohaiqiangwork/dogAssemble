<template>
    <div id="cartList">
        <div v-if="charList.length">
            <div  class= "cartlist"  v-for="(item,index) in charList" :key="index" @click.prevent="goDetail(item)">
               <!-- <div class="foods_select"></div> -->
               <i v-if="item.state ==1"></i>
               <span v-else @click.stop="chooseBuy(item,index)">
                    <i  :class="['weui-icon', 'weui_icon_success', 'weui-icon-success',item.ischeck?'checked' : 'normal']" ></i>
               </span>
              
                <img class="gooods_avatar"   :src="'http://www.gsb.yuntunet.cn/fruits/app/blank/showPicture?attachmentId='+item.picId" alt="">
                <div class="goods_item">
                    <p class="goods_title">{{item.name}}</p>
                    <p class="goods_flex">
                        <span class="goods_price red">￥{{item.price}}</span>
                        <span style="display:inline-block"  @click.stop="defalut">
                            <inline-x-number width="30px" :min="0" v-model="item.count" @on-change="change(item,index,charList)" v-if="item.state !=1"></inline-x-number>
                        </span>
                    </p>
                    <div v-if="item.cartGoodsSpecs.length&&item.state !=1" style="display:flex">
                        <p v-for="(ite,ind) in item.cartGoodsSpecs" :key="ind">
                            <span>{{ite.specName + ":" + ite.specValue}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="cart_none">
            <img class="non_cart" src="../../../assets/images/non_cart.png" alt="">
            <p class="tip_none">那么多好商品，您不加入购物车吗？</p>
            <div class="cart_btn" @click="goShop">去逛逛</div>
        </div>
    </div>
</template>
<script>
import { InlineXNumber } from 'vux'
import url from '../../../bin/url'
export default {
    components:{
        InlineXNumber
    },
    computed:{
        goodsNum() {
            if(this.charList.length == 1){
                 return Number(this.charList[0].count);
            }else{
                var a =0;
                this.charList.map(e =>{
                    a+= e.count;
                })
                return a;
            }
        },
        goodsPrice(){
            var arr = [...this.charList]
            var a =0;
            arr.map(e =>{
                a+= e.money;
            })
            return a;
        }
    },
    data() {
        return {
            mu:0,
            ischeck:false,
            bottomMsg:{
                checkcount:0,
                totalprice:0
            },
            charList:[
            ],
            cartDate:{
                openId:localStorage.getItem("openId"),
                id:"",
                num:""
            },
          
        }
    },
    methods: {
          goDetail(item){
                // console.log(item.goodsId,999);
                this.$router.push("/goodsdetail?id=" + item.goodsId);
            },
        defalut(){
            // return false
        },
        //选择购物车商品
        chooseBuy(item,n) {
            item.ischeck = !item.ischeck;
            if(item.ischeck){
                item.money = (item.count*item.price).toFixed(2)/1;
                this.bottomMsg.checkcount++;
            }else{
                item.money = 0;
                this.bottomMsg.checkcount--;
            }
            this.bottomMsg.totalprice = this.goodsPrice;
            this.chart(item,n);
            this.$emit('bottomEve',this.bottomMsg)
        },
        //传递购物车数据
        chart(item,n){
            var arr = [...this.charList];
            this.$emit('receiveArray',arr);
        },
        //传递购买数量
        change(item,n,arr){
             console.log(item,'iipipip');
          this.cartDate.id = item.id;
            this.cartDate.num = item.count;
            if(item.count <= 0){
                // console.log(this.goodsNum);
                //  this.cartDate.id = null;
                this.chart(item,n);
                this.cartDate.num = 0;
                this.postCart();
                this.$emit('changeNum',this.goodsNum);

                // this.charList.splice(n,1);
                return
            }else{
                this.chart(item,n);
            }
            if(item.ischeck){
                item.money = (item.count * item.price).toFixed(2)/1;
            }else{
                // item.money = 0;
            }
            // this.cartDate.id = item.id;
            // this.cartDate.num = item.count;
            this.bottomMsg.totalprice = this.goodsPrice;
            this.postCart();
            this.$emit('changeNum',this.goodsNum);
        },
        //获取购买商品的邮费
        getCart(){
            this.$fetch.post("fruits/app/cart/getCart",{openId:localStorage.getItem("openId")}).then(res =>{
                console.log(res,'dfsf')
                res.obj.forEach(e => {
                    e.ischeck = false;
                    e.money = 0;
                    e.price = e.price.toFixed(2);
                });
                 this.charList = res.obj;
                 this.$emit('package',res.attributes)
            })
        },
        //跳转详情
        // goDetail(state){
        //     if(state == 1){
        //         return
        //     }
        // },
        //跳转到商城页
        goShop(){
            this.$router.push('/home');
        },
        //给后台存储购物车数量
        postCart(){
       
            this.$fetch.post('fruits/app/cart/changeNum',this.cartDate).then(res =>{
                this.getCart();
            })
        }
    },
    mounted() {
        this.getCart();
        // this.change();
    },
}
</script>
<style lang="less">
#cartList{

    .normal{
        color: #CDCDCD;
    }
    .checked{
        color:#4A7B67;
    }
    .cartlist{
       
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 1.4rem;
        padding: 0.46rem 0.3rem;
        margin-bottom: 0.2rem;
        background: #fff;
        i{
            display: inline-block;
            font-size: 0.32rem;
        }
        .distroy{
            font-size:0.24rem;
            width:0.64rem;
            height:0.37rem;
            padding: 0 2px;
            color: #fff;
            white-space: nowrap;
            text-align: center;
            background:rgba(165,165,165,1);
        }
        .gooods_avatar{
            width: 1.4rem;
            height: 1.4rem;
            margin-left: 0.28rem;
        }
        .goods_item{
             width: 100%;
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
            font-size: .28rem;
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
            font-size: .28rem;
        }
    }
}
</style>
