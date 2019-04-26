<template>
  <div class="navWrap">
    <div class="avatar">
      <img src="/static/image/bg-53.jpg" alt="avatar">
    </div>
    <div class="barList">
      <div>me</div>
      <div>search</div>
      <div @click="handleMenu">menu</div>
      <ul class="menuList" :class="menuStatus?'menuListShow':'menuListHide'">
        <li>视频</li>
        <li>聚焦</li>
        <li>软件</li>
        <li>文章</li>
        <li>美句</li>
        <li>创意工坊</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuStatus: false
    };
  },
  methods: {
    handleMenu() {
      // this.menuStatus = !this.menuStatus;
      this.$set(this, "menuStatus", !this.menuStatus);
      console.log(this.menuStatus);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "./index.scss";
</style>