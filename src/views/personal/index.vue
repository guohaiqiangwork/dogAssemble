<template>
  <div style="width:100%;height:100%;">
    <div :class="['backgroun_color_fff',orderList.length ? '':'bg_height']">
      <!-- tab -->
      <div class="div_display_flex backgroun_color_fe01 personal_title">
        <div
          class="personal_tab_width"
          v-for="(item,index) in  tabList"
          @click="tabSwitch(item.id)"
          :key="index"
        >
          <div>{{item.name}}</div>
          <div class="switchBorder" v-if="switchFlage == item.id"></div>
        </div>
      </div>
      <!-- 拼团中 -->
      <div v-if=" orderList.length">
        <!-- 产品列 -->
        <div>
          <div v-for="(ele,ind) in orderList" :key="ind">
            <div class="div_display_flex personal_time_div flex_between">
              <div>{{ele.time}}</div>
              <div class="personal_time_div_font">{{ele.stateTitle}}</div>
            </div>
          <div v-for="(item,index) in ele.orderGoodsList" :key="index" class="div_display_flex">
            <!-- 产品图片 -->
            <div class="personal_list_div">
              <div class="personal_list_div_img">
                <img :src="item.goods.imgList" style="width: 100%;">
              </div>
            </div>
            <!-- 产品详情 -->
            <div class="margin_top_div5 font_color_00 font_size_14" style="width:80%">
              <div class="div_display_flex">
                <div style=" width: 80%;">{{item.goods.name}}</div>
                <div>¥{{item.goods.price}}</div>
              </div>
              <!-- 胶囊 -->
              <div class="div_display_flex margin_top_div5">
                <div style="width:80%">
                  <div class="personal_bt_b_w">
                    <span>{{item.specificationValue.replace(/,/g,' | ')}}</span>
                    
                  </div>
                </div>
                <div class="num_color">*{{item.count}}</div>
              </div>
              <!-- 边线 -->
              <div class="personal_border_bottom_1"></div>
            </div>
          </div>
          
        
        <!-- 总加 -->
        <div class="margin_top_div5">
          <div class="personal_z_j font_size_15 font_colo_33">共{{ele.count}}件商品 合计:￥{{ele.price}}({{ele.postage}})</div>
          <div class="div_display_flex" style="margin-right: 4%;margin-top: 5%;padding-bottom: 3%;justify-content:flex-end;">
            <div class="personal_c_x_z" style="margin-right: 15px;"  @click="outPay('放弃当前订单？',ele.id,ele.state)" v-if="ele.state == 1">放弃支付</div>
            <div class="personal_c_x_z" style="margin-right: 15px;"  @click="outPay('删除当前订单？',ele.id,ele.state)" v-if="ele.state == 7 || ele.state ==4 || ele.state ==5">删除订单</div>
            <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:1px solid #ffe001" v-if="ele.state == 1">重新支付</div>
            <div class="personal_c_x_z backgroun_color_fe01" style="color:#333;border:1px solid #ffe001" @click="CheckGoods(ele.stateTitle,ele.id)"  >查看物流</div>
            <!-- v-if="ele.state == 3 || ele.state == 4 ||ele.state ==6" -->
          </div>
        </div>
        </div>
        </div>
      </div>
      <!-- 已完成 -->
      
      <!-- 全部 -->
      
       <div class="nodata" v-else>

      <img  class="picture"  src="../../assets/images/mynull@2x.png" />
     <p> 主人~快去参与拼团吧~</p>
    </div>
      <!-- 弹出层 -->
      <div class="mask_box" id="maskBox" v-show="showDialogStyle" @click="clickModel">
        <div class="mask_content" >
          <div class="close_icon" @click="showDialogStyle =false">X</div>
          <div class="goods_head">
            <div class="goods_avatar"></div>
            <div class="goods_detail">
              <span class="order_state">已完成</span>
              <span class="post_name">品骏快递：4546448558888</span>
              <span class="post_tel">客服电话：400-978-9888</span>
            </div>
          </div>
          <div class="goods_msg">
            <p class="msg_title">物流跟踪</p>
            <div class="msg_timeline">
              <timeline>
			<timeline-item v-for="(item,index) in msgList" :key="index">
				<h4 :class="[index === 0 ? 'recent' : '']">{{item.str}}</h4>
				<p :class="[index === 0 ? 'recent' : '']">{{item.operateTime}}</p>
			</timeline-item>
      <!-- <timeline-item>
				<h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
				<p>2016-04-16 10:23:00</p>
			</timeline-item> -->
			<!-- <timeline-item>
				<h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
				<p>2016-04-16 10:23:00</p>
			</timeline-item>
			<timeline-item>
				<h4> 商家正在通知快递公司揽件</h4>
				<p>2016-04-15 9:00:00</p>
			</timeline-item> -->
		</timeline>

            </div>
          </div>
        </div>
      </div>
      <!-- 放弃支付 -->

      <confirm
        v-model="outPayFalge"
        title
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide"
      >
        <div style="text-align:center;font-size:18px;">{{title}}</div>
      </confirm>
    </div>
   
  </div>
</template>
<script>
import {
  XHeader,
  XDialog,
  TransferDomDirective as TransferDom,
  Confirm,
  Timeline,
  TimelineItem
} from "vux";
export default {
  components: {
    XHeader,
    XDialog,
    Confirm,
    Timeline,
    TimelineItem
  },
  name: "personal",
  data() {
    return {
      orderId:null,
      tabList: [
        {
          name: "拼团中",
          id: "001"
        },
        {
          name: "已完成",
          id: "002"
        },
        {
          name: "全部",
          id: "003"
        }
      ],
      orderList:[],
      switchFlage: "001",
      showDialogStyle: false, //弹窗
      outPayFalge: false,
      payClass:'',
      title:'',
      msgList:[],
    };
  },
  created() {
    settitle("我的");
    this.routeParams = JSON.parse(this.$route.params.obj);
    console.log(this.routeParams);
  },
  computed:{
    token(){
      return JSON.parse(localStorage.getItem('user'));
    }
  },
  methods: {
    // tab 切换
    tabSwitch: function(id) {
      this.switchFlage = id;
      var obj ={
        '001':2,
        '002':4,
        '003': 1
      }
      this.getList(obj[id]);
      
    },
    timeChange(timestamp){
      var date = new Date(timestamp);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      return Y + M + D + h + m + s;
    },
    // 获取列表数据
    getList(state){
      var obj={
        '1':'待付款',
        '2':'待发货',
        '3':'待收货',
        '4':'已完成',
        '5':'已退款',
        '6':'待收货',
        '7':'放弃支付'
      }
      this.$fetch.post("weChat/order/getMyOrderList/"+this.token.activityId+'/'+ this.token.employeeId + '/'+state).then(res => {
        
       
        res.obj.records.forEach(ele => {
          console.log(ele.state,'ssssssssssss')
           ele.time =this.timeChange(ele.createTime);
           ele.stateTitle = obj[ele.state];
           ele.postage = ele.fee > 0 ? '含运费' + ele.fee : '包邮'
        });
        this.orderList = [...res.obj.records];
       
      })
    },
    // d点击遮罩
    clickModel(e){
      if(e.target.id =='maskBox'){
        this.showDialogStyle =false;
      }
    },
    // 打开弹窗
    open_model() {
      this.showDialogStyle = true;
    },
    // 放弃支付
    outPay(e,tit,state) {
      this.title =e;
      this.orderId = tit;
      state == 1?this.payClass = 'aba' : 'del';
      this.outPayFalge = true;
    },
    onHide() {
      
    },
    onShow() {
      
    },
    // 取消
    onCancel() {
      console.log("on cancel");
    },
    // 放弃支付确认
    onConfirm(msg) {
      console.log("on confirm");
      let obj = {
        'aba':'weChat/mineOrder/giveUpOrder/',
        'del':'weChat/mineOrder/invisibleOrder/'
      }
      this.$fetch.post(obj[this.payClass] + this.token.employeeId +'/'+this.orderId).then(res =>{
        console.log(res);
      })
      
    },
    GiveUpOrder(){
      
    },
    DeleteOrder(){},
    CheckGoods(title,id){
      let  obj ={
        '0':"揽件扫描",
        '1':"进站扫描",
        '3':"出站扫描",
        '9':"派送扫描",
        '11':"签收扫描",
        '13':"滞留扫描",
        '14':"转战扫描",
        '43': "货物丢失",
        '44': "归班审核",
        '34':"拒收扫描",
        '15':"异常扫描",
        '134':"揽收扫描",
        '127':"揽收成功",
        '131':"揽件失败",
        '132':"揽件滞留"
      };
      this.showDialogStyle =true;
      id = 'b145ca639ece4327b5fb565d5d5fc9ce';
      this.$fetch.post('weChat/mineOrder/getTraceByOrderId/'+ id).then(res =>{
        console.log(res);
        res.obj.forEach(item => {
          // item.operateType =obj[item.operateType];
          switch (item.operateType){
            case '0':
            case '1':
              item.str =`【${item.operateOrg}】 ${obj[item.operateType]} , 操作员：【${item.operator}】`;
              break
            case '3':
              item.str =`【${item.operateOrg}】 ${obj[item.operateType]} ,下一站：【】,操作员：【${item.operator}】`
              break
            case '9':
              item.str =`【${item.operateOrg}】 派件中 ,快递员：【${item.courier}】，电话：【${item.courierTel}】 `
              break
            case '11':
              item.str =`【${item.operateOrg}】签收扫描,签收人：【${item.signMan}】`
              break
            case '13':
              item.str =`【${item.operateOrg}】 ${obj[item.operateType]} ,原因：【${item.exceptionReason}】, 操作员：【${item.operator}】`
              break
            case '14':
              item.str =`【${item.operateOrg}】 ${obj[item.operateType]} ,下一站：【】,操作员：【${item.operator}】`
              break
            case '43':
              item.str =`运单丢失，丢失原因：【${item.exceptionReason}】`
              break
            case '44':
              item.str =`归班审核`
              break
            case  '34':
              item.str = '拒收'
              break
            case '15':
              item.str =`【${item.operateOrg}】异常扫描，原因：【${item.exceptionReason}】，操作员：【${item.operator}】`
              break
          }
          // this.msgList.push({
          //   operateType: obj[item.operateType],

          // })
        })
        this.msgList =[...res.obj];
        // this.msgList.push({})
      })
    },
  },
  
  mounted() {
    this.getList(2);
  },

};
</script>
<style>

.weui-dialog__btn_primary{
  color: #ffe001 !important;
}
.msg_timeline .weui-icon-success-no-circle{
  /* font-size: 1rem !important; */
}
</style>

<style scoped>
.picture{
  width: 5rem;
  height: 7rem;
}
.mask_box{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0,0.6);
  z-index: 30;
}
.mask_content{
  position: relative;
  width: 90%;
  /* height: 100px; */
  margin: 0 auto;
  margin-top: 50%;
  border-radius: 0.4rem;
  background: rgba(238,238,238,1);
  /* background:rgba(248,248,248,1); */
  box-shadow:0rem 0rem 1rem 0rem rgba(132,148,168,0.21);
}
.goods_head{
  /* height: 100%; */
  display: flex;
  justify-content: flex-start;
   padding: 1rem;
  /* padding-bottom: 0.5rem; */
  background: #fff;
  border-radius: 0.4rem 0.4rem 0 0;
}
.goods_avatar{
  height: 3rem;
  width: 3rem;
}
.goods_detail{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
}
.order_state{
font-size:0.7rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(254,91,74,1);
line-height:1.02rem;

background:linear-gradient(195deg,rgba(255,126,113,1) 0%, rgba(230,92,91,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent
}
.post_name{
  font-size:0.65rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(51,51,51,1);
line-height:0.93rem;
}
.post_tel{
  font-size:0.56rem;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(102,102,102,1);
line-height:0.93rem;
}
.goods_msg{
  padding: 1rem;
  margin-top: 0.42rem;
  max-height: 18rem;
  border-radius: 0 0 0.4rem 0.4rem;
  overflow-x:hidden; 
  background:rgba(248,248,248,1);
}
.msg_title{
  font-size:0.7rem;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(136,136,136,1);
}
.msg_timeline p {
		font-size:0.56rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(170,170,170,1);
  }
	.msg_timeline h4 {
		font-size:0.7rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(136,136,136,1);
	}
	.msg_timeline .recent {
		color: rgb(4, 190, 2)
	}
.close_icon{
  position: absolute;
  right: -0.75rem;
  top: -0.75rem;
  width:1.49rem;
  height:1.49rem;
  border: 1px solid;
  background:rgba(255,255,255,1);
  border-radius:50%;
  font-size: 0.58rem;
  text-align: center;
  line-height: 1.49rem;
  color: #c5c5c5;
}
.bg_height{
  height: calc(100% - 48px);
}
.num_color{
  color: #666;
}
.personal_tab_width {
  width: 30%;
  text-align: center;
}
.switchBorder {
  border-top: 1px solid #000;
  width: 45%;
  margin-left: 26%;
  border-top-width: 2px;
  margin-top: -5%;
}
.personal_list_div {
  width: 20%;
  margin-left: 1%;
  padding: 3%;
}
.personal_btn_d {
  width: 80px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid;
  text-align: center;
}
.personal_model_w {
  width: 95%;
  margin-left: 2%;
}
.personal_title {
  height: 48px;
  font-size: 17px;
  line-height: 3;
  display: flex;
  justify-content: space-around;
}

.flex_between{
  display: flex;
  justify-content: space-between;
}
.personal_time_div {
  height: 42px;
  line-height: 3;
  padding:0 4%;
  border-bottom: 1px solid #e5e5e5;
}
.personal_time_div_font {
  /* margin-left: 53%; */
  color: #fe5b4a;
}
.personal_list_div_img {
  width: 64px;
  height: 74px;
  overflow: hidden;
}
.personal_bt_b_w {
  width: 85px;
  height: 17px;
  border-radius: 16px;
  padding: 0.1rem;
  font-size: 11px;
  color: #333;
  background-color: #ffe001;
  text-align: center;
  line-height: 18px;
}
.personal_z_j {
  text-align: right;
  margin-right: 4%;
}
.personal_c_x_z {
  width: 77px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid #999999;
  text-align: center;
  font-size: 12px;
  line-height: 22px;
  color: #666666;
}
.personal_border_bottom_1 {
  border-top: 1px solid #e5e5e5;
  width: 123%;
  margin-left: -29%;
  margin-top: 6%;
}

</style>

