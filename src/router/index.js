import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import login from '@/views/login/index'
import nationalStores from '@/views/nationalStores/index'
import recipeManual from '@/views/recipeManual/index'
import caseVideo from '@/views/caseVideo/index'
import shareVideo from '@/views/shareVideo/index'
import introduce from '@/views/introduce/index'
import symptoms from '@/views/symptoms/index'
import personal from '@/views/personal/index'
import recommend from '@/views/recommend/index'
import exclusive from '@/views/exclusive/index'
import is404 from '@/views/page/is404'
import notfound from '@/views/page/notfound'
import assemble from '@/views/Assemble/index'           //主页
import goodsdetail from '@/views/goodsDetail/index'     //商品详情
import cart from '@/views/cart/index'                   //购物车
import myWallet from '@/views/myWallet/index'
import  billRecord from '@/views/billRecord/index'
import order from '@/views/order/index'
import serviceOrder from '@/views/serviceOrder/index'
import dataStatistics from '@/views/dataStatistics/index' //数据统计
import dataDetails from '@/views/dataDetails/index'//数据统计详情
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 调试页面
      path: '/',
      name: 'home',
      meta: {
        title: '调试', 
      },
      component: home
    },
    {
      // 登陆
      path: '/login/:obj',
      name: 'login',
      meta: {
        title: '登陆', 
      },
      component: login
    },
    {
      path:'/home',
      meta: {
        title:'首页'
      },
      component: assemble
    },
    {
      path:'/goodsdetail',
      meta: {
        title:'商品详情'
      },
      component: goodsdetail
    },
    {
      path:'/cart',
      meta: {
        title:'购物车页面'
      },
      component: cart
    },
    {
      // 全国门店
      path:'/nationalStores/:obj',
      name:'nationalStores',
      meta:{
        title:'全国门店'
      },
      component:nationalStores
    },
    {
      // 配方手册
      path:'/recipeManual/:obj',
      name:'recipeManual',
      meta:{
        title:'配方手册'
      },
      component:recipeManual
    },
    {
      // 案例视频
      path:'/caseVideo/:obj',
      name:'caseVideo',
      meta:{
        title:'配方手册'
      },
      component:caseVideo
    },
    {
       // 视频分享
       path:'/shareVideo/:obj',
       name:'shareVideo',
       meta:{
         title:'案例视频'
       },
       component:shareVideo
    },
    {
      // 公司介绍
      path:'/introduce/:obj',
      name:'introduce',
      meta:{
        title:'公司介绍'
      },
      component:introduce
   },
   {
    // 病症检测
    path:'/symptoms/:obj',
    name:'symptoms',
    meta:{
      title:'病症检测'
    },
    component:symptoms
   },
   {
    // 个人中心
    path: '/personal/:obj',
    name: 'personal',
    meta: {
      title: '个人中心', 
    },
    component: personal
  },
  {
    // 我的钱包
    path: '/myWallet/:obj',
    name: 'myWallet',
    meta: {
      title: '我的钱包', 
    },
    component: myWallet
  },
  {
    // 我的订单
    path: '/order/:obj',
    name: 'order',
    meta: {
      title: '我的订单', 
    },
    component: order
  },
  // 服务订单
  {
    path:'/serviceOrder/:obj',
    name:'serviceOrder',
    meta:{
      title:'服务订单',
    },
    component:serviceOrder
  },
  // 数据统计
  {
    path:'/dataStatistics/:obj',
    name:'dataStatistics',
    meta:{
      title:'服务订单',
    },
    component:dataStatistics
  },
    // 数据统计详情
    {
      path:'/dataDetails/:obj',
      name:'dataDetails',
      meta:{
        title:'服务订单',
      },
      component:dataDetails
    },
  {
    // 钱包记录
    path: '/billRecord/:obj',
    name: 'billRecord',
    meta: {
      title: '我的钱包', 
    },
    component: billRecord
  },
  {
    // 推荐信息
    path: '/recommend/:obj',
    name: 'recommend',
    meta: {
      title: '推荐信息', 
    },
    component: recommend
  },
  {
    // 专属门店
    path: '/exclusive/:obj',
    name: 'exclusive',
    meta: {
      title: '专属门店', 
    },
    component: exclusive
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
