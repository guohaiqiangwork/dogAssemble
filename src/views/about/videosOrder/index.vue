<template>
  <div id="videos-order">
    <div v-if="videoOrderList.length != 0">
      <div class="order-item" v-for="(item,index) in videoOrderList" :key="index">
        <div class="order-head">
          <p class="flex-between align-center">
            <span class="ill-name">{{item.classOne}}</span>
            <span class="date-style">{{item.date}}</span>
          </p>
          <p class="video-name">{{item.classTwo}}</p>
        </div>
        <p class="order-foot flex-between pt-space">
          <span>已买集数：第{{item.episode}}集</span>
          <span class="red">¥{{item.episode}}</span>
        </p>
      </div>
    </div>
    <div v-if="videoOrderList.length == 0">
      <div class="text_center">
        <img src="../../../assets/images/1546@2x.png" style="width:80%;margin-top:30%" alt>
      </div>
      <div class=" font_size_15 text_center margin_top_div3">这里空空如也～</div>
    </div>
  </div>
</template>
<script>
import url from "../../../bin/url";
export default {
  data() {
    return {
      key: "value",
      videoOrderList: ""
    };
  },
  methods: {
    // 获取列表
    getVideoOrder() {
      let _obj = {
        openId: url.openId
      };
      this.$fetch.post(url.getVideoOrder, _obj).then(
        data => {
          if (data.code == 0) {
            console.log(data);
            // this.videoOrderList = data.obj;
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  mounted() {
    this.getVideoOrder();
  }
};
</script>
<style lang="less">
#videos-order {
  height: 100%;
  background: #f3f5f8;
  overflow-x: hidden;
  .order-item {
    margin: 0.3rem 0.2rem 0;
    padding: 0.3rem 0.3rem 0.2rem;
    background: #fff;
    border-radius: 0.12rem;
    .order-head {
      border-bottom: 1px solid #f4f4f4;
      .ill-name {
        font-size: 0.34rem;
      }
      .date-style {
        font-size: 0.26rem;
        opacity: 0.52;
      }
      .video-name {
        padding: 0.1rem 0 0.2rem;
      }
    }
    .order-foot {
    }
    .pt-space {
      padding-top: 0.16rem;
    }
  }
}
</style>

