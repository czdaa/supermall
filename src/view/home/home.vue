<template>
  <!-- 首页 -->
  <div id="home">
    <!-- 标题 -->
    <nav-bar>
      <h3 slot="center">首页</h3>
    </nav-bar>
    <banner :banners="banners" />
    <recommend :recommends="recommends" />
  </div>
</template>
<script>
// 底部栏
import NavBar from "../../components/common/navbar/navbar";
// 导入主页的网络请求
import { getHomeMultidata } from "../../newwork/home";
//轮播图
import banner from "../home/childComps/banner";
import recommend from "../home/childComps/recommend";
export default {
  name: "home",
  components: {
    NavBar,
    banner,
    recommend
  },
  data() {
    return {
      //导航栏数据
      banners: [],
      //分栏数据
      recommends: []
    };
  },
  //当页面加载完成后发送网络请求
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      //函数执行完后将导航栏数据给到banners
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: rgb(243, 81, 129);
  color: white;
}
.recommend {
  border-bottom: 10px solid rgb(100, 100, 100);
}
</style>
