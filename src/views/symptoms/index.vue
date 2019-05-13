<template>
  <div style="color:red">
        病症检测
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "symptoms",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是病症检测");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('病症检测')

  }
};
</script>
<style scoped>

</style>