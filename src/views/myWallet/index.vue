<template>
  <div style="color:red">
        我的钱包
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "myWallet",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我的钱包");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('我的钱包')

  }
};
</script>
<style scoped>

</style>