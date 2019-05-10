<template>
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/navBar/Index";

export default {
   components: {
    NavBar,
  }
};
</script>

<style lang='scss'>
@import "../static/reset.css";
@import "./assets/animation.scss";
</style>
