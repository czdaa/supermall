<template>
  <div id="goods">
    <good-item v-for="item in goodlist" :gooditem="item" />
  </div>
</template>
<script>
import GoodItem from "./goodItem";
export default {
  name: "goods",
  props: {
    goodlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodItem
  }
};
</script>
<style scoped>
#goods {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
