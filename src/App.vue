<template>
  <div id="app">
    <router-view></router-view>
    <tap-bar />
  </div>
</template>

<script>
import TapBar from "./components/content/tapbar";
export default {
  name: "App",
  components: {
    TapBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
