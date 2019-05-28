<template>
    <div id="goods_detail">
        <div class="goods_picbox"> 
            <swiper :list="imgList"  :min-moving-distance="120" @on-index-change="onIndexChange" auto loop height='100%' :show-dots='false'></swiper>
            <!-- <img  src="../../assets/images/WechatIMG101(1).png" alt=""> -->
            <div class="circle_num">
                <span>{{num}}</span>
                <span>/</span>
                <span>{{imgList.length}}</span>
            </div>
        </div>
        <div class="goods_item">
            <p class=" goods_price">熊孩子蔬菜干</p>
            <div>熊孩子蔬菜干副标题最长26个文字</div>
            <p class="goods_name">
                <span class="red">￥13.9</span>
                <!-- <span>*3</span> -->
            </p>
        </div>
        <div class="">
            <div class="goods_tit">商品详情图</div>
            <img class="detail_pic" src="../../assets/images/WechatIMG106_看图王.png" alt="">
        </div> 
         <div class="foryou">为您推荐</div>
        <hot></hot>




        <div v-transfer-dom>
            <popup v-model="popupshow" position="bottom" @on-hide='close'>
                <div class="popup_box ">
                    <div class="goods_info flex-between">
                        <div class="popup_head">
                            <img src="../../assets/images/WechatIMG99.png" alt="">
                            <div class="flex-around flex-clo ml-space">
                                <p>熊孩子蔬菜干</p>
                                <p class="goods_price">
                                    <span class="goods_discount">￥21.9</span>
                                    <span class="red">￥15</span>
                                </p>
                            </div>
                        </div>
                       
                        <x-icon type="ios-close-empty" size="30" class="icon_pos" @click="close"></x-icon>
                    </div>
                    <div class="goods_detail">
                        <div>
                            <p class="goods_tag">规格</p>
                            <ul class="goods_ul">
                                <li>106g</li>
                                <li>200g</li>
                                <li>400g</li>
                            </ul>
                        </div>
                        <div>
                            <p class="goods_tag">零食种类</p>
                            <ul class="goods_ul">
                                <li>蔬果干</li>
                            </ul>
                        </div>
                        
                        <p class="flex-between align-center mt-space">
                            <span>购买数量</span>
                            <inline-x-number width="30px" :title="('Quantity')" :min="0"  v-model="buyNum"></inline-x-number>
                        </p>
                    </div>
                    <div class="buy_btn" @click="buyGoods">确认</div>
                </div> 
            </popup>
        </div>
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
                this.$parent.buyNum = Val;
                // console.log(Val);

            }
            
        }
    },
    data() {
        return {
            imgList: [
                {
                    url: 'javascript:',
                    img: require('../../assets/images/WechatIMG101@2x.png'),
                    title: '送你一sd朵fua'
                },
                {
                    url: 'javascript:',
                    img: require('../../assets/images/WechatIMG106_看图王.png'),
                    title: '送你一次旅dsa行',
            // fallbackImg: 'https://static.vux.li/demo/3.jpg'
                }
            ],
            num:1,
            // popupshow:false
        }
    },
    created(){
      settitle('商品详情');
    },
    methods: {
        close(){
            this.$parent.show = false;
        },
        onIndexChange(currentIndex) {
            this.num = currentIndex + 1;
        },
        // addCart(){
        //     this.popupshow = true;
        // },
        buyGoods(){
            this.$router.push('/paysure')
        },
    },
    mounted() {
        console.log(this.$parent.show);
    },
}
</script>
<style lang="less">
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
                    .goods_discount{
                        color:rgb(16,32,35);
                        opacity:0.52;
                        text-decoration: line-through;
                        margin-right: 0.2rem;
                    }
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
            display: flex;
            justify-content: space-between;
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
