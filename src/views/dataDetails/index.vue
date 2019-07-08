<template>
  <div>
    <div v-if="dataChargeList.length != 0">
      <!-- 详情列表 -->
      <!-- <nut-scroller
        :is-un-more="isUnMore1"
        :is-loading="isLoading1"
        :type="'vertical'"
        @loadMore="selPullUp"
        @pulldown="pulldown"
      >-->
      <div>
        <div slot="list" class="nut-vert-list-panel">
          <div class="data_d_b" v-for="(item,index) in dataChargeList" :key="index">
            <div class="div_display_flex font_size_16 font_color_33 margin_top_div5">
              <div class="div_width_50">{{item.spare}}</div>
              <div class="div_width_50 text_right">{{item.recharge}}</div>
            </div>
            <div
              class="font_size_13 font_color_A1 margin_top_div3 padding_bottom_4"
            >{{item.rechargeTime}}</div>
          </div>
        </div>
      </div>
      <!-- </nut-scroller> -->
    </div>
    <div v-if="dataChargeList.length == 0">
      <div>
        <img
          src="../../assets/images/1546@2x.png"
          style=" width: 80%; margin-left: 10%;margin-top: 30%;"
          alt
        >
      </div>
      <div class="text_center">暂无数据</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "dataDetails",
  data() {
    return {
      dataChargeList: [],
      page: {
        size: 10,
        current: 1
      },
      isUnMore1: false,
      isLoading1: false,
      dataChargeListP: ""
    };
  },
  methods: {
    // 获取数据
    getChargeList() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        type: this.routeParams.data.id,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getChargeList, _obj).then(data => {
        if (data.code == 0) {
          // this.dataChargeList = this.dataChargeList.concat(data.obj);
          this.dataChargeList = data.obj;
          console.log(this.dataChargeList);
        } else {
          alert(data.msg);
        }
      });
    },
    // 上拉加载
    selPullUp() {
      this.page.current++;
      this.getChargeList();
    },
    // 下拉刷新
    pulldown() {
      this.isUnMore1 = false;
      this.page.current = 1;
      this.dataChargeList = [];
      this.getChargeList();
    }
  },
  created() {
    this.routeParams = JSON.parse(this.$route.params.obj);
    if (this.routeParams.data.id == 1) {
      var title = "会员充值";
    } else if (this.routeParams.data.id == 2) {
      var title = "押金支出";
    } else if (this.routeParams.data.id == 3) {
      var title = "转店收入";
    } else if (this.routeParams.data.id == 4) {
      var title = "跨店服务费";
    } else if (this.routeParams.data.id == 5) {
      var title = "视频收入";
    } else if (this.routeParams.data.id == 6) {
      var title = "视频返佣";
    } else if (this.routeParams.data.id == 7) {
      var title = "推荐返佣";
    } else if (this.routeParams.data.id == 8) {
      var title = "押金支出";
    }
    settitle(title);
  },

  mounted() {
    this.getChargeList(); //获取数据
  }
};
</script>
<style scoped>
.data_d_b {
  width: 94%;
  border-bottom: 1px solid #e9e9e9;
  margin-left: 3%;
}
</style>