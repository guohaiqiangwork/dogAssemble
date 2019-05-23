<template>
    <div id="whole">
        <div class="flex-between">
            <div class="goods_item">
                <div class="img_box">
                    <img class="goods_img" src="../../../assets/images/WechatIMG102.png" alt="">
                </div>
                <div class="goods_msg">
                    <p class="goods_name">产那安娜</p>
                    <p class="red">￥21.9</p>
                </div>
            </div>

            <div class="goods_item">
                <div class="img_box">
                    <img class="goods_img" src="../../../assets/images/WechatIMG102.png" alt="">
                </div>
                <div class="goods_msg">
                    <p class="goods_name">产那安娜</p>
                    <p class="red">￥21.9</p>
                </div>
            </div>
        </div>
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
#whole{
    padding: 0.35rem 0.42rem 0;
    
    .goods_item{
        border-radius: 0.12rem;
        background: #fff;
        font-size: 0;
        .img_box{
            border-bottom: 1px solid #e9e9e9; 
            .goods_img{
                width: 2.57rem;
                height: 2.57rem;
                padding: 0.3rem 0.3rem;
            }
        }
        .goods_msg{
            font-size:0.28rem;
            padding: 0.21rem 0.31rem;
            .goods_name{
                line-height:0.4rem;
            }
        }
        
    }
    
}
</style>
