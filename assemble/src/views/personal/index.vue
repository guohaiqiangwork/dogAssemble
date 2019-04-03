<template>
  <div>
  我的
  </div>
</template>
<script>
import { XHeader} from "vux";
export default {
  components: {
    XHeader
  },
  name: "personal",
  data() {
    return {
     
    };
  },
  created() {
       settitle('我的')
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  methods: {
    goToHome: function() {}
  }
};
</script>
<style scoped>
</style>

