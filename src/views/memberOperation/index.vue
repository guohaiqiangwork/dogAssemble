<template>
  <div>
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="请输入手机号"
        maxlength="11"
        v-on:input="getCheckMember(phone)"
        v-model="phone"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 列表 -->
    <div>
      <div style="height:25px;line-height:25px;"
        class="div_display_flex margin_top_div5 font_size_14 font_color_1A"
        v-for="(item,index) in memberList"
        :key="index"
       
      >
      <!-- <div  @click="goToMemberD(item)"> -->
        <div class="div_width_15 margin_left_div3" @click="goToMemberD(item)">{{item.name}}</div>
        <div class="div_width_25"  @click="goToMemberD(item)">{{item.phone}}</div>
        <div class="div_width_50 text_right" v-if="item.type == 0"  @click="goToMemberD(item)">会员{{item.recipe}}</div>
        <div class="div_width_50 text_right" v-if="item.type == 1"  @click="goToMemberD(item)">辟谷{{item.recipe}}</div>
      <!-- </div> -->
      </div>
    </div>
    <!-- 无数据 -->
    <div class="font_size_25 text_center" v-if="false">
      <img src="../../assets/images/提醒 (3)@2x.png" style="width:19px">
      该用户不存在
    </div>
    <!-- 按钮 -->
    <div class="div_display_flex">
      <div
        class="font_color_ff font_size_16 backgroun_color_4A text_center bt_m_o"
        @click="goToNewOrder"
      >新建套餐</div>
      <div
        class="font_color_ff font_size_16 backgroun_color_4A text_center bt_m_q"
        @click="goToAllMembers"
      >全部会员</div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "memberOperation",
  data() {
    return {
      memberList: [], //列表数据
      phone: "", //查询手机号
      transferFlag:false,
    };
  },
  methods: {
    //  去会员详情
    goToMemberD(item) {
      this.$router.push({
        name: "memberD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              item
            }
          })
        },
        query:{
          transferFlag:this.transferFlag
        }
      });
    },
    // 去新建套餐
    goToNewOrder() {
      this.$router.push({
        name: "newOrder",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {}
          })
        }
      });
    },
    // 去全部会员
    goToAllMembers() {
      this.$router.push({
        name: "allMembers",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {}
          })
        }
      });
    },
    // 获取列表参数
    getMemberList() {
      let keywords = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.getMemberList, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.memberList = data.obj;
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 查询订单会员
    getCheckMember(phone) {
      if (phone.length != "11") {
        return;
      }
      let keywords = {
        openId: localStorage.getItem("openId"),
        phone: phone
      };
      this.$fetch.post(url.checkMember, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.memberList = data.obj;
            if (data.obj.type == 3) {
              this.transferFlag = true;
            }
          }else{
            var err ={
              'find_none_user':"该用户不存在",
              'user_has_frozen':"该账户已被冻结",
              'the_user_has_no_order':'该用户当前无进行中订单'
            }
            this.$vux.toast.text(err[data.msg]||'未知的错误')
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("会员操作");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    //获取列表
    this.getMemberList();
  }
};
</script>
<style scoped>
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
  margin-top: 5%;
  width: 94%;
}
.bt_m_o {
  line-height: 3;
  border-radius: 5px;
  width: 40%;
  margin-left: 7.5%;
  position: fixed;
  bottom: 8%;
}
.bt_m_q {
  line-height: 3;
  border-radius: 5px;
  width: 40%;
  margin-left: 52.5%;
  position: fixed;
  bottom: 8%;
}

</style>