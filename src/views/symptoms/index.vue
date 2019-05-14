<template>
  <div style="color:red">病症检测</div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "symptoms",
  data() {
    return {};
  },
  methods: {
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
</style>