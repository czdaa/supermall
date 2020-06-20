<template>
  <!-- 商品 -->
  <div id="goodlistitem" @click="itemclick">
    <div class="content">
      <img class="item-phot" :src="gooditem.show.img" />
      <div class="title">
        <h3>{{ gooditem.title }}</h3>
      </div>
      <div class="price">
        <p class="normal">原价:{{ gooditem.orgPrice }}</p>
        <p class="sell">特价:{{ gooditem.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodlistitem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    //跳转页面并携带当前商品的id
    itemclick() {
      this.$router.push("./detail/" + this.gooditem.iid);
    }
  }
};
</script>
<style scoped>
#goodlistitem {
  width: 48%;
  border-radius: 30px;
  margin: 5px auto;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.item-phot {
  width: 100%;
  border-radius: 8px;
}
.title h3 {
  width: 95%;
  height: 15px;
  overflow: hidden;
  font-size: 16px;
  color: black;
  text-overflow: ellipsis;
}
.price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin: 5px 5px;
}
.normal {
  text-decoration: line-through;
}
.sell {
  color: rgb(250, 79, 94);
}
</style>
