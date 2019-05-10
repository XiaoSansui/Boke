<template>
  <div>
    <MaskInfo/>
    <Music/>
    <div class="top showHomePage">
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
import Notice from "@/components/notice/index";
import MaskInfo from "@/components/maskInfo/Index";
import Focusing from "@/components/focusing/index";
import Posts from "@/components/posts/index";
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
