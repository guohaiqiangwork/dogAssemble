<template>
  <div>
    <!-- <div class="background_img">
      <img :src=imgUrl >
    </div>-->
    <div>
      <div>
        <img src="../../assets/images/bjJJ12@2x.png" style="width: 100%;    padding-top: 5%;" alt />
        <!-- <div>
          <img :src=imgUrl >
        </div>-->
        <div class="shared_B_D">
          <img :src="imgUrl" width="50%" />
          <img src="../../assets/images/bJbutton12@2x.png" style="padding-bottom: 10%;width:50%" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import wxShare from "../../bin/weiXinShare";
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
</style>