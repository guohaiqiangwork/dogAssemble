<template>
    <div id="goods_detail">
        <div class="goods_picbox"> 
            <swiper :list="imgList" v-show="imgList.length"   @on-index-change="onIndexChange" auto loop height='100%' :show-dots='false'></swiper>
            <!-- <img  src="../../assets/images/WechatIMG101(1).png" alt=""> -->
            <div class="circle_num">
                <span>{{num}}</span>
                <span>/</span>
                <span>{{imgList.length}}</span>
            </div>
        </div>
        <div class="goods_item">
            <p class=" goods_price">{{goodsDetail.name}}</p>
            <div>{{goodsDetail.remark}}</div>
            <p class="goods_name">
                <span class="red">￥{{type == 1?goodsDetail.original:goodsDetail.price}}</span>
                <span class="goods_discount" v-if="type!=1">￥{{goodsDetail.original}}</span>
            </p>
        </div>
        <div class="">
            <div class="goods_tit">商品详情图</div>
            <div v-for="(item,index) in goodsDetail.imgDetailsList" :key="index">
                <img class="detail_pic" :src="'//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId='+item" alt=""> 
            </div>
         
        </div> 
         <!-- <div class="foryou">为您推荐</div> -->
        <hot></hot>
        <div v-transfer-dom>
            <popup v-model="popupshow" position="bottom" @on-hide='close'>
                <div class="popup_box ">
                    <div class="goods_info flex-between">
                        <div class="popup_head">
                            <img src="../../assets/images/WechatIMG99.png" alt="">
                            <div class="flex-around flex-clo ml-space">
                                <p>{{goodsDetail.name}}</p>
                                <p class="goods_price">
                                    <span class="red">￥{{goodsDetail.price}}</span>
                                    <span class="goods_discount">￥{{goodsDetail.original}}</span>
                                </p>
                            </div>
                        </div>
                       
                        <x-icon type="ios-close-empty" size="30" class="icon_pos" @click="close"></x-icon>
                    </div>
                    <div class="goods_detail">
                        <div v-for="(item,index) in specList" :key="index">
                            <p class="goods_tag">{{item.name}}</p>
                            <ul class="goods_ul">
                                <li  v-for="(ite,ind) in item.valueList" :key="ind" @click="choseSpec(item,index,ite)" :class="[form.specList[index].value==ite?'active':'']">{{ite}}</li>
                            </ul>
                        </div>
                        <!-- <div>
                            <p class="goods_tag">零食种类</p>
                            <ul class="goods_ul">
                                <li>蔬果干</li>
                            </ul>
                        </div> -->
                        
                        <p class="flex-between align-center mt-space">
                            <span>购买数量</span>
                            <inline-x-number width="30px" :title="('Quantity')" :min="0"  v-model="form.num"></inline-x-number>
                        </p>
                    </div>
                    <div class="buy_btn" @click="buyGoods()">确认</div>
                </div> 
            </popup>
        </div>
        <div v-if="goodsDetail.state!=0" class="bottom-tip">已下架</div>
    </div>
    
</template>
<script>
import hot from '../Assemble/hotness/index'
import { Swiper,TransferDom, Popup, XButton, InlineXNumber } from 'vux'
export default {
    directives: {
        TransferDom
    },
    props:['popup'],
    components:{
        hot,Swiper,Popup, XButton,InlineXNumber
    },
    computed:{
        //商品id
        goodId(){
            return this.$route.query.id;
        },
        //控制弹窗
        popupshow:{
            get:function () {
                return this.$parent.show;
            },
            set: function (oldVal,newVal) {
            }
        },
        buyNum:{
            get:function () {
                return this.$parent.buyNum;
            },
            set: function (Val) {
                this.form.num=Val;
            }
            
        },
        type(){
            return localStorage.getItem('type');
        }
    },
    data() {
        return {
            imgList: [
                // {
                //   img:"",
                // },
                // {
                //   img:"",

                // },
            
            ],
            arr:[],
            param:{openId:"1313121231",id:this.goodId},
            num:1,
            //商品详情信息
            goodsDetail:{},
            goodsDetailImg:[],
            specList:[],
            spec:'',
            form:{
                openId:"1313121231",
                id:'',
                num:1,
                specList:[]
            }
        }
    },
    created(){
      settitle('商品详情');
    },
    methods: {
        //关闭弹窗
        close(){
            this.$parent.show = false;
        },
        onIndexChange(currentIndex) {
            this.num = currentIndex + 1;
        },
        //点击确定
        buyGoods(){
            this.form.id = this.goodId;
            this.$parent.show = false;
            if(this.$parent.title == 'cart'){

                //点击加入购物车
                if(this.goodsDetail.state!=0){
                    this.$vux.toast.text("该商品已下架");
                    return
                }
                this.addCart();
            }else{
                if(this.goodsDetail.state!=0){
                    this.$vux.toast.text("该商品已下架");
                    return
                }
                //点击立即购买
                var obj = {
                    openId:"",
                    goodList:[{
                        id:this.goodsDetail.id,
                        num:this.form.num
                    }]
                }
                obj = JSON.stringify(obj);
                this.$router.push('/paysure?data='+obj)
            }
        },
        //添加购物车
        addCart(){
            this.$fetch.post("fruits/app/cart/joinCart",this.form).then(res =>{
                
            this.$parent.buyNum  =this.$parent.buyNum/1;
            this.$parent.buyNum += this.form.num/1;
            localStorage.setItem('catnum',this.$parent.buyNum)
           
            })
        },
        //获取商品详情
        getGood(){
           
            this.$fetch.post("fruits/app/blank/getGoodInfo",{openId:"1313121231",id:this.goodId}).then(res =>{
                // this.$nextTick(() =>{
                    console.log(res,999);
                    res.obj.imgBannerList.forEach((el,i) => {
                    // if(i<2){
                            this.imgList.push({
                                url: 'javascript:',
                                img:"//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId="+el,
                                title:'123'
                            });
                        //   this.imgList[i].img = "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId="+el;
                    // }
                  
                    });
                // })
                
                this.goodsDetail = {...res.obj};
                this.goodsDetail.price = this.goodsDetail.price.toFixed(2);
                this.goodsDetail.original = this.goodsDetail.original.toFixed(2);
                var a = JSON.stringify({a:1})
            })
        },
        //获取商品规格
        getSpecs(){
            this.$fetch.post("fruits/app/cart/getGoodsSpec",{openId:"1313121231",id:this.goodId}).then(res =>{
                this.specList = [...res.obj.goodsSpecs];
                this.specList.forEach((e,ind) =>{
                    this.form.specList.push({
                        value:null,
                        specName:e.name,
                        specId:e.id,
                        check:false
                    })
                    e.valueList.forEach((el,i) =>{
                        if(i == 0){
                            this.form.specList[ind].value = el;
                        }
                            
                    })
                })
                console.log(this.form.specList,888)

            })
        },
        // 选择规格
        choseSpec(item,index,spec){
            this.spec = index;
            console.log(index)
            this.form.specList[index].specName = item.name;
            this.form.specList[index].value = spec;
            this.form.specList[index].specId = item.id;
        },

    },
    mounted() {
        this.$nextTick(() =>{
            this.getGood();
        })
        
        this.getSpecs();
    },
    updated(){
        // this.getGood();
    }
}
</script>
<style lang="less">
      .goods_discount{
                        color:rgb(16,32,35);
                        opacity:0.52;
                        text-decoration: line-through;
                        margin-right: 0.2rem;
                        font-size: 0.26rem;
                    }
                    .bottom-tip{
                        position: fixed;
                        width: 100%;
                        background: #e3e4e5;
                        color:#fff;
                    }
.popup_box{
        height: 100%;
        padding: 0 0.3rem;
        background: #fff;
        font-size: 0.28rem;
        overflow-x: hidden;
        ul{
            list-style: none;
        }
        img{
            height: 1.74rem;
            width: 1.74rem;
            font-size: 0;
        }
        .vux-number-selector svg{
            fill:#4a7b67;
        }
        .vux-number-selector.vux-number-disabled svg{
            fill: #ccc;
        }
   
        .goods_info{
            padding: 0.3rem 0 0 0;
            .popup_head{
                display: flex;
                justify-content: flex-start;
                .ml-space{
                    margin-left: 0.3rem;
                }
                .goods_price{
                    font-size: 0.38rem;
                    line-height: 0.53rem;
                  
                }
                
            }
        }
         
        .goods_detail{
            .goods_tag{
                padding: 0.4rem 0 0.2rem 0;
            }
            .goods_ul{
                display: flex;
                li{
                    width: 1.47rem;
                    height: 0.54rem;
                    margin-right: 0.3rem;
                    line-height: 0.54rem;
                    text-align: center;
                    border-radius: 0.08rem;
                    background:rgba(245,245,245);
                }
                .active{
                    background: #4A7B67;
                }
            }
            .mt-space{
                margin-top: 0.4rem;
            }
            
        }
        .buy_btn{
            width: 7rem;
            height: 1rem;
            margin: 0.63rem 0 0.44rem 0;
            background: #4A7B67;
            line-height: 1rem;
            text-align: center;
            color: #fff;
            border-radius: 0.12rem;
        }
}
#goods_detail{
  
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    .vux-slider{
        height: 100%;
        width: 100%;
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
    .goods_picbox{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7.49rem;
        border-bottom: 1px solid #E9E9E9;
        .circle_num{
            position: absolute;
            bottom:0.3rem;
            right:0.3rem;
            width:1.03rem;
            height:0.47rem;
            text-align: center;
            line-height: 0.47rem;
            color: #fff;
            background:rgba(0,0,0,0.35);
            border-radius:0.24rem;
        }
        .goods_pic{
            height: 5.7rem;
            width: 5.7rem;
            margin: 0 auto;
        }
    }
    .goods_item{
        padding:0.3rem 0.28rem 0.3rem;
        .goods_price{
            line-height: 0.53rem;
        }
        .goods_name{
            line-height: 0.45rem;
        }
    }
    .detail_pic{
        width: 100%;
        height: 7.19rem;
    }
    .goods_tit{
        margin-bottom: 0.59rem;
        text-align: center;
    }
    .goods_tit:before{
        content: '';
        display: inline-block;
        width:1.81rem;
        border-top: 1px solid #dedede;
        margin-right: 0.22rem;
        margin-bottom: 0.1rem;
        // background:rgba;
    }
    .goods_tit:after{
        content: '';
        display: inline-block;
        width:1.81rem;
        border-top: 1px solid  #dedede;
        margin-left:0.22rem;
        margin-bottom: 0.1rem;
    }
    
}
</style>
