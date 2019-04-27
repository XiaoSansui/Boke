<template>
  <div class="article-wrap">
    <article class="wrap">
      <Heading :data="heading" slot="heading"/>
      <Title :data="title" slot="title"/>
      <Label :data="label" slot="label"/>
      <Tips :data="tips" slot="tips"/>
      <Synopsis :data="synopsis" slot="synopsis"/>
      <RecordList :data="recordList" slot="recordList"/>
      <Appreciate/>
    </article>
  </div>
</template>

<script>
import Heading from "./heading/index";
import Title from "./title/index";
import Label from "./label/index";
import Tips from "./tips/index";
import Synopsis from "./synopsis/index";
import RecordList from "./recordList/index";
import Appreciate from "./appreciate/index";
export default {
  data() {
    return {
      heading: "heading1",
      title: "title1",
      label: "label1",
      tips: "tips1",
      synopsis: 'synopsis1',
      recordList: ['1111','2222','3333']
    };
  },
  components: {
    Heading,
    Title,
    Label,
    Tips,
    Synopsis,
    RecordList,
    Appreciate
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>