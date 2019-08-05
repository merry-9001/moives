import Vue from 'vue'
import Router from 'vue-router'
import moiveRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base:'moives',
  routes: [
    moiveRouter,
    mineRouter,
    cinemaRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
