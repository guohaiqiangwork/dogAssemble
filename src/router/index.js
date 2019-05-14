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
import myWallet from '@/views/myWallet/index'



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
      // 个人中心
      path: '/personal/:obj',
      name: 'personal',
      meta: {
        title: '我的', 
      },
      component: personal
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
