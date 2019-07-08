<template>
  <div>
    <!-- 辟谷套餐 -->
    <div v-if="falg == 'b'">
      <div
        class="font_size_14 font_color_ff backgroun_color_4A padding_left_div3"
        style="line-height:2;"
      >第{{myMemberOrderListB.num}}天/{{myMemberOrderListB.date}}</div>
      <!-- v-for="(item,index) in myMemberOrderListB.memberBiguLists"
      :key="index"-->
      <div
        v-for="(item,index) in myMemberOrderListB.memberBiguLists"
        :key="index"
        class="font_color_00 font_size_13 text_center margin_top_div3"
        style="border-bottom: 1px solid #E9E9E9;padding-bottom: 3%;"
      >
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30">
            {{index + 1}}建议时间:
            <span class="font_color_4A">{{item.biguTime}}</span>
          </div>
          <div class="div_width_30">
            消费时间:
            <span class="font_color_4A">{{item.actualTime}}</span>
          </div>
          <div class="div_width_30 text_right" v-if="item.state == 1" style="color:#4A7B67">待完成</div>
          <div class="div_width_30 text_right" v-if="item.state == 2" style="color:#102023">已完成</div>
          <div class="div_width_30 text_right" v-if="item.state == 3" style="color:#E6435A">已作废</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <div class="div_width_30">{{item.area}}</div>
          <div class="div_width_20 div_text_left">{{item.store}}</div>
        </div>
      </div>
    </div>

    <!--会员套餐 -->
    <div v-if="falg == 'h'">
      <div
        v-if="myMemberOrderListH.length > 0"
        class="font_size_14 font_color_ff backgroun_color_4A padding_left_div3"
        style="line-height:2;"
      >会员套餐</div>
      <div
        v-for="(item,index) in myMemberOrderListH"
        :key="index"
        class="font_color_00 font_size_13 text_center margin_top_div3"
        style="border-bottom: 1px solid #E9E9E9;padding-bottom: 3%;"
      >
        <div class="div_display_flex margin_top_div3 font_color_4A">
          <div
            class="div_width_30"
            style="text-align:left;text-indent:0.3rem;"
            @click="goToSOrderD('b')"
          >
            <span style="display:inline-block;margin-left:-.5rem;">{{index + 1+"."}}</span>
            价格：{{item.price}}
          </div>
          <div class="div_width_20 div_text_left" style="margin-left:-10%">（{{item.cupType}}）</div>
          <div
            class="div_width_50 text_right"
            style="margin-left:5%"
            @click="goToSOrderD('b')"
          >{{item.time}}</div>
        </div>
        <div class="div_display_flex margin_top_div3">
          <!-- <div class="div_width_30" @click="goToSOrderD('b')">{{item.time}}</div> -->
          <div class="div_width_30" style="text-align:left;text-indent:0.3rem;">{{item.area}}</div>
          <div class="div_width_50 div_text_left" style="margin-left:-12%">{{item.store}}</div>
          <div class="div_width_20 text_right" style="margin-left:7%" v-if="item.state == 1">正常</div>
          <div
            class="div_width_20 text_right"
            style="margin-left:7%;color:#E6435A;"
            v-if="item.state == 2"
          >已退款</div>
        </div>
      </div>
    </div>

    <div v-if="myMemberOrderListH.length == 0 && myMemberOrderListB.length ==0">
      <div class="nothingImg">
        <img src="../../assets/images/1546@2x.png" />
        <div class="nothing_word">您当前还没有开始套餐</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "serviceOrderD",
  data() {
    return {
      falg: "", //标记
      orderId: "", //订单id
      num: "", //天数
      myMemberOrderListH: "", //会员列表
      myMemberOrderListB: "" //辟谷套餐
    };
  },
  methods: {
    // 获取会员数据
    getItemH() {
      this.$fetch
        .post("/fruits/app/member/getMyMemberOrder", {
          openId: localStorage.getItem("openId"),
          id: this.orderId
        })
        .then(res => {
          if (res.code == 0) {
            this.myMemberOrderListH = res.obj;
            // console.log(this.myMemberOrderListH.length);
          } else {
            alert(res.msg);
          }
        });
    },
    // 获取辟谷数据
    getItemB() {
      this.$fetch
        .post("/fruits/app/member/getMyBiguOrder", {
          openId: localStorage.getItem("openId"),
          id: this.orderId,
          num: this.num
        })
        .then(res => {
          if (res.code == 0) {
            this.myMemberOrderListB = res.obj;
            //  console.log(this.myMemberOrderListB.length);
          } else {
            alert(res.msg);
            // console.log(this.num);
          }
        });
    }
  },
  created() {
    settitle("套餐详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams.data);
    // console.log(this.routeParams,'hhkjh');
    // this.num = this.routeParams.data.item.num;
    this.falg = this.routeParams.data.id;
    this.orderId = this.routeParams.data.item.id;
    this.num = this.routeParams.data.num;
    if (this.falg == "b") {
      this.getItemB(); //获取辟谷数据
    } else {
      this.getItemH(); //获取会员数据
    }

    if (this.routeParams.data.item.num) {
      this.num = this.routeParams.data.item.num;
    }
  },
  mounted() {
    console.log("套餐详情");
  }
};
</script>
<style scoped>
.service_width_25 {
  width: 25%;
}
.nothingImg {
  position: relative;
  text-align: center;
}
.nothingImg img {
  display: inline-block;
  width: 4.8rem;
  margin: 3.5rem auto 0.5rem;
}
.nothing_word {
  font-size: 0.3rem;
  color: #333333;
}
</style>