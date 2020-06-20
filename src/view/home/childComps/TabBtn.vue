<template>
  <div id="tabbtn">
    <van-tabs type="card" animated sticky>
      <van-tab title="推荐">
        <!-- 将home页拿过来的pop数据传递给goods渲染 -->
        <goods :goodlist="shoplist['pop'].list" />
      </van-tab>
      <van-tab title="精选">
        <!-- 将home页拿过来的new数据传递给goods渲染 -->
        <goods :goodlist="shoplist['new'].list" />
      </van-tab>
      <van-tab title="最新">
        <!-- 将home页拿过来的sell数据传递给goods渲染 -->
        <goods :goodlist="shoplist['sell'].list" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import goods from "../../../components/content/goods";
export default {
  name: "tabbtn",
  components: {
    goods
  },
  props: {
    shoplist: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
</style>