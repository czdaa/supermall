<template>
  <!-- 首页 -->

  <div id="home" class="wrapper">
    <!-- 标题 -->
    <nav-bar>
      <h3 slot="center">首页</h3>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollMove">
      <!-- 广告栏 -->
      <banner :banners="banners" />
      <!-- 导航栏  -->
      <recommend :recommends="recommends" />
      <!-- 底部推荐 -->
      <tab-btn :shoplist="goods"></tab-btn>
    </scroll>
    <back-top
      class="backtopbtn"
      @click.native="backTop"
      v-show="status"
    ></back-top>
  </div>
</template>
<script>
// 底部栏
import NavBar from "../../components/common/navbar/navbar";
// 导入主页的网络请求
import { getHomeMultidata, getHomeGoods } from "../../newwork/home";
//轮播图
import banner from "../home/childComps/banner";
//分类
import recommend from "../home/childComps/recommend";
// 底部栏
import TabBtn from "../home/childComps/TabBtn";
//滚动
import Scroll from "../../components/common/scroll/scroll";
//回到顶部
import BackTop from "../../components/content/backtop/backtop";
export default {
  name: "home",
  components: {
    NavBar,
    banner,
    recommend,
    TabBtn,
    Scroll,
    BackTop,
  },
  data() {
    return {
      //导航栏数据
      banners: [],
      //分栏数据
      recommends: [],
      //滚动栏内容
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      status: false,
    };
  },
  //当页面加载完成后发送网络请求
  created() {
    //调用method里的方法请求网络数据
    this.getMultidata();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
    this.$bus.$on("itemimageload", () => {
      console.log("success");
    });
  },

  methods: {
    //f封装网络请求函数

    //请求导航栏数据
    getMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        //函数执行完后将导航栏数据给到banners
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //请求商品列表
    getGoods(type) {
      //请求页数
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res.data.list);
        const goodList = res.data.list;
        //将拿到的商品列表一次性push到goods中  es6新语法
        this.goods[type].list.push(...goodList);
        this.goods[type].page += 1;
      });
    },

    //业务逻辑

    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scrollMove(position) {
      const positiony = -position.y;
      if (positiony > 1000) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: rgb(243, 81, 129);
  color: white;
  z-index: 999;
  position: fixed;
  left: 0px;
  top: 0px;
}
.recommend {
  border-bottom: 10px solid rgb(100, 100, 100);
}
#home {
  height: 100vh;
}
.content {
  height: calc(100% - 94px);
  overflow: hidden;
  margin-top: 44px;
}
.backtopbtn {
  position: fixed;
  bottom: 60px;
  right: 20px;
}
</style>
