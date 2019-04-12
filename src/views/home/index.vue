<template>
  <div>
    <!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header> -->
    <div @click="goToPersonal">去我的</div>
    <!-- <div @click="getData">去拼团</div> -->
    <div @click="goToAssemble">去拼团</div>

    <div class="ball-container">
        <transition name="fade" v-for="(ball,index) in balls" :key="index" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
// 引入 vux tabbar 组件
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  name: "home",
  data() {
    return {
      select: "Home",
      showMenus: false,
       balls: [
          {
            show: false
          },
          {
            show:  false
          },
          {
            show:  false
          },
          {
            show:  false
          },
          {
            show:  false
          }
        ],
        dropBalls:[]
    };
  },
  methods: {
       drop(el) { 
      //触发一次事件就会将所有小球进行遍历
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) { //将false的小球放到dropBalls
            ball.show = true;
            ball.el = el; //设置小球的el属性为一个dom对象
            this.dropBalls.push(ball); 
            return;
          }
        }
      },

      beforeEnter(el){ //这个方法的执行是因为这是一个vue的监听事件
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect(); //获取小球的相对于视口的位移(小球高度)
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22); //负数,因为是从左上角往下的的方向
            el.style.display = ''; //清空display
            el.style.webkitTransform = `translate3d(0,${y}px,0)`; 
            el.style.transform = `translate3d(0,${y}px,0)`;
            //处理内层动画
            let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },

      enter(el, done) { //这个方法的执行是因为这是一个vue的监听事件
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight; //触发重绘html
        this.$nextTick(() => { //让动画效果异步执行,提高性能
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          //处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done); //Vue为了知道过渡的完成，必须设置相应的事件监听器。
        });
      },

      afterEnter(el) { //这个方法的执行是因为这是一个vue的监听事件
        let ball = this.dropBalls.shift(); //完成一次动画就删除一个dropBalls的小球
        if (ball) {
          ball.show = false;
          el.style.display = 'none'; //隐藏小球
        }
      },
    getData () { 
    var self = this 
    $.ajax({ 
      url: 'http://f.apiplus.cn/bj11x5.json', 
      type: 'GET', 
      dataType: 'JSONP', 
      success: function (res) { 
        self.data = res.data.slice(0, 3) 
        self.opencode = res.data[0].opencode.split(',') 
      } 
    }) 
  } ,
    //   去个人中心
    goToPersonal(id) {
      console.log(id);
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
    //   去拼团
    goToAssemble(id) {
      this.$router.push({
        name: "Assemble",
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
  created() {
    settitle('我是调试页')
    // this.getCode();
  },

  mounted() {
    // console.log(url);
    // console.log(this.$fetch);
  }
};
</script>
<style scoped>
.ball-container .ball{
  position: fixed;
        left: 32px;
        bottom: 22px;
        z-index:200;
        transition: all .6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      
}

.ball-container .inner{
   width :16px;
          height: 16px;
          border-radius :50%;
          background: rgb(0,160,220);
          transition: all .6s linear;
}
      
.overwrite-title-demo {
  margin-top: 5px;
}
</style>