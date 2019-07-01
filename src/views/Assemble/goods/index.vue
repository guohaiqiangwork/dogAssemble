<template>
  <div id="item_goods">
    <div class="item_list" v-for="(item,index) in itemList" :key="index" >
      <img class="item_logo" :src="item.picId" alt @click="goto(item.id)">
      <p class="item_tip">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import url from "../../../bin/url";
export default {
  // props:{

  // },
  data() {
    return {
      itemList: [
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "奶品水饮"
        },
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "休闲零食"
        },
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "母婴用品"
        },
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "厨房日用"
        },
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "厨房日用"
        },
        {
          logo: require("../../../assets/images/WechatIMG99(1).png"),
          tip: "厨房日用"
        }
      ]
    };
  },
  methods: {
    //   获取数据
    getClassfications() {
      let _obj = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.getClassfications, _obj).then(
        data => {
          if (data.code == 0) {
            this.itemList = data.obj;
            this.itemList.forEach(item => {
              item.picId = url.imgUrl + item.picId;
            });
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 数据传递
    goto(id){
        this.$emit('getList',id)
    }
  },
  mounted() {
    this.getClassfications(); //获取产品分类
  }
};
</script>
<style lang="less">
#item_goods {
  display: flex;
  justify-content: space-between;
  // width: 100%;
  height: 1.44rem;
  padding: 0.36rem 0;
  margin: 0 0.6rem;
  overflow-y: hidden;
  // box-sizing: border-box;
  .item_list {
    min-width: 25%;
    //    text-align: center;
    //    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .item_logo {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
    }
    .item_tip {
      color: #242E42;
      font-size: .28rem;
    }
  }
}
</style>
