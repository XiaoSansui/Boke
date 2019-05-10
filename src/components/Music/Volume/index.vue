<template>
  <div class="sound">
    <i @click="soundControl" class="iconfont" :class="sound?'icon-jingyin':'icon-yinliang'"></i>
    <div class="volumeWrap">
      <div class="volumeMask" @mousedown="volumeControl" ref="volumeMask"></div>
      <div ref="volume" class="volume">
        <div ref="sliderBar" class="sliderBar"></div>
        <div ref="slider" class="slider"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["music"],
  data() {
    return {
      sound: false, //音量按钮
      soundMove: {
        //音乐调节进度条 move事件参数
        dragging: false, //是否开启拖拽
        itemMask: null, //操作元素的遮罩层
        item1: null, //需要改变的元素
        item2: null, //需要改变的元素
        itemMaskWidth: null, //操作元素的width
        offsetX: null, //偏移量
        count: null, //进度比例
        num: null //进度百分比
      }
    };
  },
  methods: {
    //声音控制
    soundControl() {
      //设置或返回是否关闭声音。
      this.sound = !this.sound;
      if (this.sound) {
        this.music.muted = true;
      } else {
        this.music.muted = false;
      }
      //设置或返回音频的音量。
      console.log("当前音量：", this.music.volume);
    },
    volumeControl(e) {
      if (this.music) {
        this.music.volume = 1; //默认满音量
      }
      this.soundMove.itemMask = this.$refs.volumeMask;
      this.soundMove.item1 = this.$refs.sliderBar;
      this.soundMove.item2 = this.$refs.slider;
      //鼠标按下的动作
      this.soundMove.itemMask.onmousedown = this.volumeDown;
      //鼠标移动的动作
      this.soundMove.itemMask.onmousemove = this.volumeMove;
      //鼠标抬起的动作
      window.onmouseup = this.volumeUp;
    },
    volumeDown(e) {
      this.soundMove.dragging = true;
      this.soundMove.itemMaskWidth = e.target.offsetWidth;
      this.soundMove.offsetX = e.offsetX;
      this.soundMove.count =
        1 -
        (this.soundMove.itemMaskWidth - this.soundMove.offsetX) /
          this.soundMove.itemMaskWidth; //获取比例
      this.soundMove.num = this.soundMove.count * 100;

      this.music.volume = this.soundMove.num / 100; //设置音量
      this.soundMove.item1.style = `width:${this.soundMove.num}%;`;
      this.soundMove.item2.style = `left:calc(${this.soundMove.num}% - 6px)`;
      //如果音量小于5 变成静音状态
      if (this.soundMove.num < 5) {
        this.sound = true;
        this.music.muted = true;
      } else {
        this.sound = false;
        this.music.muted = false;
      }
    },
    volumeMove(e) {
      if (this.soundMove.dragging) {
        this.soundMove.offsetX = e.offsetX;
        this.soundMove.count =
          1 -
          (this.soundMove.itemMaskWidth - this.soundMove.offsetX) /
            this.soundMove.itemMaskWidth; //获取比例
        this.soundMove.num = this.soundMove.count * 100;
        this.soundMove.item1.style = `width:${this.soundMove.num}%;`;
        this.soundMove.item2.style = `left:calc(${this.soundMove.num}% - 6px)`;
        this.music.volume = this.soundMove.count; //设置音量
        //如果音量小于5 变成静音状态
        if (this.soundMove.num < 5) {
          this.sound = true;
          this.music.muted = true;
        } else {
          this.sound = false;
          this.music.muted = false;
        }
      }
    },
    volumeUp(e) {
      //关闭拖拽 卸载move事件
      this.soundMove.dragging = false;
      this.soundMove.itemMask.onmousemove = null;
      this.soundMove.itemMask = null;
      window.onmouseup = null;
    }
  },
  mounted() {
    this.volumeControl();
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "../animation.scss";
</style>