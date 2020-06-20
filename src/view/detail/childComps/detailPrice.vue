<template>
  <div id="detailIntro">
    <div class="shop-message">
      <h3 class="shop-title">{{itemInfo.title}}</h3>
      <div class="price">
        <p class="lowNowPrice">${{itemInfo.lowNowPrice}}</p>
        <p class="oldPrice">{{itemInfo.lowPrice}}</p>
      </div>
      <div class="sellStatus">
        <div v-for="(item,index) in columns" :key="index">
          <p>{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailIntro",
  data() {
    return {};
  },
  props: {
    //商品介绍数据
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
    // goodMessage: {
    //   type: Object,
    //   default() {
    //     return {};
    //   }
    // }
  }
};
</script>
<style scoped>
#detailIntro {
  width: 100%;
}
.shop-message {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px 10px;
}
.shop-title {
  color: rgb(85, 59, 73);
  font-size: 18px;
  line-height: 18px;
}
.price {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 10px 10px;
}
.lowNowPrice {
  margin-right: 10px;
  color: rgb(248, 78, 106);
  font-size: 20px;
}
.oldPrice {
  font-size: 13px;
  text-decoration: line-through;
}
.sellStatus {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>