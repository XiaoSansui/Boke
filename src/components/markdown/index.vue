<template>
  <div>
    <Editor /></div>
</template>

<script>
import { Editor } from "@toast-ui/vue-editor";

export default {
    components:{Editor},
  mounted() {
    // var Editor = require("tui-editor");
    // var editor = new Editor({
    //   el: document.querySelector("#editSection"),
    //   initialEditType: "markdown",
    //   previewStyle: "vertical",
    //   height: "300px"
    // });
  }
};
</script>

<style lang="scss" scoped>
</style>