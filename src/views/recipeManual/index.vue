<template>
  <div style="color:red">
        配方手册
  </div>
</template>
<script>
import url from "../../bin/url";
export default {

  name: "recipeManual",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    settitle("我是配方手册");
     this.routeParams = JSON.parse(this.$route.params.obj);
   
  },

  mounted() {
   console.log('配方手册')

  }
};
</script>
<style scoped>

</style>