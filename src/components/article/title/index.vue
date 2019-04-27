<template>
  <div class="article-wrap">
    <slot name="title">
      <div class="title">{{data}}</div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: "title"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>