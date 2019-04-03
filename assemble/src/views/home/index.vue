<template>
  <div>
    <!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header> -->
    <div @click="goToPersonal">去我的</div>
    <div @click="getData">去拼团</div>
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  name: "home",
  data() {
    return {
      select: "Home",
      showMenus: false
    };
  },
  methods: {
    getData () { 
    var self = this 
    $.ajax({ 
      url: 'http://f.apiplus.cn/bj11x5.json', 
      type: 'GET', 
      dataType: 'JSONP', 
      success: function (res) { 
        self.data = res.data.slice(0, 3) 
        self.opencode = res.data[0].opencode.split(',') 
      } 
    }) 
  } ,
    //   去个人中心
    goToPersonal(id) {
      console.log(id);
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    //   去拼团
    goToAssemble(id) {
      this.$router.push({
        name: "Assemble",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    }
  },
  created() {
    settitle('我是调试页')
    // this.getCode();
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.overwrite-title-demo {
  margin-top: 5px;
}
</style>