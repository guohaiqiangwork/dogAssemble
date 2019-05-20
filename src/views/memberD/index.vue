<template>
  <div>
    <!-- 辟谷套餐 展示-->
    <div v-if="false">
      <div class="font_size_12 margin_left_div6 margin_top_div5">
        <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
        当前用户为跨店用户
      </div>
      <div class="margin_top_div5">
        <div class="font_size_15 font_color_ff backgroun_color_4A me_d">
          张星
          <span class="margin_left_div3">1231312312312</span>
        </div>
        <div class="div_display_flex">
          <div class="me_d_s" style="margin-left:24%"></div>
          <div class="me_d_s" style="margin-left:40%"></div>
        </div>
        <div class="div_display_flex font_size_15 font_color_ff backgroun_color_4A me_d_n">
          <div class="div_width_50">辟谷套餐</div>
          <div class="div_width_50 text_right margin_right_div3">2019.09.30</div>
        </div>

        <!-- 列表 -->
        <div class="m_b_DB">
          <div
            class="div_display_flex text_center font_size_13 font_color_1A"
            style=" border-bottom:1px solid #e9e9e9;"
          >
            <div class="div_width_25">次数</div>
            <div class="div_width_25">食用时间</div>
            <div class="div_width_25">状态</div>
            <div class="div_width_25">操作</div>
          </div>
          <div
            class="div_display_flex text_center font_size_13 font_color_1A"
            v-for=" item in [1,2,3,4]"
          >
            <div class="div_width_25">1</div>
            <div class="div_width_25">7:00</div>
            <div class="div_width_25">已作废</div>
            <div class="div_width_25">确认</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 会员套餐 -->
    <div v-if="true">
      <div class="font_size_12 margin_left_div6 margin_top_div5">
        <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
        当前用户为跨店用户
      </div>
      <div class="margin_top_div5">
        <div class="font_size_15 font_color_ff backgroun_color_4A me_d">
          张星
          <span class="margin_left_div3">1231312312312</span>
        </div>
        <div class="div_display_flex">
          <div class="me_d_s" style="margin-left:24%"></div>
          <div class="me_d_s" style="margin-left:40%"></div>
        </div>
        <div class="div_display_flex font_size_15 font_color_ff backgroun_color_4A me_d_n">
          <div class="div_width_50">辟谷套餐</div>
          <div class="div_width_50 text_right margin_right_div3">2019.09.30</div>
        </div>
        <!-- 规格 -->
        <div class="m_b_DB" style="min-height:300px">
          <div class="div_display_flex margin_top_div5">
            <div class="div_width_20 text_right">杯型：</div>
            <div class="div_width_30 me_d_btn1">小杯/¥13.9</div>
            <div class="div_width_30 me_d_btn2">小杯/¥13.9</div>
          </div>
          <div class="div_display_flex margin_top_div3 font_color_1A font_size_14">
            <div class="div_width_20 text_right">配方：</div>
            <div class="div_width_80">
              可选用淡竹叶5克、莲子心5克、炒栀子6克、
              单皮3克。
            </div>
          </div>
          <div class="div_display_flex margin_top_div3 font_color_1A font_size_14">
            <div class="div_width_20 margin_left_div8">注意事项：</div>
            <div class="div_width_80">忌酒、忌烟、忌辛辣</div>
          </div>
          <div class="div_display_flex margin_top_div3 font_color_1A font_size_14">
            <div class="div_width_20 margin_left_div8">适宜人群：</div>
            <div class="div_width_80">脾胃不好的人群</div>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
       <!-- 按钮 -->
      <div class="div_display_flex" style="position: fixed;bottom: 0;width: 100%;line-height: 3;">
        <div class="div_width_70 backgroun_color_E9  padding_left_div3">
          金额：
          <span class="red">23423</span>
        </div>
        <div class="div_width_30 text_center backgroun_color_4A font_color_ff font_size_14">确认支付</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "memberD",
  data() {
    return {};
  },
  methods: {
    //  去会员详情
    goToMemberD() {
      this.$router.push({
        name: "memberD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "蚕丝"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("会员操作详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("会员操作详情");
  }
};
</script>
<style scoped>
.me_d {
  line-height: 3;
  border-radius: 5px;
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_n {
  line-height: 3;
  width: 90%;
  margin-left: 4%;
  padding-left: 3%;
}
.me_d_s {
  background-color: #4a7b67;
  height: 16px;
  width: 2%;
}
.m_b_DB {
  width: 92.8%;
  margin-left: 3.8%;
  border: 1px solid #e9e9e9;
  line-height: 3;
}
.me_d_btn1 {
  background-color: #4a7b67;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  margin-left: 5%;
}
.me_d_btn2 {
  background-color: #ffffff;
  color: #4a7b67;
  border: 1px solid #4a7b67;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  margin-left: 5%;
}
</style>