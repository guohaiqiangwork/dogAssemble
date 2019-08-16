<template>
  <div style="padding-bottom:100px;">
    <!-- 下拉菜单 -->
    <actionsheet
      v-model="showAddress1"
      :menus="menu7"
      @on-click-menu="click"
      @on-after-hide="log()"
      @on-after-show="log()"
    ></actionsheet>
    <!-- 第一部分 -->
    <div>
      <div
        class="margin_top_div6 margin_left_div3 font_size_16 font_color_1A"
        style="font-weight:700;"
      >基本信息</div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">联系人：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入姓名" v-model="recommendList.linkman" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">手机号：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入手机号" maxlength="11" v-model="recommendList.linkPhone" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">商户名称：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入商户名称" v-model="recommendList.name" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">门店类型：</div>
        <div class="div_width_70" @click="showAddress1 = true">
          <!-- <input type="text" placeholder="请输入门店类型" v-model="shopType"  v-if="!shopType" disabled/> -->
          <span v-if="!shopType" style=" color: #767676;font-weight: 400;">请输入门店类型</span>
          <span v-if="shopType">{{shopType}}</span>
          <img src="../../assets/images/1599@2x.png" class="img_left_jian" alt />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">所属地区</div>
        <div class="div_width_70" @click="showAddress = true">
          <x-address
            v-show="false"
            @on-hide="logHide"
            @on-show="logShow"
            :title="title"
            v-model="addressVal"
            :list="addressData"
            @on-shadow-change="onShadowChange"
            placeholder="请选择地址"
            inline-desc="可以设置placeholder"
            :show.sync="showAddress"
          ></x-address>
          <!-- <input type="text" placeholder="请选择店铺所在地区 "  v-model="addressDP"  v-if="!addressDP"/> -->
          <span v-if="addressDP">{{addressDP}}</span>
          <!-- <span v-if="!addressDP">{{addressDP}}</span> -->
          <span v-if="!addressDP" style=" color: #767676;font-weight: 400;">请选择店铺所在地区</span>
          <img src="../../assets/images/1599@2x.png" class="img_left_jian" alt />
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <div>
      <div
        class="margin_top_div6 margin_left_div3 font_size_16 font_color_1A"
        style="font-weight:700;"
      >账户信息</div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">姓名：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入姓名" v-model="recommendList.accountName" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">银行名称：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入银行名称" v-model="recommendList.bankName" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">银行账户：</div>
        <div class="div_width_70">
          <input type="text" placeholder="请输入银行账户" maxlength="19" v-model="recommendList.bankNum" />
        </div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <div class="div_width_25 font_size_14 font_color_1A">开户地址：</div>
        <div class="div_width_70"></div>
      </div>
      <div class="div_display_flex margin_left_div3 margin_top_div5">
        <!-- <div class="div_width_25 font_size_14 font_color_1A"></div>
        <div class="div_width_70">-->
        <textarea
          placeholder="请输入开户地址"
          name
          id
          rows="5"
          v-model="recommendList.bankAddress"
          style="width:95%"
        ></textarea>
        <!-- </div> -->
      </div>
      <!-- 图片上传 -->
      <div style="margin-top:1rem;">
        <div>
          <div
            class="div_width_25 font_size_14 margin_left_div3 margin_top_div6 font_color_1A font_size_16 font_color_1A"
          >资质信息</div>
          <div class="div_width_70"></div>
        </div>
        <!-- <form enctype="multipart/form-data" name="fileinfo" id="myForm"> -->
        <input
          @change="fileChange($event)"
          type="file"
          id="upload_file"
          multiple
          style="display: none"
        />
        <!-- </form> -->
        <!-- <div class="add" @click="chooseType">
          <div class="add-image" align="center">
            <p class="font13">添加图片</p>
          </div>
        </div>-->
        <div class="add-img">
          <!-- <p class="font14">
            图片(最多10张，还可上传
            <span v-text="6-imgList.length"></span>张)
          </p>-->
          <ul class="img-list clearfix" style="margin-top:.5rem;text-algin:center;">
            <li
              v-for="(url,index) in imgList"
              :key="index"
              style="width:35%;height:3.2rem;margin-top:0.5rem;border:1px solid #eee;margin-left:10%;"
            >
              <!-- //del删除样式，icon字体图标需要自己找哦 -->
              <img :src="url.file.src" @click.stop="delImg(index)" width="100%" height="100%" />
            </li>
            <div
              v-show="imgList.length < 10 "
              class="div_display_flex margin_left_div3 margin_top_div5 text_center"
              style="height:3.2rem;width:35%;margin-left:10%;display:inline-block;margin-top:0.5rem;"
            >
              <!-- <div class="up_div">
                <img src="../../assets/images/Bluetooth.png" alt>
              </div>-->
              <div
                class="img_up_list"
                @click="chooseType"
                style="margin:0 auto;width:100%;height:100%;"
              >
                <img src="../../assets/images/000@2x.png" width="20px" style="margin-top:50%;" />
              </div>
            </div>
          </ul>
        </div>
        <div class="div_display_flex margin_top_div4">
          <div class="margin_left_div3">
            <img src="../../assets/images/111@2x.png" width="12px" />
          </div>
          <div
            class="font_size_12"
            style="color:#242E42;margin-left:1%;font-size:0.28rem;"
          >图片上传类型：jpg、png、gif ; 最多10张；文件大小为5M</div>
        </div>
      </div>
      <!-- 确认 -->
      <div
        class="backgroun_color_4A font_color_ff font_size16 text_center"
        style="line-height:3.5 ;float: left;width: 100%;position:fixed;bottom:0;left:0;font-size:16px;"
        @click="getRegister"
      >确认</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import axios from "axios";
import {
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name,
  Actionsheet
} from "vux";
export default {
  name: "recommend",
  components: {
    XAddress,
    Actionsheet
  },
  data() {
    return {
      showFace: false,
      imgList: [],
      size: 0,
      limit: 10, //限制图片上传的数量
      tempImgs: [],
      recommendList: {
        name: "", //商户名称
        type: "", //0：店铺果蔬吧，1：家庭果蔬吧）
        linkman: "", //联系人
        linkPhone: "", //手机号
        province: "", //省
        city: "", //市
        area: "", //区
        accountName: "", //账户名称
        bankName: "", //银行名称
        bankNum: "", //银行账户
        bankAddress: "", //开户地址
        openId: "",
        picIds: [] //图片list
      },
      filedata: "",
      fileD: "",
      title: "",
      addressData: ChinaAddressV4Data,
      showAddress: false,
      showAddress1: false,
      addressVal: [],
      picIds: [],
      addressDP: "",
      menu7: {
        menu1: "店铺果蔬吧",
        menu2: "家庭果蔬吧"
      },
      shopType: ""
    };
  },
  methods: {
    // 地址选择
    logHide(str) {
      if (str) {
        this.addressDP = value2name(this.addressVal, ChinaAddressV4Data);
        // this.addressF = this.address.split(" ");
      }
    },
    log(str) {
      console.log(str);
    },
    // 下拉菜单
    click(key) {
      if (key == "menu1") {
        this.recommendList.type = 0;
        this.shopType = "店铺果蔬吧";
      } else {
        this.recommendList.type = 1;
        this.shopType = "家庭果蔬吧";
      }
      console.log(key);
      // console.log('7979')
    },
    logShow() {},
    onShadowChange(val) {
      console.log(val);
    },
    chooseType() {
      document.getElementById("upload_file").click();
    },
    fileChange(el) {
      let that = this;
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
      let that = this;
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        alert("请选择图片格式");
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        console.log("23423" + file);
        // that.fileD = file;
        // that.uplod(); //上传
        reader.readAsDataURL(file);
        reader.onload = function() {
          file.src = this.result;
          image.onload = function() {
            let width = image.width;
            let height = image.height;
            file.width = width;
            file.height = height;
            // that.filedata = file; //获取数据流
            _this.imgList.push({
              file
            });
            _this.picIds = _this.imgList[0].file.src;
            _this.uplod(_this.picIds);
          };
          image.src = file.src;
          // _this.uplod()
        };
      }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].file.size; //总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 10 - this.imgList.length;
    },
    displayImg() {},
    // 图片上传
    uplod(item) {
      this.$vux.loading.show({
        text: "Loading"
      });

      var that = this;
      that.$fetch
        .post("/fruits/app/blank/saveFileNew", { filedata: item })
        .then(res => {
          if (res.code == 0) {
            that.recommendList.picIds.push(res.obj);
            this.$vux.loading.hide();
          } else {
            alert(res.msg);
          }
        });
    },
    // 保存推荐信息
    getRegister() {
      if (!this.recommendList.name) {
        this.$vux.toast.text("请输入商户名称");
        return;
      } else if (!this.shopType) {
        this.$vux.toast.text("请选择商户类型");
        return;
      } else if (!this.recommendList.linkman) {
        this.$vux.toast.text("请输入联系人");
        return;
      } else if (!this.recommendList.linkPhone) {
        this.$vux.toast.text("请输入手机号");
        return;
      } else if (!this.recommendList.accountName) {
        this.$vux.toast.text("请输入账户名称");
        return;
      } else if (!this.recommendList.bankName) {
        this.$vux.toast.text("请输入银行名称");
        return;
      } else if (!this.recommendList.bankAddress) {
        this.$vux.toast.text("请输入开户地址");
        return;
      } else if (this.addressVal.length == 0) {
        this.$vux.toast.text("请选择地区");
        return;
      }
      var reg = /^1[3,4,5,6,7,8,9]\d{9}/;
      if (!reg.test(this.recommendList.linkPhone)) {
        this.$vux.toast.text("手机号输入不正确");
        return;
      }
      if (this.recommendList.bankNum.length < 16) {
        this.$vux.toast.text("银行账户至少为16位数字");
        return;
      }
      this.recommendList.openId = localStorage.getItem("openId");
      this.recommendList.province = this.addressVal[0];
      this.recommendList.city = this.addressVal[1];
      this.recommendList.area = this.addressVal[2];
      this.$fetch
        .post("/fruits/app/personal/recommendInfo", this.recommendList)
        .then(res => {
          console.log(res);
          if (res.code == 0) {
            alert("提交成功");
            this.$router.push("/personal");
          } else {
            if (res.msg == "recommenders_are_inconsistent") {
              alert("推荐人不一致");
              return;
            }
            if (res.msg == "store_is_registered") {
              alert("该手机号已经申请过店铺了");
              return;
            }
            
            alert(res.msg);
          }
        });
    }
  },
  created() {
    settitle("推荐信息");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("推荐信息");
  }
};
</script>
<style scoped>
input {
  margin-top: -0.2%;
  font-size: 14px;
}
textarea {
  border: 1px solid #f4f4f4;
  height: 1.3rem;
  -webkit-appearance: none;
  appearance: none;
}
.img_up_list {
  background-color: #e9efec;
  width: 136px;
  height: 93px;
  border: 1px solid #e9efec;
  margin-left: 20%;
}
ul li {
  float: left;
  margin-left: 10px;
  list-style-type: none;
}
.img_left_jian {
  width: 7px;
  height: 14px;
  float: right;
  margin-top: 5px;
}
.div_display_flex {
  height: 25px;
  line-height: 25px;
  /* background: rgba(122, 99, 99, 0.363); */
}
input {
  outline: none;
  border: none;
  height: 25px;
  line-height: normal;
}
</style>