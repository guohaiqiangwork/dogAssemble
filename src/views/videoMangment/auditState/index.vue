<template>
    <div id="audit">
        <div class="conatiner">
            <div class="card" v-for="(item,index) in cardList" :key="index">
                <p class="card_title flex-between">
                    <span>{{item.createTime}}</span><span class="warn">{{'未通过'}}</span>
                </p>

                <div class="kind_list mt-sapce">
                    <p class="kind_name">分类</p>
                    <p>{{item.kind}}</p>
                </div>

                <div class="kind_list">
                    <p  class="kind_name">二级分类</p>
                    <p>{{item.kindSec}}</p>
                </div>

                <div class="kind_list">
                    <p  class="kind_name">视频名称</p>
                    <p>{{item.videoName}}</p>
                </div>

                <div class="kind_list">
                    <p  class="kind_name">视频链接</p>
                    <p class="video_link">{{item.videoLink}}</p>
                </div>

                <div class="kind_list">
                    <p class="kind_name">视频价格</p>
                    <p>{{item.videoPrice}}</p>
                </div>

                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardList: [
                {
                    createTime:'2019-01-25  15:00:00',
                    state:1,
                    kind:'高血压',
                    kindSec:'王阳案例',
                    videoName:'案例3',
                    videoLink:'https://www.iconfont.cn/search/index?',
                    videoPrice:'100.00元'
                   
                }
            ]
        }
    },
    methods: {
        name() {
            
        }
    },
    created(){
        settitle('审核状态');
    },
    mounted() {
        
    },
}
</script>
<style lang="less">
#audit{
    width: 100%;
    height: 100%;
    background: #F3F5F8;
    overflow-x: hidden;
    .conatiner{
        // width: 100%;
        height: calc(100% - 0.4rem);
        margin: 0 0.2rem;
        overflow-x: hidden;
        .card{
            margin-top: 0.2rem;
            padding-bottom: 0.06rem;
            border-radius: 0.12rem;
            background: #fff;
            .card_title{
                padding: 0.25rem 0.4rem;
                border-bottom: 1px solid #f4f4f4;
                .warn{
                    color: #E6435A;
                }
            }
            .mt-sapce{
                margin-top: 0.25rem;
            }
            .kind_list{
                display: flex;
                padding: 0 0.4rem 0.32rem;
                .kind_name{
                    min-width: 1.32rem;
                    margin-right: 0.26rem;
                }
                .video_link{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>
