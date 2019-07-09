<template>
  <div>
    <!-- <div class="background_img">
      <img :src=imgUrl >
    </div>-->
    <div>
      <div>
        <img src="../../assets/images/bjJJ12@2x.png" style="width: 100%;" alt />
        <!-- <div>
          <img :src=imgUrl >
        </div>-->
        <div class="shared_B_D">
          <img :src="imgUrl" width="50%" />
          <img
            @click="showToast=true"
            src="../../assets/images/bJbutton12@2x.png"
            style="padding-bottom: 10%;width:50%"
            alt
          />
        </div>
      </div>
    </div>
    <x-dialog v-model="showToast" class="dialog-demo">
      <div style="padding:15px;background-color:rgba(0, 0, 0, 0.6)">
        <img src="../../assets/images/fengX.png" alt class="fengX_c_l" @click="showToast=false" />
        <!-- <x-button @click.native="doShowToast" type="primary">show toast</x-button> -->
      </div>
      <!-- <div @click="showToast=false">
        <span class="vux-close"></span>
      </div>-->
    </x-dialog>
  </div>
</template>
<script>
import url from "../../bin/url";
import wxShare from "../../bin/weiXinShare";
import { XDialog, XButton } from "vux";

export default {
  components: {
    XDialog,
    XButton
  },
  name: "sharedBonus",
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
    getEr() {
      this.$fetch
        .post("/fruits/app/bonus/getCusQRCode", {
          openId:this.routeParams[0].split('=')[1],
          shareId: this.routeParams[1].split('=')[1]
        })
        .then(res => {
          if (res.code == 0) {
            console.log(res.obj);
            this.imgUrl = url.imgUrl + res.obj;
            console.log(this.imgUrl);
          } else {
            alert(res.msg);
          }
        });
    }
  },
  created() {
    settitle("共享奖金");
  },

  mounted() {
    this.routeParams = this.$route.params.obj.split("&");
    console.log(this.routeParams);
    console.log(this.routeParams[0].split('=')[1]);
    console.log(this.routeParams[1].split('=')[1]);
    this.getEr();
    console.log(wxShare);
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