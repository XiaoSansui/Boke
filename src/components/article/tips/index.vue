<template>
  <div class="article-wrap">
    <slot name="tips">
      <div class="article-tips">
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
      default: "tips"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>