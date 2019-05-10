<template>
  <div>
    <div ref="editor" class="editor"></div>
    <!-- <button v-on:click="getContent">查看内容</button> -->
  </div>
</template>

<script>
import Editor from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: ""
    };
  },
  mounted() {
    //https://www.kancloud.cn/wangfupeng/wangeditor3/332599 文档
    var editor = new Editor(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
      console.log(html);
    };
    //初始化编辑器
    editor.create();
  },
  methods: {
    // getContent() {
    //   console.log(this.editorContent);
    // }
  }
};
</script>

<style lang='scss'>
.editor {
  width: 45%;
  margin: 50px auto;
  text-align: left;
  .w-e-toolbar {
    flex-wrap: wrap;
  }
}
</style>