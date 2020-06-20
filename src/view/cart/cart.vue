<template>
  <div id="cart">
    <nav-bar>
      <h3 slot="left" @click="backHome">
        <img src="../../static/img/back-home.png" alt />
      </h3>
      <h3 slot="center">购物车({{ cartLength }})</h3>
    </nav-bar>
    <scroll class="warpper">
      <div class="content">
        <div v-for="(item, index) in cartList" :key="index">
          <cart-item :cartitem="item"></cart-item>
        </div>
      </div>
    </scroll>
    <van-submit-bar
      :price="$store.state.total"
      button-text="提交订单"
      @submit="onSubmit"
    >
    </van-submit-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/navbar";
import CartItem from "../../view/cart/childComps/cartItem";
import scroll from "../../components/common/scroll/scroll";
export default {
  name: "cart",
  data() {
    return {
      cartList: null,
    };
  },
  components: {
    NavBar,
    CartItem,
    scroll,
  },
  methods: {
    backHome() {
      this.$router.push("/home");
    },
    onSubmit() {},
  },
  computed: {
    cartLength() {
      this.cartList = this.$store.state.cartList;
      return this.$store.state.cartList.length;
    },
  },
  data() {
    return {
      checked: true,
      total: 4000,
    };
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: rgb(243, 81, 129);
  color: white;
  z-index: 999;
}
.van-submit-bar {
  position: fixed;
  bottom: 50px;
}
h3 img {
  width: 30px;
  height: 30px;
}
.wrapper {
  height: 100vh;
}
/* .wrapper .content {
  height: 100vh;
} */
</style>
