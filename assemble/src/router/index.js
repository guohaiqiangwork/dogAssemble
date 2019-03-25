import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/index'
import personal from '@/views/personal/index'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      // 首页
      path: '/',
      name: 'home',
      component: home
    },
    {
      // 个人中心
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      // 初始化
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
