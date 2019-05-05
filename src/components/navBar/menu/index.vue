<template>
  <div>
    <div class="wrapper">
      <div class="icon nav-icon-5" onclick="this.classList.toggle('open')">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

/* nav-icon-5 */
.nav-icon-5 {
  width: 35px;
  height: 30px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transform: scale(.7)
}
.nav-icon-5 span {
  background-color: #666;
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