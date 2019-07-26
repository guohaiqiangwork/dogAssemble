<template>
  <div id="goods_detail">
    <!-- <div class="goods_picbox">
      <swiper
        :list="imgList"
        v-show="imgList.length"
        @on-index-change="onIndexChange"
        height="100%"
        :show-dots="false"
      ></swiper>
   
      <div class="circle_num">
        <span>{{num}}</span>
        <span>/</span>
        <span>{{imgList.length}}</span>
      </div>
    </div>-->
    <!-- <img  src="../../assets/images/WechatIMG101(1).png" alt=""> -->
    <div class="goods_picbox">
      <swiper @on-index-change="onIndexChange" v-model="swiperItemIndex" :show-dots="false" auto loop>
        <swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index">
          <img :src="item.img" />
        </swiper-item>
      </swiper>
      <div class="circle_num">
        <span>{{num}}</span>
        <span>/</span>
        <span>{{imgList.length}}</span>
      </div>
    </div>
    <div class="goods_item">
      <p class="goods_price">{{goodsDetail.name}}</p>
      <div class="goods_des">{{goodsDetail.remark}}</div>
      <p class="goods_name">
        <span class="red">￥{{type == 1?goodsDetail.original:goodsDetail.price}}</span>
        <span class="goods_discount" v-if="type!=1&&type">￥{{goodsDetail.original}}</span>
      </p>
    </div>
    <div class="img_box">
      <div class="goods_tit">商品详情图</div>
      <div v-for="(item,index) in goodsDetail.imgDetailsList" :key="index">
        <img
          class="detail_pic"
          :src="'http://www.御见.com/fruits/app/blank/showPicture?attachmentId='+item"
          alt
        />
      </div>
    </div>
    <!-- <div class="foryou">为您推荐</div> -->
    <!-- <hot v-on:goToDetail="goDetail" class="hot-btn-space"></hot> -->
    <!-- <div id="hot" class=" margin_top_div3">
            <div class="hot_tit" v-if="home&&hotList.length">热门推荐</div>
                <div class="foryou" v-if="!home&&hotList.length">为您推荐</div>
                <div class="hot_item">
                <div v-for="(item,index) in hotList" :key="index" class="mt_size" @click="goDetail(item)">
                    <img class="hot_logo" :src="item.picId" alt>
                    <p class="hot_msg">
                    <span>{{item.name}}</span>
                    <br>
                    <span class="hot_price">{{`￥${type == 1?item.original:item.price}`}}</span>
                    <span class="goods_discount" v-if="type!=1&&type">¥{{item.original}}</span>
                    </p>
                </div>
                </div>
    </div>-->
    <div v-transfer-dom>
      <popup v-model="popupshow" position="bottom" @on-hide="close">
        <div class="popup_box">
          <div class="goods_info flex-between">
            <div class="popup_head">
              <img :src="form.pic" alt />
              <div class="flex-around flex-clo ml-space">
                <p style="font-weight:700;margin-top:-.3rem;">{{goodsDetail.name}}</p>
                <p class="goods_price">
                  <span class="red">¥{{type==1?goodsDetail.original:goodsDetail.price}}</span>
                  <span class="goods_discount" v-if="type!=1&&type">¥{{goodsDetail.original}}</span>
                  <!-- <span class="red">￥{{goodsDetail.price}}</span>
                  <span class="goods_discount">￥{{goodsDetail.original}}</span>-->
                </p>
              </div>
            </div>

            <x-icon type="ios-close-empty" size="30" class="icon_pos" @click="close"></x-icon>
          </div>
          <div class="goods_detail">
            <div v-for="(item,index) in specList" :key="index">
              <p class="goods_tag">{{item.name}}</p>
              <ul class="goods_ul">
                <li
                  v-for="(ite,ind) in item.valueList"
                  :key="ind"
                  @click="choseSpec(item,index,ite)"
                  :class="[form.specList[index].value==ite?'active':'']"
                >{{ite}}</li>
              </ul>
            </div>
            <!-- <div>
                            <p class="goods_tag">零食种类</p>
                            <ul class="goods_ul">
                                <li>蔬果干</li>
                            </ul>
            </div>-->

            <p class="flex-between align-center mt-space">
              <span>购买数量</span>
              <inline-x-number width="30px" :title="('Quantity')" :min="1" v-model="form.num"></inline-x-number>
            </p>
          </div>
          <div class="buy_btn" @click="buyGoods">确认</div>
        </div>
      </popup>
    </div>
    <!-- <div  class="bottom-tip" v-if="goodsDetail.state == 1">已下架</div> -->
  </div>
</template>
<script>
import hot from "../Assemble/hotness/index";
import url from "../../bin/url";

import {
  Swiper,
  TransferDom,
  Popup,
  XButton,
  InlineXNumber,
  SwiperItem
} from "vux";
export default {
  directives: {
    TransferDom
  },
  props: ["popup"],
  components: {
    hot,
    Swiper,
    Popup,
    XButton,
    SwiperItem,
    InlineXNumber
  },
  computed: {
    //商品id
    goodId() {
      return this.$route.query.id;
    },
    //控制弹窗
    popupshow: {
      get: function() {
        return this.$parent.show;
      },
      set: function(oldVal, newVal) {}
    },
    buyNum: {
      get: function() {
        return this.$parent.buyNum;
      },
      set: function(Val) {
        this.form.num = Val;
      }
    },
    type() {
      return localStorage.getItem("type");
    },
    home() {
      return this.$route.path == "/home";
    }
  },
  data() {
    return {
      hotList: [],
      imgList: [
        // {
        //   img:"",
        // },
        // {
        //   img:"",
        // },
      ],
      arr: [],
      param: { openId: localStorage.getItem("openId"), id: this.goodId },
      num: 1,
      //商品详情信息
      goodsDetail: {},
      goodsDetailImg: [],
      specList: [],
      spec: "",
      pic: "",
      form: {
        openId: localStorage.getItem("openId"),
        id: "",
        num: 1,
        pic: "",
        img: "",
        price: null,
        specList: []
      },
      swiperItemIndex: 0
    };
  },
  created() {
    settitle("商品详情");
  },
  methods: {
    goDetail(item) {
      //   this.$router.push("/goodsdetail?id=" + item.id);
      this.$router.push({
        name: "shop",
        query: {
          id: item.id
        }
      });
    },
    getRecommend() {
      let _obj = {
        openId: localStorage.getItem("openId")
      };
      this.$fetch.post(url.getRecommend, _obj).then(
        data => {
          if (data.code == 0) {
            this.hotList = data.obj;
            this.hotList.forEach(item => {
              item.price = item.price.toFixed(2);
              item.original = item.original.toFixed(2);
              item.picId = url.imgUrl + item.picId;
              console.log(item.picId);
            });
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    goToDetail(id) {
      this.$emit("goToDetail", id);
    },
    //商品详情页
    goDetail(item) {
      this.$router.push("/goodsdetail?id=" + item.id);
      this.$router.go(0);
    },
    //关闭弹窗
    close() {
      this.$parent.show = false;
    },
    onIndexChange(currentIndex) {
      this.num = currentIndex + 1;
    },
    //点击确定
    buyGoods() {
      console.log(this.form, "lll");
      this.form.id = this.goodId;
      this.form.price = this.goodsDetail.price;
      this.$parent.show = false;
      if (this.$parent.title == "cart") {
        //点击加入购物车
        if (this.goodsDetail.state == 1) {
          this.$vux.toast.text("该商品已下架");
          return;
        }
        this.addCart();
      } else {
        if (this.goodsDetail.state == 1) {
          this.$vux.toast.text("该商品已下架");
          return;
        }
        //点击立即购买
        this.form.name = this.goodsDetail.name;
        var obj = {
          openId: localStorage.getItem("openId"),
          goodList: [this.form],
          type: "1"
        };
        // [{
        //         id:this.goodsDetail.id,
        //         num:this.form.num,
        //         price:this.goodsDetail.price,
        //         name:this.goodsDetail.name
        //     }]
        // var obj = this.form;
        console.log(this.goodsDetail);

        obj = JSON.stringify(obj);
        // console.log(this.goodsDetail);
        // console.log(this.form,7878);

        this.$router.push(
          "/paysure?data=" +
            obj +
            "&count=" +
            this.form.num +
            "&price=" +
            ((this.goodsDetail.price / 1) * this.form.num) / 1
        );
      }
    },
    //添加购物车
    addCart() {
      this.$fetch.post("fruits/app/cart/joinCart", this.form).then(res => {
        this.$parent.buyNum = this.$parent.buyNum / 1;
        this.$parent.buyNum += this.form.num / 1;
        localStorage.setItem("catnum", this.$parent.buyNum);
        // this.$router.push('/paysure?data='+obj + "&count="+this.form.num + "&price="+this.goodsDetail.price/1*this.form.num/1)
      });
    },
    //获取商品详情
    getGood() {
      this.$fetch
        .post("fruits/app/blank/getGoodInfo", {
          openId: localStorage.getItem("openId"),
          id: this.goodId
        })
        .then(res => {
          // this.$nextTick(() =>{
          res.obj.imgBannerList.forEach((el, i) => {
            // if(i<2){
            this.imgList.push({
              url: "javascript:",
              img:
                "http://www.御见.com/fruits/app/blank/showPicture?attachmentId=" +
                el
            });
            //   this.imgList[i].img = "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId="+el;
            // }
          });
          // })
          this.goodsDetail = { ...res.obj };
          this.goodsDetail.price = this.goodsDetail.price.toFixed(2);
          this.goodsDetail.original = this.goodsDetail.original.toFixed(2);
          var a = JSON.stringify({ a: 1 });
        });
    },
    //获取商品规格
    getSpecs() {
      this.$fetch
        .post("fruits/app/cart/getGoodsSpec", {
          openId: localStorage.getItem("openId"),
          id: this.goodId
        })
        .then(res => {
          this.specList = [...res.obj.goodsSpecs];
          this.specList.forEach((e, ind) => {
            this.form.specList.push({
              value: null,
              specName: e.name,
              specId: e.id,

              check: false
            });
            e.valueList.forEach((el, i) => {
              if (i == 0) {
                this.form.specList[ind].value = el;
              }
            });
          });
          this.form.pic = url.imgUrl + res.obj.picId;
          this.form.img = url.imgUrl + res.obj.picId;
          console.log(this.form.specList, 888);
        });
    },
    // 选择规格
    choseSpec(item, index, spec) {
      this.spec = index;
      console.log(index);
      this.form.specList[index].specName = item.name;
      this.form.specList[index].value = spec;
      this.form.specList[index].specId = item.id;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getGood();
    });

    this.getSpecs();
    this.getRecommend(); //获取推荐列表
  }
};
</script>
<style lang="less">
//   .vux-slider > .vux-swiper{
//     height: 100% !important;
// }  
.img_box{
  padding-bottom: 10%;
}
#goods_detail{
      .vux-slider > .vux-swiper{
    height: 100% !important;
}  
}
#hot {

  background: #fff;
  .foryou {
    padding: 0.64rem 0 0.52rem 0;
    font-size: 0.3rem;
    color: #4a7b67;
    text-align: center;
    background: #fff;
  }
  .foryou:before {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0.26rem 0.1rem 0;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .foryou:after {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0 0.1rem 0.26rem;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .hot_item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.42rem;
    .mt_size {
      margin: 0.2rem 0;
      min-width: 30%;
      max-width: 30%;
    }
    .hot_logo {
      height: 1.8rem;
      width: 1.8rem;
    }
    .hot_msg {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      span {
        display: inline-block;
        white-space: wrap;
        color: #000;
        font-size: 0.28rem;
      }
      .hot_price {
        color: #e6435a;
        font-size: 0.28rem;
        padding: 0.1rem 0rem;
      }
    }
  }
  .goods_discount {
    color: rgb(16, 32, 35);
    opacity: 0.52;
    text-decoration: line-through;
    margin-right: 0.2rem;
    font-size: 0.13rem;
  }
}
.goods_discount {
  color: rgb(16, 32, 35);
  opacity: 0.52;
  text-decoration: line-through;
  margin-right: 0.2rem;
  font-size: 0.26rem;
}
.bottom-tip {
  position: fixed;
  bottom: 48px;
  padding: 8px;
  text-align: center;
  width: 100%;
  background: #e3e4e5;
  color: #fff;
}
.hot-btn-space {
  margin-bottom: 0.9rem;
}
.popup_box {
  height: 100%;
  padding: 0 0.3rem;
  background: #fff;
  font-size: 0.28rem;
  overflow-x: hidden;
  ul {
    list-style: none;
  }
  img {
    height: 1.74rem;
    width: 1.74rem;
    font-size: 0;
  }
  .vux-number-selector svg {
    fill: #4a7b67;
  }
  .vux-number-selector.vux-number-disabled svg {
    fill: #ccc;
  }

  .goods_info {
    padding: 0.3rem 0 0 0;
    .popup_head {
      display: flex;
      justify-content: flex-start;
      .ml-space {
        margin-left: 0.3rem;
      }
      .goods_price {
        font-size: 0.38rem;
        line-height: 0.53rem;
        margin-top: -0.9rem;
      }
    }
  }

  .goods_detail {
    .goods_tag {
      padding: 0.4rem 0 0.2rem 0;
    }
    .goods_ul {
      display: flex;
      li {
        width: 1.47rem;
        height: 0.54rem;
        margin-right: 0.3rem;
        line-height: 0.54rem;
        text-align: center;
        border-radius: 0.08rem;
        background: rgba(245, 245, 245);
      }
      .active {
        background: #4a7b67;
        color: #fff;
      }
    }
    .mt-space {
      margin-top: 0.4rem;
    }
  }
  .buy_btn {
    width: 6.9rem;
    height: 1rem;
    margin: 0.63rem 0 0.44rem 0;
    background: #4a7b67;
    line-height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    color: #fff;
    border-radius: 0.12rem;
  }
}
#goods_detail {
  height: 100%;
  width: 100%;
  // overflow-x: hidden;
  overflow-y: scroll;
  .vux-slider {
    height: 100%;
    width: 100%;
  }
  .foryou {
    padding: 0.64rem 0 0.52rem 0;
    font-size: 0.3rem;
    color: #4a7b67;
    text-align: center;
    background: #fff;
  }
  .foryou:before {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0.26rem 0.1rem 0;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .foryou:after {
    content: "";
    display: inline-block;
    width: 1.7rem;
    margin: 0 0 0.1rem 0.26rem;
    border-top: 1px solid rgb(222, 222, 222);
  }
  .goods_picbox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7.49rem;
    border-bottom: 1px solid #e9e9e9;
    .circle_num {
      position: absolute;
      bottom: 0.3rem;
      right: 0.3rem;
      width: 1.03rem;
      height: 0.47rem;
      text-align: center;
      line-height: 0.47rem;
      color: #fff;
      background: rgba(0, 0, 0, 0.35);
      border-radius: 0.24rem;
    }
    .goods_pic {
      height: 5.7rem;
      width: 5.7rem;
      margin: 0 auto;
    }
  }
  .goods_item {
    padding: 0.3rem 0.28rem 0.3rem;
    .goods_price {
      line-height: 0.53rem;
      font-size: 0.32rem;
    }
    .goods_des {
      font-size: 0.26rem;
      color: #000000;
      opacity: 0.52;
      padding-bottom: 0.1rem;
    }
    .goods_name {
      line-height: 0.45rem;
      font-size: 0.38rem;
      color: #e6435a;
    }
  }
  .detail_pic {
    width: 100%;
    height: 7.19rem;
  }
  .goods_tit {
    margin-bottom: 0.59rem;
    text-align: center;
    color: #000;
    font-size: 0.3rem;
  }
  .goods_tit:before {
    content: "";
    display: inline-block;
    width: 1.81rem;
    border-top: 1px solid #dedede;
    margin-right: 0.22rem;
    margin-bottom: 0.1rem;
    // background:rgba;
  }
  .goods_tit:after {
    content: "";
    display: inline-block;
    width: 1.81rem;
    border-top: 1px solid #dedede;
    margin-left: 0.22rem;
    margin-bottom: 0.1rem;
  }
}
</style>
