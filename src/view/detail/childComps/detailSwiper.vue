<template>
  <van-swipe :autoplay="3000" class="swiper">
    <van-swipe-item v-for="(image, index) in sliverlist" :key="index">
      <img :src="image" class="swiperItem" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "detailswiper",
  props: {
    //广告栏数据
    sliverlist: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.swiperItem {
  width: 100%;
  height: 250px;
}
.swiperItem {
  object-fit: cover;
}
</style>