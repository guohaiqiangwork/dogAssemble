<template>
    <div id="immediately">
        <div class="owner_msg">
            <p class="font_gray">王佳宇 13654550023</p>
            <p class="line_hieigher">
                <span class="circle_defalut">默认</span>
                <span>内蒙古包头市青山区青山区包商会大厦2710</span>
            </p>
        </div>

        <div class="order_msg">
            <div class="goods_detail">
                <img class="goods_img" src="../../assets/images/WechatIMG106_看图王.png" alt="">
                <div class="flex_clomn">
                    <p>熊孩子综合蔬菜干香菇脆秋葵干330g袋果蔬脆</p>
                    <p>
                        <span class="goods_price">￥14.9</span>
                        <span>×3</span>
                    </p>
                </div>
            </div>
            <div class="post_detail">
                <div class="post_list">
                    <span>合计金额</span>
                    <span>￥200.00</span>
                </div>
                <div class="post_list">
                    <span>运费</span>
                    <span>￥10.00</span>
                </div>
            </div>
            <div class="order_foot">
                <span>实际支付:</span>
                <span class="special_word">￥10.00</span>
            </div>
        </div>

        <div class="order_foot">
            <div class="flex_between">
                <div class="no_wrap">留言：</div>
                <p class="line_space">
                    邮到地方，请打电话～邮到地方，请打电话～邮
                    到地方，请打电话～
                </p>
            </div>
            <p class="flex_between mt_space">
                <span>订单编号：</span>
                <span>5680055555555555</span>
            </p>
            <p class="flex_between mt_space">
                <span>下单时间：</span>
                <span>2019-03-25  19:14:18</span>
            </p>
          
        </div>
        <div class="pay_btn">立即支付</div>
    </div>
</template>
<script>
export default {
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
#immediately{
    width: 100%;
    height: 100%;
     overflow-x: hidden;
    background: #F6F6F6;
    .owner_msg{
        background: #fff;
        padding: 0.42rem 0.46rem  0.34rem 0.46rem;
        font-size:0.28rem;
       
        .font_gray{
            margin-bottom: 0.09rem;
            font-size: #666;
            line-height: 0.3rem;
        }
        .line_hieigher{
            line-height: 0.38rem;
            .circle_defalut{
                padding: 0.01rem 0.08rem;
                margin-right: 0.1rem;
                font-size:0.2rem;
                color: #fff;
                background:rgba(250,134,101,1);
                border-radius:1rem;
            }
        }
    }
    .order_msg{
       
        margin-top: 0.16rem;
        background: #fff;
       
        .goods_detail{
            display: flex;
            justify-content: space-between;
             padding: 0.42rem  0.35rem;
            font-size: 0.28rem;
            .goods_img{
                width: 1.4rem;
                height: 1.4rem;
                margin-right: 0.25rem;
            }
            .flex_clomn{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .goods_price{
                    font-size: 0.38rem;
                }
            }
            
        }
        .post_detail{
            .post_list{
                display: flex;
                justify-content: space-between;
                padding: 0.24rem 0;
                margin: 0 0.35rem;
                border-bottom: 1px solid #E9E9E9;
            }
        }
        .order_foot{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.35rem 0.3rem;
            .special_word{
                font-size:0.46rem;
            }
        }
    }
    .order_foot{
        margin-top: 0.16rem;
        padding: 0.29rem 0.3rem 0.51rem 0.3rem;
        background: #fff;
         line-height: 0.56rem;
        .flex_between{
            display: flex;
            justify-content: space-between;
        }
        .line_space{
            margin-left: 0.15rem;
        }
        .no_wrap{
            white-space: nowrap;
        }
        .pt_space{
          padding-top: 0.33rem;  
        }
    }
    .pay_btn{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.09rem;
        text-align: center;
        line-height: 1.09rem;
        color: #fff;
        background: #4A7B67;
    }
}
</style>
