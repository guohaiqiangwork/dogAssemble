<template>
  <div>
    <div class="background_img">
        
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "sharedBonus",
  data() {
    return {
      code: ""
    };
  },
  methods: {},
  created() {
    settitle("共享奖金");
  },

  mounted() {}
};
</script>
<style scoped>
.background_img {
  background-image: url("../../assets/images/bg@3x.png");
  background-size: 100% 90%;
  height: 200px;
  background-repeat: no-repeat;
}
</style>