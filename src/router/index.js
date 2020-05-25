import Router from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Me = () => import('views/me/Me')
const Details = () => import('views/details/Details')
Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path: '',
            redirect: '/home'
          },
          {
            path: '/home',
            component: Home
          },
          {
            path: '/category',
            component: Category
          },
          {
            path: '/cart',
            component: Cart
          },
          {
            path: '/me',
            component: Me
          },
          {
            path: '/details/:iid',
            component: Details
          }
    ],
    mode: "history"
})

export default router