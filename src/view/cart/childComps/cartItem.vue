<template>
  <div id="cartItem">
    <van-card
      :num="cart.count"
      :price="cart.realprice"
      :desc="cart.desc"
      :title="cart.title"
      :thumb="cart.Images"
      :origin-price="cart.oldPrice"
    />
  </div>
</template>
<script>
export default {
  name: "cartItem",
  data() {
    return {
      cart: null,
    };
  },
  props: {
    cartitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.cartitem);
    this.cart = this.cartitem;
    this.$store.commit("countTotal");
  },
};
</script>
<style scoped></style>
