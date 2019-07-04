<template>
  <div>
    <div class="background_img">
      <img :src=imgUrl >
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import wxShare from '../../bin/weChat_jsSdk'
export default {
  components: {},
  name: "sharedBonus",
  data() {
    return {
      code: "",
      imgUrl: ""
    };
  },
  methods: {
    getEr() {
      this.$fetch
        .post("/fruits/app/bonus/getCusQRCode", {
          openId: localStorage.getItem("openId"),
          shareId: localStorage.getItem("appUserId")
        })
        .then(res => {
          if (res.code == 0) {
            console.log(res.obj);
            this.imgUrl = url.imgUrl + res.obj;
            console.log(this.imgUrl )
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
    this.getEr();
    console.log(wxShare)
  }
};
</script>
<style scoped>
.background_img {
  background-image: url("../../assets/images/bg@3x.png");
  background-size: 100% 90%;
  height: 200px;
  background-repeat: no-repeat;
}
</style>