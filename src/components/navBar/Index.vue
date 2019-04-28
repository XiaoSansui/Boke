<template>
  <div class="navWrap">
    <div class="avatar" @click="jumpPage('page-homepage')">
      <img src="/static/image/bg-53.jpg" alt="avatar">
    </div>
    <div class="barList">
      <div>me</div>
      <div>search</div>
      <div @click="handleMenu">menu</div>
      <ul class="menuList" :class="menuStatus?'menuListShow':'menuListHide'">
        <li @click="jumpPage('page-video')">视频</li>
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
import { clearInterval } from "timers";
export default {
  data() {
    return {
      menuStatus: false
    };
  },
  methods: {
    //控制menu显示
    handleMenu() {
      this.menuStatus = !this.menuStatus;
      // this.$set(this, "menuStatus", !this.menuStatus);
      console.log(this.menuStatus);
    },
    //页面跳转
    jumpPage(name) {
      console.log("routename===>", name);
      this.$router.push({
        name: name,
        params: {}
      });
    }
  }
};
</script>

<style scoped lang='scss'>
@import "./index.scss";
</style>