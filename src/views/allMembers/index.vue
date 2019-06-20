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
      <div style="margin-left: 3%;margin-top: 5%;">共{{allUserList.attributes.total}}个会员</div>
      <div
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
      allUserList: {
        code: "0",
        msg: "success",
        obj: [
          {
            id: "6e2bc5220368423b87a64c3b75d3ea6e",
            name: "赵新德",
            phone: "18600000002",
            createTime: "2019.06.17"
          },
          {
            id: "802587c4a34b4b77b076a9c9dc13142b",
            name: "詹某某",
            phone: "18600000000",
            createTime: "2019.06.14"
          },
          {
            id: "a28588fdb1f64c7db306b1da9d717739",
            name: "陈安生",
            phone: "18600000001",
            createTime: "2019.06.14"
          }
        ],

        attributes: {
          total: 3
        }
      }
    };
  },
  methods: {
    // 查询订单会员
    getAllUser() {
      let keywords = {
        openId: url.openId
      };
      this.$fetch.post(url.getAllUser, keywords).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            // this.allUserList = data;
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
    }
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