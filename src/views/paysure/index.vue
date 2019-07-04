<template>
  <div id="paysure">
    <div class="address_box" v-if="goodsMsg.receiver">
      <p class="title_address">收货地址</p>
      <div class="address_content">
        <div class="person_msg">
          <div class="half_box">
            <img class="icon_size" src="../../assets/images/position.png" alt>
            <span>{{goodsMsg.receiver}}</span>
            <span>{{goodsMsg.phone}}</span>
          </div>
          <!-- <img class="icon_right" src="../../assets/images/right.png" alt="" > -->
          <x-icon @click="goAddress" type="ios-arrow-right" size="30"></x-icon>
        </div>
        <div class="address_msg">
          <div style="display:inline-block;" class="topic_box" v-if="goodsMsg.isDefault == 1">
            <span class="defalut_toic">默认</span>
          </div>
          <span>{{goodsMsg.receiveAddress}}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text_center font_size_16" style="line-height:6" @click="goAddress">
        <img class="icon_size" src="../../assets/images/添加@2x.png" width="16px" height="16px" alt>
        请添加您的收货人信息
      </div>
    </div>
    <div style="background-color:#F6F6F6;height:8px"></div>
    <div class="form_box">
      <div class="goods_list">
        <!--                 
                <img src="../../assets/images/WechatIMG102.png" alt="">
                <div class="item_msg">
                    <p>熊孩子综合蔬菜干香菇脆秋葵干330g袋果蔬脆</p>
                    <p class="item_btm">
                        <span>¥13.9</span>
                        <span class="item_num">×3</span>
                    </p>
        </div>-->

        <div class="flex-between" v-for="(item,index) in option.goodList" :key="index">
          <div class="flex-between flex-clo align-center items" v-if="index<=3">
            <img :src="item.img" alt>
            <p>¥{{item.price}}</p>
          </div>
        </div>

        <div class="flex-start align-center" @click="goList">
          <span style="white-space:nowrap;">共{{count}}件</span>
          <x-icon type="ios-arrow-right" size="30"></x-icon>
        </div>
      </div>
      <!-- 单行form -->
      <!-- <div class="item_form">
        <span>规格一</span>
        <span>规格单位</span>
      </div>
      <div class="item_form">
        <span>规格二</span>
        <span>规格单位</span>
      </div>-->
      <div>
        <!-- <div class="item_form">
            <span>规格一</span>
            <span>规格单位</span>
        </div>-->
        <div class="item_form">
          <span>合计金额</span>
          <span>￥{{price}}</span>
        </div>
      </div>
      <div class="item_form">
        <span>运费</span>
        <span>￥{{postFee}}</span>
      </div>
      <div class="message_area">
        <p>留言</p>
        <x-textarea
          :max="200"
          name="detail"
          placeholder="至少200字"
          :show-counter="true"
          v-model="form.remarks"
        ></x-textarea>
        <!-- <p class="buyflag">支付代表同意《购买须知》</p> -->
      </div>
      <div class="pay_box">
        <div style="margin-left:0.3rem;">
          <span>实际支付</span>
          <span class="red price_size">￥{{(price/1+postFee/1).toFixed(2)}}</span>
        </div>
        <div class="buybutton" @click="paysure">确认支付</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { XTextarea } from "vux";
import weiXinPay from "../../bin/weiXinPay"
export default {
  components: {
    XTextarea
  },
  data() {
    return {
      key: "value",
      selectAddressN: "",
      postFee: "",
      form: {
        openId: localStorage.getItem("openId"),
        addressId: null,
        remarks: "",
        goodList: []
      },
      goodsMsg: {}
    };
  },
  computed: {
    option() {
      return JSON.parse(this.$route.query.data);
    },
    count() {
      // get(){
      //   return this.$route.query.count
      // },
      // set(val){
      //   this.$route.query.count = val;
      // }
      return this.$route.query.count;
    },
    price() {
      return (this.$route.query.price/1).toFixed(2)/1;
    },
    list() {
      return this.$route.query.list;
    }
  },
  methods: {
    //轮询支付状态
    redirect(val){
      var count = 0;
      var timer = setInterval(()=>{
        this.$fetch.post('fruits/app/cart/getOrderState',{openId:localStorage.getItem('openId'),orderId:val}).then(res =>{
          count++;
          if(res.obj){
           this.$vux.toast.text('充值成功')
            this.$router.push('/home');
            clearInterval(timer)
          }
          if(count>3){
            clearInterval(timer)
             this.$router.push({
              name: "order",
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
        })
      },1000)
    },
    //获取购物车数量
    getCartNum(val) {
      this.$fetch
        .post("fruits/app/cart/getCartNum", {
          openId: localStorage.getItem("openId")
        })
        .then(res => {
          if (res.msg == "success") {
            localStorage.setItem("catnum", res.obj);
            // this.$router.go(0)
            this.redirect(val)
          } else {
            alert(res.msg);
          }
        });
    },
    //点击确认支付
    paysure() {
      this.form.addressId = this.goodsMsg.id;
      this.form.goodList = [...this.option.goodList];
      this.form.type = this.option.type;
      if(this.form.type == 0){
        this.form.goodList =[];
        this.form.cartsIds = this.option.cartsIds;
      }
      console.log(this.form, "oooo",this.form);
      this.$fetch.post("fruits/app/cart/saveShopOrder", this.form).then(res => {
        if (res.msg == "success") {
          this.getCartNum(res.attributes.orderId)
          // this.$vux.toast.text("支付成功");
          var a =JSON.parse(res.obj)
          // console.log(weiXinPay,7979)
          weiXinPay(a,function(val){
            // console.log(val,'kjkljlk')
          },function(err){
            alert(JSON.stringify(err),132);
            console.log(err);
          })
          // setTimeout(() => {
          //   this.$router.push("/order/:obj", {
          //     type: "profession",
          //     data: {
          //       id: "参数"
          //     }
          //   });
          // }, 2000);
        }
      });
    },
    //去地址管理
    goAddress() {
      console.log(this.count, 6756);
      var obj = JSON.stringify(this.option);
      this.$router.push(
        "/addressment?data=" +
          obj +
          "&count=" +
          this.count +
          "&price=" +
          this.price
      );
    },
    // 去商品页
    goList() {
      // console.log(this.list)
      var obj = JSON.stringify(this.option);
      console.log(this.option)
      this.$router.push("/goodslist?list=" + obj);
    },
    //  goList(){
    //       this.$router.push('/goodslist')
    //   },
    // 获取地址
    getSelectAddress(item) {
      // 会员订单保存
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: item
      };
      this.$fetch.post(url.selectAddress, _obj).then(data => {
        if (data.code == 0) {
          this.goodsMsg = data.obj;
          console.log(this.goodsMsg, "jjj");
        } else {
          alert(data.msg);
        }
      });

      // console.log(this.selectAddressN,999)
    }
  },
  mounted() {
    settitle('确认订单');
    console.log(this.option,'ppp')
    //  this.option.goodList.forEach((e,i) => {
    //       if(i<=4){
    //         this.form.goodList.push(e)
    //       }
    //   });
    //  获取邮费
    this.$fetch
      .post("fruits/app/cart/getDefaultAddr", this.option)
      .then(res => {
        console.log(res, 666);
        this.goodsMsg = res.obj;
        this.postFee = res.attributes.postage;
        if (this.$route.params.obj) {
          this.routeParams = JSON.parse(this.$route.params.obj);
          this.getSelectAddress(this.routeParams.data.item); //获取地址
        }
      });
  },
  beforeDestroy() {
    // clr
  },
  created() {
    console.log(this.$route, 99);
  }
};
// mounted() {},

// };
</script>
.<style lang="less">
#paysure {
  width: 100%;
  height: 100%;
  // background: #F6F6F6;
  .icon_right {
    width: 0.16rem;
    height: 0.28rem;
  }
  .address_box {
    padding: 0 0.3rem;
    background: #fff;
  }
  .title_address {
    padding: 0.28rem 0 0.14rem 0;
  }
  .person_msg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial;
    font-weight: 400;
    // height: 2rem;
    line-height: 0.31rem;
    color: rgba(102, 102, 102, 1);
    .half_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 46%;
    }
    .icon_size {
      width: 0.34rem;
      height: 0.34rem;
    }
  }
  .address_msg {
    display: flex;
    justify-content: space-between;
    padding: 0 0.52rem 0 0.46rem;
    margin-top: 0.35rem;
    font-size: 0.28rem;
    font-family: Arial;
    font-weight: 400;
    line-height: 0.38rem;
    color: rgba(51, 51, 51, 1);
    overflow: hidden;
    .defalut_toic {
      padding: 0.01rem 0.08rem;
      font-size: 0.2rem;
      font-family: PingFang SC;
      color: #fff;
      line-height: 0.24rem;
      border-radius: 1rem;
      background: #fa8665;
    }
    .topic_box {
      height: 0.8rem;
      width: 0.8rem;
      margin: 0 0.11rem;
      white-space: nowrap;
      float: left;
      // display: flex;
      // flex-wrap: nowrap;
    }

  }
  .address_msg>span{
    width: 5rem;
    word-break: break-all;
  }
  .form_box {
    background: #fff;
    // height: calc(100% - 9.5rem);
    .goods_list {
      display: flex;
      justify-content: space-between;
      padding: 0.36rem 0.3rem;
      .items {
        margin-right: 0.27rem;
      }
      img {
        width: 1.1rem;
        height: 1.1rem;
      }
      .item_msg {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 0.25rem;
        .item_btm {
          font-size: 0.38rem;
          line-height: 0.53rem;
          .item_num {
            font-size: 0.24rem;
            line-height: 0.56rem;
          }
        }
      }
    }
    .item_form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.26rem 0;
      margin: 0 0.3rem;
      border-bottom: 1px solid #e9e9e9;
      font-size: 0.3rem;
      color: #1a202c;
      line-height: 0.56rem;
      // .check{
      //     position: relative;
      //     // display:inline-flex;
      //     height: 1.4rem;
      //     width: 1.4rem;
      //     align-items: center;
      //     justify-content: center;
      //     border:1px solid #4A7B67;
      //     border-radius: 50%;
      // }
      // .checked{
      //     position: absolute;
      //     left:0;

      //     top: 0;
      //     bottom: 0;
      //     // display: inline-block;
      //     height: 1rem;
      //     width: 1rem;
      //     border-radius: 50%;
      //     background: #4A7B67;
      //     // transform: translateX(-50%)  translateY(-50%);
      // }
    }
    .message_area {
      padding: 0.26rem 0.3rem;
      font-size: 0.3rem;
      line-height: 0.56rem;
      color: rgba(26, 32, 44, 1);
      border-bottom: 1px solid #e9e9e9;
      .vux-x-textarea.weui-cell {
        border: 1px solid #e2e2e2;
        // height: 6.05rem;
      }
      .buyflag {
        padding: 0.7rem 0 2.3rem 0;
        font-size: 1.2rem;
        line-height: 1.65rem;
        color: rgba(74, 123, 103, 1);
      }
    }
  }
  .pay_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 1.09rem;
    width: 100%;
    position: fixed;
    bottom: .9rem;
    background: #fff;
    // padding: 1rem 1.5rem;
    .buybutton {
      width: 2.24rem;
      height: 100%;
      color: #fff;
      background: #4a7b67;
      font-size: 0.26rem;
      text-align: center;
      float: right;
      line-height: 1.09rem;
    }
    .price_size {
      font-size: 0.42rem;
      line-height: 0.59rem;
    }
  }
}
</style>
