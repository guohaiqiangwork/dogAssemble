<template>
  <div>
    <div class="margin_top_div3 personal_div_money" style=" margin-bottom: 24%;">
      <div class="div_display_flex width_m" @click="goToPassword">
        <div class="div_width_50 font_color_1A personal_list_font">修改密码</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m">
        <div class="div_width_50 font_color_1A personal_list_font">冻结账户</div>
        <div class="div_width_50 width_26 personal_list_font" style="margin-left:45%">
          <img src="../../assets/images/dingdan_weizhankai@3x.png" width="100%">
        </div>
      </div>
      <div class="div_display_flex width_m">
        <div class="div_width_50 font_color_1A personal_list_font">联系客服</div>
        <div
          class="div_width_50 personal_list_font"
          style=" text-align: right; margin-right: 4%;"
        >3155765</div>
      </div>
    </div>
    <!-- 推出按钮 -->
    <div class="text_center">
      <div class="b_t_t">退出登录</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "setUp",
  data() {
    return {};
  },
  methods: {
    //   去修改密码
      goToPassword(){
 this.$router.push({
        name:"changePassword",
        params:{
          obj:JSON.stringify({
            type:"profession",
            data:{
              id:"参数"
            }
          })
        }
      })
      }
  },
  created() {
    settitle("设置");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("设置");
  }
};
</script>
<style scoped>
.personal_div_money {
  width: 95%;
  background-color: #ffffff;
  margin-left: 2%;
  border-radius: 5px;
}
.personal_list_font {
  margin-left: 13px;
  margin-top: 3%;
  margin-bottom: 3%;
  color: #1a202c;
  font-size: 15px;
}
.width_26 {
  width: 26px;
}
.width_m {
  width: 96%;
  margin-left: 2%;
  border-bottom: 1px solid #e9e9e9;
}
.b_t_t {
  width: 96%;
  background-color: #4a7b67;
  color: #fff;
  font-size: 16px;
  line-height: 3;
  border-radius: 5px;
  margin-left: 2%;
  position: fixed;
  bottom: 5%;
}
</style>