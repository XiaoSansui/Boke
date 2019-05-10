<template>
  <div class="serchWrap" :class="showSerchWrap?'showSerchWrap':'hideSerchWrap'">
    <div class="serchInput">123123123</div>
    <div class="close" @click="closeWrap">
      <span>
        <span class="svg-container">
          <svg class="icon icon-serchClose" aria-hidden="true">
            <use xlink:href="#icon-baseline-close-px"></use>
          </svg>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSerchWrap: {
      type: Boolean
    }
  },
  methods: {
    closeWrap() {
      this.$emit("closeWrap");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>