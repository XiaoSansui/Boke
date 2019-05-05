<template>
  <div>
      <Curtain/>
      <Editor/>
      <Article/>
  </div>
</template>

<script>
import Curtain from "@/components/curtain/index";
import Article from "@/components/article/index";
import Editor from "@/components/editor/index";
export default {
  components: {
    Curtain,
    Article,
    Editor,
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>