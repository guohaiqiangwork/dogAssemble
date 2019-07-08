<template>
  <div style="height:100%;">
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您找的店铺"
        v-on:input="getWholeList(name)"
        v-model="name"
        maxlength="11"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="selPullUp"
      @pulldown="pulldown"
      style = "height:100%;"
    >
      <div slot="list" class="nut-vert-list-panel">
        <div v-if="routeParams.data.id == '001'">
          <div
            class="div_display_flex margin_left_div6 margin_top_div3"
                 style="display: flex;
    justify-content: space-between;"
            v-for="(item,index) in getRecommendBList"
            :key="index"
          >
            <div class="div_width_70 font_size_14">
              {{item.name}}
              <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span>
            </div>
            <!-- <div class="div_with_30 red margin_left_div6" style="margin-right: 8%;">¥{{item.money}}</div> -->
               <div class="div_with_30" style="margin-right:6%" v-if="item.type == 1">家庭版</div>
              <div class="div_with_30" style="margin-right:6%" v-if="item.type == 0">店铺版</div>
          </div>
        </div>
        <div v-if="routeParams.data.id == '002'">
          <div
            class="div_display_flex margin_left_div6 margin_top_div3"
          style="display: flex;
    justify-content: space-between;"
            v-for="(item,index) in getVideoDistriList"
            :key="index"
          >
            <div class="div_width_70 font_size_14">
              {{item.name}}
              <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span>
            </div>
            <div class="div_with_30 red margin_left_div6" style="margin-right: 8%;">¥{{item.money}}</div>
          </div>
        </div>
        <div v-if="routeParams.data.id == '003'">
          <div
            style="display: flex;
    justify-content: space-between;"
            class="div_display_flex margin_left_div6 margin_top_div3"
            v-for="(item,index) in getOrderDistriList"
            :key="index"
          >
            <div class="div_width_70 font_size_14">
              {{item.name}}
              <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span>
            </div>
            <div class="div_with_30 red margin_left_div6"  style="margin-right: 8%;">¥{{item.money}}</div>
          </div>
        </div>
      </div>
    </nut-scroller>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Scroller } from "vux";
import { setTimeout, clearTimeout } from "timers";
let timer;
export default {
  components: {
    Scroller
  },
  name: "healthDetail",
  data() {
    return {
      getOrderDistriList: "",
      getRecommendBList: "",
      getVideoDistriList: "",
      name: "",
      isUnMore1: false,
      isLoading1: false,
      page: {
        size: 10,
        current: 1
      }
    };
  },
  methods: {
    // 列表查询
    getWholeList(item) {
      this.itemName = item;
        // this.getListF();
      if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        console.log( this.itemName)
        this.getListF();
        // this.filterList(this.list,this.iptVal);
        timer = null;
      }, 2000);
      // this.itemName = item;
      // this.getListF();
    },

    // 健康奖金--推荐返佣列表
    getRecommendB() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getRecommendB, _obj).then(
        data => {
          if (data.code == 0) {
            // if (this.getRecommendBList.length == 0) {
              this.getRecommendBList = data.obj;
            // } else {
              // this.getRecommendBList.concat(data.obj);
            // }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 视频返佣列表
    getVideoDistri() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getVideoDistri, _obj).then(
        data => {
          if (data.code == 0) {
            if (this.getVideoDistriList.length == 0) {
              this.getVideoDistriList = data.obj;
            } else {
              this.getVideoDistriList.concat(data.obj);
            }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 健康奖金商城
    getOrderDistri() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getOrderDistri, _obj).then(
        data => {
          if (data.code == 0) {
            if (this.getOrderDistriList.length == 0) {
              this.getOrderDistriList = data.obj;
            } else {
              this.getOrderDistriList.concat(data.obj);
            }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 上拉加载
    selPullUp() {
      this.page.current++;
      this.getListF();
    },
    // 下拉刷新
    pulldown() {
      this.isUnMore1 = false;
      this.page.current = 1;
      this.getListF();
    },
    // 判断调用那个
    getListF() {
      switch (this.routeParams.data.id) {
        case "001":
          this.getRecommendB();
          break;
        case "002":
          this.getVideoDistri();
          break;
        case "003":
          this.getOrderDistri();
          break;
      }
    }
  },
  created() {
    settitle("健康奖金详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    this.getListF(); //判断调用那个方法
  },

  mounted() {}
};
</script>
<style scope>
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem !important;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin-top: 5%;
  width: 94%;
}
</style>