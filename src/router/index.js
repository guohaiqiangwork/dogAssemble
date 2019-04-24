import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/index'
import personal from '@/views/personal/index'
import Assemble from '@/views/Assemble/index'
import order from '@/views/order/index'
import detail from '@/views/detail/detail.vue'
import confirmationOfOrder from '@/views/confirmationOfOrder/index'
import addressManagement from '@/views/addressManagement/index'
import is404 from '@/views/page/is404'
import notfound from '@/views/page/notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 拼团
      path: '/',
      name: 'Assemble',
      meta: {
        title: '拼团', 
      },
      component: Assemble
    },
    {
      // 详情
      path: '/detail/',
      name: 'detail',
      meta: {
        title: '拼团', 
      },
      component: detail
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
      //去拼团
      path: '/confirmationOfOrder/:obj',
      name: 'confirmationOfOrder',
      meta: {
        title: '确认订单', 
      },
      component: confirmationOfOrder
    },
    {
      // 初始化
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 初始化
      path: '/addressManagement',
      name: 'addressManagement',
      component: addressManagement
    },
    {
      path:'/404',
      component: is404
    },
    {
      path:'/notfound',
      component: notfound
    }
  ]
})
