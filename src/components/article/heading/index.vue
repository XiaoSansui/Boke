<template>
  <div class="article-wrap">
    <slot name="heading">
      <div class="heading">{{data}}</div>
    </slot>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:String,
      default:'heading'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>