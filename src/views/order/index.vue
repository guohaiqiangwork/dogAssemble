<template>
  <div>
  我的订单
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "myWallet",
  data() {
    return {};
  },
  methods: {
    
  },
  created() {
    settitle("我的订单");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("我的订单");
  }
};
</script>
<style scoped>

</style>