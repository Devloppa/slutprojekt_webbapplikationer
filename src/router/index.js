import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminArea from '@/views/AdminArea'
import ProductList from '@/views/ProductList'
import Checkout from '@/views/Checkout'
import Registration from '@/views/Registration'
import MyAccount from '@/views/MyAccount'

Vue.use(VueRouter)

  const routes = [

  { path: '/', redirect: '/productlist' },

  {
    path: '/adminarea',
    name: 'AdminArea',
    component: AdminArea
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router