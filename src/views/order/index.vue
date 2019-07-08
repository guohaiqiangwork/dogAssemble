<template>
  <div style="background-color:#F3F5F8;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;" id="reflow">
    <div class="div_display_flex backgroun_color_fff personal_title">
      <div v-for="(item,index) in  tabList" @click="tabSwitch(item.id)" :key="index">
        <div :style="{color:(switchFlage != item.id ? '' :'#000000')}">{{item.name}}</div>
        <div class="switchBorder" v-if="switchFlage == item.id"></div>
      </div>
    </div>
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="selPullUp"
      @pulldown="pulldown"
    >
      <div slot="list" class="nut-vert-list-panel" style="width:100%;height:100%;overflow-x:hidden;background: #f3f4f5;">
        <!-- 全部订单 -->
        <div v-if="switchFlage == '0'" style="width:100%;height: auto;margin-bottom: 100px;">
          <div v-if="orderList.length != 0">
            <div v-for="(item,index) in orderList" :key="index">
              <div class="order_block" @click="goToOrderDetails(item.id)">
                <div class="div_display_flex">
                  <div
                    class="font_size_13"
                    style="width:75% ;margin-left: 19px;margin-top: 14px;"
                  >订单编号：{{item.orderNo}}</div>
                  <div class="font_size_14" style="margin-top: 14px;">
                    <span v-if="item.state == 1">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待付款
                    </span>
                    <span v-if="item.state == 2">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待发货
                    </span>
                    <span v-if="item.state == 3">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待收货
                    </span>
                    <span v-if="item.state == 4">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>已收货
                    </span>
                    <span v-if="item.state == 6">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>交易关闭
                    </span>
                  </div>
                </div>
                <div
                  class="div_display_flex margin_top_div3"
                  v-for="(items,index) in item.goodsList"
                  :key="index"
                >
                  <div class="div_width_30 margin_right_div3">
                    <div class="order_width_height">
                      <img :src="items.picId" width="100%"  alt>
                    </div>
                  </div>
                  <div style="width:63%">
                    <div class="font_color_00 font_size_14">{{items.name}}</div>
                    <div class="div_display_flex margin_top_div3">
                      <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
                      <div class="text_right">x{{items.count}}</div>
                      <!-- order_price_bt -->
                    </div>
                    <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
                      <!-- <span>{{itemsg.specName}}：</span> -->
                      <span>{{itemsg.specValue}}</span>
                    </div>
                  </div>
                </div>
                <div class="order_border margin_top_div5"></div>
                 <div class="order_bt_p margin_top_div3" @click="goToPay(items.id)" v-if="item.state == 1" >
                  <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
                </div>
                <div class="order_bt_p margin_top_div3" @click="sureReceiving(items)" v-if="item.state == 3" >
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderList.length == 0" style="height:100%;overflow-x:hidden;">
            <div class="text_center" style="margin-top:110px; height:100%;" >
              <img src="../../assets/images/1581@2x.png" width="55%"  alt>
            </div>
            <div class="text_center font_size_15 font_color_99" style="margin-top: 20px;">暂无订单</div>
          </div>
        </div>
        <!-- 待付款 -->
        <div v-if="switchFlage == '1'" style="width: 100%;height: auto;margin-bottom: 100px;">
          <div v-if="orderList.length != 0">
            <div v-for="(item,index) in orderList" :key="index">
              <div class="order_block" @click="goToOrderDetails(item.id)">
                <div class="div_display_flex">
                  <div
                    class="font_size_13"
                    style="width:75% ;margin-left: 19px;margin-top: 14px;"
                  >订单编号：{{item.orderNo}}</div>
                  <div class="font_size_14" style="margin-top: 14px;">
                    <span v-if="item.state == 1">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待付款
                    </span>
                    <span v-if="item.state == 2">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待发货
                    </span>
                    <span v-if="item.state == 3">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待收货
                    </span>
                    <span v-if="item.state == 4">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>已收货
                    </span>
                    <span v-if="item.state == 6">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>交易关闭
                    </span>
                  </div>
                </div>
                <div
                  class="div_display_flex margin_top_div3"
                  v-for="(items,index) in item.goodsList"
                  :key="index"
                >
                  <div class="div_width_30 margin_right_div3">
                    <div class="order_width_height">
                      <img :src="items.picId" width="100%"  alt>
                    </div>
                  </div>
                  <div style="width:63%">
                    <div class="font_color_00 font_size_14">{{items.name}}</div>
                    <div class="div_display_flex margin_top_div3">
                      <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
                      <div class="text_right">x{{items.count}}</div>
                      <!-- order_price_bt -->
                    </div>
                    <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
                      <!-- <span>{{itemsg.specName}}：</span> -->
                      <span>{{itemsg.specValue}}</span>
                    </div>
                  </div>
                </div>
                <div class="order_border margin_top_div5"></div>
                 <div class="order_bt_p margin_top_div3" @click="goToPay(items.id)" v-if="item.state == 1" >
                  <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
                </div>
                <div class="order_bt_p margin_top_div3" @click="sureReceiving(items)" v-if="item.state == 3" >
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderList.length == 0" style="height:100%;overflow-x:hidden;">
            <div class="text_center" style="margin-top:110px;height:100%;">
              <img src="../../assets/images/1581@2x.png" width="55%" alt>
            </div>
            <div class="text_center font_size_15 font_color_99" style="margin-top: 20px;">暂无订单</div>
          </div>
        </div>
        <!-- 待收费 -->
        <div v-if="switchFlage == '2'" style="width: 100%;height: auto;margin-bottom: 100px;">
          <div v-if="orderList.length != 0">
            <div v-for="(item,index) in orderList" :key="index">
              <div class="order_block" @click="goToOrderDetails(item.id)">
                <div class="div_display_flex">
                  <div
                    class="font_size_13"
                    style="width:75% ;margin-left: 19px;margin-top: 14px;"
                  >订单编号：{{item.orderNo}}</div>
                  <div class="font_size_14" style="margin-top: 14px;">
                    <span v-if="item.state == 1">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待付款
                    </span>
                    <span v-if="item.state == 2">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待发货
                    </span>
                    <span v-if="item.state == 3">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待收货
                    </span>
                    <span v-if="item.state == 4">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>已收货
                    </span>
                    <span v-if="item.state == 6">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>交易关闭
                    </span>
                  </div>
                </div>
                <div
                  class="div_display_flex margin_top_div3"
                  v-for="(items,index) in item.goodsList"
                  :key="index"
                >
                  <div class="div_width_30 margin_right_div3">
                    <div class="order_width_height">
                      <img :src="items.picId" width="100%"  alt>
                    </div>
                  </div>
                  <div style="width:63%">
                    <div class="font_color_00 font_size_14">{{items.name}}</div>
                    <div class="div_display_flex margin_top_div3">
                      <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
                      <div class="text_right">x{{items.count}}</div>
                      <!-- order_price_bt -->
                    </div>
                    <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
                      <span>{{itemsg.specName}}：</span>
                      <span>{{itemsg.specValue}}</span>
                    </div>
                  </div>
                </div>
                <div class="order_border margin_top_div5"></div>
                <!-- <div class="order_bt_p margin_top_div3" @click="sureReceiving(item)">
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div> -->
                 <div class="order_bt_p margin_top_div3" @click="goToPay(items.id)" v-if="item.state == 1" >
                  <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
                </div>
                <div class="order_bt_p margin_top_div3" @click="sureReceiving(items)" v-if="item.state == 3" >
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderList.length == 0" style="height:100%;overflow-x:hidden;">
            <div class="text_center" style="margin-top:110px;;height:100%">
              <img src="../../assets/images/1581@2x.png" width="55%" alt>
            </div>
            <div class="text_center font_size_15 font_color_99" style="margin-top: 20px;">暂无订单</div>
          </div>
        </div>
        <!-- 待收货 -->
        <div v-if="switchFlage == '3'" style="width:100%;height:auto;margin-bottom: 100px;">
          <div v-if="orderList.length != 0">
            <div v-for="(item,index) in orderList" :key="index">
              <div class="order_block" @click="goToOrderDetails(item.id)">
                <div class="div_display_flex">
                  <div
                    class="font_size_13"
                    style="width:75% ;margin-left: 19px;margin-top: 14px;"
                  >订单编号：{{item.orderNo}}</div>
                  <div class="font_size_14" style="margin-top: 14px;">
                    <span v-if="item.state == 1">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待付款
                    </span>
                    <span v-if="item.state == 2">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待发货
                    </span>
                    <span v-if="item.state == 3">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待收货
                    </span>
                    <span v-if="item.state == 4">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>已收货
                    </span>
                    <span v-if="item.state == 6">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>交易关闭
                    </span>
                  </div>
                </div>
                <div
                  class="div_display_flex margin_top_div3"
                  v-for="(items,index) in item.goodsList"
                  :key="index"
                >
                  <div class="div_width_30 margin_right_div3">
                    <div class="order_width_height">
                      <img :src="items.picId" width="100%" alt>
                    </div>
                  </div>
                  <div style="width:63%">
                    <div class="font_color_00 font_size_14">{{items.name}}</div>
                    <div class="div_display_flex margin_top_div3">
                      <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
                      <div class="text_right">x{{items.count}}</div>
                      <!-- order_price_bt -->
                    </div>
                    <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
                      <!-- <span>{{itemsg.specName}}：</span> -->
                      <span>{{itemsg.specValue}}</span>
                    </div>
                  </div>
                </div>
                <div class="order_border margin_top_div5"></div>
                 <div class="order_bt_p margin_top_div3" @click="goToPay(items.id)" v-if="item.state == 1" >
                  <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
                </div>
                <div class="order_bt_p margin_top_div3" @click="sureReceiving(items)" v-if="item.state == 3" >
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderList.length == 0" style = "height:100%;overflow-x:hidden;">
            <div class="text_center" style="margin-top:110px;height:100%">
              <img src="../../assets/images/1581@2x.png" width="55%" alt>
            </div>
            <div class="text_center font_size_15 font_color_99" style="margin-top: 20px;">暂无订单</div>
          </div>
        </div>
        <!-- 已完成 -->
        <div v-if="switchFlage == '4'" style="width: 100%;height: auto;margin-bottom: 100px;">
          <div v-if="orderList.length != 0">
            <div v-for="(item,index) in orderList" :key="index">
              <div class="order_block" @click="goToOrderDetails(item.id)">
                <div class="div_display_flex">
                  <div
                    class="font_size_13"
                    style="width:75% ;margin-left: 19px;margin-top: 14px;"
                  >订单编号：{{item.orderNo}}</div>
                  <div class="font_size_14" style="margin-top: 14px;">
                    <span v-if="item.state == 1">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待付款
                    </span>
                    <span v-if="item.state == 2">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待发货
                    </span>
                    <span v-if="item.state == 3">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>待收货
                    </span>
                    <span v-if="item.state == 4">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>已收货
                    </span>
                    <span v-if="item.state == 6">
                      <span class="order_red"><img style="vertical-align:middle;width:20px;height:20px;float:left;" src="../../assets/images/icon_dot.png"></span>交易关闭
                    </span>
                  </div>
                </div>
                <div
                  class="div_display_flex margin_top_div3"
                  v-for="(items,index) in item.goodsList"
                  :key="index"
                >
                  <div class="div_width_30 margin_right_div3">
                    <div class="order_width_height">
                      <img :src="items.picId" width="100%" alt>
                    </div>
                  </div>
                  <div style="width:63%">
                    <div class="font_color_00 font_size_14">{{items.name}}</div>
                    <div class="div_display_flex margin_top_div3">
                      <div class="order_price_font" style="width:80%">¥{{items.price}}</div>
                      <div class="text_right">x{{items.count}}</div>
                      <!-- order_price_bt -->
                    </div>
                    <div v-for="(itemsg,index) in items.goodsSpecs" :key="index" class="GG_list">
                      <!-- <span>{{itemsg.specName}}：</span> -->
                      <span>{{itemsg.specValue}}</span>
                    </div>
                  </div>
                </div>
                <div class="order_border margin_top_div5"></div>
                  <div class="order_bt_p margin_top_div3" @click="goToPay(items.id)" v-if="item.state == 1" >
                  <div class="oreder_bt_pay backgroun_color_4A">去支付</div>
                </div>
                <div class="order_bt_p margin_top_div3" @click="sureReceiving(items)" v-if="item.state == 3" >
                  <div class="oreder_bt_pay backgroun_color_4A">确认收货</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderList.length == 0" style="height:100%;overflow-x:hidden">
            <div class="text_center " style="height:100%;margin-top:110px">
              <img src="../../assets/images/1581@2x.png" width="55%" alt>
              <div class="text_center font_size_15 font_color_99" style="margin-top: 20px;">暂无订单</div>
            </div>
            
          </div>
        </div>
      </div>
    </nut-scroller>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "myWallet",
  data() {
    return {
      tabList: [
        {
          name: "全部",
          id: "0"
        },
        {
          name: "待付款",
          id: "1"
        },
        {
          name: "待发货",
          id: "2"
        },
        {
          name: "待收货",
          id: "3"
        },
        {
          name: "已完成",
          id: "4"
        }
      ],
      switchFlage: "0",
      orderList: [],
      page: {
        current: "1",
        size: "3"
      },
      isUnMore1: false,
      isLoading1: false
    };
  },
  methods: {
    handleScroll(){},
    // tab切换
    tabSwitch(id) {
      this.switchFlage = id;
      this.orderList = [];
      this.getOrderList(); //切换时获取数据
    },
    // 去支付

    goToPay(id) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: id
      };
      this.$fetch.post(url.payOrder, _obj).then(data => {
        if (data.code == 0) {
          var obj = eval("(" + data.obj + ")");
          console.log(obj);
          wexinPay(obj);
        } else {
          alert(data.msg);
        }
      });
    },
    goToOrderDetails(item) {
      this.$router.push({
        name: "orderDetails",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: item
            }
          })
        },
        query:{
          switch:this.switchFlage
        }
      });
    },
    // 获取商城订单
    getOrderList() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        state: this.switchFlage,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getOrderList, _obj).then(
        data => {
          if (data.code == 0) {
            if(data.obj.length){
               this.$nextTick(() => {
                  data.obj.forEach(item => {
              item.goodsList.forEach(items => {
                items.picId = url.imgUrl + items.picId;
              });
              this.orderList.push(item);
            });
               })
               
            }else{
              this.isUnMore1 = true;
            }
          
            // if(this.page.current > 1&&data.obj.length){
            //   this.orderList.push(data.obj)
            // }
//             else{
//  this.orderList = data.obj;
//             }
           
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },

    // 确认收货
    sureReceiving(item) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: item.id
      };
      this.$fetch.post(url.sureReceiving, _obj).then(
        data => {
          if (data.code == 0) {
            console.log(data);
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 上拉加载
    selPullUp() {
      this.page.current++;
      // var a = document.getElementById('#reflow').offsetWidth;
       this.$nextTick(() => {
        this.getOrderList();
      });
    },
    // 下拉刷新
    pulldown() {
      this.isUnMore1 = false;
      this.page.current = 1;
      this.orderList = [];
      this.getOrderList();
    }
  },

  created() {
    settitle("我的订单");
    // this.routeParams = JSON.parse(this.$route.params.obj);
  },

  mounted() {
     window.addEventListener("scroll", this.handleScroll);
    console.log("我的订单");
    this.getOrderList(); //获取商城订单
  }
};
</script>
<style>
.nut-vert-list{
  height: 100% !important;
}
.nut-scroller{
  height: calc(100% - 48px);
  overflow-x: hidden;
}
</style>

<style scoped>
.personal_title {
  height: 48px;
  /* width: 100%; */
  font-size: 14px;
  line-height: 3;
  display: flex;
  color: #908c8c;
  justify-content: space-around;
  /* position: fixed;
  z-index: 10000000000000000; */
}
.switchBorder {
  border: 1px solid #4a7b67;
  height: 5px;
  width: 100%;
  margin-top: 0%;
  background-color: #4a7b67;
  border-radius: 5px;
  box-sizing: border-box;
}
.order_block {
  width: 95%;
  margin-left: 2%;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 3%;
}
.order_width_height {
  width: 90px;
  overflow: hidden;
  height: 90px;
  /* border: 1px dashed #707070; */
  margin-left: 18%;
}
.order_price_bt {
  background-color: #f5f5f5;
  color: #102023;
  font-size: 13px;
  padding: 0 5%;
  border-radius: 5px;
  text-align: center;
  width: 20%;
  margin-left: 3%;
  line-height: 2;
}
.order_price_font {
  color: #ff3636;
  font-size: 19px;
}
.order_red {
  color: #ff3636;
}
.order_border {
  border-top: 1px solid #f4f4f4;
}
.oreder_bt_pay {
  width: 24%;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  height: 26px;
  font-size: 12px;
  line-height: 2.1;
  margin-left: 70%;
}
.order_bt_p {
  padding-bottom: 3%;
}
.GG_list {
  /* width: 35%; */
  float: left;
  margin-top: 2%;
  /* margin-left: 2%; */
  font-size: 13px;
  color: #102023;
}
</style>