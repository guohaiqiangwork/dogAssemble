<template>
  <div style="color:red">
        公司介绍
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "introduce",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("公司介绍");
     this.routeParams = JSON.parse(this.$route.params.obj);
   
  },

  mounted() {
   console.log('公司介绍')

  }
};
</script>
<style scoped>

</style>