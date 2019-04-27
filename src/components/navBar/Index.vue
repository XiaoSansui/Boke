<template>
  <div class="navWrap">
    <div class="loadingBar" ref="loadingBar"></div>
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
  created() {
    /* 
      document.onreadystatechange  页面加载状态改变时的事件 
      document.readyState 返回当前文档的状态 
      1. uninitialized  -  还未开始载入 
      2. loading        -  载入中 
      3. interactive    -  已加载，文档与用户可以开始交互 
      4. complete       -  载入完成 
    */
    document.onreadystatechange = () => {
      let timer;
      let bar = 0;
      timer = setInterval(() => {
        bar++;
        if (bar >= 90) {
          bar = 90;
          return;
        } else if (document.readyState === "complete") {
          this.$refs.loadingBar.style = `width:100%`;
        }
        this.$refs.loadingBar.style = `width:${bar}%`;
      }, 10);
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