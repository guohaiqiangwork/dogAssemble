<template>
    <div id="video-list">
        
            <div class="search_box">
                <i class="weui-icon-search search_icon"></i>
                <input type="text" placeholder="搜索您想找的视频">
            </div>
          
  
        <div class="search_list">
            <div class="list_item flex-between" v-for="(item,index) in searchList" :key="index" @click="visitTv">
                <div class="video_img"></div>
                <div class="flex-around flex-clo ">
                    <p class="video_name">{{item.videoname}}</p>
                    <p>{{item.videodes}}</p>
                </div>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           searchList: [
                {
                    videoid:'',
                    videoimg:'',
                    videoname:'王阳案例1',
                    videodes:'查看此视频对糖尿病患者有帮助'
                },
                {
                    videoid:'',
                    videoimg:'',
                    videoname:'王阳案例1',
                    videodes:'查看此视频对糖尿病患者有帮助'
                }
            ]
        }
    },
    methods: {
        visitTv() {
            this.$router.push('/videopage')
        }
    },
}   
</script>
<style lang="less">
#video-list{
    height: 100%;
    overflow: hidden;
    .vux-x-icon {
        fill: #A0A0A0;
    }
    .head-box{
        margin: 0.24rem 0.32rem;
    }
    .search_box{
        height: 0.7rem;
        // width: 5.18rem;
        margin: 0.24rem 0.3rem;
        padding:  0 0.31rem;
        // margin: 0.65rem 1.5rem 0;
        border-radius:0.35rem;
        position: relative;
       
  
        box-sizing: border-box;
        z-index: 1;
        display: flex;
        align-items: center;
        background: #EFEFEF;
        line-height: 3.5rem;
        box-shadow:0rem 0.03rem 0.1rem rgba(136,136,136,0.16);
        input{
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background: #EFEFEF;
        }
        .search_icon{
          font-size: 0.28rem;
          padding-right: 0.2rem;
        }
    }
        .case_box{
            display: grid;
          
            grid-template-columns:1fr 50px 1fr ;
            grid-template-columns: 1fr 3.3rem;
            grid-template-rows: 2.17rem 1.93rem;
            
            // width: 100%;
            margin: 0.4rem 0.32rem 0;
            
          .case_item{
            display: flex;
            width:3.3rem;
            height:1.93rem;
            background:rgba(74,123,103,1);
            border-radius: 0.24rem;
            line-height:0.5rem;
            justify-content: center;
            align-items: center;
           .case_neme{
               font-size:0.36rem;
               color: #fff;
               text-align: left;
           }
           .case_eng{
                font-size:0.4rem;
                line-height:0.56rem;
                color:rgba(255,255,255,0.24);
           }
        }
    }
    .list_opt{
        position: fixed;
        width: calc(100% - 0.64rem);
        padding: 0 0.32rem;
        font-size: 0.34rem;
        color: #242E42;
        
        bottom: 0.41rem;
        .vux-x-icon {
            fill: #a0a0a0;
        }
    }

    .search_list{
        .list_item{
            padding: 0.17rem 0.32rem;
            align-items: center;
            .video_img{
                width: 2.1rem;
                height: 1.4rem;
                border-radius: 0.12rem;
                background: #4A7B67;
            }
            .video_name{
                font-size: 0.34rem;
                line-height: 0.48rem;
            }
            .video_des{
                font-size:0.26rem;
                line-height:0.37rem;
                color:rgba(0,0,0,0.52);
            }
        }
    }
}
</style>
