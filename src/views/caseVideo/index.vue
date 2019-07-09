<template>
  <div>
    <div class="div_display_flex">
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input
          type="text"
          placeholder="搜索您想找的视频…"
          v-model="videoName"
          style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
          @input="input"
        >
        <i></i>
        <!-- v-on:input="getCheckMember()"
        v-model="phone"-->
           <!-- on-keyup =getCheckMember
          v-model="videoType" -->
      </div>
      <div class="case_font" @click="goToVOrder">视频订单></div>
    </div>
    <div
      class="personal_img_bj"
      @click="goToVodeL(item.id)"
      v-for="(item,index) in videoOneList"
      :key="index"
    >{{item.name}}</div>
  </div>
</template>
<script>
import { setTimeout, clearTimeout } from "timers";
import url from "../../bin/url";
let timer;
export default {
  name: "caseVideo",
  data() {
    return {
      videoOneList: "", //列表
      videoId: "",
      videoName:"",
      videoType:''
    };
  },
  methods: {
    // 去视频列表
    goToVodeL(item) {
      this.$router.push({
        path: "/videolist",
        query: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: item
            }
          })
        }
      });
    },
    input(){
       if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        // console.log(this.iptVal);
        this.getVideoOne();
        // this.filterList(this.list,this.iptVal);
        timer = null;
      }, 2000);
     
    },
    // 去视频列表
    goToVOrder(item) {
      this.$router.push({
        path: "/videosorder"
        //  query: {
        //   obj: JSON.stringify({
        //     type: "profession",
        //     data: {
        //       id: item
        //     }
        //   })
        // }
      });
    },
    // 获取列表
    getVideoOne() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name:this.videoName
      };
      this.$fetch.post(url.getVideoOne, _obj).then(
        data => {
          if (data.code == 0) {
            console.log(data.obj);
            this.videoOneList = data.obj;
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },

  mounted() {
    this.getVideoOne(); //获取视频
  }
};
</script>
<style scoped>
.personal_img_bj {
  background-image: url("../../assets/images/999009.png");
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
  margin: 5% auto;
  width: 68%;
  margin-left: 6%;
}
.case_font {
  margin-top: 7%;
  margin-left: 3%;
  font-size: 15px;
}
</style>