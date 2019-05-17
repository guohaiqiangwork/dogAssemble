import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index' //调试页
import login from '@/views/login/index' //登陆
import nationalStores from '@/views/nationalStores/index' //全国门店
import recipeManual from '@/views/recipeManual/index' //配方手册
import caseVideo from '@/views/caseVideo/index' //案列视频
import shareVideo from '@/views/shareVideo/index' //视频分享
import introduce from '@/views/introduce/index' //公司介绍
import symptoms from '@/views/symptoms/index' //病症检测
import personal from '@/views/personal/index' //个人中心
import recommend from '@/views/recommend/index' //推荐信息
import exclusive from '@/views/exclusive/index' //专属门店
import is404 from '@/views/page/is404'
import notfound from '@/views/page/notfound'
import assemble from '@/views/Assemble/index'           //主页
import goodsdetail from '@/views/goodsDetail/index'     //商品详情
import cart from '@/views/cart/index'                   //购物车
import paysure from '@/views/paysure/index'             //确认支付页面
import addressment from '@/views/addressment/index'             // 地址管理页面
import addressopt from '@/views/addressment/option'             // 地址编辑页面
import immendilypay from '@/views/immendilyPay/index'             // 地址编辑页面
import myWallet from '@/views/myWallet/index'//我的钱包
import billRecord from '@/views/billRecord/index' //钱包记录
import order from '@/views/order/index' //我的订单
import serviceOrder from '@/views/serviceOrder/index' //服务订单
import dataStatistics from '@/views/dataStatistics/index' //数据统计
import dataDetails from '@/views/dataDetails/index' //数据统计详情
import healthBonus from '@/views/healthBonus/index' //健康奖金
import healthDetail from '@/views/healthDetail/index' //健康奖金详情
import activityRules from '@/views/activityRules/index'//服务规则
import setUp from '@/views/setUp/index'//设置
import changePassword from '@/views/changePassword/index'//修改密码
import Tmap from '@/views/Tmap/index'//地图
Vue.use(Router)

export default new Router({
  routes: [{
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
      path: '/home',
      meta: {
        title: '首页'
      },
      component: assemble
    },
    {
      path: '/goodsdetail',
      meta: {
        title: '商品详情'
      },
      component: goodsdetail
    },
    {
      path: '/cart',
      meta: {
        title: '购物车页面'
      },
      component: cart
    },
    {
      path:'/paysure',
      meta: {
        title:'确认支付页面'
      },
      component: paysure
    },
    {
      path:'/addressment',
      meta: {
        title:'地址管理页面'
      },
      component: addressment
    },
    {
      path:'/addressopt',
      meta: {
        title:'添加地址'
      },
      component: addressopt
    },
    {
      path:'/immendilypay',
      meta: {
        title:'立即支付'
      },
      component: immendilypay
    },
    {
      // 全国门店
      path: '/nationalStores/:obj',
      name: 'nationalStores',
      meta: {
        title: '全国门店'
      },
      component: nationalStores
    },
    {
      // 配方手册
      path: '/recipeManual/:obj',
      name: 'recipeManual',
      meta: {
        title: '配方手册'
      },
      component: recipeManual
    },
    {
      // 案例视频
      path: '/caseVideo/:obj',
      name: 'caseVideo',
      meta: {
        title: '配方手册'
      },
      component: caseVideo
    },
    {
      // 视频分享
      path: '/shareVideo/:obj',
      name: 'shareVideo',
      meta: {
        title: '案例视频'
      },
      component: shareVideo
    },
    {
      // 公司介绍
      path: '/introduce/:obj',
      name: 'introduce',
      meta: {
        title: '公司介绍'
      },
      component: introduce
    },
    {
      // 病症检测
      path: '/symptoms/:obj',
      name: 'symptoms',
      meta: {
        title: '病症检测'
      },
      component: symptoms
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
      path: '/serviceOrder/:obj',
      name: 'serviceOrder',
      meta: {
        title: '服务订单',
      },
      component: serviceOrder
    },
    // 数据统计
    {
      path: '/dataStatistics/:obj',
      name: 'dataStatistics',
      meta: {
        title: '服务订单',
      },
      component: dataStatistics
    },
    // 数据统计详情
    {
      path: '/dataDetails/:obj',
      name: 'dataDetails',
      meta: {
        title: '服务订单',
      },
      component: dataDetails
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
      // 健康奖金
      path: '/healthBonus/:obj',
      name: 'healthBonus',
      meta: {
        title: '健康奖金',
      },
      component: healthBonus
    },
    {
      // 专属门店
      path: '/healthDetail/:obj',
      name: 'healthDetail',
      meta: {
        title: '健康奖金详情',
      },
      component: healthDetail
    },
    {
      // 专属门店
      path: '/activityRules/:obj',
      name: 'activityRules',
      meta: {
        title: '健康奖金详情',
      },
      component: activityRules
    },
    {
      // 设置Change Password
      path: '/setUp/:obj',
      name: 'setUp',
      meta: {
        title: '设置',
      },
      component: setUp
    },
    {
      // 修改密码
      path: '/changePassword/:obj',
      name: 'changePassword',
      meta: {
        title: '设置',
      },
      component: changePassword
    },
    {
      // 地图
      path: '/Tmap/:obj',
      name: 'Tmap',
      meta: {
        title: '地图',
      },
      component: Tmap
    },
    {
      path: '/404',
      component: is404
    },
    {
      path: '/notfound',
      component: notfound
    }
  ]
})
