import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import User from '@/view/User/User.vue'
import Admin from '@/view/Admin/Admin.vue'
import Register from '@/view/Register/Register'
import seckillAdd from '@/view/SeckillAdd/SeckillAdd'
import Order from '@/view/Order/Order'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path:'/register',
    component: Register,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/User',
        component: User
      },
      {
        path: '/Admin',
        component: Admin
      },
      {
        path:'/seckillAdd',
        component: seckillAdd
      },
      {
        path:'/Order',
        component: Order
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

// 挂载路由导航守卫
// to 访问的路径
// from 代表从哪个路径转跳而来
// next 放行
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
