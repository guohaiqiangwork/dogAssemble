<template>
  <div>
        全国门店
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "nationalStor",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是全国们店");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
   console.log('全国门店')

  }
};
</script>
<style scoped>

</style>