<template>
  <div>
    <MaskInfo/>
    <Music/>
    <div class="top">
      <div class="mask"></div>
    </div>
    <div class="middle">
      <Notice/>
      <Focusing/>
      <Posts/>
    </div>
    <div class="footer">底部信息</div>
  </div>
</template>

<script>
import Notice from "@/components/notice";
import MaskInfo from "@/components/maskInfo";
import Focusing from "@/components/focusing";
import Posts from "@/components/posts";
import Music from "@/components/Music/music";
export default {
  data() {
    return {};
  },
  components: {
    MaskInfo,
    Focusing,
    Posts,
    Music,
    Notice
  }
};
</script>

<style scoped lang="scss">
@import "./Index.scss";
</style>
