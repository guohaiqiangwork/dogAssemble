<template>
  <div style="color:red">
    视频分享
    <video
      id="video1"
      src="http://vjs.zencdn.net/v/oceans.mp4"
      preload="auto"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      width="100%"
      height="260px"
      webkit-playsinline="true"
      playsinline="true"
      autoplay="true"
      controls="true"
    ></video>
    <button @click="go">暂停</button>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "shareVideo",
  data() {
    return {};
  },
  methods: {
    go () {
       var video1 = document.getElementById("video1")
         console.log(video1.pasued)
     
    }
  },
  created() {
    settitle("我是视频分享");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("视频分享");
     var video1 = document.getElementById("video1")
//     video.currentTime  // 播放的当前进度 -->
//     video.duration   //视频总时长 -->
//     video.pasued  //视频播放暂停的状态
//     video.pause()  //让视频暂停
//     video.play()  //让视频播放

  }
};
</script>
<style scoped>
</style>