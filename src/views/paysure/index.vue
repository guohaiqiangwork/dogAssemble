<template>
  <div id="paysure">
    <div class="address_box" v-if="selectAddressN">
      <p class="title_address">收货地址</p>
      <div class="address_content">
        <div class="person_msg">
          <div class="half_box">
            <img class="icon_size" src="../../assets/images/position.png" alt>
            <span>{{selectAddressN.receiver}}</span>
            <span>{{selectAddressN.phone}}</span>
          </div>
          <!-- <img class="icon_right" src="../../assets/images/right.png" alt="" > -->
          <x-icon @click="goAddress" type="ios-arrow-right" size="30"></x-icon>
        </div>
        <div class="address_msg">
          <div class="topic_box" v-if="selectAddressN.isDefault == 1">
            <span class="defalut_toic">默认</span>
          </div>
          <span>{{selectAddressN.receiveAddress}}</span>
        </div>
      </div>
    </div>
    <div v-if="!selectAddressN">
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

        <div class="flex-between">
          <div class="flex-between flex-clo align-center items">
            <img src="../../assets/images/WechatIMG102.png" alt>
            <p>¥13.9</p>
          </div>
          <div class="flex-between flex-clo align-center items">
            <img src="../../assets/images/WechatIMG102.png" alt>
            <p>¥13.9</p>
          </div>
          <div class="flex-between flex-clo align-center items">
            <img src="../../assets/images/WechatIMG102.png" alt>
            <p>¥13.9</p>
          </div>

          <div class="flex-between flex-clo align-center items">
            <img src="../../assets/images/WechatIMG102.png" alt>
            <p>¥13.9</p>
          </div>
        </div>

        <div class="flex-start align-center" @click="goList">
          <span>共2件</span>
          <x-icon type="ios-arrow-right" size="30"></x-icon>
        </div>
      </div>
      <!-- 单行form -->
      <div class="item_form">
        <span>规格一</span>
        <span>规格单位</span>
      </div>
      <div class="item_form">
        <span>规格二</span>
        <span>规格单位</span>
      </div>
      <div class="item_form">
        <span>合计金额</span>
        <span>￥200</span>
      </div>

      <div class="item_form">
        <span>运费</span>
        <span>￥￥{{postFee}}</span>
      </div>
      <div class="message_area">
        <p>留言</p>
        <x-textarea :max="200" name="detail" placeholder="placeholder" :show-counter="true"></x-textarea>
        <!-- <p class="buyflag">支付代表同意《购买须知》</p> -->
      </div>
      <div class="pay_box">
        <div class>
          <span>实际支付</span>
          <span class="red price_size">￥ 400.00</span>
        </div>
        <div class="buybutton">确认支付</div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { XTextarea } from "vux";
export default {
  components: {
    XTextarea
  },
  data() {
    return {
      key: "value",
      selectAddressN: "",
      postFee:'',
      goodsMsg: {}
    };
  },
    computed:{
        option(){
          return JSON.parse(this.$route.query.data);
        }
    },
  methods: {
    goAddress() {
      this.$router.push("/addressment");
    },
  
    goList() {
      this.$router.push("/goodslist");
    },
      //  goList(){
      //       this.$router.push('/goodslist')
      //   },
    // 获取地址
    getSelectAddress(item) {
      // 会员订单保存
      let _obj = {
        openId: url.openId,
        id: item
      };
      this.$fetch.post(url.selectAddress, _obj).then(
        data => {
          if (data.code == 0) {
            this.selectAddressN = data.obj;
          }
        })
      }
    },
    mounted() {
        this.$fetch.post("fruits/app/cart/getDefaultAddr",this.option).then(res =>{
            console.log(this.$route);
            this.goodsMsg = res.obj;
            this.postFee = res.attributes.postage;
        })
    },
      created() {
    if (this.$route.params.obj) {
      this.routeParams = JSON.parse(this.$route.params.obj);
      this.getSelectAddress(this.routeParams.data.item); //获取地址
    }
  }

       
 
    
  }
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
    }
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
    padding: 0 0 0 0.3rem;
    height: 1.09rem;
    background: #fff;
    // padding: 1rem 1.5rem;
    .buybutton {
      width: 2.24rem;
      height: 100%;
      color: #fff;
      background: #4a7b67;
      font-size: 0.26rem;
      text-align: center;
      line-height: 1.09rem;
    }
    .price_size {
      font-size: 0.42rem;
      line-height: 0.59rem;
    }
  }
}
</style>
