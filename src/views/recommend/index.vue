<template>
  <div>
    <!-- 第一部分 -->
    <div>
      <div class="margin_top_div4 margin_left_div3">基本信息</div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">联系人：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入姓名">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">联系人：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入姓名">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">手机号：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入手机号">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">商户名称：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入商户名称">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">门店类型：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入门店类型">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">营业时间：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请选择开始营业时间 ">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A"></div>
        <div class="div_width_70">
          <input type="text" placeholder="请选择结束营业时间 ">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">所属地区：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请选择店铺所在地区 ">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">详细地址</div>
        <div class="div_width_70"></div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A"></div>
        <div class="div_width_70">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <div>
      <div class="margin_top_div4 margin_left_div3">账户信息</div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">姓名：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入姓名">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">银行名称：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入银行名称">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">银行帐户：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入银行帐户">
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">开户地址：</div>
        <div class="div_width_70"></div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A"></div>
        <div class="div_width_70">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
      </div>
      <div>
        <div class="div_width_25 font_size_14 font_color_1A">开户地址：</div>
        <div class="div_width_70"></div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A"></div>
        <div class="div_width_70">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
      </div>
      <div>
        <div class="div_width_25 font_size_14 font_color_1A">资质信息:</div>
        <div class="div_width_70"></div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5 text_center">
        <div class="up_div">
          <img src="../../assets/images/Bluetooth.png" alt>
        </div>
      </div>
      <div>图片上传类型：jpg、png、gif ; 最多10张；文件大小为5M</div>
      <input
        @change="fileChange($event)"
        type="file"
        id="upload_file"
        multiple
        style="display: none"
      >
      <div class="add" @click="chooseType">
        <div class="add-image" align="center">
          <!--按钮中的图片是一个icon字体图标 -->
          <i class="icon-camera"></i>
          <p class="font13">添加图片</p>
        </div>
      </div>
      <div class="add-img" v-show="imgList.length">
        <p class="font14">
          图片(最多10张，还可上传
          <span v-text="6-imgList.length"></span>张)
        </p>
        <ul class="img-list">
          <li v-for="(url,index) in imgList" :key="index">
            <!-- <img
              class="del"
              src="http://img.shtml.net/XGaC5nwBzmaeMPm0J-H12X-G3zjUOlYZmnX0J-H1wPM3gKpTqvYekJohZzYPGROtBz0J-H1wT4uAGgZV.jpg"
              @click.stop="delImg(index)"
            > -->
            <!-- //del删除样式，icon字体图标需要自己找哦 -->
            <img :src="url.file.src"  @click.stop="delImg(index)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "recommend",
  data() {
    return {
      showFace: false,
      imgList: [],
      size: 0,
      limit: 10, //限制图片上传的数量
      tempImgs: []
    };
  },
  methods: {
    chooseType() {
      document.getElementById("upload_file").click();
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        this.$dialog.toast({ mes: "请选择图片文件" });
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        reader.readAsDataURL(file);
        reader.onload = function() {
          file.src = this.result;
          image.onload = function() {
            let width = image.width;
            let height = image.height;
            file.width = width;
            file.height = height;
            _this.imgList.push({
              file
            });
            console.log(_this.imgList);
          };
          image.src = file.src;
        };
      }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].file.size; //总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 6 - this.imgList.length;
    },
    displayImg() {}
  },
  created() {
    settitle("我是推荐信息");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("推荐信息");
  }
};
</script>
<style scoped>
textarea {
  border: 1px solid red;
}
</style>