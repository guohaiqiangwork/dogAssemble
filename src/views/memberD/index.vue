<template>
<div>
    会有
</div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "memberD",
  data() {
    return {};
  },
  methods: {
    //  去会员详情
    goToMemberD() {
      this.$router.push({
        name: "memberD",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "蚕丝"
            }
          })
        }
      });
    }
  },
  created() {
    settitle("会员操作详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("会员操作详情");
  }
};
</script>
<style scoped>

</style>