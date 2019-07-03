<template>
  <div class="backgroun_color_fff" style="min-height:700px">
    <!-- 搜索 -->
    <div class="search_box" style="border:none;box-shadow:0px 3px 10px rgba(136,136,136,0.16);">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的门店"
        v-model="productNamr"
        v-on:input="getRecommendStoreList(productNamr)"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 推荐门店列表 -->
    <div class="div_display_flex margin_left_div3 padding_top_div3">
      <div class="national_flag_title"></div>
      <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">附1近门店推荐</div>
    </div>
    <div class="div_display_flex">
      <!-- <div @click="checkBtn(index,item.id)" :checked="item.isDefault" class="div_width_8">
        <check-icon :value.sync="item.isDefault" size="13px" style="padding-top: 64%;color:red"></check-icon>
      </div>-->
      <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3">
        <div class="div_display_flex margin_top_div3">
          <div
            class="div_width_70 margin_left_div2"
          >{{recommendStoreList[1].province}}{{recommendStoreList[1].city}}{{recommendStoreList[1].area}}</div>
          <div class="div_width_30 margin_right_div2 text_right">{{recommendStoreList[1].distance}}</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">{{recommendStoreList[1].address}}</div>
          <div class="div_width_30 margin_right_div2 text_right" @click="goToMap">
            <img src="../../assets/images/1440@2x.png" width="12px">
          </div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">营业时间</div>
          <div class="div_width_30 margin_right_div2 text_right">{{recommendStoreList[1].startTime}}</div>
        </div>
        <div class="div_display_flex margin_top_div3 padding_bottom_4">
          <div class="div_width_70 margin_left_div2">门店电话</div>
          <div class="div_width_30 margin_right_div2 text_right">{{recommendStoreList[1].phone}}</div>
        </div>
      </div>
    </div>
    <!-- 其他门店列表 -->
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="selPullUp"
      @pulldown="pulldown"
    >
      <div slot="list" class="nut-vert-list-panel">
        <div class="div_display_flex margin_left_div3 margin_top_div3">
          <div class="national_flag_title"></div>
          <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">其他门店</div>
        </div>
        <div v-for="(item,index) in recommendStoreList" :key="index" class="div_display_flex">
          <!-- <div @click="checkQBtn(index,item.id)" :checked="item.isQDefault" class="div_width_8" v-if="classA  == '1'">
        <check-icon :value.sync="item.isQDefault" size="13px" style="padding-top: 64%;"></check-icon>
          </div>-->
          <div
            class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3"
            :class="classA  == '1'? 'national_list' : 'national_list_w' "
          >
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">{{item.province}}{{item.city}}{{item.area}}</div>
              <div class="div_width_30 margin_right_div2 text_right">{{item.distance}}</div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">{{item.address}}</div>
              <div class="div_width_30 margin_right_div2 text_right">
                <img src="../../assets/images/1440@2x.png" width="12px">
              </div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">营业时间</div>
              <div class="div_width_30 margin_right_div2 text_right">{{item.startTime}}</div>
            </div>
            <div class="div_display_flex margin_top_div3 padding_bottom_4">
              <div class="div_width_70 margin_left_div2">门店电话</div>
              <div class="div_width_30 margin_right_div2 text_right">{{item.phone}}</div>
              <!-- <div class="div_width_30 margin_right_div2 text_right font_color_4A">已关闭</div> -->
            </div>
          </div>
        </div>
      </div>
    </nut-scroller>
    <!-- 店铺更换提示 -->
    <confirm v-model="nationSFalg" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">
        您确认转到
        <br>"东河王中店”吗？
      </div>
    </confirm>
    <div id="container" style="width:600px;height:500px;"></div>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
import { TMap } from "../../bin/TMap";
import { CheckIcon, Confirm } from "vux";
export default {
  components: {
    CheckIcon,
    Confirm,
    TabBar
  },
  name: "nationalStor",
  data() {
    return {
      item: 0,
      timer:"",
      isDefault: "",
      classA: "1", //是否有单选框
      nationSFalg: false, //地址确认
      nationList: [
        { isDefault: false },
        { isDefault: true },
        { isDefault: false }
      ],
      nationQList: [
        { isQDefault: false },
        { isQDefault: true },
        { isQDefault: false }
      ],
      page: {
        current: "1",
        size: "10"
      },
      recommendStoreList: "",
      productNamr: "",
      isUnMore1: false,
      isLoading1: true,
      longitude: 0, //经度
      latitude: 0 //纬度
    };
  },
  methods: {
    goToMap() {
      console.log("7897");
      this.$router.push({
        name: "Tmap",
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
    // 选择框处理
    checkBtn(index, id) {
      // 先取消所有选中项
      this.nationList.forEach(item => {
        item.isDefault = false;
      });
      //再设置当前点击项选中
      this.radio = this.nationList[index].isDefault;
      // 设置值，以供传递
      this.nationList[index].isDefault = true;
      console.log(this.radio);
      // this.$fetch
      //   .post(
      //     "weChat/order/updateIsDefault/" + id + "/" + this.token.employeeId
      //   )
      //   .then(data => {
      //     if (data.success) {
      //       this.getAddressList();
      //     }
      //   });
    },
    // 其他处理
    checkQBtn(index, id) {
      // 先取消所有选中项
      this.nationQList.forEach(item => {
        item.isQDefault = false;
      });
      //再设置当前点击项选中
      this.radio = this.nationQList[index].isQDefault;
      // 设置值，以供传递
      this.nationQList[index].isQDefault = true;
      console.log(this.radio);
      this.nationq();
    },
    //订单新建
    nationq() {
      this.nationSFalg = true;
    },
    // 弹窗取消
    onCancel() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm() {
      console.log("1");
    },
    //获取数据
    getRecommendStoreList(item) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: item || "",
        size: this.page.size,
        current: this.page.current,
        latitude:this.latitude,
        longitude:this.longitude
      };
      this.$fetch.post(url.getRecommendStoreList, _obj).then(
        data => {
          if (data.code == 0) {
            this.recommendStoreList = data.obj;
            console.log(this.recommendStoreList);
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
      this.getRecommendStoreList();
    },
    // 下拉刷新
    pulldown() {
      this.isUnMore1 = false;
      this.page.current = 1;
      this.getRecommendStoreList();
    },
    //第一部分
    //定位获得当前位置信息
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation("JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW", "opo");
      geolocation.getIpLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      console.log(position);
      this.latitude = position.lat;//唯独
      this.longitude = position.lng;//进度
      this.city = position.city;
      this.getRecommendStoreList(); //获取全国门店
    },
    showErr() {
      console.log("定位失败");
      this.getMyLocation(); //定位失败再请求定位，测试使用
    }
  },
  created() {
    settitle("全国门店");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    this.getMyLocation();
    // this.getRecommendStoreList(); //获取全国门店
  }
};
</script>
<style scoped>
.national_flag_title {
  width: 2px;
  height: 15px;
  background-color: #4A7B67;
  margin-top: 1%;
  border: 1px solid #4A7B67;
  border-radius: 10px;
}
.national_list {
  width: 90%;
  margin-left: 5%;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
}
.national_list_w {
  width: 93%;
  margin-left: 2%;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
}
/* 搜索框 */
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 95%;
}
</style>