<template>
  <div>
    <div class="div_display_flex">
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input
          type="text"
          placeholder="搜索您想找的视频…"
          style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
        >
        <i></i>
        <!-- v-on:input="getCheckMember()"
        v-model="phone"-->
      </div>
      <div @click="goToVodeL" class="case_font">视频订单></div>
    </div>
    <div class="personal_img_bj" v-for="(item,index) in videoOneList" :key="index">{{item.name}}</div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "caseVideo",
  data() {
    return {
      videoOneList: "" //列表
    };
  },
  methods: {
    // 去视频列表
    goToVodeL() {
      this.$router.push({
        path: "/videolist",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "蚕丝"
            }
          })
        }
      });
    },
    // 获取列表
    getVideoOne() {
      let _obj = {
        openId: url.openId
      };
      this.$fetch.post(url.getVideoOne, _obj).then(
        data => {
          if (data.code == 0) {
            this.videoOneList = data.obj;
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("我是视频分享");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getVideoOne(); //获取视频
  }
};
</script>
<style scoped>
.personal_img_bj {
  background-image: url(/static/img/矩形1@2x.55d8df9.png);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 40%;
  text-align: center;
  color: #fff;
  font-size: 21px;
  line-height: 4;
  margin-top: 4%;
  margin-left: 6%;
  float: left;
}
/* 搜索框 */
.search_box {
  height: 0.7rem;
  /* margin: 0 auto; */
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin-top: 5%;
  width: 68%;
  margin-left: 6%;
}
.case_font {
  margin-top: 7%;
  margin-left: 3%;
  font-size: 15px;
}
</style>