<template>
<scroller  style="width:100%;height:100%" :lockX=true  ref="scrollerBottom"  use-pulldown use-pullup @on-pulldown-loading="refresh" @on-pullup-loading="loadMore" :pulldown-config="pulldownDefaultConfig" :pullup-config="pullupDefaultConfig">
  <!-- :pulldown-config="pulldownDefaultConfig" :pullup-config="pullupDefaultConfig" -->
  <!-- <load-more :tip="('正在加载')"></load-more> -->
  <div style="width:100%;height:100%;" v-if="orderList.length">
    <!-- dxssad -->
    <!--   -->
    <!-- 订单列表 -->
    <!-- <div style="height:100%;width:100%;background:#ff0;"></div> -->
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

      <img  class="picture" src="../../assets/images/mynull@2x.png"/>
     <p class="pt-1"> 主人~快去参与拼团吧~</p>
    </div>
  </scroller>
 
</template>
<script>
import {Scroller,LoadMore} from "vux";
 const pulldownDefaultConfig = {
    content: '下拉刷新',
    height: 40,
    autoRefresh: false,
    downContent: '',
    upContent: '释放后刷新',
    loadingContent: '正在刷新...',
    // clsPrefix: 'xs-plugin-pulldown-'
  }
  const pullupDefaultConfig = {
        content: '上拉加载更多',
        pullUpHeight:60,
        height: 40,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '',
        loadingContent: '加载中...',
        // clsPrefix: 'xs-plugin-pullup-'
    }
export default {
  components: {
    Scroller,
    LoadMore
  },
  name: "order",
  data() {
    return {
      pulldownDefaultConfig: pulldownDefaultConfig,
      pullupDefaultConfig: pullupDefaultConfig,
      page:1,
      show:false,
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
    refresh(){
      console.log(4646)
      this.page =1;
      this.orderList=[];
      // this.show =true;
      this.getAvatar();
      this.$refs.scrollerBottom.enablePullup()
        this.$refs.scrollerBottom.donePulldown()
      // this.$nextTick(() => {
      //   this.$refs.scrollerBottom.donePulldown()
      //   this.$refs.scrollerBottom.reset({top: 0})
      //             // this.$refs.scrollerBottom.reset()//{top: 0}
      //         })
      // this.$refs.scrollerBottom.enablePullup()
    },
    loadMore(){
console.log(45)
      this.page +=1;
      this.getAvatar();
      // this.list =1;
      // if (this.orderList.length >= 10) {
      //       this.$refs.scrollerBottom.disablePullup()
      //     }
        this.$refs.scrollerBottom.donePullup()
        this.$refs.scrollerBottom.donePulldown()
      // this.$refs.scrollerBottom.donePullup()
      //  this.$refs.scrollerBottom.enablePulldown()
    },
    pull(e){
      console.log(e);
      this.$nextTick(() => {
    // this.$refs.myScroller.donePulldown()
    this.$refs.scrollerBottom.reset({top: 0})
  })
    },
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
      console.log(this.page,'ggggggg')
      var _this = this;
      this.$fetch.post("/weChat/personal/getPersonalInfo/"+this.token.activityId+'?page.current='+this.page).then(
        res=>{
          // this.$nextTick(() => {
          // this.show =false;
         
        // })
        _this.$nextTick(() => {
        _this.$refs.scrollerBottom.reset()
      })
          console.log(res,'hjkkhkh,,avatarList')
          var reg =/,/g;
          if(res.obj.records.length){
             if(res.obj.records[0].orderList){
            var arr = [...res.obj.records[0].orderList];
            res.obj.records[0].orderList.forEach((e,i) =>{
              e.orderFalge =false;
              // if(e.orderGoodsList.length){
                  e.orderGoodsList.forEach(item => {
                  console.log(item,'uuuuuuuuuu');
                  if(item.specificationValue){
                    item.specificationValue=item.specificationValue.replace(reg,' | ' );
                  }
                  
                })
              // }
              this.$refs.scrollerBottom.reset({top: 0})
              
              // this.goodsInfo ={
              //   headimgurl:e.employee.headimgurl,
              //   orderList:[...e.orderGoodsList]
              // }
              // console.log(e.employeeId == e.employeeId)
              // if(){}
              // arr.filter()
             
              // if
              this.orderList.push(e);
              console.log(this.orderList)
          })
          // this.orderList = [...res.obj.records[0].orderList];
          }
          }else{
            if(this.page>1){
              this.page-=1;
            }else{
              this.page =1;
            }
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
<style>
.xs-container{
  height: 100%;
}
</style>

<style scoped>
.picture{
  width: 5rem;
  height: 7rem;
}
.pt-1{
  padding-top: 1rem;
}
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
    /* line-height: 17px !important; */
    /* padding: 1%; */
    background-color: #ffe001;

    margin-top: 0.4rem;
    width: 85px;
    height: 17px;
    border-radius: 9px;
    text-align: center;
    line-height: 18px;
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
  width: 73%;
  margin-top: 5%;
  margin-left: 3%;
  /* margin-left: -2%; */
}
</style>