<template>
  <div>
      确认订单
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
// import {  } from "vux";
export default {
  components: {
   
  },
  name: "confirmationOfOrder",
  data() {
    return {
      select: "Home",
      showMenus: false
    };
  },
  methods: {
   
  },
  created() {
    settitle('确认订单')
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