<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* 导航栏左、右侧 */
.nav-bar > .left,
.right {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 导航栏中间布局 */
.nav-bar > .center {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>