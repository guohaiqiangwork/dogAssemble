<template>
  <div style="padding:2%">
<img src="../../assets/images/888.jpg" width="100%" alt="">
    <!-- <div
      style="padding:3%;text-indent: 2em;"
    >涿州市御康商贸有限公司，成立于2016年4月，总部位于河北省涿州市，专注于果蔬食养的运营和推广。经过三年时间的不断探索发展，自2015年将果蔬食养引入中国大陆，已成为集果蔬机硬件技术、果蔬食养专业知识、连锁加盟、线上线下、知识产权管理为一体的轻养生产业链。自2017年第一家果蔬吧落地开业到目前已有近两千家连锁店。引领行业发展。</div>
    <div
      style="text-indent: 2em;"
    >2019年，公司提出“传统加盟+社群营销新模式”理念，着力打造全新的御见果蔬精萃吧连锁品牌。以果蔬食养为核心，完整补充现代人饮食结构中缺乏的维生素、微量元素、植化素等珍贵的营养素。通过改吃为喝，更好的促进吸收。果蔬食养不仅仅是饮食方式，也是一种生活方式，必将掀起一场饮食革命，为人们带来全新的饮食和生活主张，让人们能够轻松愉悦的享受健康、高品质的生活。</div>
    <div>定位:轻养生</div>
    <div>使命:让创业简单，让健康自然，让身心愉悦</div>
    <div>价值观:集合小人物，创造大智慧</div>
    <div>愿景:倡导果蔬食养，传播吃的智慧</div> -->
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "introduce",
  data() {
    return {};
  },
  methods: {},
  created() {
    settitle("公司介绍");
    this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
    console.log("公司介绍");
  }
};
</script>
<style scoped>
</style>