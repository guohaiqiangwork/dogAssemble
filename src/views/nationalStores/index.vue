<template>
  <div class="backgroun_color_fff " style="height:100%;overflow:hidden" id="store">
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
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore" bottom-status-change="handelChange">
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
              <div
                class="div_width_70 margin_left_div2 over_hidde"
              >{{recommendStoreList[0].province}}{{recommendStoreList[0].city}}{{recommendStoreList[0].area}}{{recommendStoreList[0].name}}</div>
              <div v-if="recommendStoreList[0].state == 2" class="bt_close">已关店</div>
              <div
                class="div_width_30 margin_right_div2 text_right"
              >{{recommendStoreList[0].distance}}km</div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">{{recommendStoreList[0].address}}</div>
              <div class="div_width_30 margin_right_div2 text_right" @click="goToMap(recommendStoreList[0])">
                <img src="../../assets/images/1440@2x.png" width="12px" />
              </div>
            </div>
            <div class="div_display_flex margin_top_div3">
              <div class="div_width_70 margin_left_div2">营业时间</div>
              <div
                class="div_width_30 margin_right_div2 text_right"
              >{{recommendStoreList[0].startTime}}</div>
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
          <div v-for="(item,index) in recommendStoreList" :key="index" class="div_display_flex nut-vert-list-item">
            <!-- <div @click="checkQBtn(index,item.id)" :checked="item.isQDefault" class="div_width_8" v-if="classA  == '1'">
        <check-icon :value.sync="item.isQDefault" size="13px" style="padding-top: 64%;"></check-icon>
            </div>-->
            <div
              class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3"
              :class="classA  == '1'? 'national_list' : 'national_list_w' "
            >
              <div class="div_display_flex margin_top_div3" @click="goToMap(item)">
                <div
                  class="div_width_70 margin_left_div2 over_hidde"
                >{{item.province}}{{item.city}}{{item.area}}{{item.name}}</div>
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
        <!-- <div v-if="recommendStoreList.length ==0">
      <div
        v-if="!recommendStoreList.length"
        class="nodata"
        style="height: calc(100% - 0.7rem);background-color:#fff;overflow-x:hidden"
      >
        <img src="../../assets/images/1546.png" alt style="width:4.78rem;height:3.23rem;" />
        <p style="font-size:.3rem;color:#999;margin-top:0.5rem;">暂无数据</p>
      </div>
    </div> -->
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
      allLoaded:false,
      wrapperHeight:0,

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
        console.log(newVal, "kl");
      }
    }
  },
  methods: {
    handelChange(state){
      console.log(state,'dfs')
    },
  loadTop(item){
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
            console.log(4546,data)
            
         if(data.obj.length == 0){
           this.isUnMore1 = true;
           return
         }else{
          this.$nextTick(() => {
           data.obj.forEach(e =>{
              
              this.recommendStoreList.push(e);
              
              });
          })
         
         }
    
            } else {
              alert(data.msg);
            }
            this.$refs.loadmore.onTopLoaded()
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      }, 2000);
    // this.$refs.loadmore.onTopLoaded();
  },
  loadBottom(item){
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
      //      document.documentElement.clientHeight -
      // this.$refs.wrapper.getBoundingClientRect().top;
          this.isLoading1 = false;
          this.timer = "";
          if (data.code == 0) {
            console.log(4546,data)
            
         if(data.obj.length == 0){
           this.allLoaded = true;
           this.page.current--;
           this.$vux.toast.text('没有更多数据了')
           this.$refs.loadmore.onBottomLoaded()
           this.isUnMore1 = true;
           return
         }else{
          this.$nextTick(() => {
           data.obj.forEach(e =>{
              
              this.recommendStoreList.push(e);
              
              
               console.log(this.allLoaded);
          })
          });
         // 若数据已全部获取完毕
        //  this.allLoaded = true;
         }
      
              console.log(this.recommendStoreList, "jlkjljkljl");
            } else {
              alert(data.msg);
            }
            this.$refs.loadmore.onBottomLoaded()
          },
          err => {
            alert("网络缓慢。。");
          }
        );
      }, 2000);
    
    
  },


















    goToMap(item) {
      if(!item.lat){
        alert('该数据不存在坐标')
        return
      }
      this.$router.push({
        name: "Tmap",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              latitude: item.lat,
              longitude: item.lng
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
            console.log(_obj,4546,data)
            
         if(data.obj.length == 0){
           this.isUnMore1 = true;
           return
         }else{
          this.$nextTick(() => {
            if(item){
               this.recommendStoreList =[];
            }
           
           data.obj.forEach(e =>{
              
              this.recommendStoreList.push(e);
              
              });
          })
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
              console.log(this.recommendStoreList, "jlkjljkljl");
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
    // 上拉加载
    selPullUp() {
      this.page.current++;
       this.$nextTick(() => {
        this.getRecommendStoreList();
      });
      // this.getRecommendStoreList();
    },
    // 下拉刷新
    pulldown() {
      this.recommendStoreList = [];
      console.log("klk");
      this.isUnMore1 = false;
      this.page.current = 1;
      this.getRecommendStoreList();
    },

    // 获取当前位置
    addressDetail() {
      //获取地理位置
      var self = this;
      //全局的this在方法中不能使用，需要重新定义一下
      var geolocation = new BMap.Geolocation();
      //调用百度地图api 中的获取当前位置接口
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          //获取当前位置经纬度
          var myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
            result
          ) {
            if (result) {
              self.latitude = result.point.lat;
              self.longitude = result.point.lng;
              self.getRecommendStoreList(); //获取全国门店
              // alert(result.point.lat + "获取都仅为度");
            }
          });
        }
      });
    }
    //第一部分
    //定位获得当前位置信息
    // getMyLocation() {
    //   var geolocation = new qq.maps.Geolocation("JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW", "opo");
    //   geolocation.getIpLocation(this.showPosition, this.showErr);
    // },
    // showPosition(position) {
    //   console.log(position);
    //   this.latitude = position.lat;//唯独
    //   this.longitude = position.lng;//进度
    //   this.city = position.city;
    //   this.getRecommendStoreList(); //获取全国门店
    // },
    // showErr() {
    //   console.log("定位失败");
    //   this.getMyLocation(); //定位失败再请求定位，测试使用
    // }
  },
  created() {
    settitle("全国门店");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },
 
  mounted() {
    this.addressDetail();
     document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    // this.getRecommendStoreList(); //获取全国门店
  }
};
</script>


<style scoped>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  position: absolute;
  left:0;
  top: 48px;
  overflow: auto;
  width: 100%;
  height: calc(100% - 0.9rem);
  padding-bottom: 70px;
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