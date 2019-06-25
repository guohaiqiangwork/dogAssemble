<template>
  <div id="videomangment">
    <div class="mangment_in flex-around">
      <div class="opt_btn" @click="uploadVideo">上传视频</div>
      <div class="opt_btn" @click="goAudit">审核状态</div>
    </div>
    <div class="video_list">
      <div class="video_item" v-for="(item,index) in videoList" :key="index">
        <p class="flex-between align-center">
          <span class="illness_name">{{item.illnessName}}</span>
          <span class="creat_time">{{item.creatTiem}}</span>
        </p>
        <p class="video_name">{{item.videoName}}</p>
        <p class="video_desc">{{item.videoDesc}}</p>
        <p class="video_price">{{item.videoPrice}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      videoList: [
        {
          illnessName: "糖尿病",
          creatTiem: "2018.09.10 12:00:00",
          videoName: "王阳案例1（4集）",
          videoDesc:
            "查看此视频对糖尿病患者有帮助查看此视频对糖尿病患者有帮助查看此视频对糖尿病患者有帮助查看此视频对糖尿病患",
          videoPrice: "¥19.90"
        },
        {
          illnessName: "糖尿病",
          creatTiem: "2018.09.10 12:00:00",
          videoName: "王阳案例1（4集）",
          videoDesc:
            "查看此视频对糖尿病患者有帮助查看此视频对糖尿病患者有帮助查看此视频对糖尿病患者有帮助查看此视频对糖尿病患",
          videoPrice: "¥19.90"
        }
      ]
    };
  },
  methods: {
    goAudit() {
      this.$router.push("/auditstate");
    },
    uploadVideo() {
      this.$router.push("/videoupload");
    },
   
  },
  mounted() {
  
  },
  
};
</script>
<style lang="less">
#videomangment {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  .mangment_in {
    padding: 0.52rem 0;
    background: #fff;
    .opt_btn {
      width: 2.3rem;
      height: 0.6rem;
      background: #4a7b67;
      border-radius: 0.12rem;
      color: #fff;
      text-align: center;
      line-height: 0.6rem;
    }
  }
  .video_list {
    padding: 0 0.35rem;
    margin-top: 0.2rem;
    background: #fff;
    height: calc(100% - 1.88rem);
    overflow-x: hidden;
    .video_item {
      padding: 0.3rem 0 0.2rem 0;
      border-bottom: 1px solid #f4f4f4;
      .illness_name {
        font-size: 0.34rem;
        line-height: 0.48rem;
      }
      .creat_time {
        font-size: 0.26rem;
        line-height: 0.37rem;
        color: #000;
        opacity: 0.52;
      }
      .video_name {
        font-size: 0.3rem;
        line-height: 0.42rem;
      }
      .video_desc {
        font-size: 0.26rem;
        line-height: 0.37rem;
        color: #000;
        opacity: 0.52;
      }
      .video_price {
        display: flex;
        justify-content: flex-end;
        font-size: 0.3rem;
        line-height: 0.42rem;
        color: rgb(230, 67, 90);
      }
    }
  }
}
</style>
