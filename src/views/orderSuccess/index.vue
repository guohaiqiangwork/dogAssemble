<template>
  <div>
    <div class="text_center" style="margin-top:24%">
      <img src="../../assets/images/1581@2x.png" width="45%">
    </div>
    <div class="text_center font_size_16 font_color_33 margin_top_div2">套餐已建好，是否去消费？</div>
    <div class="div_display_flex margin_top_div12" style="margin-top:25%;">
      <div :class="classA  == '1'? 'new_order_b1' : 'new_order_b2' " @click="newOrderXZ('1','home')">不消费</div>
      <div :class="classA  == '2'? 'new_order_b1' : 'new_order_b2' " @click="newOrderXZ('2','memberOperation')">消费</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderSuccess",
  data() {
    return {
      classA: "1"
    };
  },
  methods: {
      newOrderXZ(id,url){
          this.classA = id;
          if(id ==1){
            this.$router.push('/home');
            return
          }
          this.$router.push({
        name: url,
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "参数"
            }
          })
        }
      });
      }
  }
};
</script>
<style>
.new_order_b2 {
  width: 33%;
  text-align: center;
  background-color: #4a7b67;
  color: #ffffff;
  margin-left: 11%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 3;
}
.new_order_b1 {
  width: 33%;
  text-align: center;
  background-color: #ffffff;
  color: #4a7b67;
  margin-left: 11%;
  border: 1px solid #4a7b67;
  border-radius: 5px;
  line-height: 3;
}
</style>
