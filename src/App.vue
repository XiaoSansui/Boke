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

<style>
@import "../static/reset.css";
</style>
