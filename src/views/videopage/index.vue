<template>
    <div id="videopage">
        <!-- 视频页面 -->
        <div class="video_box">

        </div>
        <!-- 视频选集 -->
        <choose-num></choose-num>

        <div v-transfer-dom>
            <popup v-model="show" position="bottom" max-height="50%">
                <div class="popup_box">
                    <div class="search_list">
                        <div class="list_item">
                            <div class="video_img"></div>
                            <div class="flex-around flex-clo ">
                                <p class="video_name">王阳案例1</p>
                                <p>查看此视频对糖尿病患者有帮助</p>
                            </div>
                            <x-icon type="ios-close-empty" size="30" class="icon_pos" @click="show = false"></x-icon>
                            <!-- <x-icon type="ios-arrow-right" class="icon_middle"></x-icon> -->
                        </div>
                    </div>
        
                    <div class="piece_list">
                        <p class="tit">选择课程集数（可多集购买）</p>
                        <ul class="flex-start">
                            <li :class="['piece_sig', 'piece_focus']" v-for="(item,index) in list" :key="index"> <span>{{item}}</span>  <span class="pay_flag" ></span></li>
                        </ul>
                        
                    </div>
                
            
                    <div class="pay_price">
                        <img class="icon_size" src="../../assets/images/scan.png" alt="">
                        ¥19.90
                    </div>
                    <div class="pay_btn">
                        立即充值
                    </div>
                </div>
            </popup>
        </div>
        <span @click="show = true">出来吧，弹窗！</span>
        
    </div>
</template>
<script>
import { TransferDom, Popup, XButton} from 'vux'
export default {
    directives: {
        TransferDom
    },
    components:{
         Popup, XButton,
    // Itemes
        chooseNum:resolve => require(['./choosenum/index.vue'],resolve),
    },
    data() {
        return {
            show: false,
            list:[1,2,3]
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
<style lang="less" scope>
  ul{
        list-style: none;
    }
     .vux-popup-dialog{
        background: #fff !important;
    }
  .popup_box{
        padding: 0 0.3rem;
        font-size: 0.28rem;
        .search_list{
            .list_item{
                display: flex;
                justify-content: flex-start;
                margin: 0.34rem 0;
                // padding: 0.17rem 0.32rem;
                align-items: center;
                .video_img{
                    width: 2.1rem;
                    height: 1.4rem;
                    margin-right: 0.21rem;
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
                .icon_pos{
                    position: absolute;
                    top: 0.3rem;
                    right: 0.3rem;
                }
            }
        }
        .pay_btn{
            width:6.9rem;
            height:0.9rem;
            margin: 0.43rem 0;
            background:rgba(74,123,103,1);
            border-radius:0.12rem;
            text-align: center;
            line-height:0.9rem;
            color:rgba(255,255,255,1);
        }
        .pay_price{
            margin: 0.41rem 0 0.48rem 0;
            font-size:0.48rem;
            text-align: right;
            line-height:0.67rem;
            color:rgba(230,67,90,1);
            .icon_size{
                width: 0.32rem;
                height: 0.32rem;
            }
        }
    }
      .piece_list{
        .piece_sig{
            width:0.9rem;
            height:0.9rem;
            position: relative;
            margin-left: 0.21rem;
            background:#F5F5F5;
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.9rem;
            border: 1px solid #fff;
            .pay_flag{
                position: absolute;
                display: inline-block;
                // overflow: hidden;
                right: 0;
                top: 0;
                width:0.3rem;
                height:0.18rem;
                font-size: 0.11rem;
                background-color:rgba(232,187,122,1);
                background: url('../../assets/images/vip@3x.png') no-repeat;
                background-size:100% 100%; 
                border-radius: 0 0.08rem;
            }
        }
        .flex-start{
            display: flex;
            justify-content: flex-start;
            margin-top: 0.3rem;
        }
         .piece_focus{
            
            background: #E9EFEC;
            color:  #4A7B67;
            border: 1px solid rgba(74,123,103,1);
        }
    }
#videopage{
   
    .video_box{
        height: 4.22rem;
        background: #000;
    }
  
  
}
</style>
