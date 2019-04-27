<template>
  <div class="article-wrap">
    <slot name="label">
      <div class="label">
        <div class="icon">
          <i class="iconfont icon-xiayishou"></i>
        </div>
        <div class="content">
          <p>{{data}}</p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: "label"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>