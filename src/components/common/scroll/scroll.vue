//better-scroll滚动条封装
<template>
  <div class="warpper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    ProbeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.ProbeType,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    //在内容加载完成之后重新计算滚动条高度
    this.scroll.refresh();
  },
  methods: {
    //回到顶部函数
    scorllTo(x, y, time, easing) {
      this.scroll.scrollTo(x, y, time, easing);
    },
  },
};
</script>
<style></style>
