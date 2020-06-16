//路由配置
import VueRouter from "vue-router";
import Vue from "vue";
import {
  Search
} from "vant";

//注册插件
Vue.use(VueRouter);

//懒加载
const home = () => import("../view/home/home.vue");
const search = () => import('../view/search/search');
const cart = () => import('../view/cart/cart');
const mine = () => import('../view/mine/mine');
const routes = [{
    path: "",
    redirect: home,
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/mine',
    component: mine
  },

];
//创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router