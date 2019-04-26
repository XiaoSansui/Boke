<template>
  <div>
    <NavBar/>
    <MaskInfo/>
    <Music/>
    <div class="top">
      <div class="mask"></div>
    </div>
    <div class="middle">
      <div class="notice">
        <p>
          <span>icon</span>公告~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <Focusing/>
      <Posts/>
    </div>
    <div class="footer">底部信息</div>
  </div>
</template>

<script>
import NavBar from "../../../components/navBar";
import MaskInfo from "../../../components/maskInfo";
import Focusing from "../../../components/focusing";
import Posts from "../../../components/posts";
import Music from "../../../components/Music/music";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    MaskInfo,
    Focusing,
    Posts,
    Music
  }
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("/static/image/bg-62.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background-image: url("/static/image/grid.png");
    background-repeat: repeat;
  }
}
.middle {
  width: 60vw;
  margin: 0 auto;
  padding: 2em 0;
  .notice {
    width: 100%;
    height: 4em;
    border: 2px dashed #c9c9c9;
    text-align: center;
    background: #fbfbfb;
    p {
      font-size: 20px;
      font-weight: 400;
      color: #333;
      line-height: 3em;
    }
  }
}
.footer {
  text-align: center;
  border: 1px solid black;
  height: 100px;
  line-height: 100px;
}
</style>
