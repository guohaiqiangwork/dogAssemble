<template>
  <div style="color:blue">
        专属门店
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "exclusive",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是专属门店");
     this.routeParams = JSON.parse(this.$route.params.obj);
   
  },

  mounted() {
   console.log('专属门店')

  }
};
</script>
<style scoped>

</style>