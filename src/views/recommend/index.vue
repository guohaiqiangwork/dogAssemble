<template>
  <div style="color:red">
        推荐信息
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "recommend",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是推荐信息");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('推荐信息')

  }
};
</script>
<style scoped>

</style>