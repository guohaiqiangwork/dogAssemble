import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/index'
import personal from '@/views/personal/index'
import Assemble from '@/views/Assemble/index'
import order from '@/views/order/index'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      // redirect:'', 指向组件
      name: 'home',
      meta: {
        title: '首页', //重点在meta的这里，其他的都是例子的
      },
      component: home
    },
    {
      // 个人中心
      path: '/personal/:obj',
      name: 'personal',
      meta: {
        title: '我的', 
      },
      component: personal
    },
    {
      // 拼团
      path: '/Assemble/:obj',
      name: 'Assemble',
      meta: {
        title: '拼团', 
      },
      component: Assemble
    },
    {
      //订单
      path: '/order/:obj',
      name: 'order',
      meta: {
        title: '拼团', 
      },
      component: order
    },
    {
      // 初始化
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
