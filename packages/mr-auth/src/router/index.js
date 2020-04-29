import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Recover from '../views/Recover.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

export const AUTH_ROUTES = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: AUTH_ROUTES
})

export default router
