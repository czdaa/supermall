<template>
  <div id="detail">
    <nav-bar>
      <img
        slot="left"
        src="../../../static/img/back-home.png"
        alt
        @click="backHome"
      />
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in title"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
    <scroll class="wrapper">
      <div class="content">
        <detail-swiper
          class="swiper"
          :sliverlist="sliver"
          :goodsIntr="itemInfo"
        ></detail-swiper>
        <detail-price :itemInfo="itemInfo" :columns="columns"></detail-price>
      </div>
    </scroll>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import { Toast } from "vant";
import NavBar from "../../../components/common/navbar/navbar";
import scroll from "../../../components/common/scroll/scroll";
import { getDetail, Goods } from "../../../newwork/detail";
import DetailSwiper from "./detailSwiper";
import DetailPrice from "./detailPrice";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      //广告栏数据
      sliver: [],
      //标签栏数据
      itemInfo: {},
      //商品销售情况
      columns: [],
      //商品信息
      goodsInfo: {},
    };
  },
  created() {
    console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;
    //调用getDetail传入id发送网络请求
    this.getItem();
  },
  components: {
    NavBar,
    scroll,
    DetailSwiper,
    DetailPrice,
  },
  methods: {
    //数据请求
    getItem() {
      getDetail(this.iid).then((res) => {
        console.log(res);

        this.sliver = res.result.itemInfo.topImages;
        this.itemInfo = res.result.itemInfo;
        this.columns = res.result.columns;
        this.goodsInfo = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result,
          this.iid
        );
        console.log(this.goodsInfo);
      });
    },

    //业务逻辑
    titleClick(index) {
      this.currentIndex = index;
    },
    backHome() {
      this.$router.back();
    },
    addCart() {
      Toast("已加入购物车");
      console.log(this.$store.state);

      this.$store.commit("cartadd", this.goodsInfo);
    },
    goCart() {
      this.$router.replace("/cart");
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: rgb(243, 81, 129);
  color: white;
}
.nav-bar img {
  width: 30px;
  height: 30px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  margin: 10px;
}
.active {
  color: black;
}
.content {
  width: 100%;
  height: 100vh;
}
.van-goods-action {
  position: fixed;
  left: 0px;
  bottom: 50px;
}
</style>
