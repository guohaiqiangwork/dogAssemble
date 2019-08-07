<template>
  <div style="padding:2%">
    <!-- <img src="../../assets/images/888.jpg" width="100%" alt=""> -->
    <div style="     text-align: center;margin-top:3%"><img src="../../assets/images/yujian@2x.png" alt  style="width: 82px;height: 36px;"/></div>
    <div style="padding:3%;text-indent: 2em;">
      涿州市御康商贸有限公司，成立于2016年4月，总部位于河北省涿州市，从一台果蔬机的销售到果蔬食养加盟店的转变过程。开店至今，已有近1000家店，目前遍及全国19个省份。
      “御见”是公司经营的主要品牌，“御见”果蔬精萃吧以果蔬食养为核心业务，本着“天然、健康、0添加、私人定制”的品牌特性，打造果蔬食养行业的顶级品牌。
    </div>
    <div>品牌的诠释：</div>
    <div>御——驾驭健康源头，健康的顶级御赐；</div>
    <div>见——明心见性，从“心”出发，以轻松、愉悦的状态迎接自然新生活。</div>
    <div>品牌运营理念：“心”零售</div>
    <div>精心挑选</div>
    <div>用心服务</div>
    <div>诚心感动</div>
    <div>真心回馈</div>
    <div>企业文化</div>
    <!-- <div
      style="text-indent: 2em;"
    >2019年，公司提出“传统加盟+社群营销新模式”理念，着力打造全新的御见果蔬精萃吧连锁品牌。以果蔬食养为核心，完整补充现代人饮食结构中缺乏的维生素、微量元素、植化素等珍贵的营养素。通过改吃为喝，更好的促进吸收。果蔬食养不仅仅是饮食方式，也是一种生活方式，必将掀起一场饮食革命，为人们带来全新的饮食和生活主张，让人们能够轻松愉悦的享受健康、高品质的生活。</div>-->
    <div>定位:轻养生平台</div>
    <div>使命:让健康自然，让身心愉悦，让创业健康</div>
    <div>愿景:家家果蔬食养，人人自在健康</div>
    <div>价值观:爱、感恩、成长</div>
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
div{
  padding-left: 2%;
  font-weight: 400
}

</style>