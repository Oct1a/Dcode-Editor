import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes.js'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router