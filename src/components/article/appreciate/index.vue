<template>
  <div class="article-wrap">
    <div class="appreciate-wrap">
      <div class="icon noselect">
        <span>赏</span>
      </div>
      <div class="QRCode">
        <div class="qrwrap">
          <span class="zdb-icon">icon</span>
          <img src="../../../../static/image/bg-62.jpg" alt>
          <p>支付宝</p>
        </div>
        <div class="qrwrap">
          <span class="wx-icon">icon</span>
          <img src="../../../../static/image/bg-62.jpg" alt>
          <p>微信</p>
        </div>
      </div>
      <div class="summary">
        <p class="agreement">123123123123</p>
        <div class="flexWrap">
          <div class="share">
            <span>分享</span>
          </div>
          <div class="assess">
            <span>评价</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: "appreciate"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>