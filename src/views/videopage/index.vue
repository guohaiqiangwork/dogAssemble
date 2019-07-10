<template>
  <div id="videopage">
    <!-- 视频页面 -->
    <div class="video_box" v-if="stateVIP == 0">
      <iframe
        id="video"
        style="width:100%;height:220px;display:block"
        frameborder="0"
        :src="videolUrl"
        allowfullscreen
      ></iframe>
      <!-- src="http://player.youku.com/embed/XNDEyMTAwNjE0MA==" -->
      <!-- :src="videolUrl" -->
    </div>
    <div class="video_box" style="background-color:#000000;text-align: center" v-if="stateVIP != 0">
      <img src="../../assets/images/videoP@2x.png" style="margin-top:15%" alt />
      <div>
        <img src="../../assets/images/videoB@2x.png" width="30%" alt @click="buyVide()" />
      </div>
    </div>
    <!-- 视频选集 -->
    <!-- <choose-num></choose-num> -->
    <div id="piece">
      <div class="piece_box">
        <p class="flex-between align-center">
          <span class="case_tit">{{videoList.classTwo}}</span>
          <!-- <img class="icon_size" src="../../assets/images/share.png" alt  /> -->
        </p>
        <div class="introduce">
          <p class="tit">简介</p>
          <p class="video_des">{{videoList.description}}</p>
        </div>
        <div class="piece_list">
          <p class="tit">选集</p>
          <ul class="flex-start">
            <li
              class="piece_item"
              @click="openBuy(item)"
              v-for="(item,index) in videoListObj"
              :key="index"
              tabindex="0"
            >
              <span>{{item.episode}}</span>
              <span class="pay_flag" v-if="item.isVIP == 1"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-transfer-dom>
      <popup v-model="show" position="bottom" max-height="50%">
        <div class="popup_box">
          <p class="text-right">
            <x-icon type="ios-close-empty" size="30" @click="show = false"></x-icon>
          </p>

          <div class="flex-between">
            <div class="flex-around flex-clo">
              <p class="video_name">{{videoList.classTwo}}</p>
              <p>{{videoList.description}}</p>
            </div>
            <p class="pay_price">￥{{modelData.price}}</p>
          </div>
          <div class="pay_btn" @click="saveVideoOrder">立即购买</div>
        </div>
      </popup>
    </div>
    <!-- <span @click="show = true">出来吧，弹窗！</span> -->
  </div>
</template>
<script>
import url from "../../bin/url";
import { TransferDom, Popup, XButton } from "vux";
import wexinPay from "../../bin/weiXinPay";
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    XButton,
    // Itemes
    chooseNum: resolve => require(["./choosenum/index.vue"], resolve)
  },
  data() {
    return {
      show: false,
      list: [1, 2, 3],
      videoList: "",
      videoListObj: "",
      videoIdPay: "",
      modelData: "",
      videolUrl: "",
      videoOrderId: "",
      stateVIP: ""
    };
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
            console.log(data);
            this.videoList = data.attributes;
            this.videoListObj = data.obj;
            this.videoIdPay = this.videoListObj[0].id;
            this.openBuy(this.videoListObj[0]);
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    //轮询支付状态
    redirect(val) {
      var count = 0;
      var timer = setInterval(() => {
        this.$fetch
          .post("fruits/app/video/getOrderState", {
            openId: localStorage.getItem("openId"),
            orderId: this.videoOrderId
          })
          .then(res => {
            count++;
            if (res.obj) {
              this.$vux.toast.text("购买成功");
              // this.$router.push('/home');
              clearInterval(timer);
              this.getVideoList();
            }
            if (count > 3) {
              clearInterval(timer);
              this.getVideoList();
              //  this.$router.push({
              //   name: "order",
              //   params: {
              //     obj: JSON.stringify({
              //       type: "profession",
              //       data: {
              //         id: "参数"
              //       }
              //     })
              //   }
              // });
            }
          });
      }, 1000);
    },
    // 购买视频
    saveVideoOrder() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.videoIdPay
      };
      this.$fetch.post(url.saveVideoOrder, _obj).then(
        data => {
          if (data.code == 0) {
            this.videoOrderId = data.attributes.orderId;
            var obj = eval("(" + data.obj + ")");
            console.log(obj);
            wexinPay(obj);
            this.redirect();
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 打开购买弹窗
    openBuy(item) {
      this.stateVIP = item.isVIP;
      console.log(this.stateVIP);
      if (item.isVIP == 0) {
        this.videolUrl = item.videoLink;
      }
      this.videoIdPay = item.id;
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.videoIdPay
      };
      this.$fetch.post(url.getVideoLink, _obj).then(
        data => {
          if (data.code == 0) {
            this.modelData = data.obj;
            if (data.obj.state == 0) {
              // this.show = true;
            } else {
              this.videolUrl = data.obj.videoLink;
              this.stateVIP = 0;
            }
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // buyVideo
    buyVide() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.videoIdPay
      };
      this.$fetch.post(url.getVideoLink, _obj).then(
        data => {
          if (data.code == 0) {
            this.modelData = data.obj;
            console.log(this.modelData);
            if (data.obj.state == 0) {
              this.show = true;
            } else {
              this.videolUrl = data.obj.videoLink;
              this.stateVIP = 0;
            }
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
    //
  },
  created() {
    this.routeParams = JSON.parse(this.$route.query.obj);
    this.videoId = this.routeParams.data.id;
  }
};
</script>
<style lang="less" scope>
ul {
  list-style: none;
}
.vux-popup-dialog {
  background: #fff !important;
}
.popup_box {
  padding: 0 0.3rem;
  font-size: 0.28rem;
  .text-right {
    text-align: right;
  }
  // .search_list{
  // .list_item{
  //     display: flex;
  //     justify-content: flex-start;
  //     margin: 0.34rem 0;
  //     // padding: 0.17rem 0.32rem;
  //     align-items: center;
  .video_img {
    width: 2.1rem;
    height: 1.4rem;
    margin-right: 0.21rem;
    border-radius: 0.12rem;
    background: #4a7b67;
  }
  .video_name {
    font-size: 0.34rem;
    line-height: 0.48rem;
  }
  .video_des {
    font-size: 0.26rem;
    line-height: 0.37rem;
    color: rgba(0, 0, 0, 0.52);
  }
  // .icon_pos{
  //     position: absolute;
  //     top: 0.3rem;
  //     right: 0.3rem;
  // }
  // }
  // }
  .pay_btn {
    width: 6.9rem;
    height: 0.9rem;
    margin: 0.43rem 0;
    background: rgba(74, 123, 103, 1);
    border-radius: 0.12rem;
    text-align: center;
    line-height: 0.9rem;
    color: rgba(255, 255, 255, 1);
  }
  .pay_price {
    // margin: 0.41rem 0 0.48rem 0;
    font-size: 0.48rem;
    text-align: right;
    line-height: 0.67rem;
    color: rgba(230, 67, 90, 1);
    .icon_size {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
}
.piece_list {
  .piece_sig {
    width: 0.9rem;
    height: 0.9rem;
    position: relative;
    margin-left: 0.21rem;
    background: #f5f5f5;
    border-radius: 0.08rem;
    text-align: center;
    line-height: 0.9rem;
    border: 1px solid #fff;
    .pay_flag {
      position: absolute;
      display: inline-block;
      // overflow: hidden;
      right: 0;
      top: 0;
      width: 0.3rem;
      height: 0.18rem;
      font-size: 0.11rem;
      background-color: rgba(232, 187, 122, 1);
      background: url("../../assets/images/vip@3x.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 0 0.08rem;
    }
  }
  .flex-start {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.3rem;
  }
  .piece_focus {
    background: #e9efec;
    color: #4a7b67;
    border: 1px solid rgba(74, 123, 103, 1);
  }
}
#videopage {
  .video_box {
    height: 4.22rem;
    // background: #000;
  }
}
</style>
<style lang="less">
#piece {
  :focus {
    outline: none;
  }
  ul {
    list-style: none;
  }
  padding: 0.23rem 0.3rem;
  .case_tit {
    font-size: 0.34rem;
  }
  .icon_size {
    width: 0.32rem;
    height: 0.32rem;
  }
  .introduce {
    margin-top: 0.36rem;
    .video_des {
      padding: 0.16rem 0 0.44rem 0;
      text-indent: 2em;
    }
  }
  .tit {
    font-size: 0.28rem;
    line-height: 0.34rem;
    color: #333333;
  }
  .piece_list {
    .piece_item {
      width: 0.9rem;
      height: 0.9rem;
      position: relative;
      margin-left: 0.21rem;
      background: #f5f5f5;
      border-radius: 0.08rem;
      text-align: center;
      line-height: 0.9rem;
      border: 1px solid #fff;
      .pay_flag {
        position: absolute;
        display: inline-block;
        // overflow: hidden;
        right: 0;
        top: 0;
        width: 0.3rem;
        height: 0.18rem;
        font-size: 0.11rem;
        background-color: rgba(232, 187, 122, 1);
        background: url("../../assets/images/vip@3x.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 0 0.08rem;
      }
    }
    .flex-start {
      display: flex;
      justify-content: flex-start;
      margin-top: 0.2rem;
    }
    .piece_item:focus {
      background: #e9efec;
      color: #4a7b67;
      border: 1px solid rgba(74, 123, 103, 1);
    }
    // .piece_item:active{
    //     background: #E9EFEC;
    //     color:  #4A7B67;
    //     border: 1px solid #4A7B67;
    // }
  }
}
</style>


