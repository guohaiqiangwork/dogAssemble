<template>
  <div id="xDiooo">
    <div>
      <div>
        <img src="../../assets/images/bjJJ12@2x.png" style="width: 100%;" alt />
        <div class="shared_B_D">
          <img :src="imgUrl" width="100%" />
          <!-- <img
            @click="getSharedBonus"
            src="../../assets/images/bJbutton12@2x.png"
            style="padding-bottom: 10%;width:50%"
            alt
          /> -->
        </div>
      </div>
    </div>
    <!-- 分享提示 -->
    <x-dialog v-model="showToast" class="dialog-demo">
      <div style=" background-color: rgba(0, 0, 0, 0);width: 100%;height: 500px;">
        <img src="../../assets/images/fengX.png" alt class="fengX_c_l" @click="showToast=false" />
      </div>
    </x-dialog>
  </div>
</template>
<script>
import url from "../../bin/url";
import wexinShare from "../../bin/weiXinShare";
import { XDialog, XButton } from "vux";

export default {
  components: {
    XDialog,
    XButton
  },
  name: "sharedBonusTwo",
  data() {
    return {
      code: "",
      imgUrl: "",
      showToast: false
    };
  },

  methods: {
    doShowToast() {
      this.$vux.toast.show({
        text: "toast"
      });
    },
    // getEr() {
    //   this.$fetch
    //     .post("/fruits/app/bonus/getCusQRCode", {
    //       // openId: this.routeParams[0].split("=")[1],
    //       // shareId: this.routeParams[1].split("=")[1]
    //       openId: localStorage.getItem("openId"),
    //       shareId: localStorage.getItem("appUserId")
    //     })
    //     .then(res => {
    //       if (res.code == 0) {
    //         this.imgUrl = url.imgUrl + res.obj;
    //         localStorage.setItem("imgUrlShared", this.imgUrl);
    //       } else {
    //         alert(res.msg);
    //       }
    //     });
    // },
    // 获取分享参数
    // getSharedBonus() {
    //   this.showToast = true;
    //   this.$fetch
    //     .post("/fruits/app/bonus/inviteFriends", {
    //       openId: localStorage.getItem("openId") || this.routeParams[1].split("=")[1],
    //       url: window.location.href.split("#")[0]
    //     })
    //     .then(
    //       data => {
    //         if (data.code == 0) {
    //           console.log(data);
    //           wexinShare(data.obj);
    //         } else {
    //           alert(data.msg);
    //         }
    //       },
    //       err => {
    //         alert("网络缓慢。。");
    //       }
    //     );
    // }
  },
  created() {
    settitle("共享奖金");
  },

  mounted() {
    this.routeParams = this.$route.params.obj.split("&");
    console.log(this.routeParams);
    this.imgUrl =
      "//www.gsb.yuntunet.cn/fruits/app/blank/showPicture?attachmentId=" +
      this.routeParams[0].split("=")[1];
    // console.log(this.routeParams[0].split("=")[1]);
    // console.log(this.routeParams[1].split("=")[1]);
    // this.getEr(); //获取二维码
  }
};
</script>
<style scoped>
.background_img {
  background-image: url("../../assets/images/bjJJ12@2x.png");
  background-size: 100%;
  height: 200px;
  background-repeat: no-repeat;
}
.shared_B_D {
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: -100%;
  position: sticky;
  width: 80%;
  margin-left: 10%;
  text-align: center;
}
.fengX_c_l {
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
}
</style>
<style>
#xDiooo .weui-dialog {
  position: fixed;
  display: table;
  z-index: 5000;
  width: 100%;
  min-width: 300px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: none !important;
  text-align: center;
  border-radius: 3px;
  overflow: unset !important;
}
</style>

