<template>
    <div id="paysure">
        <div class="address_box">
            <p class="title_address">收货地址</p>
            <div class="address_content">
                <div  class="person_msg">
                    <div class="half_box">
                        <img class="icon_size" src="../../assets/images/position.png" alt="">
                        <span>王佳宇</span>
                        <span>13654550023</span>
                    </div>
                    <img class="icon_right" src="../../assets/images/right.png" alt="" @click="goAddress">
                </div>
                <div class="address_msg">
                    <div class="topic_box">
                        <span class="defalut_toic">默认</span>
                    </div>
                    <span>内蒙古包头市青山区青山区包头商会大 厦2710</span>
                </div>
            </div>
        </div>
        <div class="form_box">
            
            <div class="goods_list">
<!--                 
                <img src="../../assets/images/WechatIMG102.png" alt="">
                <div class="item_msg">
                    <p>熊孩子综合蔬菜干香菇脆秋葵干330g袋果蔬脆</p>
                    <p class="item_btm">
                        <span>¥13.9</span>
                        <span class="item_num">×3</span>
                    </p>
                </div> -->


                <div class="flex-between">
                    <div class="flex-between flex-clo align-center items">
                        <img src="../../assets/images/WechatIMG102.png" alt="">
                        <p>¥13.9</p>
                    </div>
                    <div class="flex-between flex-clo align-center items">
                        <img src="../../assets/images/WechatIMG102.png" alt="">
                        <p>¥13.9</p>
                    </div>
                    <div class="flex-between flex-clo align-center items">
                        <img src="../../assets/images/WechatIMG102.png" alt="">
                        <p>¥13.9</p>
                    </div>

                    <div class="flex-between flex-clo align-center items">
                        <img src="../../assets/images/WechatIMG102.png" alt="">
                        <p>¥13.9</p>
                    </div>
                </div>

                <div class="flex-start align-center">
                    <span>共2件</span>
                    <x-icon type="ios-arrow-right" size='30'></x-icon>
                </div>
            </div>
            <!-- 单行form -->
            <div class="item_form">
                <span>规格一</span>
                <span>规格单位</span>
            </div>
            <div class="item_form">
                <span>规格二</span>
                <span>规格单位</span>
            </div>
            <div class="item_form">
                <span>合计金额</span>
                <span>￥200</span>
            </div>

            <div class="item_form">
                <span>运费</span>
                <span>￥10</span>
            </div>
            <div class="message_area">
                <p>留言</p>
               <x-textarea :max="200" name="detail" placeholder="placeholder" :show-counter="true"></x-textarea>
               <!-- <p class="buyflag">支付代表同意《购买须知》</p> -->
            </div>
            <div class="pay_box">
            <div class="">
                <span>实际支付</span>
                <span class="red price_size">￥ 400.00</span>
            </div>
            <div class="buybutton">确认支付</div>
        </div>
        </div>
        
    </div>
</template>
<script>
import { XTextarea } from 'vux'
export default {
    components:{
        XTextarea
    },
    data() {
        return {
            key: 'value'
        }
    },
    methods: {
        goAddress() {
            this.$router.push('/addressment')
        }
    },
    mounted() {
        
    },
}
</script>
.<style lang="less">
    #paysure{
        width: 100%;
        height: 100%;
        // background: #F6F6F6;
        .address_box{
            padding: 0 0.28rem;
            background: #fff;
        }
        .title_address{
            padding: 0.28rem 0 0.14rem 0;
        }
        .person_msg{
                
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family:Arial;
            font-weight:400;
            // height: 2rem;
             line-height:0.31rem;
            color:rgba(102,102,102,1);
            .half_box{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 46%;
               
            }
            .icon_size{
                width: 0.34rem;
                height: 0.34rem;
            }
            .icon_right{
                width: 0.16rem;
                height: 0.28rem;
            }
        }
        .address_msg{
            display: flex;
            justify-content: space-between;
            padding:0 0.52rem 0 0.46rem;
            margin-top: 0.35rem;
            font-size:0.28rem;
            font-family:Arial;
            font-weight:400;
            line-height:0.38rem;
            color:rgba(51,51,51,1);
            overflow: hidden;
            .defalut_toic{
                padding: 0.01rem 0.08rem;
                font-size:0.2rem;
                font-family:PingFang SC;
                color: #fff;
                line-height:0.24rem;
                border-radius:1rem;
                background: #FA8665;
                
            }
            .topic_box{
                height: 0.8rem;
                width: 0.8rem;
                margin:0 0.11rem;
            }
        }
        .form_box{
            background: #fff;
            // height: calc(100% - 9.5rem);
            .goods_list{
                display: flex;
                justify-content: space-between;
                padding: 0.36rem 0.5rem;
                .items{
                    margin-right: 0.34rem;
                }
                img{
                    width: 1.4rem;
                    height: 1.4rem;
                }
                .item_msg{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    margin-left: 0.25rem;
                    .item_btm{
                        font-size:0.38rem;
                        line-height:0.53rem;
                        .item_num{
                            font-size:0.24rem;
                            line-height:0.56rem;
                        }
                    }
                }
               
            }
            .item_form{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.26rem 0;
                margin: 0 0.3rem;
                border-bottom: 1px solid #E9E9E9;
                font-size: 0.3rem;
                color: #1A202C;
                line-height: 0.56rem;
                // .check{
                //     position: relative;
                //     // display:inline-flex;
                //     height: 1.4rem;
                //     width: 1.4rem;
                //     align-items: center;
                //     justify-content: center;
                //     border:1px solid #4A7B67;
                //     border-radius: 50%; 
                // }
                // .checked{
                //     position: absolute;
                //     left:0;
                   
                //     top: 0;
                //     bottom: 0;
                //     // display: inline-block;
                //     height: 1rem;
                //     width: 1rem;
                //     border-radius: 50%; 
                //     background: #4A7B67;
                //     // transform: translateX(-50%)  translateY(-50%);
                // }
            }
            .message_area{
                padding: 0.26rem 0.3rem;
                font-size:0.3rem;
                line-height:0.56rem;
                color:rgba(26,32,44,1);
                border-bottom: 1px solid #E9E9E9;
                .vux-x-textarea.weui-cell{
                    border: 1px solid #E2E2E2;
                    // height: 6.05rem;
                }
                .buyflag{
                    padding: 0.7rem 0 2.3rem 0;
                    font-size:1.2rem;
                    line-height:1.65rem;
                    color:rgba(74,123,103,1);
                }
            }
           
          

        }
        .pay_box{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0 0.3rem;
            height: 1.09rem;
            background: #fff;
            // padding: 1rem 1.5rem;
            .buybutton{
                width: 2.24rem;
                height: 100%;
                color: #fff;
                background: #4A7B67;
                font-size:0.26rem;
                text-align: center;
                line-height:1.09rem;
                
            }
            .price_size{
                font-size:0.42rem;
                line-height:0.59rem;
            }
        }
    }
</style>
