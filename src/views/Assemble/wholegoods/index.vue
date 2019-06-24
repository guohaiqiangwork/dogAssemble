<template>
  <div id="whole">
    <div class="flex-between wrap">
      <div class="goods_item" v-for="(item,index) in goodsList" :key="index" ref="getwhole">
        <div class="img_box">
          <img class="goods_img" :src="item.picId" alt>
        </div>
        <div class="goods_msg">
          <p class="goods_name">{{item.name}}</p>
          <p class="red">¥{{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../../bin/url";
export default {
  props: ["listId"],
  data() {
    return {
      key: "value",
      goodsList: ""
    };
  },
  methods: {
     
    getGoodsList() {
      let _obj = {
        openId: url.openId,
        id: this.listId || "",
        size: "10",
        current: "1"
      };
      this.$fetch.post(url.getGoodsList, _obj).then(
        data => {
          console.log(data);
          if (data.code == 0) {
            this.goodsList = data.obj;
            this.goodsList.forEach(item => {
              item.picId = url.imgUrl + item.picId;
              console.log(item.picId);
            });
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  mounted() {
       this.$refs.getwhole.$emit('goToList1',()=>{
           console.log('788900')
       })
    this.getGoodsList(); //获取全部列表
  }
};
</script>
<style lang="less">
#whole {
  padding: 0.35rem 0.42rem 0;
  .wrap {
    flex-wrap: wrap;
  }
  .goods_item {
    border-radius: 0.12rem;
    background: #fff;
    font-size: 0;
    margin-bottom: 7px;
    .img_box {
      border-bottom: 1px solid #e9e9e9;
      .goods_img {
        width: 2.57rem;
        height: 2.57rem;
        padding: 0.3rem 0.3rem;
      }
    }
    .goods_msg {
      font-size: 0.28rem;
      padding: 0.21rem 0.31rem;
      .goods_name {
        line-height: 0.4rem;
      }
    }
  }
}
</style>
