import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index' //调试页
import login from '@/views/login_reg/index' //登陆
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
import immendilypay from '@/views/immendilyPay/index'             // 立即支付页面
import about from '@/views/about/index'             // 关于我们
import videopage from '@/views/videopage/index'             // 视频页面
import videomangment from '@/views/videoMangment/index'             // 管理视频页面
import auditstate from '@/views/videoMangment/auditState/index'             // 状态审核
import videoupload from '@/views/videoMangment/videoUpload/index'             // 视频上传
import videolist from '@/views/about/videoList/index'             // 视频列表
import videosorder from '@/views/about/videosOrder/index'             // 视频订单








import myWallet from '@/views/myWallet/index'//我的钱包
import billRecord from '@/views/billRecord/index' //钱包记录
import order from '@/views/order/index' //我的订单
import serviceOrder from '@/views/serviceOrder/index' //服务订单
import serviceOrderD from '@/views/serviceOrderD/index' //套餐详情
import sOrderList from '@/views/sOrderList/index' //服务订单
import dataStatistics from '@/views/dataStatistics/index' //数据统计
import dataDetails from '@/views/dataDetails/index' //数据统计详情
import healthBonus from '@/views/healthBonus/index' //健康奖金
import healthDetail from '@/views/healthDetail/index' //健康奖金详情
import activityRules from '@/views/activityRules/index'//服务规则
import setUp from '@/views/setUp/index'//设置
import changePassword from '@/views/changePassword/index'//修改密码
import Tmap from '@/views/Tmap/index'//地图
import recharge from '@/views/recharge/index' // 会员充值
import newOrder from '@/views/newOrder/index' //新建订单
import memberOperation from '@/views/memberOperation/index' //会员操作
import memberD from '@/views/memberD/index'//会员操作详情
import rechargeList from '@/views/rechargeList/index' //充值记录
Vue.use(Router)

export default new Router({
  routes: [{
    // 调试页面
    path: '/',
    meta: {
      title: '调试',
    },
    component: home
  },
  {
    // 登陆
    path: '/',
    name: 'login',
    meta: {
     
      title: '首页',
    },
    component:  resolve => require(['@/components/TabBar.vue'], resolve),
    children:[
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '首页',
            },
            component: resolve => require(['@/views/Assemble/index'], resolve),
        },
        {
          path: '/goodsdetail',
          meta: {
            title: '商品详情'
          },
          component: resolve => require(['@/views/goodsDetail/index'], resolve),
        },
        {
          path: '/cart',
          name: 'cart',
          meta: {
            title: '购物车页面'
          },
          component: resolve => require(['@/views/cart/index'], resolve),
        },
        {
          path: '/paysure',
          name: 'paysure',
          meta: {
            title: '确认支付页面'
          },
          component: resolve => require(['@/views/paysure/index'], resolve),
        },
        {
          path: '/addressment',
          name: 'addressment',
          meta: {
            title: '地址管理页面'
          },
          component: resolve => require(['@/views/addressment/index'], resolve),
        },
        {
          path: '/addressopt',
          name: 'addressopt',
          meta: {
            title: '添加地址'
          },
          component: resolve => require(['@/views/addressment/option'], resolve),
        },
      ]
  },
  {
    // 登陆
    path: '/login/:id',
    name: 'login',
    meta: {
      word:'login',
      title: '登录',
    },
    component: login
  },
  // {
  //   path: '/home',
  //   meta: {
  //     title: '首页'
  //   },
  //   component: assemble
  // },
 
 
  

 

  {
    path: '/immendilypay',
    name: 'immendilypay',
    meta: {
      title: '立即支付'
    },
    component: immendilypay
  },
  {
    path: '/about',
    meta: {
      title: '关于我们'
    },
    component: about
  }, 
  {
    path: '/videolist',
    meta: {
      title: '视频列表'
    },
    component: videolist
  },
  {
    path: '/videosorder',
    meta: {
      title: '视频订单'
    },
    component: videosorder
  },
  {
    path: '/videopage',
    meta: {
      title: '视频页面'
    },
    component: videopage
  },
  {
    path:'/videomangment',
    meta: {
      title:'管理视频'
    },
    component: videomangment
  },
  {
    path:'/auditstate',
    meta: {
      title:'审核管理'
    },
    component: auditstate
  },
  {
    path:'/videoupload',
    meta: {
      title:'审核管理'
    },
    component: videoupload
  },
  {
    path:'/addclass',
    meta: {
      title:'添加分类'
    },
    component:  resolve => require(['@/views/videoMangment/addClass/index'], resolve),
  },
  {
    path:'/goodslist',
    meta: {
      title:'商品列表'
    },
    component:  resolve => require(['@/views/paysure/goodsList/index'], resolve),
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
  // 套餐详情
  {
    path: '/serviceOrderD/:obj',
    name: 'serviceOrderD',
    meta: {
      title: '服务订单',
    },
    component: serviceOrderD
  },
  // 服务订单列表
  {
    path: '/sOrderList/:obj',
    name: 'sOrderList',
    meta: {
      title: '服务订单列表'
    },
    component: sOrderList
  },
  // 数据统计
  {
    path: '/dataStatistics/:obj',
    name: 'dataStatistics',
    meta: {
      title: '数据统计',
    },
    component: dataStatistics
  },
  // 数据统计详情
  {
    path: '/dataDetails/:obj',
    name: 'dataDetails',
    meta: {
      title: '数据统计详情',
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
    // 设置
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
    // 金额充值
    path: '/recharge/:obj',
    name: 'recharge',
    meta: {
      title: '金额充值',
    },
    component: recharge
  },

  {
    //新建订单
    path: '/newOrder/:obj',
    name: 'newOrder',
    meta: {
      title: '新建订单',
    },
    component: newOrder
  },
  {
    //会员操作
    path: '/memberOperation/:obj',
    name: 'memberOperation',
    meta: {
      title: '会员操作',
    },
    component: memberOperation
  },
  {
    //会员操作详情
    path: '/memberD/:obj',
    name: 'memberD',
    meta: {
      title: '会员操作详情',
    },
    component: memberD
  },
  {
    // 充值记录
    path: '/rechargeList/:obj',
    name: 'rechargeList',
    meta: {
      title: '充值记录'
    },
    component: rechargeList
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
