<template>
  <div id="tabbtn">
    <van-tabs v-model="active" sticky>
      <van-tab v-for="index in 4" :title="'选项 ' + index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "tabbtn",
  data() {
    return {
      active: 1
    };
  }
};
</script>
<style scoped>
</style>