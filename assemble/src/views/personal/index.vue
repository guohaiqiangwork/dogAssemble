<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的</x-header>
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

