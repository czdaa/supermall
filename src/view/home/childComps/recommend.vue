<template>
  <div id="recommend">
    <van-grid clickable :column-num="4">
      <van-grid-item
        v-for="value in recommends"
        :key="value"
        :icon="value.image"
        :text="value.title"
        :url="value.link"
      />
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped></style>
