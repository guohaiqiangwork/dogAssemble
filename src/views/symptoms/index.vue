<template>
  <div>
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的配方…"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 配方 -->
    <div class="symptoms_border font_size_14 font_color_1A">
      <div>配方</div>
      <div class="margin_top_div3 sym_bor">
        可选用淡竹叶5克、莲子心5克、炒栀子6克、单皮3
        克，每日一剂即可。
      </div>
    </div>
    <!-- 病症 -->
    <div class="symptoms_border font_size_14 font_color_1A">
      <div>多种病症</div>
      <div class="margin_top_div3">多病症需到门店经过营养师面诊，根据对应的进行配餐</div>
    </div>
    <!-- 推荐门店 -->
    <div>
      <div class="div_display_flex font_color_4A margin_top_div8 font_size_15">
        <div class="border_left margin_right_div2" style="margin-left: 11%;"></div>推荐门店
        <div class="border_left margin_left_div2"></div>
      </div>
      <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3" v-for="item in [1,3]">
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">内蒙古包头市昆都仑区钢铁大街店</div>
          <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">钢铁大街16号</div>
          <div class="div_width_30 margin_right_div2 text_right" @click="goToMap">0.8公里</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">营业时间</div>
          <div class="div_width_30 margin_right_div2 text_right">08:30-21:00</div>
        </div>
        <div class="div_display_flex margin_top_div3 padding_bottom_4">
          <div class="div_width_70 margin_left_div2">门店电话</div>
          <div class="div_width_30 margin_right_div2 text_right">17870987</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "symptoms",
  data() {
    return {};
  },
  methods: {
    // 去地图
    goToMap() {
      console.log("7897");
      this.$router.push({
        name: "map",
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
    }
  },
  created() {
    settitle("我是病症检测");
  },

  mounted() {
    console.log("病症检测");
  }
};
</script>
<style scoped>
/* 搜索框 */
.search_box {
  height: 3.5rem;
  margin: 0.65rem 1.5rem 0;
  border-radius: 2rem;
  position: relative;
  padding: 0 1.55rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin-top: 5%;
}
.symptoms_border {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
}
.sym_bor {
  border: 1px solid #e2e2e2;
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
  width: 93%;
  margin-left: 2%;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
}
</style>