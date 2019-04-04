<template>
  <div :endTime="endTime" :callback="callback" :endText="endText" class="text_center">
    <slot>
      <!-- {{content}} -->
      <span class="time_span">{{day}}</span> :
      <span class="time_span">{{hour}}</span> :
      <span class="time_span">{{min}}</span>:
      <span class="time_span">{{sec}}</span>
    </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      day: "",
      hour: "",
      min: "",
      sec: ""
    };
  },
  props: {
    endTime: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: "已结束"
    },
    callback: {
      type: Function,
      default: ""
    }
  },
  mounted() {
    this.countdowm(this.endTime);
  },
  methods: {
    countdowm(timestamp) {
      let self = this;
      let timer = setInterval(function() {
        let nowTime = new Date();
        let endTime = new Date(timestamp * 1000);
        let t = endTime.getTime() - nowTime.getTime();
        if (t > 0) {
          let day = Math.floor(t / 86400000);
          let hour = Math.floor((t / 3600000) % 24);
          let min = Math.floor((t / 60000) % 60);
          let sec = Math.floor((t / 1000) % 60);
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = "";
          format = `${day}天${hour}小时${min}分${sec}秒`;
          // if(day > 0){
          //    format =  `${day}天${hour}小时${min}分${sec}秒`;
          // }
          // if(day <= 0 && hour > 0 ){
          //    format = `${hour}小时${min}分${sec}秒`;
          // }
          // if(day <= 0 && hour <= 0){
          //    format =`${min}分${sec}秒`;
          // }
          self.content = format;
          self.day = day;
          self.hour = hour;
          self.min = min;
          self.sec = sec;
        } else {
          clearInterval(timer);
          self.content = self.endText;
          self._callback();
        }
      }, 1000);
    },
    _callback() {
      if (this.callback && this.callback instanceof Function) {
        this.callback(...this);
      }
    }
  }
};
</script>
<style scope>
.time_span {
  padding: 1% 2%;
  border-radius: 3px;
  background-color: #ffe001;
  color: #101010;
  font-size: 14px
}
.text_center {
  text-align: center;
  margin-top: 26px;
}
</style>
