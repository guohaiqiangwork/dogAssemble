<template>
  <div style="overflow:hidden" id="box">
    <div style="background:#fff;width:100%;height:60px;position:fixed;top:0;z-index:20;margin-bottom:20px;">
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input
          type="text"
          :placeholder="routeParams.data.id == '001'?'搜索您找的店铺':'搜索您找的人名'"
          v-on:input="getWholeList(name)"
          v-model="name"
          maxlength="11"
          style="width:100%;height:100%;background-color:#EFEFEF; outline: none;border:none"
        >
        <i></i>
      </div>
    </div>
    <!-- <div style="width:100%;heigth:70px;position:relative;"></div> -->
    <!-- <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="selPullUp"
      @pulldown="pulldown"
      style = "height:100%;"
    > -->
    <div class="main-body" ref="wrapper">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" >
      <div  class="nut-vert-list-panel">
        <div v-if="routeParams.data.id == '001'">
          <div
            class="div_display_flex margin_left_div6 margin_top_div3"
                style="display: flex;
                justify-content: space-between;
                align-items:center;
                height:26px;"
            v-for="(item,index) in getRecommendBList"
            :key="index"
          >
            <div class="div_width_70 font_size_14 boxer">
              <span>{{item.name}}</span>
              <!-- <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span> -->
              <span
                  v-if="item.state == 1"
                  style="border: 1px solid #4A7B67; padding: 1%;margin-left:5px;font-size: 12px;color:#4A7B67;border-radius:2px;"
                >开业</span>
                <span
                  v-if="item.state == 0"
                  style="border: 1px solid #E6435A; padding: 1%;font-size: 12px;color:#E6435A;"
                >未开店</span>
            </div>
            <!-- <div class="div_with_30 red margin_left_div6" style="margin-right: 8%;">¥{{item.money}}</div> -->
               <div class="div_with_30" style="margin-right:6%" v-if="item.type == 1">家庭版</div>
              <div class="div_with_30" style="margin-right:6%" v-if="item.type == 0">店铺版</div>
          </div>
        </div>
        <div v-if="routeParams.data.id == '002'">
          <div
            class="div_display_flex margin_left_div6 margin_top_div3"
            style="display: flex;
            height: calc(100% - 80px)
            justify-content: space-between;"
            v-for="(item,index) in getVideoDistriList"
            :key="index"
          >
            <div class="div_width_70 font_size_14">
              {{item.name}}
              <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span>
            </div>
            <div class="div_with_30 red margin_left_div6" style="margin-right: 8%;">¥{{item.money}}</div>
          </div>
        </div>
        <div v-if="routeParams.data.id == '003'">
          <div
            style="display: flex;
    justify-content: space-between;"
            class="div_display_flex margin_left_div6 margin_top_div3"
            v-for="(item,index) in getOrderDistriList"
            :key="index"
          >
            <div class="div_width_70 font_size_14">
              {{item.name}}
              <span class="font_size_12 font_color_A1" style="margin-left: 10px;">{{item.time}}</span>
            </div>
            <div class="div_with_30 red margin_left_div6"  style="margin-right: 8%;">¥{{item.money}}</div>
          </div>
        </div>
      </div>
    <!-- </nut-scroller> -->
     </mt-loadmore>
   </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Scroller } from "vux";
import { setTimeout, clearTimeout } from "timers";
let timer;
export default {
  components: {
    Scroller
  },
  name: "healthDetail",
  data() {
    return {
      getOrderDistriList: [],
      getRecommendBList: [],
      getVideoDistriList: [],
      name: "",
      allLoaded:false,
      isUnMore1: false,
      isLoading1: false,
      page: {
        size: 15,
        current: 1
      }
    };
  },
  methods: {
    // 列表查询
    getWholeList(item) {
      this.itemName = item;
        // this.getListF();
      if (timer) {
        window.clearTimeout(timer._id);
      }
      timer = setTimeout(() => {
        this.page.current = 1;
        var wrapper = document.querySelector('.boxer');
        // var box = document.querySelector('#box');
        // box.scrollTop = 0;
        // wrapper.scrollTop = 0;
        // wrapper.style.top = 80 + 'px';
        var app = document.querySelector('.main-body');
        // app.scrollTop = wrapper.offsetTop;
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置;
        var h = app.offsetHeight;
        var b = app.scrollHeight;
        // app.offsetHeight = 0;
        // app.style.height = ' calc( 100% - 80px )';
        this.getListF();
        // this.filterList(this.list,this.iptVal);
     
        console.log(wrapper.scrollTop,app.scrollTop)
        timer = null;
      }, 2000);
      // this.itemName = item;
      // this.getListF();
    },

    // 健康奖金--推荐返佣列表
    getRecommendB(str) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getRecommendB, _obj).then(  
           
        data => {
          if(str == 'pull'){
            this.$refs.loadmore.onBottomLoaded()
            // var a =document.querySelector('.main-body');
            // a.style.top = 80 + 'px';
            // console.log(a);
          }else if(str == 'drop'){
            this.allLoaded = false;
            this.$refs.loadmore.onTopLoaded();
          }
          if (data.code == 0) { 
            // if (this.getRecommendBList.length == 0) {
              if(data.obj.length == 0 && str == 'pull'){
                this.allLoaded = true;
                this.page.current--;
                this.$vux.toast.text('没有更多数据了')
              }
              if (this.getRecommendBList.length == 0) {
                this.getRecommendBList = data.obj;
            } else {
              if(this.itemName && !str){
                this.getRecommendBList =[];
              }
              if(!this.itemName && !str){
                this.getRecommendBList =[];
              }
              this.getRecommendBList = this.getRecommendBList.concat(data.obj);
            }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 视频返佣列表
    getVideoDistri(str) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
      this.$fetch.post(url.getVideoDistri, _obj).then(
        data => {
          if(str == 'pull'){
            this.$refs.loadmore.onBottomLoaded()
          }else if(str == 'drop'){
            this.allLoaded = false;
            this.$refs.loadmore.onTopLoaded();
          }
          if (data.code == 0) {
            if(data.obj.length == 0 && str == 'pull'){
                this.allLoaded = true;
                this.page.current--;
                this.$vux.toast.text('没有更多数据了')
            }
            if (this.getVideoDistriList.length == 0) {
              this.getVideoDistriList = data.obj;
            } else {
              if(this.itemName && !str){
                this.getVideoDistriList =[];
              }
              if(!this.itemName && !str){
                this.getVideoDistriList =[];
              }
              this.getVideoDistriList = this.getVideoDistriList.concat(data.obj);
            }
          } else {
            alert(data.msg);
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 健康奖金商城
    getOrderDistri(str) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        name: this.itemName,
        size: this.page.size,
        current: this.page.current
      };
   
      this.$fetch.post(url.getOrderDistri, _obj).then(
        data => {
          // if(str == 'pull'){
          //   this.$refs.loadmore.onBottomLoaded()
          // }else if(str == 'drop'){
          //   this.allLoaded = false;
          //   this.$refs.loadmore.onTopLoaded();
          // }
          if (data.code == 0) {
             if(data.obj.length == 0 && str == 'pull'){
                this.allLoaded = true;
                this.page.current--;
                this.$vux.toast.text('没有更多数据了')
            }
            if (this.getOrderDistriList.length == 0) {
              this.getOrderDistriList = data.obj;
            } else {
              if(this.itemName && !str){
                this.getOrderDistriList =[];
              }
              if(!this.itemName && !str){
                this.getOrderDistriList =[];
              }
              this.getOrderDistriList = this.getOrderDistriList.concat(data.obj);
            }
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
    loadBottom() {
      this.page.current++;
      this.getListF('pull');
      this.$refs.loadmore.onBottomLoaded()

    },
    // 下拉刷新
    loadTop() {
      this.getOrderDistriList =[];
      this.getVideoDistriList = [];
      this.getRecommendBList = [];
      this.isUnMore1 = false;
      this.page.current = 1;
      this.allLoaded = false;
      this.getListF('drop');
      this.$refs.loadmore.onTopLoaded();
    },
    // 判断调用那个
    getListF(str = '') {
      console.log(13213)
      switch (this.routeParams.data.id) {
        case "001":
          settitle('推荐返佣列表');
          this.getRecommendB(str);
          break;
        case "002":
          settitle('视频返佣列表');
          console.log(this.itemName,'jljljl')
          this.getVideoDistri(str);
          break;
        case "003":
          settitle('商城返佣列表');
          this.getOrderDistri(str);
          break;
      }
    }
  },
  created() {
    settitle("健康奖金详情");
    this.routeParams = JSON.parse(this.$route.params.obj);
    this.getListF(); //判断调用那个方法
  },

  mounted() {
     var app = document.querySelector('.main-body');
     app.style.height = ' calc( 100% - 160px )';
  // window.addEventListener('scroll', this.scrollToTop)
    // document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
  },
  destroyed () {
  // window.removeEventListener('scroll', this.scrollToTop)
  }
};
</script>
<style scope>
.mint-loadmore-content{
  border:1px solid #fff;
}
.main-body{
    overflow: scroll;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    /* height: calc(100% - 80px); */
    z-index: 1;
    /* padding-top: 70px; */
    -webkit-overflow-scrolling: touch;

}
.search_box {
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem !important;
  position: fixed;
  top: 0;
  left: 3%;
  overflow: hidden;
  padding: 0 0.31rem;
  box-sizing: border-box;
  z-index: 3;
  display: flex;
  align-items: center;
  background: #efefef;
  line-height: 3.5rem;
  margin: 5% auto;
  width: 94%;
}
</style>