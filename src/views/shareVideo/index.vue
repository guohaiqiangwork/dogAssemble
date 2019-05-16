<template>
  <div style="color:red">
    <!-- <div class="test_two_box">
      <video id="myVideo" class="video-js">
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      </video>
    </div>-->
    视频分享
    <div>
      <iframe
        id="video"
        height="498"
        width="510"
        src="http://player.youku.com/embed/XNDEyMTAwNjE0MA=="
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>我的
    <!-- <video
      id="video1"
      src="http://player.youku.com/player.php/sid/XNDE2Njg0MDI0OA==/v.swf"
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
      type="video/swf"
    ></video>-->

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
    // initVideo() {
    //   //初始化视频方法
    //   let myPlayer = this.$video(myVideo, {
    //     //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
    //     controls: true,
    //     //自动播放属性,muted:静音播放
    //     autoplay: "muted",
    //     //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
    //     preload: "auto",
    //     //设置视频播放器的显示宽度（以像素为单位）
    //     width: "800px",
    //     //设置视频播放器的显示高度（以像素为单位）
    //     height: "400px"
    //   });
    // },
    go() {
      var video1 = document.getElementById("video1");
      console.log(video1.pasued);
    }
  },
  created() {
    settitle("我是视频分享");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("视频分享");
    // this.initVideo();
    var video1 = document.getElementById("video1");
    // video.currentTime; // 播放的当前进度 -->
    // video.duration; //视频总时长 -->
    // video.pasued; //视频播放暂停的状态
    // video.pause(); //让视频暂停
    // video.play(); //让视频播放
  }
};
</script>
<style scoped>
</style>