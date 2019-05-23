<template>
    <div id="videos-order">
        <div class="order-item">
            <div class="order-head">
                <p class="flex-between align-center">
                    <span class="ill-name">糖尿病</span>
                    <span class="date-style">2018.09.10 12:00:00</span>
                </p>
                <p class="video-name">王阳案例2</p>
            </div>
            <p class="order-foot flex-between pt-space">
                <span>已买集数：第3集</span>
                <span class="red">¥19.90</span>
            </p>
        </div>

        <div class="order-item">
            <div class="order-head">
                <p class="flex-between align-center">
                    <span class="ill-name">糖尿病</span>
                    <span class="date-style">2018.09.10 12:00:00</span>
                </p>
                <p class="video-name">王阳案例2</p>
            </div>
            <p class="order-foot flex-between pt-space">
                <span>已买集数：第3集</span>
                <span class="red">¥19.90</span>
            </p>
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
#videos-order{
    height: 100%;
    background: #F3F5F8;
    overflow-x: hidden; 
    .order-item{
        margin: 0.3rem 0.2rem 0;
        padding: 0.3rem 0.3rem 0.2rem;
        background: #fff;
        border-radius: 0.12rem;
        .order-head{
            border-bottom: 1px solid #f4f4f4;
            .ill-name{
                font-size: 0.34rem;
            }
            .date-style{
                font-size:0.26rem;
                opacity:0.52;
            }
            .video-name{
                padding: 0.1rem 0 0.2rem;;
            }
        }
        .order-foot{

        }
        .pt-space{
            padding-top: 0.16rem;
        }
    }
}
</style>

