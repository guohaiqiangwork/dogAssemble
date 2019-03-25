<template>
  <div>
    <mt-header title="拼团">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--  -->
    <mt-button type="primary" @click="goToPersonal">去我的</mt-button>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    //   去个人中心
     goToPersonal(id) {
      this.$router.push({
        name: "personal",
        params: {
          id: id
        }
      });
    }
  },
  mounted() {
    console.log("初始化");
  }
};
</script>
<style scoped>
</style>
