import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('../pages/home/home.vue')
  }
]

export default new Router({
  routes
})