<template>
  <div class="article-wrap">
    <slot name="synopsis">
      <div class="synopsis">
        <p>{{data}}</p>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: "synopsis"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>