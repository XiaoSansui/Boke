<template>
  <div>
      <Curtain/>
      <Article/>
  </div>
</template>

<script>
import Curtain from "@/components/curtain/index";
import Article from "@/components/article/index";
export default {
  components: {
    Curtain,
    Article
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>