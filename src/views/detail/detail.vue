<template>
  <div :class="[disscroll ? 'box_disscroll' : '','bgcolor']">
    <!-- <input type="button" value="点我加入购物车" @click="flag=!flag">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <p class="circle" v-show="flag"></p>
    </transition>-->

    <div class="backgroun_color_fff">
      <div class="div_display_flex flex_box" style="padding-top:21px;height:25px;line-height:25px;">
        <!-- <div class="div_left_border"></div> -->
        <div class="font_color_00 font_size_16 mx-0 end_title">{{msg.title}}</div>
        <!-- <div class="div_left_border"></div> -->
        <div class="assemble_img_border" @click="goToPersonal">
          <img src="../../assets/images/my@2x.png" style="width:100%;">
        </div>
      </div>
      <!-- 倒计时 -->
      <countdown  :endTime="msg.time" :callback="callback" endText="已经结束了" :timeShow="msg.timeShow"></countdown>
      <div class="assemble_div_font">{{`${msg.groupNum}人成团，当前已有${msg.nowCount}人参团`}}</div>
      <!-- 参团人员 -->
      <div class="div_display_flex avatar_box">
        <div class="header_border_circular" style="position:relative">
          <img src="../../assets/images/team@2x.png" alt class="tag_team">
        </div>
        <div v-for="(item,index) in msg.avatarList" :key="index">
            <img class="header_border_circular" :src="item.headimgurl?item.headimgurl: index ==1 ? require('../../assets/images/cat@2x.png') : require('../../assets/images/dog@2x.png')" alt="" width="45" height="45" >
        </div>
        <!-- <div class="header_border_circular"></div>
        <div class="header_border_circular"></div> -->
        <div class="header_border_circular_g" @click="goToOrder">
          <img src="../../assets/images/more@2x.png" style="width:100%">
        </div>
      </div>
    </div>

    <!-- 产品列表 -->
    <div style="margin-top:2%" class="div_display_flex backgroun_color_fff"
       >
       <div class="div_display_flex" style="width:100%;">
           <!-- 产品图片  -->
          <div class="assemble_list_div">
            <img :src="baseURL + 'sys/attachment/showPic?downloadToken=' + singlegood.avatar + '6210e537ab7425ada8f8cd2430ccb36f'" width="105px" style="max-height:6.5rem">
          </div>
          <div style="width:60%;">
            <div
              class="margin_top_div8 font_color_00 font_size_16"
              style="width:187px;"
            >{{singlegood.name}}</div>
            <div class="margin_top_div8">
              <span class="font_size_18 font_color_00">
                ¥{{msg.groupPrice}}
                <span class="font_size_11" v-show="msg.hasWord">起</span>
              </span>
              <span
                style="text-decoration:line-through; margin-left: 6%;"
                class="font_size_11"
              >￥{{msg.price}}</span>
            </div>
            <div class="flex_end" style="margin-top: 6%;" v-if="singlegood.ni == 1"><!-- -->
              <div class="assemble_specifications" @click="open_model(singlegood)">选择规格</div>
            </div>
            <div class="flex_end"  style="margin-top: 6%;" v-if="singlegood.ni != 1"><!---->
              
              <div
                :class=" ['buy_circular_div','div_display_flex',singlegood.buyNumber>0? 'show_circle' :'border_white']"
              >
                <img
                  src="../../assets/images/addicon.png"
                  alt
                  :class="['buy_circular',singlegood.buyNumber>0?'color_bd': 'back_color', 'addStyle']"
                  @click.stop="buyAdd(singlegood,$event)"
                >

                <div class="flex_end box_content" v-show="singlegood.buyNumber > 0 && singlegood.ni != 1">
                  <span class="box_content">{{singlegood.buyNumber}}</span>
                  <img
                    src="../../assets/images/del.png"
                    alt
                    class="buy_circular bd_color delStyle"
                    @click.stop="buy_minute(singlegood)"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 宝贝详情 -->
    <div class="item_details">
      <div class="detail_title">
        <span class="border_tit">
          <span class="radius_tit">宝贝详情</span>
          
        </span>
      </div>
      <div class="photo_box" v-for="(item,index) in detailList" :key="index">

        <img :src="baseURL + 'sys/attachment/showPic?downloadToken=' + item + '6210e537ab7425ada8f8cd2430ccb36f'" alt="" style="width:100%;display:block;">
      </div>

    </div>

    <div class="cart"></div>
    <div class="ball-container">
      <!--小球 -->
      <div v-for="(ball,ballindex) in balls" :key="ballindex">
        <transition
          name="drop"
          @before-enter="beforeDrop"
          @enter="dropping"
          @after-enter="afterDrop"
        >
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
    <!-- 购买 -->
    <div class="div_display_flex backgroun_color_fff assemble_buttom_div" style="z-index:12">
      <!-- 活动正常 -->
      <div style="width: 100%;display: flex;">
        <div class="bt_buy_img">
          <div class="buy_border_number" v-show="bageNum">{{bageNum}}
          </div>
          <img src="../../assets/images/shopping@2x.png" alt width="100%" height="76px">
        </div>
        <!-- <div v-transfer-dom>
      <popup v-model="modelFalgez">
        <popup-header
        :left-text="('cancel')"
        :right-text="('done')"
        :title="('Please select your card')"
        :show-bottom-border="false"
        @on-click-left="show1 = false"
        @on-click-right="show1 = false"></popup-header>
        <group gutter="0">
          <radio :options="[('Card 1'), ('Card 2'), ('Card 3'), ('Card 4')]"></radio>
        </group>
      </popup>
        </div>-->
        <div class="bt_buy_money" @click="openModelProductL">
          <div style="margin:3%">
            <span
              style="margin-left:0.4rem"
              :class="{'font_color_99' : bageNum ? '' : true}"
            >￥{{singlegood.sumPrice}}</span>
            <span
              class="font_color_99 font_size_13 font_text_decoration"
              style="margin-left:0.2rem"
            >￥{{singlegood.sumDisprice}}</span>
          </div>
          <div class="font_color_99 font_size_11" style="margin-left: 0.8rem;margin-top: -2%;">{{msg.postageNum}}</div>
        </div>
        <div
          :class="['assemble_buttom_buy',bageNum?'':'font_color_99']"
          @click="goToConfirmation"
        >去拼团</div>
      </div>
      <!-- 活动结束 邀请好友-->
      <!-- <div v-if="msg.isJoin && !msg.isActive || isShow" style="width: 100%;">
        <div class="assemble_j_s" @click="goToInvitation">{{ bottom_title }}</div> -->
        <!-- 改变bottom_title 的值为 更多拼团   活动已结束  敬请期待-->
      <!-- </div> -->
      <!-- <div v-if="msg.isJoin && msg.isActive" style="width: 100%;" class="bottom_box">
        <div class="wid_70" @click="goToInvitation">
          <span class="wid_100">邀请好友去拼团</span>
        </div>
        <div class="wid_30">
          <span class="wid_100">更多拼团</span>
        </div>
      </div> -->
    </div>
    <!-- <div class="click" @click="downApp">点击触发</div>-->
    <!-- 弹出层 -->
    <div v-transfer-dom>
      <x-dialog
        v-model="singlegood.show"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent','overflow': 'auto'}"
      >
        <div class="model_colse_X" @click="singlegood.show = false">X</div>
        <div class="model_background_width" v-show="singlegood.show">
          <div class="model_title_font">商品名称</div>
          <div v-for="(item,index) in singlegood.goodsSpeList" :key="index" style="height:100%">
            <div class="div_text_left font_color_33 font_size_14">{{item.specification.name}}</div>
            <div :style="{'height':'50px'}">
              <div
                v-for="(iten,ind) in singlegood.spec[index]"
                @click="get_taste(index,iten,ind)"
                :class="['model_border_button',iten.flag == ind? 'color' : '' ]"
                :key="ind"
              >{{iten.name}}</div>
              <!-- <div
                v-for="(iten,ind) in singlegood.spec[index]"
                @click="get_taste(index,iten,ind)"
                :class="['model_border_button',iten.flag == ind? 'color' : '' ]"
                :key="ind"
              >{{iten.name}}</div> -->
              <!-- @click="get_taste(item.id)" -->
              <!-- :class="['model_border_button',item.id ==singlegood.flag? 'color' : '' ]" -->
            </div>
             <div class="mode_button_border"></div>
           
          </div>
          <div class="div_display_flex">
            <div class="model_buy_font_s">
              <span style="-0.9rem">￥{{attrValue.groupPrice}}</span>
              <span
                style="text-decoration:line-through;font-size:13px"
                class="font_color_33"
              >￥{{attrValue.price}}</span>
            </div>
            <!-- <div >  -->

            <div
              v-for="(pop,index) in singlegood.goodsinfoList"
              :key="index"
              :class="{'model_buy_font_sb':pop.id == attrValue.id}"
              v-show="pop.id==attrValue.id"
            >
              <div
                class="model_assemble_specifications_w"
                @click="addCount($event,pop,index)"
                v-if="!Number(pop.buyNumber)"
              >+ 加入购物车</div>

              <div
                :class=" ['buy_circular_div','div_display_flex',pop.buyNumber >0? 'show_circle' :'border_white']"
                v-if="pop.buyNumber>0"
              >
                <div class="flex_end box_content">
                  <img
                    src="../../assets/images/addicon.png"
                   
                    :class="['buy_circular',pop.buyNumber>0?'color_bd': 'back_color', 'addStyle']"
                    @click.stop="addCount($event,pop,index)"
                  >
                  <span class="box_content">{{pop.buyNumber}}</span>
                  <img
                    src="../../assets/images/del.png"
                   
                    class="buy_circular bd_color delStyle"
                    @click.stop="disCount($event,pop,index)"
                  >
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </x-dialog>
    </div>
    <!-- 产品详情 -->
    <!-- <div v-if="ProductFalg">
     
      <div class="div_display_flex" style="margin-left: 11%;padding-top:3%">
        <div class="div_left_border"></div>
        <div>产品详情</div>
        <div class="div_left_border"></div>
      </div>
    
      <div>
        <img src="../../assets/logo.png" alt>
      </div>
    </div> -->
    <!-- 底部弹出层 -->
    <div v-if="modelFalgez">
      <div class="model_background" @click="close($event)">
        <div class="model_center_n" ref="msk">
          <div class="div_display_flex backgroun_color_fe01" style="height:35px;line-height:2">
            <div class="font_size_15 font_color_33 buy_car">购物车</div>
            <div
              class="div_display_flex"
              style=" margin-left: 8%;margin-top: 1%;"
              @click="clearCart"
            >
              <div>
                <img
                  src="../../assets/images/delete@2x.png"
                  style="vertical-align:-3px;"
                  width="20px"
                  height="20px"
                >
              </div>
              <div class="font_size_15 font_color_66 ml-3">清空购物车</div>
            </div>
          </div>

          <div v-for="(item,index) in filtArrray" :key="index">
            <div class="div_display_flex margin_top_div5 flex-between" style="margin-bottom:10px;">
              <div class="model_bottn_font">
                <p class="ml-10">{{item.name}}</p>

                <div style="margin:4%;margin-left:10%;" v-if="item.typeSize">
                  <div class="model_botton_g">{{item.typeSize.replace(/,/g,' | ')}}</div>
                </div>
              </div>
              <div :class="['price_box','center_judge']">
                <p>￥{{item.groupPrice}}</p>
                <div
                  :class=" ['buy_circular_div','div_display_flex',item.buyNumber>0? 'show_circle' :'border_white']"
                >
                  <img
                    src="../../assets/images/addicon.png"
                    alt
                    :class="['buy_circular',item.buyNumber>0?'color_bd': 'back_color', 'addStyle']"
                    @click.stop="btm_add(index,$event,item)"
                  >
                  <div class="flex_end box_content" v-show="item.buyNumber > 0">
                    <span class="box_content">{{item.buyNumber}}</span>
                    <img
                      src="../../assets/images/del.png"
                      alt
                      class="buy_circular bd_color delStyle"
                      @click.stop="btm_dis(index,item)"
                    >
                  </div>
                </div>
                <!-- <div class=" buy_circular_div div_display_flex">
                   
                   


                     <div
                    class="buy_circular_n dischoice bd_color delStyle"
                    @click="buy_minute(2,index)"
                  ><span>-</span></div>
                  <div style="width:31px;text-align:center;line-height:1.4rem;font-size:13px;position:absolute;left:24px">8908</div>
                  <div class="buy_circular_n back_color dischoice addStyle" @click="buyAdd(1,index,$event)">
                    <span>+</span></div>
                </div>-->
              </div>
            </div>
            <!-- <div style="margin:4%">
              <div class="model_botton_g">主食 | 牛肉味</div>
            </div>-->
            <div class="model_botton_border_d"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 邀请好友 -->
    <!-- <div v-if="InvitationFalge">
      <div class="model_background" @click="colseModelProductL">
        <img src="../../assets/images/tupianjiazaishibai@3x.png" alt>
      </div>
    </div> -->
  </div>
</template>

<script>
import config from '../../config/config.dev.js'
import url from "../../bin/url";
import {
  XHeader,
  XDialog,
  PopupHeader,
  Popup,
  Group,
  XSwitch,
  Radio,
  TransferDomDirective as TransferDom
} from "vux";
import countdown from "../Assemble/time";
import { fail } from "assert";

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    countdown,
    XDialog,
    PopupHeader,
    Popup,
    TransferDom,
    Group,
    XSwitch,
    Radio
  },
  name: "Assemble",
  watch: {
    'singlegood.goodsinfoList':{
      handler(newVal,oldVal){
        console.log(' 我改变了')
      },
      deep:true
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to, "aaaaa");
  //   // next(false);
  // },
  data() {
    return {
      //小球 设为3个
      balls: [{ show: false }, { show: false }, { show: false }],
      dropBalls: [],
      // bottom_title: "邀请好友去拼团",
      time: "",
      msg:{},
      detailList:[],
      goodId:null,
      singlegood:{},
      filtArrray:[],
      modelFalgez: false, //弹出层
      // InvitationFalge: false,
      disscroll: false,
      // isJoin:null,
      // isActive:null,
      singlegood: {},
      bageNum: 0,
      attrValue: {},
      totalPrice: 0,
      totalDis: 0,
      isShow : false,
      lists: [],
      // ProductFalg: false, //产品详情
      // strBuffer: []
    };
  },
  created() {
    settitle("拼团");
    // this.getCode();
  },
  computed: {
    goodsDetail(){

    },
    baseURL(){
      return config.baseURL
    },
    groupPrice() {
      return this.totalPrice.toFixed(1);
    },
    disPrice() {
      return this.totalDis.toFixed(1);
    },
    // filtArrray() {
    //   let arr1 = [];
    //   let arr2 = [];
    //   this.lists.map(function(e) {
    //     if (e.goodsinfoList.length) {
    //       e.goodsinfoList.forEach(item => {
    //         if (item && item.buyNumber > 0) {
    //           item.operaType ='goodsinfoId',                                  
    //           item.name = e.name;
    //           arr1.push(item);
             
    //         }
    //       });
    //     }
    //   });
      
    //   arr2 = this.lists.filter(e => {
    //     return e.buyNumber > 0;
    //   });
    //    console.log(arr2,'arr1');
    //   var a = [...arr1, ...arr2];
    //   return a;
    // },
    token() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    getArray() {
      let a = this.singlegood.goodsSpeList.map((e, index) => {
        return e.attrValue.split(",");
      });
      if (!a.length) {
        return;
      }
      a.forEach((e, inde) => {
        e.forEach(i => {
          e.push({
            name: i,
            flag: 0,
            // operaType:'goodsinfoId'
          });
        });
      });
      a.forEach((e, index) => {
        e.splice(0, e.length / 2);
        if (typeof e == "string") {
        }
      });
      return a;
    },
    drop(el) {
      //抛物
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];

        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);

          return;
        }
      }
    },
    beforeDrop(el, event) {
      /* 购物车小球动画实现 */

      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect(); //元素相对于视口的位置
          let x = rect.left - 54;
          let y = -(window.innerHeight - rect.top - 70); //获取y
          //  let y = 100;
          el.style.display = "";
          el.style.webkitTransform = "translateY(" + y + "px)"; //translateY
          el.style.transform = "translateY(" + y + "px)";
          let inner = el.getElementsByClassName("inner-hook")[0];
          inner.style.webkitTransform = "translateX(" + x + "px)";
          inner.style.transform = "translateX(" + x + "px)";
        }
      }
    },
    dropping(el, done) {
      /*重置小球数量  样式重置*/
      let rf = el.offsetHeight;
      el.style.webkitTransform = "translate3d(0,0,0)";
      el.style.transform = "translate3d(0,0,0)";
      let inner = el.getElementsByClassName("inner-hook")[0];
      inner.style.webkitTransform = "translate3d(0,0,0)";
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    },
    afterDrop(el) {
      /*初始化小球*/

      this.bageNum++;
      let ball = this.dropBalls.shift();
      if (ball) {
        ball.show = false;
        el.style.display = "none";
      }
    },
    close(ev) {
      if (this.$refs.msk && !this.$refs.msk.contains(ev.target)) {
        this.disscroll = false;
        this.modelFalgez = false;
      }
    },
    // 去订单
    goToOrder() {
      this.$router.push({
        name: "order",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },
    // 去确认订单
    goToConfirmation() {
      if (this.bageNum) {
        this.$router.push({
          name: "confirmationOfOrder",
          params: {
            obj: JSON.stringify({
              type: "profession",
              data: {
                id: "我就是参数"
              }
            })
          }
        });
      }
    },
    // 倒计时回调函数
    callback(id) {
      console.log(id);
    },

    // 打开弹窗
    open_model(item, index) {
      // this.singlegood = this.lists[index];
      item.show = true;
      // console.log(item);
      var arr;
      if (!item.lalc) {
        item.spec = this.getArray();
        item.goodsSpeList.forEach(e => {
          arr = e.attrValue.split(",");
          item.strBuffer.push(arr[0]);
        });
      }

      item.lalc = 1;
      var str = item.strBuffer.join(",");
      var pos = item.goodsinfoList.findIndex(e => {
        return e.typeSize == str;
      });
      this.attrValue = item.goodsinfoList[pos];
      //  console.log(str);
      //  console.log(pos,'pos')
      // console.log(item,'item');
      // console.log(this.singlegood.goodsinfoList)
      //   console.log(this.attrValue,'sddadadsaddasdasdadasda11111111111');
    },
    kind(index, iten, ind) {
      var str = this.singlegood.goodsSpeList[index].attrValue;
      str = str.split(",");
      var t = str.indexOf(iten);
      return t;
    },
    // 弹窗选择
    get_taste(index, iten, ind) {
      this.singlegood.spec[index].forEach(e => {
        e.operaType ='goodsinfoId',
        e.flag = null;
      });
      iten.flag = ind;
      this.singlegood.strBuffer[index] = iten.name;
      var str = this.singlegood.strBuffer.join(",");
      var pos = this.singlegood.goodsinfoList.findIndex(e => {
        return e.typeSize == str;
      });

      this.attrValue = this.singlegood.goodsinfoList[pos];

      this.$set(this.singlegood.spec[index], "iten.flag", ind);
    },

    //清空购物车
    clearCart() {
      this.modelFalgez = false;
      this.disscroll = false;
      this.bageNum = 0;
      this.singlegood.sumPrice = 0;
      this.singlegood.sumDisprice = 0;
      // this.lists.map(e => {
        if (this.singlegood.goodsinfoList.length) {
          this.singlegood.goodsinfoList.forEach(item => {
            item.buyNumber = 0;
          });
        } else {
          this.singlegood.buyNumber = 0;
        }
      // });
      this.modelFalgez = false;
      this.clearQuest();
    },
    //选择规格 购物车数量
    addCount(event, num, index) {
      num.buyNumber++;
      num.operaType='goodsinfoId';
      num.name = this.singlegood.name;
      this.singlegood.sumPrice += Number(num.groupPrice);
      this.singlegood.sumDisprice += Number(num.price);
      this.drop(event.target);
     
      let pos = this.filtArrray.findIndex(e =>{
        return num.id == e.id;
      })
      if(pos >= 0){
          this.$set(this.filtArrray,pos,num);
        //  this.filtArrray[pos].buyNumber++;
      }else{
        this.filtArrray.push(num);
       
       
      }
      
      // this.$set(this.lists, this.singlegood.goodsinfoList[index], num);
      this.addQuest(num.id,num.operaType);
    },
    disCount(event, num,index) {
      num.operaType='goodsinfoId';
      num.name = this.singlegood.name;
      this.bageNum--;
      num.buyNumber = num.buyNumber *1;
      num.buyNumber--;
      this.singlegood.buyNumber--;
      this.singlegood.sumPrice -= num.groupPrice;
      this.singlegood.sumDisprice -= Number(num.price);
      if (!num.buyNumber){
       let pos =this.filtArrray.findIndex(e =>{
         return num.id == e.id;
       });
       this.filtArrray.splice(pos,1);
      }
      this.delQuest(num.id,num.operaType);
      if (!this.bageNum) {
        this.clearCart();
      }
      // this.$set(this.singlegood.goodsinfoList,index,num);
    },
    //点击底部购物车 购物数量
    btm_add(index, event, item) {
      this.drop(event.target);
      this.singlegood.sumPrice += Number(item.groupPrice);
      this.singlegood.sumDisprice += Number(item.price);
      this.filtArrray[index].buyNumber++;
      if(item.operaType == 'goodsinfoId'){
        let pos = this.singlegood.goodsinfoList.findIndex(e =>{
        return item.id == e.id
      })
      this.$set(this.singlegood.goodsinfoList,pos,item);
      }else if(item.operaType == 'goodsActivityId'){
        this.singlegood.buyNumber = this.filtArrray[index].buyNumber;
      }
      
      this.addQuest(item.id,item.operaType);
    },
    btm_dis(index, item) {
      this.bageNum--;
      this.singlegood.sumPrice -= Number(item.groupPrice);
      this.singlegood.sumDisprice -= Number(item.price);
      this.filtArrray[index].buyNumber--;
      if (!this.bageNum) {
        this.clearCart();
      };
      if (!this.filtArrray[index].buyNumber){
        this.filtArrray.splice(index,1);
      };
      if(item.operaType == 'goodsinfoId'){
        let pos = this.singlegood.goodsinfoList.findIndex(e =>{
        return item.id == e.id
      })
      this.$set(this.singlegood.goodsinfoList,pos,item);
      }else if(item.operaType == 'goodsActivityId'){
        this.singlegood.buyNumber = this.filtArrray[index]&&this.filtArrray[index].buyNumber || 0;
      }
      // let pos = this.singlegood.goodsinfoList.findIndex(e =>{
      //   return item.id == e.id
      // })
      // this.$set(this.singlegood.goodsinfoList,pos,item);
      this.delQuest(item.id,item.operaType);
    },
    // 增加购物
    buyAdd(item, event) {
      item.sumPrice += Number(item.groupPrice);
      item.sumDisprice += Number(item.price);
      this.drop(event.target);
      // var lists = this.lists;
      var buyNumber = Number(item.buyNumber);
      buyNumber += 1;
      item.buyNumber = buyNumber;
      let pos = this.filtArrray.findIndex(e =>{
        return item.id == e.id;
      })
      if(pos >= 0){
          this.$set(this.filtArrray,pos,item);
        //  this.filtArrray[pos].buyNumber++;
      }else{
        this.filtArrray.push(item);
      }
      this.addQuest(item.id,item.operaType);
    },
    // 减少购物
    buy_minute(item, index) {
      this.delQuest(item.id,item.operaType)
      // var lists = this.lists;
      item.sumPrice -= item.groupPrice;
      item.sumDisprice -= item.price;
      this.bageNum--;
      item.buyNumber -= 1;
      let pos = this.filtArrray.findIndex(e =>{
        return item.id == e.id;
      })
      if(pos >= 0){
          this.$set(this.filtArrray,pos,item);
        //  this.filtArrray[pos].buyNumber++;
      }else{
        this.filtArrray.push(item);
      }
      // if (buyNumber > 0) {
      //   this.bageNum--;
      //  
      //   item.buyNumber -= 1;
      // } else {
      //   // this.clearCart();
      // }

    },
    //   去个人中心
    goToPersonal(id) {
      this.$router.push({
        name: "personal",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: "我就是参数"
            }
          })
        }
      });
    },

    // 获取微信
    getCode() {
      // 非静默授权，第一次有弹框
      const code = ""; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const local = window.location.href;
      if (code == null || code === "") {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          window.APPID
        }&redirect_uri=${encodeURIComponent(
          local
        )}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
      } else {
        this.getOpenId(code); // 把code传给后台获取用户信息
      }
    },
    getOpenId(code) {
      // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
      const _this = this;
      this.$http
        .post("/api/user/wechat/login", {
          code
        })
        .then(res => {
          const datas = res.data;
          if (datas.code === 0) {
            console.log("成功");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    wxRegCallback() {
      this.wxShareTimeline();
    },
    /**
     * [wxShareTimeline 微信自定义分享到朋友圈]
     */
    wxShareTimeline() {
      let singlegood = {
        title: "拼团", // 分享标题
        link: "http://www.jzdlink.com", // 分享链接
        imgUrl:
          "http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png", // 分享图标
        success: function() {
          alert("分享成功");
        },
        error: function() {
          alert("分享失败");
        }
      };
      // 将配置注入通用方法
      this.ShareTimeline(singlegood);
    },
    // 点击购物车打开弹出层
    colseModelProductL(e) {
      this.modelFalgez = true;
    },
    openModelProductL(e) {
      if (!this.bageNum) {
        return;
      }
      this.modelFalgez = !this.modelFalgez;
      this.disscroll = this.modelFalgez == true ? true : false;
    },
    // // 邀请好友
    // goToInvitation() {
    //   this.InvitationFalge = true;
    // },
    // // 邀请好友
    // closeToInvitation() {
    //   this.InvitationFalge = false;
    // },
    fun() {
      alert(111);

      console.log("监听到了");
    },
    //获取参团头像
    getAvatar(){
      
    },
    chartQuest(){
      this.$fetch.post('weChat/index/getShoppingcart/'+this.token.employeeId+'/'+this.token.activityId).then(res =>{
        console.log(res,'jkj');
        // if(res.obj.length){

        // }else{
          
        // }
      })
    },
    //清空购物车请求
      clearQuest(){
        this.$fetch.post('weChat/shoppingcart/getShoppingcartDel/'+this.token.employeeId+'/'+this.token.activityId).then(e =>{
          console.log(e);
        })
    },
    //点击加号
    addQuest(id,type){
      console.log(type,'sdddasdas');
      this.$fetch.post('/weChat/shoppingcart/getShoppingcartAdd/'+this.token.employeeId+'/'+this.token.activityId +'?'+type+'='+id).then(
        e =>{
          // console.log(11,e)
          // console.log(e);
        }
      )
    },
    //点击减号 
    delQuest(id,type){
      this.$fetch.post("/weChat/shoppingcart/getShoppingcartSub/"+this.token.employeeId+'/'+this.token.activityId +'?'+type+'='+id).then(
        e =>{
          // console.log(e);
        }
      )
    },
    getGood(){
      this.$vux.loading.show({
        text: 'Loading'
      })
      this.bageNum = this.msg.bageNum;
      this.$fetch.post("/weChat/index/getGoodsActivity?goodsActivityId="+this.goodId+'&employeeId='+this.token.employeeId).then(
        res=>{
          console.log(res,'9999');
          this.singlegood={
              name: res.obj.goods.name,
              avatar: res.obj.goods.imgList[0],
              id:res.obj.id,
              buyNumber: res.obj.buyNumber,
              ni: res.obj.goodsinfoList.length ? "1" : "2",
              show: false,
              flag: 0,
              price:this.msg.price,
              groupPrice:this.msg.groupPrice,
              goodsSpeList: res.obj.goods.goodsSpeList,
              goodsinfoList: res.obj.goodsinfoList,
              operaType:'goodsActivityId',
              spec: [],
              strBuffer: [],
              sumPrice:Number(this.msg.sumPrice),
              sumDisprice:Number(this.msg.sumDisprice)
          }
          res.obj.goods.imgXiangList.forEach(e => {
            this.detailList.push(e);

          })
         this.$vux.loading.hide();
        }
      )
    }
  },
  mounted() {
    var arr = JSON.parse(this.$route.query.cartList);
    this.filtArrray =arr;
    this.goodId=this.$route.query.goodId;
    this.msg =JSON.parse(this.$route.query.msg)
    console.log(this.goodId,'llllllllllllllll');
    this.getGood();
    this.chartQuest();
    // if (window.history && window.history.pushState) {
    //   history.pushState(null, null, document.URL);
    //   window.addEventListener("popstate", this.fun, false); //false阻止默认事件
    // }

    // window.addEventListener("popstate", function(e){
    //         console.log(e,'小敏哥很帅！！！');
    // },false)
    // console.log(this.token,878)
    // console.log(this.$route);
    // console.log(this.$fetch,'999999');
  },
  destroyed() {
    // window.removeEventListener("popstate", this.fun, false); //false阻止默认事件
  }
};
</script>
<style>
.vux-x-dialog .weui-mask {
  z-index: 10;
}
.vux-loading .weui-toast {
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.vux-x-dialog .weui-dialog {
  z-index: 10;
}
</style>

<style scoped>
.photo_box{
  height: 100%;
  overflow-x: hidden;
}
.item_details{
  margin-top: 2%;
  margin-bottom: 54px;
  background: #fff;
  width: 100%;
  height: calc(100% - 54px);
  overflow-x: hidden;
}
.detail_title{
  height: 2rem;
  text-align: center;
  line-height: 2rem;
}
.border_tit{
  position: relative;
}
.border_tit::before{
    content: "";
    width: 1rem;
    margin-right: 10px;
    border-top: 1px solid #ffe31a;
    display: inline-block;
    vertical-align: middle;
}
.border_tit::after{
    content: "";
    width: 1rem;
    margin-left: 10px;
    border-top: 1px solid #ffe31a;
    display: inline-block;
    vertical-align: middle;
}
.radius_tit::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 13px;
    width: 4px;
    height: 4px;
    /* margin-left: 8px; */
    border-radius:50%;
    background:  #ffe31a;
    border-top: 1px solid #ffe31a;
    display: inline-block;
    vertical-align: middle;
}
.radius_tit::after{
    content: "";
    position: absolute;
    top: 50%;
    right: 13px;
    width: 4px;
    height: 4px;
    /* margin-left: 8px; */
    border-radius:50%;
    background:  #ffe31a;
    border-top: 1px solid #ffe31a;
    display: inline-block;
    vertical-align: middle;
}
.ball {
  position: fixed;
  left: 54px;
  bottom: 48px;
  z-index: 12;
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
  /* z-index: 10000000000; */
}
.cart {
  position: fixed;
  bottom: 22px;
  left: 32px;
  width: 30px;
  height: 30px;
  /* background-color: rgb(0,160,220);   */
  color: rgb(255, 255, 255);
  /* z-index: 10000000000; */
}
.inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fe5b4a;
  transition: all 0.4s linear;
}
.box_content {
  width: 100%;
  text-align: center;
}
.ml-3 {
  margin-left: 0.2em;
}
.tag_team {
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  width: 3.6rem;
  transform: translateX(-1.8rem);
}
.bottom_box {
  display: flex;
  justify-content: flex-start;
}
.border_white {
  border: 1px solid #fff;
}
.wid_70 {
  display: flex;
  align-items: center;
  text-align: center;
  width: 70%;
  height: 100%;
  color: #ffe001;
  background: #333;
}
.wid_30 {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 30%;
  background: #ffe001;
}
.wid_100 {
  width: 100%;
}
.addStyle {
  position: absolute;
  right: -2px;
  top: -1px;
}
.delStyle {
  position: absolute;
  left: 0;
  top: -1px;
}
.end_title:before {
  margin-right: 22px;
}
.end_title:after {
  margin-left: 22px;
}
.end_title:before,
.end_title:after {
  content: "";
  width: 50px;
  border-top: 1px solid #ffe31a;
  display: inline-block;
  vertical-align: middle;
}
.mx-0 {
  margin: 0 auto;
}
.flex_box {
  position: relative;
}
.avatar_box {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-top: 4%;
  padding-bottom: 4%;
}
.ml-10 {
  margin-left: 10%;
}
.flex_end {
  display: flex;
  justify-content: flex-end;
}
.center_judge {
  align-items: center;
}
.pl-4 {
  padding-left: 4%;
}
.flex-around {
  justify-content: space-around;
}
.flex-between {
  justify-content: space-between;
}
p {
  white-space: nowrap;
}
.price_box {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.color_bd {
  border: 1px solid #ffe001;
}
.div_left_border {
  width: 50px;
  border-top: 1px solid #ffe001;
  height: 2px;
  /* margin: 3% 8% 0 8%; */
}
.header_border_circular {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px dashed #ffe001;
  /* margin-left: 6%; */
}
.header_border_circular_g {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* margin-left: 6%; */
  /* border: 2px solid rgb(255, 224, 1); */
  overflow: hidden;
  text-align: center;
  line-height: 4.8;
}
.assemble_div_font {
  text-align: center;
  margin-top: 22px;
  color: #101010;
  font-size: 14px;
}
.assemble_specifications {
  width: 77px;
  height: 22px;
  text-align: center;
  background-color: #ffe001;
  color: #333;
  border-radius: 11px;
  line-height: 22px;
  /* margin-top: 3%; */
  /* margin-left: 58%;s */
  font-size: 12px;
}
.assemble_list_div {
  min-width: 30%;
  max-width: 30%;
  height: 6.5rem;
  margin-left: 1%;
  padding: 3%;
}
.assemble_buttom_buy {
  background-color: #ffe001;
  text-align: center;
  line-height: 3.5;
  width: 100px;
}
.assemble_buttom_div {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 54px;
}
.model_border_button {
  width: 16%;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  /* border: 1px solid; */
  margin-left: 12%;
  float: left;
  margin-top: 3%;
  margin-right: 3%;
  font-size: 12px;
  line-height: 20px;

  box-shadow: 0 2px 13px 1px rgba(97, 98, 98, 0.13);
}
.color {
  background: rgba(255, 224, 1, 1);
}
.model_background_width {
  background-color: #fff;
  width: 90%;
  margin-left: 5%;
  border-radius: 8px;
}
.mode_button_border {
  border-top: 1px solid #e5e5e5;
  width: calc(100% - 30px);
  margin: 0 auto 4% auto;
}
.buy_circular {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
}

.position_add {
  position: absolute;
  right: -1px;
  top: -1px;
}
.position_del {
  position: absolute;
  left: -1px;
  top: -1px;
  border-color: #fff;
}
.buy_circular_n {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: #fff;
}
.buy_circular_div {
  position: relative;

  width: 77px;
  height: 1.4rem;
}
.show_circle {
  border: 1px solid;
  border-color: #e5e5e5 #ffe001;
  border-radius: 11px;
  border-left: #fff;
}

.back_color {
  background-color: #ffe001;
  border: 1px solid #ffe001;
}

/* 购物动效 */
.circle {
  border: solid 1px red;
  background-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.assemble_img_border {
  position: absolute;
  right: 4%;
  width: 25px;
  border-radius: 50%;
  height: 25px;
  overflow: hidden;
  /* margin-left: 16%;
  margin-top: -3%; */
  text-align: center;
  background-color: #ffe001;
  line-height: 25px;
}
.btn_left_assemble {
  margin-left: 70%;
  margin-top: 3%;
}
/* 底部 */
.bt_buy_img {
  position: relative;
  width: 66px;
  height: 76px;
  margin-top: -3%;
}
.bt_buy_money {
  background-color: #333;
  color: #fff;
  width: 60%;
  font-size: 18px;
}
.buy_border_number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fe5b4a;
  color: #fff;
  margin-top: -5%;
  position: absolute;
  right: -10px;
  top: -2px;
  font-size: 11px;
  z-index: 20;
}
.model_title_font {
  font-size: 16px;
  color: #333;
  padding-top: 16px;
}
.model_buy_font_s {
  color: #020202;
  font-size: 20px;
  width: 45%;
  margin-top: -5px;
}
.model_buy_font_sb {
  width: 54%;
  text-align: -webkit-right;
  margin-right: 4%;
  margin-bottom: 23px;
  margin-bottom: 14px;
}
.model_assemble_specifications_w {
  width: 81px;
  height: 1.4rem;
  padding: 0 2px;
  text-align: center;
  background-color: #ffe001;
  color: #333;
  border-radius: 11px;
  line-height: 23px;
  font-size: 12px;
  border: 1px solid #ffe001;
}
.model_colse_X {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #c5c5c5;
  font-size: 13px;
  background-color: #fff;
  line-height: 2.6;
  margin-left: 90%;
  margin-top: -4%;
  position: absolute;
}
.buy_car {
  width: 60%;
  text-align: left;
  margin-left: 3%;
  margin-top: 1%;
}
.model_botton_g {
  width: 85px;
  height: 17px;
  border-radius: 9px;
  background-color: #ffe001;
  font-size: 11px;
  color: #333;
  text-align: center;
}
.model_bottn_font {
  width: 100%;
  font-size: 14px;
  color: #000;
}
.model_botton_border_d {
  border-top: 1px solid #e5e5e5;
  width: 90%;
  margin-left: 5%;
}
.assemble_j_s {
  background-color: #ffe001;
  font-size: 16px;
  color: #333;
  height: 54px;
  text-align: center;
  line-height: 3;
}
.box_disscroll {
  height: 100%;
  overflow: hidden;
}
.bd_color {
  border: 1px solid #e5e5e5;
}
</style>