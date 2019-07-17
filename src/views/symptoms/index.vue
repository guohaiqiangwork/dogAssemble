<template>
  <div style="background-color:#F8F8F8;min-height:700px;width:100%;height:100%;overflow-x:hidden;">
    <!-- 搜索 商户配方-->
    <div class="search_box" v-if="inputSearch == 3 || inputSearch == 2">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的病症…"
        v-model="form.name"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
        v-on:input="input"
      />
      <i></i>
    </div>
    <!-- 搜索 个人病症-->
    <div class="search_box" v-if="inputSearch == 0 || inputSearch == 1">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的病症…"
        v-model="form.name"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
        v-on:input="input"
      />
      <i></i>
    </div>
    <div class="margin_top_div3" v-show="peiFangList.length">
      <!-- 全部配方 -->
      <div id="allbook">
        <div v-for="(item,index) in peiFangList" :key="index">
          <div class="book-list">
            <p class="flex-between align-center mb-36">
              <span class="list-name flex-start align-center">{{item.name}}</span>
              <slot name="size"></slot>
            </p>
            <slot name="content"></slot>
            <p class="tip-footer">
              <span>注意事项：</span>
              <span>{{item.notice}}</span>
            </p>
            <p class="tip-footer">
              <span>适宜人群：</span>
              <span>{{item.crowd}}</span>
            </p>
            <p v-if="item.type == 0" class="tip-footer">
              <span>适应病症：</span>
              <span>{{item.disease}}</span>
            </p>
          </div>
        </div>
        <div class="backgroun_color_fff" style="border-radius: 8px;padding: 0.4rem;">
          <div class="div_display_flex">
            <div class>
              <img src="../../assets/images/tS@2x.png" width="13px" alt />
            </div>
            <div class="font_color_4A margin_left_div2">贴心小提示</div>
          </div>
          <div class="font_size_14 font_color_1A" style="text-indent:0.6rem;">
            多病症需到门店经过营养师面诊，根据对应的
            进行配餐
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!peiFangList.length"
      class="nodata"
      style="height: calc(100% - 0.7rem);    background-color: rgb(248, 248, 248);"
    >
      <img
        src="../../assets/images/1546.png"
        alt
        style="width:4.78rem;height:3.23rem;margin-top:-4rem;"
      />
      <p style="font-size:.3rem;color:#999;margin-top:0.5rem;">暂无数据</p>
    </div>
    <div v-if="peiFangList.length&&recommendStoreList[0].province">
      <!-- 推荐门店 门店@2x-->

      <div class="div_display_flex">
        <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3">
          <div class="div_display_flex">
            <div class>
              <img src="../../assets/images/门店@2x.png" width="13px" alt />
            </div>
            <div class="font_color_4A margin_left_div2">推荐门店</div>
          </div>
          <div class="div_display_flex margin_top_div3">
            <div
              class="div_width_70 margin_left_div2"
            >{{recommendStoreList[0].province}}{{recommendStoreList[0].city}}{{recommendStoreList[0].area}}</div>
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
            >{{recommendStoreList[0].startTime}}</div>
          </div>
          <div class="div_display_flex margin_top_div3 padding_bottom_4">
            <div class="div_width_70 margin_left_div2">门店电话</div>
            <div class="div_width_30 margin_right_div2 text_right">{{recommendStoreList[0].phone}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { setTimeout, clearTimeout } from "timers";
let timer;
export default {
  name: "symptoms",
  data() {
    return {
      timer: "",
      form: {
        openId: "",
        name: "",
        size: "10",
        current: "1",
        disName: ""
      },
      latitude: "",
      longitude: "",
      page: {
        size: "10",
        current: "1"
      },
      recommendStoreList: [],
      peiFangList: [],
      form: {
        openId: "",
        name: "",
        size: "10",
        current: "1"
      },
      inputSearch:''//判断展示个人还是商铺
    };
  },
  methods: {
    // 去地图
    goToMap(item) {
      console.log(item);
      if (!item.lat) {
        alert("该数据不存在坐标");
        return;
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

    search(val) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log(this.form.name);
        // this.form.name = val;
        this.getList();
      }, 1000);
    },
    //获取数据
    getRecommendStoreList(item) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: item || "",
        size: this.page.size,
        current: this.page.current,
        latitude: this.latitude,
        longitude: this.longitude
      };
      this.$fetch.post("fruits/app/blank/getRecommendStoreList", _obj).then(
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
    // 未知内容
    setImagePreview() {
      var barcodeWebview = plus.webview.create("nihao.html", "barcode", {
        titleNView: {
          autoBackButton: true,
          backgroundColor: "#FF0000",
          titleColor: "#FFFFFF",
          titleText: "自定义扫码界面"
        }
      });
      var preview,
        img_txt,
        localImag,
        takepicture = document.getElementById("takepicture"),
        picture = takepicture.value;
      if (!picture.match(/.jpg|.gif|.png|.bmp/i))
        return alert("您上传的图片格式不正确，请重新选择！"), !1;
      if (
        ((preview = document.getElementById("preview")),
        takepicture.files && takepicture.files[0])
      )
        (preview.style.display = "block"),
          (preview.style.width = "200px"),
          (preview.style.height = "150px"),
          (preview.src =
            window.navigator.userAgent.indexOf("Chrome") >= 1 ||
            window.navigator.userAgent.indexOf("Safari") >= 1
              ? window.URL.createObjectURL(takepicture.files[0])
              : window.URL.createObjectURL(takepicture.files[0]));
      else {
        takepicture.select(),
          takepicture.blur(),
          (img_txt = document.selection.createRange().text),
          (localImag = document.getElementById("localImag")),
          (localImag.style.width = "200px"),
          (localImag.style.height = "150px");
        try {
          (localImag.style.filter =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"),
            (localImag.filters.item(
              "DXImageTransform.Microsoft.AlphaImageLoader"
            ).src = img_txt);
        } catch (f) {
          return alert("您上传的图片格式不正确，请重新选择！"), !1;
        }
        (preview.style.display = "none"), document.selection.empty();
      }
    },
    //定位获得当前位置信息
    // getMyLocation() {
    //   var geolocation = new qq.maps.Geolocation(
    //     "JPCBZ-I3W64-FDNUH-XRWFO-MQRFZ-ERBWW",
    //     "opo"
    //   );
    //   geolocation.getIpLocation(this.showPosition, this.showErr);
    // },
    // showPosition(position) {
    //   console.log(position);
    //   this.latitude = position.lat ; //唯独
    //   this.longitude = position.lng; //进度
    //   this.city = position.city;
    //   this.getRecommendStoreList(); //获取全国门店
    // },
    // showErr() {
    //   console.log("定位失败");
    //   this.getMyLocation(); //定位失败再请求定位，测试使用
    // },
    input() {
      if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        this.getRecipeList();
        // this.filterList(this.list,this.iptVal);
        timer = null;
      }, 2000);
    },
    //获取全部配方
    getRecipeList() {
      this.form.openId = localStorage.getItem("openId");
      this.$fetch
        .post("fruits/app/blank/getRecipeList", this.form)
        .then(res => {
          if (res.code == 0) {
            if (this.form.name == "") {
              return;
            }
            this.peiFangList = res.obj;
          }
        });
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
  },
  created() {
    settitle("智能体检");
  },

  mounted() {
    // this.getStore();
    // this.getRecipeList();
    // this.getMyLocation();
    this.addressDetail(); //获取地理位置
    if (localStorage.getItem("type")) {
      this.inputSearch = localStorage.getItem("type");
    } else {
      this.inputSearch = "0";
    }

    // this.getList()
    // console.log("病症检测");
  }
};
</script>
<style scoped>
/* 搜索框 */
.search_box {
  height: 0.7rem;
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin: 5% auto;
  width: 94%;
}
.symptoms_border {
  width: 85%;
  margin-left: 4%;
  margin-top: 5%;
  background-color: #ffffff;
  padding: 3%;
  border-radius: 5px;
}
.sym_bor {
  /* border: 1px solid #e2e2e2; */
  padding: 2%;
  line-height: 2;
}
.border_left {
  border-top: 1px solid #dedede;
  width: 30%;
  height: 0px;
  margin-top: 2%;
}
.national_list {
  border-bottom: 1px solid #e9e9e9;
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
</style>
<style lang="less">
#allbook {
  padding: 0 0.4rem;
  overflow-x: hidden;
  box-sizing: border-box;
  background: #f3f5f8;

  .book-list {
    padding: 0.3rem 0.4rem;
    background: #fff;
    border-radius: 0.12rem;
    margin-bottom: 0.2rem;

    .mb-36 {
      margin-bottom: 0.36rem;
    }
    .list-name {
      font-size: 0.34rem;
      line-height: 0.56rem;
    }
    .list-name::before {
      content: "";
      display: inline-block;
      width: 0.08rem;
      height: 0.4rem;
      margin-right: 0.18rem;
      background: rgba(74, 123, 103, 1);
      border-radius: 0.04rem;
    }
    .kind-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0.2rem 0.45rem;
      margin: 0 0 0.24rem;
      background: #e9efec;
      color: #4a7b67;
      border-radius: 0.04rem;
      .kind-item {
        display: inline-block;
        min-width: 30%;
        // width: 30%;
        text-align: left;

        line-height: 0.42rem;
      }
    }
    .before-tag {
      position: relative;
    }
    .before-tag::before {
      content: "大杯";
      display: inline-block;
      position: absolute;
      top: -0.2rem;
      left: 0;
      width: 0.72rem;
      border: 1px solid;
      height: 0.4rem;
      color: #fff;
      text-align: center;
      background: rgb(74, 123, 103);
      border-radius: 0 0.12rem;
    }
    .before-tag-sm::before {
      content: "小杯";
      display: inline-block;
      position: absolute;
      top: -0.2rem;
      left: 0;
      width: 0.72rem;
      border: 1px solid;
      height: 0.4rem;
      text-align: center;
      color: #fff;
      background: rgb(74, 123, 103);
    }
  }
  .tip-footer {
    // text-indent: 1em;
    line-height: 0.56rem;
  }
}
.div_display_flex .national_list {
  width: 5.9rem;
  margin-left: 0.4rem;
  padding: 0.3rem 0.4rem;
}
</style>
