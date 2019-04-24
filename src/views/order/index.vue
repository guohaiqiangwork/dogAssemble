<template>
  <div v-if="orderList.length">
    <!-- 订单列表 -->
    <div
      class="div_display_flex backgroun_color_fff"
      v-for="(item,index) in orderList" :key="index"
      style="margin-bottom :3%"
    >
      <div class="order_heder_img_w">
        <div >
          <img class="order_header_border" :src="item.headimgurl">
        </div>
      </div>

      <div class="order_headr_font_w">
        <div class="order_font_j font_color_00">
          <span>共{{item.count}}件</span>
          <span>总金额¥{{item.price}}</span>
        </div>
        <div :class="['div_display_flex','order_font_js','font_color_66',item.orderGoodsList.length >1 ? item.orderFalge ? 'down_arraw' :'goods_content' : '']"  @click="openListDetails(index)" >
          <div class="goods_name">{{item.orderGoodsList[0].goods.name}}</div>
          <!-- <div v-if="!moreLFalg" @click="openListDetails(1)" style="    margin-left: 52%;">></div>
          <div v-if="moreLFalg" @click="openListDetails" style="    margin-left: 52%;">>></div> -->
        </div>
        <div class="number_font_Order">*{{item.orderGoodsList[0].specificationValueCount}}</div>
        <div style="margin-bottom: 13px;">
          <div class="order_bt_btn">
            <span>{{item.orderGoodsList[0].specificationValue}}</span>
          </div>
        </div>

        <!-- 隐藏内容 -->
        <template v-if="item.orderFalge">
          <div  v-for="(ite,ind) in item.orderGoodsList" :key="ind">
            <template v-if="ind>0">
              
           
            <div class="order_font_js font_color_66">
              <div>{{ite.goods.name}}</div>
              <div style="margin-right: 16%;float:right">*{{ite.specificationValueCount}}</div>
            </div>
            <div style="margin-bottom: 30px;">
              <div class="order_bt_btn">
                <span>{{ite.specificationValue}}</span>
              </div>
            </div>
            </template>
          </div>
        </template>
      </div>
    </div>
    
  </div>
  <div class="nodata" v-else>

      <img  class="mt-50"  src="../../assets/images/mynull@2x.png"/>
     <p> 主人~快去参与拼团吧~</p>
    </div>
</template>
<script>
// import url from "../../bin/url";

export default {
  components: {},
  name: "order",
  data() {
    return {
      orderFalge: false,
      moreLFalg: false,
      goodsInfo:{},
      orderList: [
        // {
        //   money: "78977",
        //   orderFalge:false
        // },

        // {
        //   money: "78977",
        //   orderFalge:false
        // },
        // {
        //   money: "78977",
        //   orderFalge:false
        // },
        // {
        //   money: "78977",
        //   orderFalge:false
        // }
      ]
    };
  },
  computed: {
     token() {
      return JSON.parse(localStorage.getItem("user"));
    }
  },
  methods: {
    openListDetails(index) {
      this.orderList[index].orderFalge = !this.orderList[index].orderFalge;


      // if (falge == 1) {
      //   this.orderFalge = true;
      //   this.moreLFalg = true;
      // } else {
      //   this.orderFalge = false;
      //   this.moreLFalg = false;
      // }
    },
    //获取参团头像
    getAvatar(){
      this.$fetch.post("/weChat/personal/getPersonalInfo/"+this.token.activityId).then(
        res=>{
          console.log(res,'hjkkhkh,,avatarList')
          var reg =/,/g;
         
          
          if(res.obj.records[0].orderList){
            var arr = [...res.obj.records[0].orderList];
            res.obj.records[0].orderList.forEach((e,i) =>{
              e.orderFalge =false;
              e.orderGoodsList.forEach(item => {
                item.specificationValue=item.specificationValue.replace(reg,' | ' );
              })
              
              // this.goodsInfo ={
              //   headimgurl:e.employee.headimgurl,
              //   orderList:[...e.orderGoodsList]
              // }
              // console.log(e.employeeId == e.employeeId)
              // if(){}
              // arr.filter()
             
              // if
              this.orderList.push(e);
          })
          // this.orderList = [...res.obj.records[0].orderList];
          }
        }
      )
    },
  },
  created() {
    settitle("拼团");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },

  mounted() {
    this.getAvatar();
    console.log(11111);
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.goods_name{
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods_content::after{
  content: "";
  width: 1.3rem;
  height: 1.3rem;
  background: url('../../assets/images/dingdan_weizhankai@2x.png') no-repeat;
  background-size: 100%;
  margin-left: 40%;
}
.down_arraw:after{
  content: "";
  width: 1.3rem;
  height: 1.3rem;
  background: url('../../assets/images/dingdan_zhankai@2x.png') no-repeat;
  background-size: 100%;
  margin-left: 40%;
}
.order_header_border {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid;
  overflow: hidden;
}
.order_font_j {
  font-size: 17px;
}
.order_font_js {
  font-size: 15px;
  margin-top: 6px;
}
.order_bt_btn {
      font-size: 11px;
    color: #333333;
    line-height: 17px !important;
    /* padding: 1%; */
    background-color: #ffe001;

    margin-top: 0.4rem;
    width: 85px;
    height: 17px;
    border-radius: 9px;
    text-align: center;
    /* line-height: 17px; */
}
.number_font_Order {
  font-size: 14px;
  text-align: right;
  margin-right: 16%;
  margin-top: -0.2rem;
  color: #666666;
  width: 50px;
  float: right;
}
.order_heder_img_w {
  width: 20%;
  margin-top: 6%;
  margin-left: 3%;
}
.order_headr_font_w {
  width: 78%;
  margin-top: 5%;
  margin-left: -2%;
}
</style>