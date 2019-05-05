<template>
  <div class="article-wrap">
    <slot name="recordList">
      <div class="recordList">
        <div class="content">
          <ul>
            <li v-for="(item,index) in data" :key="index">
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: "recordList"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>