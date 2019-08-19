<template>
  <div class="backgroun_color_fff" style="min-height:100%;overflow:hidden;height:auto" id="store">
    <!-- 搜索 -->
    <div style="background:#fff;width:100%;height:60px;position:fixed;top:0;z-index:20;">
      <div class="search_box" style="border:none;box-shadow:0px 3px 10px rgba(136,136,136,0.16);">
        <i class="weui-icon-search search_icon"></i>
        <input
          type="text"
          placeholder="搜索您想找的门店"
          v-model="productNamr"
          @input="getRecommendStoreList(productNamr)"
          style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
        />
        <i></i>
      </div>
    </div>
    <div class="main-body" ref="wrapper">
      <mt-loadmore
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :auto-fill="false"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        bottom-status-change="handelChange"
      >
        <!-- 推荐门店列表 -->
        <div class="div_display_flex margin_left_div3 padding_top_div3">
          <div class="national_flag_title" v-if="recommendStoreList.length"></div>
          <!-- v-if="recommendStoreList.length" -->
          <div
            class="font_color_00 font_size_14 margin_left_div2"
            style="margin-top: 0.8%;"
            v-if="recommendStoreList.length"
          >附近门店推荐</div>
        </div>
        <div class="div_display_flex">
          <!-- <div @click="checkBtn(index,item.id)" :checked="item.isDefault" class="div_width_8">
        <check-icon :value.sync="item.isDefault" size="13px" style="padding-top: 64%;color:red"></check-icon>
          </div>-->
          <!-- v-if="recommendStoreList.length" -->
          <div
            class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3"
            v-if="recommendStoreList.length"
          >
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2 over_hidde">{{recommendStoreList[0].name}}</div>
              <div v-if="recommendStoreList[0].state == 2" class="bt_close">已关店</div>
              <div
                class="div_width_30 margin_right_div2 text_right"
              >{{recommendStoreList[0].distance}}km</div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">{{recommendStoreList[0].address}}</div>
              <div
                class="div_width_30 margin_right_div2 text_right"
                @click="goToMap(recommendStoreList[0])"
              >
                <img src="../../assets/images/1440@2x.png" width="12px" />
              </div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">营业时间</div>
              <div
                class="div_width_30 margin_right_div2 text_right"
              >{{recommendStoreList[0].startTime}}-{{recommendStoreList[0].endTime}}</div>
            </div>
            <div class="div_display_flex margin_top_div3 padding_bottom_4">
              <div class="div_width_70 margin_left_div2">门店电话</div>
              <div class="div_width_30 margin_right_div2 text_right">{{recommendStoreList[0].phone}}</div>
            </div>
          </div>
        </div>
        <!-- 其他门店列表 -->
        <div>
          <!-- v-if="recommendStoreList.length" -->
          <div class="div_display_flex margin_left_div3 margin_top_div3">
            <div class="national_flag_title" v-if="recommendStoreList.length"></div>
            <div
              class="font_color_00 font_size_14 margin_left_div2"
              style="margin-top: 0.8%;"
              v-if="recommendStoreList.length"
            >其他门店</div>
          </div>
          <div
            v-for="(item,index) in recommendStoreList"
            :key="index"
            class="div_display_flex nut-vert-list-item"
          >
            <!-- <div @click="checkQBtn(index,item.id)" :checked="item.isQDefault" class="div_width_8" v-if="classA  == '1'">
        <check-icon :value.sync="item.isQDefault" size="13px" style="padding-top: 64%;"></check-icon>
            </div>-->
            <div
              class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3"
              :class="classA  == '1'? 'national_list' : 'national_list_w' "
            >
              <div class="div_display_flex margin_top_div3" @click="goToMap(item)">
                <div class="div_width_70 margin_left_div2 over_hidde">{{item.name}}</div>
                <div v-if="item.state == 2" class="bt_close">已关店</div>
                <div class="div_width_30 margin_right_div2 text_right">{{item.distance}}km</div>
              </div>
              <div class="div_display_flex margin_top_div3">
                <div class="div_width_70 margin_left_div2">{{item.address}}</div>
                <div class="div_width_30 margin_right_div2 text_right">
                  <img src="../../assets/images/1440@2x.png" width="12px" />
                </div>
              </div>
              <div class="div_display_flex margin_top_div3">
                <div class="div_width_70 margin_left_div2">营业时间</div>
                <div
                  class="div_width_30 margin_right_div2 text_right"
                >{{item.startTime}}-{{item.endTime}}</div>
              </div>
              <div class="div_display_flex margin_top_div3 padding_bottom_4">
                <div class="div_width_70 margin_left_div2">门店电话</div>
                <div class="div_width_30 margin_right_div2 text_right">{{item.phone}}</div>
                <!-- <div class="div_width_30 margin_right_div2 text_right font_color_4A">已关闭</div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="recommendStoreList.length ==0">
      <div
        v-if="!recommendStoreList.length"
        class="nodata"
        style="height: calc(100% - 0.7rem);background-color:#fff;overflow-x:hidden"
      >
        <img src="../../assets/images/1546.png" alt style="width:4.78rem;height:3.23rem;" />
        <p style="font-size:.3rem;color:#999;margin-top:0.5rem;">暂无数据</p>
      </div>
        </div>-->
      </mt-loadmore>
    </div>

    <!-- 店铺更换提示 -->
    <confirm v-model="nationSFalg" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">
        您确认转到
        <br />"东河王中店”吗？
      </div>
    </confirm>
    <!-- <div id="container" style="width:600px;height:500px;"></div> -->
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
import { TMap } from "../../bin/TMap";
import wx from "weixin-jsapi";
// import weiXinLocation from "../../bin/weiXinLocation";
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
      allLoaded: false,
      wrapperHeight: 0,

      item: 0,
      timer: "",
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
      recommendStoreList: [],
      productNamr: "",
      isUnMore1: false,
      isLoading1: false,
      longitude: 0, //经度
      latitude: 0 //纬度
    };
  },
  watch: {
    recommendStoreList: {
      handler(newVal) {
        this.recommendStoreList = newVal;
      }
    }
  },
  methods: {
    handelChange(state) {},
    loadTop(item) {
      this.recommendStoreList = [];
      this.page.current = 1;
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: item || "",
        size: this.page.size,
        current: this.page.current,
        latitude: this.latitude,
        longitude: this.longitude
      };
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.isLoading1 = true;
        //  this.recommendStoreList =[];
        this.$fetch.post("fruits/app/blank/getRecommendStoreList", _obj).then(
          data => {
            this.allLoaded = false;
            this.isLoading1 = false;
            this.timer = "";
            if (data.code == 0) {
              if (data.obj.length == 0) {
                this.isUnMore1 = true;
                return;
              } else {
                this.$nextTick(() => {
                  data.obj.forEach(e => {
                    this.recommendStoreList.push(e);
                  });
                });
              }
            } else {
              alert(data.msg);
            }
            this.$refs.loadmore.onTopLoaded();
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      }, 2000);
      // this.$refs.loadmore.onTopLoaded();
    },
    loadBottom(item) {
      this.page.current++;
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: item || "",
        size: this.page.size,
        current: this.page.current,
        latitude: this.latitude,
        longitude: this.longitude
      };
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.isLoading1 = true;
        this.$fetch.post("fruits/app/blank/getRecommendStoreList", _obj).then(
          data => {
            this.isLoading1 = false;
            this.timer = "";
            if (data.code == 0) {
              if (data.obj.length == 0) {
                this.allLoaded = true;
                this.page.current--;
                this.$vux.toast.text("没有更多数据了");
                this.$refs.loadmore.onBottomLoaded();
                this.isUnMore1 = true;
                return;
              } else {
                this.$nextTick(() => {
                  data.obj.forEach(e => {
                    this.recommendStoreList.push(e);
                  });
                });
                // 若数据已全部获取完毕
                //  this.allLoaded = true;
              }
            } else {
              alert(data.msg);
            }
            this.$refs.loadmore.onBottomLoaded();
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      }, 2000);
    },

    goToMap(item) {
      if (!item.lat) {
        alert("该数据不存在坐标");
        return;
      }
      console.log(item)
      this.$router.push({
        name: "Tmap",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              latitude: item.lat,
              longitude: item.lng,
              address:item.address
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
      //  this.recommendStoreList=[];
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: item || "",
        size: this.page.size,
        current: this.page.current,
        latitude: this.latitude,
        longitude: this.longitude
      };
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.isLoading1 = true;
        //  this.recommendStoreList =[];
        this.$fetch.post("fruits/app/blank/getRecommendStoreList", _obj).then(
          data => {
            this.isLoading1 = false;
            this.timer = "";
            if (data.code == 0) {
              if (data.obj.length == 0) {
                this.isUnMore1 = true;
                return;
              } else {
                this.$nextTick(() => {
                  if (item) {
                    this.recommendStoreList = [];
                  }

                  data.obj.forEach(e => {
                    this.recommendStoreList.push(e);
                  });
                });
              }
              //  this.recommendStoreList=data.obj;

              // this.recommendStoreList=data.obj;
              // if(data.obj.length){
              //   console.log(13213)
              //    data.obj.forEach(e =>{
              //   this.recommendStoreList.push(e);
              // })
              // }else{
              // console.log(4546)

              // data.obj.forEach(item => {
              //   item.SFQY = data.obj.province
              // });
              // this.$set(this.recommendStoreList,this.recommendStoreList);
            } else {
              alert(data.msg);
            }
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      }, 1000);
    },
    // 获取当前位置

    //第一部分
    //定位获得当前位置信息
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation(
        "JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW",
        "opo"
      );
      geolocation.getIpLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      console.log(position);
      this.latitude = position.lat; //唯独
      this.longitude = position.lng; //进度
      this.city = position.city;
      this.getRecommendStoreList(); //获取全国门店
    },
    showErr() {
      console.log("定位失败");
      this.getMyLocation(); //定位失败再请求定位，测试使用
    },
    // 获取地理位置配置
    getSharedBonus() {
      this.$fetch
        .post("/fruits/app/weChat/getWechatConfig", {
          url: window.location.href.split("#")[0]
        })
        .then(
          data => {
            if (data.code == 0) {
              this.wexinGetLog(data.obj);
            } else {
              alert(data.msg);
            }
          },
          err => {
            alert("网络缓慢。。");
          }
        );
    },
    // 微信获取位置
    wexinGetLog(data) {
      let that = this;
      wx.config({
        debug: false,
        appId: data.appId,
        nonceStr: data.noncestr,
        timestamp: data.timestamp,
        signature: data.sign,
        jsApiList: ["checkJsApi", "openLocation", "getLocation"]
      });
      wx.checkJsApi({
        jsApiList: ["getLocation"],
        success: function(res) {
          if (res.checkResult.getLocation == false) {
            alert(
              "你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！"
            );
            return;
          }
        }
      });
      wx.ready(function() {
        wx.getLocation({
          success: function(res) {
            console.log("微信获取" + JSON.stringify(res));
            that.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            that.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            that.getRecommendStoreList(); //获取全国门店数据
          },
          cancel: function(res) {
            alert("用户拒绝授权获取地理位置");
            // that.getShopFjStudio()
          }
        });
      });
      wx.error(function(res) {
        //                        console.log(res)
        // that.getShopFjStudio()
      });
    },
    // 腾讯定位
    getMyLocation() {
            var geolocation = new qq.maps.Geolocation("SI5BZ-RTZRQ-2YD52-GAIRP-Z2CBK-7SFIC", "打卡");
            geolocation.getIpLocation(this.showPosition, this.showErr);
        },
        showPosition(position) {
          console.log('腾讯' + JSON.stringify(position) );
          this.latitude = position.lat;
          this.longitude = position.lng;
          this.city = position.city;
          // this.mapTX();
           this.getRecommendStoreList(); //获取全国门店数据
        },
        showErr() {
            console.log(
                 '定位失败，请稍后重试！'
            );
            // this.$router.back(-1);
            this.getMyLocation();//定位失败再请求定位，测试使用
        },
        mapTX() {
            let that = this;
            // 根据地理位置坐标，展示地图
            TMap().then(qq => {
                var map = new qq.maps.Map(document.getElementById('container'), {
                    //这里经纬度代表进入地图显示的中心区域
                    center: new qq.maps.LatLng(that.latitude,that.longitude),
                    zoom: 15
                });
                var marker = new qq.maps.Marker({
                    map : map,
                    position : new qq.maps.LatLng(that.latitude,that.longitude),
                });

                // 获取当前经纬度对应的地址
                var getAdd = new qq.maps.Geocoder({
                        complete : function(result){
                            console.log('腾讯' + JSON.stringify(result));
                            alert('腾讯' + JSON.stringify(result) )
                            that.address = result.detail.address;
                        }
                    });
                var latLng = new qq.maps.LatLng(that.latitude, that.longitude);
                getAdd.getAddress(latLng);
            })
        }
  },
  created() {
    settitle("全国门店");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    //     setTimeout(() => {

    // }, timeout);
    // 腾讯地图
    this.getMyLocation();
    // 微信
    // this.getSharedBonus();
    // 百度
    // this.addressDetail()
    //  document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
    // this.getRecommendStoreList(); //获取全国门店
  }
};
</script>

<style lang="">
#store .mint-loadmore-top {
  line-height: 20px;
}
</style>
<style scoped>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  position: absolute;
  left: 0;
  top: 80px;
  overflow: auto;
  width: 100%;
  height: calc(100% - 0.9rem);
  /* padding-bottom: 70px; */
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  /* touch-action: none; */
}
/* .nodata{
    width: 100%;
    height: 9rem;
    display: flex;
    font-size: 12px;
     background: #f3f5f8;
    justify-content: center;
    align-items: center;
    align-self: center;
} */
.national_flag_title {
  width: 2px;
  height: 15px;
  background-color: #4a7b67;
  margin-top: 1%;
  border: 1px solid #4a7b67;
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
  position: fixed;
  top: 0;
  left: 2.5%;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 3;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 0.2rem;
  /* padding-bottom: 0.2rem; */
  width: 95%;
}
.bt_close {
  width: 15%;
  font-size: 12px;
  color: #e6435a;
  border: 1px solid #e6435a;
  /* align-content: center; */
  text-align: center;
}
.over_hidde {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>