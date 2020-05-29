import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    {path: '/',name: 'Home',component: Home,children:[
      {path: '/order/orderSearch',name: 'orderSearch',component: () => import('../views/order/orderSearch.vue'),meta:['订单管理','订单查询']},
      {path: '/order/uploadModules',name: 'uploadModules',component: () => import('../views/modules/uploadModules.vue'),meta:['系统模块管理','系统上传模块管理']}
    ]},
    {path: '/about',name: 'About',component: () => import('../views/About.vue')}
  ]
})
