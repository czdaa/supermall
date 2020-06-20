<template>
  <div id="search">
    <nav-bar>
      <h3 slot="center">搜索</h3>
    </nav-bar>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/navbar";
export default {
  name: "search",
  data() {
    return {
      value: ""
    };
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.search {
  width: 100%;
  height: 100vh;
}
.nav-bar {
  background-color: rgb(243, 81, 129);
  color: white;
  z-index: 999;
}
.search van-search {
  margin-top: 100px;
}
</style>
