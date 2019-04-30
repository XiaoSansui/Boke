<template>
  <div class="navBarWrap">
    <div ref="navBar" class="navWrap 123" @mouseenter="navWrapShow" @mouseleave="navWrapHide">
      <div class="avatar" @click="jumpPage('page-homepage')">
        <img src="/static/image/bg-53.jpg" alt="avatar">
      </div>
      <div class="barList">
        <div>
          <span>
        <span class="svg-container">
          <svg class="icon icon-nav" aria-hidden="true">
            <use xlink:href="#icon-ziyuan15"></use>
          </svg>
        </span>
      </span>
        </div>
        <div>
          <span>
        <span class="svg-container">
          <svg class="icon icon-nav" aria-hidden="true">
            <use xlink:href="#icon-ziyuan23"></use>
          </svg>
        </span>
      </span>
        </div>
        <div @click="handleMenu"> <span>
        <span class="svg-container">
          <svg class="icon icon-nav" aria-hidden="true">
            <use xlink:href="#icon-ziyuan19"></use>
          </svg>
        </span>
      </span></div>
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
    <img
      src="/static/image/gotop.png"
      alt
      ref="goTop"
      @mouseenter="(e)=>{e.target.classList.add('goTopBtn')}"
      @mouseleave="(e)=>{e.target.classList.remove('goTopBtn')}"
      class="goTop"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuStatus: false,
      scrolltop: false,
      navWrapStatus: false
    };
  },
  mounted() {
    this.scrollAnimation();

    this.mouseScroll();
  },
  methods: {
    //鼠标上下滚动事件
    mouseScroll() {
      //判断鼠标滚轮滚动方向
      if (window.addEventListener) {
        //FF,火狐浏览器会识别该方法
        window.addEventListener("DOMMouseScroll", this.wheel, false);
      }
      window.onmousewheel = document.onmousewheel = this.wheel; //W3C
    },
    //统一处理滚轮滚动事件
    wheel(event) {
      let delta = 0;
      event = event || window.event;
      if (event.wheelDelta) {
        //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
        if (window.opera) delta = -delta;
      } else if (event.detail) {
        //FF浏览器使用的是detail,其值为“正负3”
        delta = -event.detail / 3;
      }
      if (delta) {
        this.showNavBar(delta);
      }
    },
    navWrapShow() {
      let navBar = this.$refs.navBar;
      navBar.style.cssText =
        "background: rgba(255, 255, 255, 1);border-bottom: 1px solid #d4d4d4;";
    },
    navWrapHide() {
      let navBar = this.$refs.navBar;
      navBar.style.cssText =
        "background: rgba(255, 255, 255, 0);border-bottom: 1px solid rgba(0, 0, 0, 0)";
    },
    showNavBar(delta) {
      if (delta < 0) {
        //向下滚动
        this.scrolltop = false;
      } else {
        //向上滚动
        this.scrolltop = true;
      }
    },
    //回到顶部事件 / 隐藏头部导航
    scrollAnimation() {
      let btn = this.$refs.goTop;
      let navBar = this.$refs.navBar;
      let timer = null;
      window.onscroll = () => {
        let scroll_top =
          document.documentElement.scrollTop || document.body.scrollTop;
        let scrollheight = document.body.scrollHeight; //页高
        if (scroll_top < 300) {
          //未超过300
          btn.style.transform = "translateY(50vh)";
          navBar.style.cssText =
            "transform:translateY(0);background: rgba(255, 255, 255, 0);border-bottom: 1px solid rgba(0, 0, 0, 0)";
        } else {
          btn.style.transform = "translateY(0)";
          navBar.style.cssText =
            "transform:translateY(-20vh);background: rgba(255, 255, 255, 1);border-bottom: 1px solid rgba(0, 0, 0, 0)";
          if (this.scrolltop) {
            navBar.style.cssText =
              "transform:translateY(0);background: rgba(255, 255, 255, 1);border-bottom: 1px solid #d4d4d4;";
          }
        }
        btn.onclick = function() {
          clearInterval(timer);
          if (scroll_top > 0) {
            timer = setInterval(function() {
              let speed = (0 - scroll_top) / 10;
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
              scroll_top = scroll_top + speed;
              document.documentElement.scrollTop = scroll_top;
              if (scroll_top <= 0) {
                clearInterval(timer);
              }
            }, 20);
          }
        };
      };
    },

    //控制menu显示
    handleMenu() {
      this.menuStatus = !this.menuStatus;
      // this.$set(this, "menuStatus", !this.menuStatus);
      console.log(this.menuStatus);
    },
    //控制menu显示
    handlenavWrap() {
      this.navWrapStatus = !this.navWrapStatus;
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