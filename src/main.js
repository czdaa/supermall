import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Search,
  SubmitBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Card
} from "vant";

Vue.use(Tab);
Vue.use(Tabs);
import router from "./router";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(SubmitBar)
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)
  .use(Card)
Vue.config.productionTip = false;
//创建事件总线用于监听不同文件夹下的组件之间的事件通信
Vue.prototype.$bus = new Vue()
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
});