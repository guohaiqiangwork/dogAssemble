<template>
  <div class="backgroun_color_fff" style="min-height:700px">
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="搜索您想找的产品"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 推荐门店列表 -->
    <div class="div_display_flex margin_left_div3 padding_top_div3">
      <div class="national_flag_title"></div>
      <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">附近门店推荐</div>
    </div>
    <div v-for="(item,index) in nationList" class="div_display_flex">
      <div @click="checkBtn(index,item.id)" :checked="item.isDefault" class="div_width_8">
        <check-icon :value.sync="item.isDefault" size="13px" style="padding-top: 64%;color:red"></check-icon>
      </div>
      <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3">
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">内蒙古包头市昆都仑区钢铁大街店</div>
          <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">钢铁大街16号</div>
          <div class="div_width_30 margin_right_div2 text_right" @click="goToMap">
            <img src="../../assets/images/1440@2x.png" width="12px">
          </div>
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
    <!-- 其他门店列表 -->
    <div class="div_display_flex margin_left_div3 margin_top_div3">
      <div class="national_flag_title"></div>
      <div class="font_color_00 font_size_14 margin_left_div2" style="margin-top: 0.8%;">其他门店</div>
    </div>
    <div v-for="(item,index) in nationQList" class="div_display_flex">
      <div @click="checkQBtn(index,item.id)" :checked="item.isQDefault" class="div_width_8" v-if="classA  == '1'">
        <check-icon :value.sync="item.isQDefault" size="13px" style="padding-top: 64%;"></check-icon>
      </div>
      <div class="national_list font_color_00 font_size_13 backgroun_color_fff margin_top_div3" :class="classA  == '1'? 'national_list' : 'national_list_w' " >
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">内蒙古包头市昆都仑区钢铁大街店</div>
          <div class="div_width_30 margin_right_div2 text_right">0.8公里</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">钢铁大街16号</div>
          <div class="div_width_30 margin_right_div2 text_right">
            <img src="../../assets/images/1440@2x.png" width="12px">
          </div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_70 margin_left_div2">营业时间</div>
          <div class="div_width_30 margin_right_div2 text_right">08:30-21:00</div>
        </div>
        <div class="div_display_flex margin_top_div3 padding_bottom_4">
          <div class="div_width_70 margin_left_div2">门店电话</div>
          <div class="div_width_30 margin_right_div2 text_right">17870987</div>
           <!-- <div class="div_width_30 margin_right_div2 text_right font_color_4A">已关闭</div> -->
        </div>
      </div>
    </div>
       <!-- 店铺更换提示 -->
    <confirm v-model="nationSFalg" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">您确认转到<br> "东河王中店”吗？</div>
    </confirm>
  </div>
</template>
<script>
import url from "../../bin/url";
import TabBar from "../../components/TabBar";
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
      item: 0,
      isDefault: "",
      classA:'1',//是否有单选框
      nationSFalg:false,//地址确认
      nationList: [
        { isDefault: false },
        { isDefault: true },
        { isDefault: false }
      ],
      nationQList: [
        { isQDefault: false },
        { isQDefault: true },
        { isQDefault: false }
      ]
    };
  },
  methods: {
    goToMap() {
      console.log("7897");
      this.$router.push({
        name: "Tmap",
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
      this.nationq()
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

  },
  created() {
    settitle("我是全国们店");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("全国门店");
  }
};
</script>
<style scoped>
.national_flag_title {
  width: 2px;
  height: 15px;
  background-color: #ff8156;
  margin-top: 1%;
  border: 1px solid #ff8156;
  border-radius: 10px;
}
.national_list {
  width: 85%;
  margin-left: 1%;
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
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  border: 1px solid #888888;
  margin-top: 5%;
  width: 95%;
}
</style>