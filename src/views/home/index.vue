<template>
  <div>
    <!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header> -->
    <button @click="goToNationalStores">全国门店</button>
    <button @click="goToRecipeManual">配方手册</button>
    <button @click="goTocaseVideo">案例视频</button>
    <button @click="goToShareVideo">分享视频</button>
    <button @click="goToIntroduce">公司介绍</button>
    <button @click="goToSymptoms">检测病症</button>
    <button @click="goToPersonal">个人中心</button>
    <button @click="goToRecommend">推荐信息</button>
    <button @click="goToExclusive">专属门店</button>
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  name: "home",
  data() {
    return {};
  },
  methods: {
    getData() {
      var self = this;
      $.ajax({
        url: "http://f.apiplus.cn/bj11x5.json",
        type: "GET",
        dataType: "JSONP",
        success: function(res) {
          self.data = res.data.slice(0, 3);
          self.opencode = res.data[0].opencode.split(",");
        }
      });
    },
    //   去个人中心
    goToPersonal(id) {
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   去全国门店
    goToNationalStores(id) {
      this.$router.push({
        name: "nationalStores",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   去全国门店
    goToRecipeManual(id) {
      this.$router.push({
        name: "recipeManual",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   案例视频
    goTocaseVideo(id) {
      this.$router.push({
        name: "caseVideo",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    // 视频分享
    goToShareVideo() {
      this.$router.push({
        name: "shareVideo",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 公司介绍
    goToIntroduce() {
      this.$router.push({
        name: "introduce",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 病症检测
    goToSymptoms() {
      this.$router.push({
        name: "symptoms",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 个人中心
    goToPersonal() {
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 推荐信息
    goToRecommend() {
      this.$router.push({
        name: "recommend",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    },
    // 专属门店
    goToExclusive() {
      this.$router.push({
        name: "exclusive",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("我是调试页");
    // this.getCode();
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
button {
  background-color: blue;
  color: #fff;
  padding: 2%;
  border: none;
  font-size: 16px;
  border-radius: 5%;
  margin-top: 2%;
  margin-left: 3%
}
</style>