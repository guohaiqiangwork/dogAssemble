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
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "recommend",
  data() {
    return {};
  },
  methods: {},
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
textarea{
  border:1px solid red;
}
</style>