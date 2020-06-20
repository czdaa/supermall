<template>
  <div>
    <van-tabbar route active-color="#F35181">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tapbar",
  data() {
    return {};
  },
};
</script>
<style scoped>
van-tabbar {
  z-index: 100;
}
</style>
