<template>
  <div>
    <!-- 会员套餐  -->
    <div v-if="ordertypeF == 0">
      <div class="backgroun_color_4A all_dd_border font_color_ff margin_top_div5">
        <div class="div_display_flex font_size_16 padding_top_div5">
          <div class="div_width_50 padding_left_div3">{{orderByIdListHY.obj.recipe}}</div>
          <div
            class="div_width_50 font_size_18 text_right pdiing_right8"
          >{{orderByIdListHY.obj.num}}</div>
        </div>
        <div class="div_display_flex margin_top_div3 font_size_13">
          <div class="div_width_50 padding_left_div3">{{orderByIdListHY.obj.time}}</div>
          <div class="div_width_50 text_right pdiing_right8">已喝次数</div>
        </div>
        <div
          class="font_size_18 text_right pdiing_right8 margin_top_div3"
        >{{orderByIdListHY.obj.price}}</div>
        <div class="div_display_flex margin_top_div3 font_size_13 padding_bottom_4">
          <div class="div_width_75 padding_left_div3">适应症：{{orderByIdListHY.obj.disease}}</div>
          <div class="div_width_25 text_right pdiing_right8">已消费</div>
          <!-- <div
            class="div_width_25 text_right pdiing_right8"
            v-if="orderByIdListHY.obj.state == 1"
          >服务中</div>
          <div
            class="div_width_25 text_right pdiing_right8"
           v-if="orderByIdListHY.obj.state == 2"
          >已暂停</div>
          <div
            class="div_width_25 text_right pdiing_right8"
           v-if="orderByIdListHY.obj.state == 3"
          >已消费</div>-->
        </div>
      </div>
      <!-- -->
      <div style="border-bottom: 1px solid #E9E9E9;" v-for="(item,index) in orderByIdListHY.obj.meOrders" :key="index">
        <div class="div_display_flex font_color_00 margin_top_div3">
          <div class="div_width_45 font_size_15 padding_left_div3">{{item.recipe}}</div>
          <div class="div_width_50 font_size_14 text_right">{{item.time}}</div>
        </div>
        <div class="div_display_flex margin_top_div3 padding_bottom_4">
          <div
            class="div_width_45 padding_left_div3"
            style="font-weight: 400;"
          >{{item.num}}次|{{item.cupType}}|¥{{item.price}}</div>
          <div class="div_width_50 text_right">
            <div class="z_fei" v-if="item.state == 2 ">已作废</div>
            <div class="w_fei" v-if="item.isCancel" @click="getCancel(item.id)">作废订单</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 辟谷套餐  -->
    <div v-if="ordertypeF == 1">
      <div v-for="(item,index) in orderByIdList.obj" :key="index">
        <div
          class="div_display_flex font_size_15 font_color_01 me_d_n border_tlr_b margin_top_div8"
          :class="item.state  == '1'? 'backgroun_color_DE' : 'backgroun_color_E9' "
        >
          <div class="div_width_50">{{item.recipe}}</div>
          <div class="div_width_50 text_right margin_right_div3">{{item.biguTime}}</div>
        </div>
        <!-- 规格 -->
        <div class="m_b_DB font_size_13 font_color_10">
          <div class="div_display_flex text_center" style="border-bottom:1px solid #E9E9E9">
            <div class="div_width_25">次数</div>
            <div class="div_width_25">食用时间</div>
            <div class="div_width_25">状态</div>
            <div class="div_width_25">操作</div>
          </div>
          <div
            class="div_display_flex text_center"
            v-for="(item,index) in item.biguDateLists"
            :key="index"
          >
            <div class="div_width_25">{{index + 1}}</div>
            <div class="div_width_25">{{item.recommTime}}</div>
            <div class="div_width_25" style="color:#4A7B67" v-if="item.state == '1'">待完成</div>
            <div class="div_width_25" style="color:#E9E9E9" v-if="item.state == '2'">已完成</div>
            <div class="div_width_25" style="color:#E6435A" v-if="item.state == '3'">已作废</div>
            <div class="div_width_25" v-if="item.state != '1'">/</div>
            <div
              class="div_width_25"
              style="color:#4A7B67"
              v-if="item.state == '1'"
              @click="goPayB(item.id)"
            >确认</div>
          </div>
        </div>
      </div>
    </div>

        <!-- 作废订单 -->
    <confirm v-model="outPayFalge1" title @on-cancel="onCancel1" @on-confirm="onConfirm1">
      <div style="text-align:center;font-size:18px;">
        您确认要作废订单吗？<br>
        <div style="font-size: 14px;color: #4A7B67;margin-top: 4%;">套餐金额将原路返回</div>

      </div>
    </confirm>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Confirm } from "vux";
export default {
    components: {
    Confirm
  },
  name: "allMembersDetailsD",
  data() {
    return {
      orderByIdList: "",
      ordertypeF: "",
       outPayFalge1: false ,//作废
       orderIdZ:'',
      orderByIdListHY: {
        obj: {
          recipe: "",
          num: "",
          time: "",
          price: "",
          state: "",
          disease: ""
        }
      },
      // meOrders: [
      //   {
      //     id: "abd9c2897fb74059bf928b1a32245127",
      //     recipe: "会员一改",
      //     num: 4,
      //     price: 18,
      //     cupType: "小杯",
      //     time: "2019.15.01 14:15:01",
      //     state: "1"
      //   },
      //   {
      //     id: "912c78b7aef54ea78874113acdd76db8",
      //     recipe: "会员一改",
      //     num: 3,
      //     price: 18,
      //     cupType: "小杯",
      //     time: "2019.13.01 14:13:41",
      //     state: "1"
      //   },
      //   {
      //     id: "8a90cb1515604c4b9c1b6fad0deb4431",
      //     recipe: "会员一改",
      //     num: 2,
      //     price: 18,
      //     cupType: "小杯",
      //     time: "2019.09.01 14:09:23",
      //     state: "1"
      //   },
      //   {
      //     id: "15cdca00041e45fb8d8031671d384bb6",
      //     recipe: "会员一改",
      //     num: 1,
      //     price: 20,
      //     cupType: "大杯",
      //     time: "2019.08.01 14:08:58",
      //     state: "1"
      //   }
      // ],
      faly: ""
    };
  },
  methods: {
    // 查询订单会员
    getOrderById() {
      let keywords = {
        openId: localStorage.getItem("openId"),
        id: this.routeParams.data.id
      };
      this.$fetch.post(url.getOrderById, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.ordertypeF = data.attributes.type;
            if (this.ordertypeF == 1) {
              this.orderByIdList = data;
            } else {
              this.orderByIdListHY = data;
              this.faly = data.obj.state;
            }

            console.log(this.orderByIdList);
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    goPayB(id) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: id
      };
      this.$fetch.post(url.sureBigu, _obj).then(
        data => {
          if (data.code == 0) {
            this.getOrderById(); //获取列表
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
      // 弹窗取消
    onCancel1() {
      console.log("2");
    },
    // 弹窗确认
    onConfirm1() {
       let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.orderIdZ
      };
      this.$fetch.post("/fruits/app/member/cancel", _obj).then(
        data => {
          if (data.code == 0) {
            this.getOrderById(); //获取列表
          } else {
            if (data.msg == "store_none") {
              alert("跨店店铺不存在");
            } else if (data.msg == "cash_pledge") {
              alert("跨店店铺通用结算金不足");
            } else {
              alert(data.msg);
            }
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 订单作废
    getCancel(id) {
    this.orderIdZ = id;
     this.outPayFalge1 = true;
    }
  },
  created() {
    settitle("全部会员详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams.id);
  },

  mounted() {
    //获取列表
    this.getOrderById();
  }
};
</script>
<style scoped>
.me_d {
  line-height: 3;
  /* border-radius: 5px; */
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
.all_dd_border {
  width: 96%;
  margin-left: 2%;
  border-radius: 8px;
}
.pdiing_right8 {
  padding-right: 8%;
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
.btn_ff {
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  margin-left: 7%;
}
.border_tlr_b {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.m_b_DB {
  width: 92.8%;
  margin-left: 4%;
  border: 1px solid #e9e9e9;
  line-height: 3;
}
.backgroun_color_DE {
  background-color: #dee8e3;
  border: 1px solid #dee8e3;
}
.backgroun_color_E9 {
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
}
.z_fei {
  width: 45%;
  border: 1px solid #e6435a;
  text-align: center;
  padding: 1%;
  border-radius: 4px;
  color: #e6435a;
  margin-left: 49%;
  font-size: 13px;
}
.w_fei {
  width: 45%;
  border: 1px solid #4a7b67;
  text-align: center;
  padding: 1%;
  border-radius: 4px;
  color: #4a7b67;
  margin-left: 49%;
  font-size: 13px;
}
</style>