<template>
  <div>
        我是修改密码
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "changepassword",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("修改密码");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('修改密码')

  }
};
</script>
<style scoped>

</style>