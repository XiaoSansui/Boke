<template>
  <div class="menuWrap">
    <div class="wrapper" @click="handleIcon">
      <div class="icon nav-icon-5" ref="icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul class="menuList" ref="menuList">
      <li @click="jumpPage('page-video')">视频</li>
      <li @click="jumpPage('markdown')">聚焦</li>
      <li>软件</li>
      <li>文章</li>
      <li>美句</li>
      <li>创意工坊</li>
    </ul>
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
    handleIcon(e) {
      let a = this.$refs.icon.classList.toggle("open");
      this.$refs.menuList.classList.toggle("open");
      this.$emit('handleMenu')
      // this.menuStatus = a;
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

<style lang="scss" scoped>
.menuWrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1em;
  position: relative;
  .wrapper {
    position: absolute;
    z-index: 9;
  }
  .menuList {
    width: 400px;
    position: absolute;
    z-index: -1;
    line-height: 60px;
    transition: all .5s;
    transform: translateX(35px) ;
    visibility: hidden;
    opacity: 0;
      right:3em;
    &.open {
      visibility: visible;
      transform: translateX(0);
      opacity: 1;
      z-index: 1;
    }
    li {
      margin-right: 1em;
      float: right;
      cursor: pointer;
    }
  }
}
/* nav-icon-5 */
.nav-icon-5 {
  width: 35px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transform: scale(0.65);
}
.nav-icon-5 span {
  background-color: #333;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 3px;
  transition-duration: 150ms;
}
.nav-icon-5 span:nth-child(1) {
  top: 0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2) {
  top: 13px;
  left: 0px;
  opacity: 1;
}
.nav-icon-5 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
}
.nav-icon-5:not(.open):hover span:nth-child(1) {
  transform: rotate(-3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(2) {
  transform: rotate(3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(3) {
  transform: rotate(-4deg) scaleY(1.1);
}
.nav-icon-5.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 13px;
}
.nav-icon-5.open span:nth-child(2) {
  opacity: 0;
}
.nav-icon-5.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 13px;
}
</style>