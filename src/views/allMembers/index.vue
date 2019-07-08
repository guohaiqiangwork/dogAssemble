<template>
  <div>
    <!-- 搜索 -->
    <div class="search_box">
      <i class="weui-icon-search search_icon"></i>
      <input
        type="text"
        placeholder="请输入手机号"
        maxlength="11"
        v-on:input="getAllUser(phone)"
        v-model="phone"
        style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
      >
      <i></i>
    </div>
    <!-- 列表 -->
    <div>
      <div style="margin-left: 3%;margin-top: 5%;">共{{allUserList.attributes.total}}个会员</div>
      <div style="height:25px;line-height:25px;"
        class="div_display_flex margin_top_div5 font_size_14 font_color_1A"
        v-for="(item,index) in allUserList.obj"
        :key="index"
      >
        <div class="div_width_15 margin_left_div3" @click="goToDetails(item.id)">{{item.name}}</div>
        <div class="div_width_25">{{item.phone}}</div>
        <div class="div_width_50 text_right">{{item.createTime}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "allMembers",
  data() {
    return {
      phone: "",
      allUserList:{
        attributes:{
          total:''
        }
      },
    };
  },
  methods: {
    // 查询订单会员
    getAllUser(item) {
      let keywords = {
        openId: localStorage.getItem("openId"),
        phone:item
      };
      this.$fetch.post(url.getAllUser, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.allUserList = data;
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 去全部会员详情
    goToDetails(id) {
      this.$router.push({
        name: "allMembersDetails",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: id
            }
          })
        }
      });
    },
  },
  created() {
    settitle("全部会员");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    //获取列表
    this.getAllUser();
  }
};
</script>
<style scoped>
/* 搜索框 */
.search_box {
  height: 0.7rem;
  border-radius: 0.35rem;
  position: relative;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin: 5% auto;
  width: 94%;
}
.bt_m_o {
  line-height: 3;
  border-radius: 5px;
  width: 40%;
  margin-left: 5%;
  position: fixed;
  bottom: 8%;
}
.bt_m_q {
  line-height: 3;
  border-radius: 5px;
  width: 40%;
  margin-left: 50%;
  position: fixed;
  bottom: 8%;
}
</style>