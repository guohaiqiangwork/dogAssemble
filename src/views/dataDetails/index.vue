<template>
  <div>
    <!-- 详情列表 -->
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="selPullUp"
      @pulldown="pulldown"
    >
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
    </nut-scroller>
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
        openId: url.openId,
        type: this.routeParams.data.id,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getChargeList, _obj).then(data => {
        if (data.code == 0) {
          this.dataChargeList = this.dataChargeList.concat(data.obj);
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
      this.dataChargeList =[];
      this.getChargeList();
    }
  },
  created() {
    settitle("我是登陆页面");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams.data.id);
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