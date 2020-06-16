<template>
  <div id="banner">
    <van-swipe :autoplay="3000" style="height: 200px;" vertical>
      <van-swipe-item v-for="(list, index) in banners" :key="index">
        <a :href="list.link">
          <img v-lazy="list.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.van-swipe {
  width: 100%;
  height: 200px;
}
.van-swipe img {
  width: 100%;
  height: 200px;
}
.van-grid {
  margin-top: 20px;
}
</style>
