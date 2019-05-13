<template>
  <div>
        我是登陆页面
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "login",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是登陆页面");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('我是登陆页面')

  }
};
</script>
<style scoped>

</style>