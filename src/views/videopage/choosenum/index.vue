<template>
    <div id="piece">
        <div class="piece_box">
            <p class="flex-between align-center">
                <span class="case_tit">{{videoList.attributes.name}}</span>
                <img  class="icon_size" src="../../../assets/images/share.png" alt="">
            </p>
            <div class="introduce">
                <p class="tit">简介</p>
                <p class="video_des">{{videoList.attributes.description}}</p>
            </div>
            <div class="piece_list">
                <p class="tit">选集</p>
                <ul class="flex-start">
                    <li class="piece_item" v-for="(item,index) in videoList.obj" :key="index" tabindex = "0"> <span>{{item.episode}}</span>  <span class="pay_flag" ></span></li>
                </ul>
                 
            </div>
        </div>
    </div>
</template>
<script>
import url from "../../../bin/url";
export default {
    data() {
        return {
            videoList: '',
            list:[1,2,3]
        }
    },
    methods: {
        // 获取列表
    getVideoList() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.videoId
      };
      this.$fetch.post(url.getVideoList, _obj).then(
        data => {
          if (data.code == 0) {
            this.videoList = data
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
    },
    mounted() {
          this.getVideoList();
    },
    created() {
    this.routeParams = JSON.parse(this.$route.query.obj);
    console.log("567890-");
    this.videoId = this.routeParams.data.id;
  }
}
</script>
<style lang="less">
#piece{
    :focus{
        outline: none;
    }
    ul{
         list-style: none;
    }
    padding: 0.23rem 0.3rem;
    .case_tit{
        font-size: 0.34rem;
    }
    .icon_size{
        width: 0.32rem;
        height: 0.32rem;
    }
    .introduce{
        margin-top: 0.36rem;
        .video_des{
            padding: 0.16rem 0 0.44rem 0;
            text-indent: 2em;
        
        }
    }
    .tit{
        font-size: 0.28rem;
        line-height:0.34rem;
        color: #333333;
    }
    .piece_list{
        
        .piece_item{
           
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
                background: url('../../../assets/images/vip@3x.png') no-repeat;
                background-size:100% 100%; 
                border-radius: 0 0.08rem;
            }
        }
        .flex-start{
            display: flex;
            justify-content: flex-start;
            margin-top: 0.2rem;
        }
         .piece_item:focus{
            background: #E9EFEC;
            color:  #4A7B67;
            border: 1px solid rgba(74,123,103,1);
        }
        // .piece_item:active{
        //     background: #E9EFEC;
        //     color:  #4A7B67;
        //     border: 1px solid #4A7B67;
        // }
    }
   
   
}
</style>

