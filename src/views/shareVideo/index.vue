<template>
  <div style="color:red">
        视频分享
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "shareVideo",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是视频分享");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('视频分享')

  }
};
</script>
<style scoped>

</style>