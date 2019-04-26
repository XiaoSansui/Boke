<template>
  <div>
    <div class="musicPlayer">
      <div
        class="control"
        :class="controlAn||''"
        @animationend.stop="$emit('controlEnd','controlEnd')"
      >
        <!-- <i class="iconfont icon-xunhuanbofang"></i> -->
        <audio ref="music" :src="musicList[musicIndex]">您的浏览器不支持 audio 标签。</audio>
        <div class="playControl">
          <i @click="handlePrev" class="iconfont icon-shangyishou"></i>
          <i @click="handlePlay" class="iconfont" :class="playPause?'icon-zanting':'icon-bofang'"></i>
          <i @click="handleNext" class="iconfont icon-xiayishou"></i>
        </div>
        <div class="progressBar">
          <div class="progressMask" @mousedown="progressControl" ref="progressMask"></div>
          <div class="progress" ref="progress"></div>
          <span class="title">{{musicList[musicIndex]}}</span>
        </div>
        <div class="playConfig">
          <span class="time">{{musicCurrentTime}}/{{musicDuration}}</span>
          <i
            @click="handleloop"
            class="iconfont"
            :class="loop?'icon-danquxunhuan':'icon-xunhuanbofang'"
          ></i>
          <Volume :music="music"/>
          <i @click="handleList" class="iconfont icon-liebiao"></i>
          <div class="telescopic">
            <div class="top" :class="topAn||''" @click="handleComplete">
              <i class="iconfont icon-jiantou_shang"></i>
            </div>
            <div class="open" @click="handleOpen">
              <i class="iconfont icon-jiantou_zuo" v-if="showControl"></i>
              <i class="iconfont icon-jiantou_you" v-else></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="complete"
        :class="listAn||''"
        @animationend.stop="$emit('completeEnd','completeEnd')"
      >
        <div class="header">
          <span>Music</span>
          <i class="iconfont icon-jiantou_xia" @click="handleList"></i>
        </div>
        <div class="content">
          <div class="songSheet">
            <ul>
              <li class="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          <div class="lyric">
            <div class="scroll">
              <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div>
          <div class="cover" @click="showCover">
            <img src="/static/image/cz.png" ref="phonograph" class="phonograph">
            <div class="innerWrap" ref="coverWrap">
              <img
                ref="coverImg"
                src="https://p3.music.126.net/5RzaEbrKYSwYg7eu_5orKg==/109951163312444084.jpg?param=300y300"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Volume from "./Volume/index";
export default {
  data() {
    return {
      music: null, //音乐播放器
      musicList: [
        //歌曲列表
        "/static/可乐.mp3",
        "/static/岁月神偷.mp3",
        "/static/飞云之下.mp3"
      ],
      musicIndex: 0, //当前播放歌曲下标
      playPause: false, //播放暂停按钮状态
      musicLine: 0, //初始化当前音乐长度
      musicDuration: "00:00", // 音乐时间长度
      musicCurrentTime: "00:00", //已播放长度
      loop: false, //循环播放按钮
      sound: false, //音量按钮
      dragging: false, //音频是否加载完成
      barMove: {
        //播放进度条 move事件参数
        dragging: false, //是否开启拖拽
        itemMask: null, //操作元素的遮罩层
        item: null, //需要改变的元素
        itemMaskWidth: null, //操作元素的width
        offsetX: null, //偏移量
        count: null, //进度比例
        num: null //进度百分比
      },
      time1: null,
      time2: null,
      time3: null,
      time4: null,
      //-------------------------------
      showControl: false, //是否显示控制台
      showList: false, //是否显示菜单列表
      showComplete: false, //是否完整音乐播放器
      controlAn: false,
      completelAn: false,
      listAn: false,
      topAn: false
    };
  },
  methods: {
    //上一首
    handlePrev() {
      this.totalTime();
      //切换上一首 如果为第一首 则切换到最后一首歌。
      if (this.musicIndex > 0) {
        this.musicIndex = this.musicIndex - 1;
      } else {
        this.musicIndex = this.musicList.length - 1;
      }
      this.$refs.progress.style = `width:0;`;
      this.music.autoplay = true;
      console.log(this.musicList[this.musicIndex]);
      this.time3 = setTimeout(() => {
        if (this.music.readyState === 4) {
          this.dragging = true;
          this.playPause = true;
          this.musicLine = this.music.duration || 0;
          this.totalTime();
        } else {
          this.dragging = false;
        }
      }, 500);
    },
    //下一首
    handleNext() {
      //切换下一首 如果为最后一首 则切换到第一首歌。
      if (this.musicIndex < this.musicList.length - 1) {
        this.musicIndex = this.musicIndex + 1;
      } else {
        this.musicIndex = 0;
      }
      this.$refs.progress.style = `width:0;`;
      this.music.autoplay = true;
      console.log(this.musicList[this.musicIndex]);
      this.time3 = setTimeout(() => {
        if (this.music.readyState === 4) {
          this.dragging = true;
          this.playPause = true;
          this.musicLine = this.music.duration || 0;
          this.totalTime();
        } else {
          this.dragging = false;
        }
      }, 500);
    },
    //播放暂停
    handlePlay() {
      this.playPause = !this.playPause;
      this.dragging = true;
      this.showCover();
      if (this.playPause) {
        this.music.play();
      } else {
        this.music.pause();
      }
      this.musicLine = this.music.duration || 0;
      this.totalTime();
    },
    //循环控制
    handleloop() {
      this.loop = !this.loop;
      if (this.loop) {
        this.music.loop = true;
      } else {
        this.music.loop = false;
      }
    },
    //进度条控制
    progressControl() {
      this.barMove.itemMask = this.$refs.progressMask;
      this.barMove.item = this.$refs.progress;
      //鼠标按下的动作
      this.barMove.itemMask.onmousedown = this.progressDown;
      //鼠标移动的动作
      this.barMove.itemMask.onmousemove = this.progressMove;
      //鼠标抬起的动作
      window.onmouseup = this.progressUp;
    },
    progressDown(e) {
      this.barMove.dragging = true;
      this.barMove.itemMaskWidth = e.target.offsetWidth;
      this.barMove.offsetX = e.offsetX;
      this.barMove.count =
        1 -
        (this.barMove.itemMaskWidth - this.barMove.offsetX) /
          this.barMove.itemMaskWidth; //获取比例
      this.barMove.num = this.barMove.count * 100;
      //点击时同步播放进度条位置  保存当前的进度比例
      this.barMove.item.style = `width:${
        this.barMove.num
      }%;transition: width 0.2s;`;
      //音频加载完成才设置音乐播放位置
      if (this.dragging) {
        this.music.currentTime = this.musicLine * this.barMove.count;
      }
      //如果播放到100 如果不是单曲循环 则播放下一首
      if (this.barMove.num >= 100 && !this.loop) {
        this.handleNext();
      }
    },
    progressMove(e) {
      if (this.barMove.dragging) {
        this.barMove.offsetX = e.offsetX;
        this.barMove.count =
          1 -
          (this.barMove.itemMaskWidth - this.barMove.offsetX) /
            this.barMove.itemMaskWidth; //获取比例
        this.barMove.num = this.barMove.count * 100;
        this.barMove.item.style = `width:${this.barMove.num}%;transition: 0;`;
      }
    },
    progressUp(e) {
      //关闭拖拽 卸载move事件  将播放进度跳转到move的最后一次位置
      this.barMove.dragging = false;
      this.barMove.itemMask.onmousemove = null;
      this.barMove.itemMask = null;
      window.onmouseup = null;

      //音频加载完成才设置音乐播放位置
      if (this.dragging) {
        this.music.currentTime = this.musicLine * this.barMove.count;
      }
    },
    //播放时间
    totalTime() {
      clearInterval(this.time1);
      //返回音频的长度。
      let duration = this.musicLine;
      let obj = this.countTime(duration);
      this.musicDuration = `${obj["m"]}:${obj["s"]}`;
      this.time1 = setInterval(() => {
        let currentTime = this.music.currentTime || 0;
        let count = 1 - (this.musicLine - currentTime) / this.musicLine;
        this.$refs.progress.style = `width:${count * 100}%;`;
        if (count * 100 >= 100 && !this.loop) {
          this.handleNext();
        } else if (count * 100 >= 100 && this.loop) {
          this.music.load();
        }
        //设置或返回音频中的当前播放位置。
        duration = this.music.currentTime || 0;
        obj = this.countTime(duration);
        this.musicCurrentTime = `${obj["m"]}:${obj["s"]}`;
      }, 500);
    },
    countTime(duration) {
      let m = Math.floor(duration / 60);
      let s = Math.floor(((duration / 60) % 1) * 60);
      m = m < 0 ? "00" : m < 10 ? "0" + m : m + "";
      s = s < 0 ? "00" : s < 10 ? "0" + s : s + "";
      return { m, s };
    },
    //控制台transitionend结束事件
    controlEnd() {
      this.topAn = this.showControl ? "hideTop" : "showTop";
      if (this.showControl && this.showComplete && this.showList) {
        this.listAn = "showList";
      }
    },
    //完整音乐播放器transitionend结束事件
    completeEnd() {
      if (this.showControl && !this.showComplete && !this.showList) {
        this.controlAn = "hideControl";
        this.showList = false;
        this.showControl = false;
      }
    },
    //更改控制台显示状态
    handleOpen() {
      if (this.showControl && this.showComplete && this.showList) {
        this.showComplete = false;
        this.showList = false;
        this.listAn = "hideList";
      } else {
        this.showControl = !this.showControl;
        this.controlAn = this.showControl ? "showControl" : "hideControl";
        if (!this.showControl) {
          this.showComplete = false;
          this.showList = false;
        }
      }
    },
    //列表控制
    handleList() {
      this.showList = !this.showList;
      this.listAn = this.showList ? "showList" : "hideList";
    },
    //显示完整音乐播放器
    handleComplete() {
      this.showList = !this.showList;
      this.showComplete = !this.showComplete;
      this.showControl = !this.showControl;
      if (this.showControl && this.showComplete && this.showList) {
        this.controlAn = "showControl";
      }
    },
    showCover() {
      let deg = 0;
      console.log(this.playPause);
      if (this.playPause) {
        this.$refs.coverWrap.style =
          "border-radius:50%;box-shadow: 0 0 5px #111;";
        this.$refs.coverImg.style =
          "border-radius:50%;width:180px;height:180px;";
        this.$refs.phonograph.style = "transform: rotate(-80deg);";
        this.time4 = setInterval(() => {
          deg += 1;
          this.$refs.coverWrap.style = `border-radius:50%;box-shadow: 0 0 5px #111;transform: rotate(-${deg}deg);`;
        }, 60);
      } else {
        clearInterval(this.time4);
        this.$refs.phonograph.style = "transform: rotate(-110deg);";
        this.$refs.coverWrap.style =
          "border-radius:0;box-shadow: 0 0 10px #555 inset;";
        this.$refs.coverImg.style = "border-radius:0;width:230px;height:230px;";
      }
    }
  },
  mounted() {
    this.music = this.$refs.music;
    this.$nextTick(() => {
      //优化音频加载
      this.time2 = setTimeout(() => {
        if (this.music.readyState === 4) {
          this.musicLine = this.music.duration;
          this.dragging = true;
          this.totalTime();
        }
      }, 500);
    });
    this.progressControl();
    // this.volumeControl();
    //转发transitionend事件
    this.$on("controlEnd", msg => {
      this.controlEnd();
    });
    this.$on("completeEnd", msg => {
      this.completeEnd();
    });
  },
  destroyed() {
    clearInterval(this.time1);
    clearTimeout(this.time2);
    clearTimeout(this.time3);
  },
  components: {
    Volume
  }
};
</script>

<style lang="scss" scoped>
@import "./music.scss";
@import "./animation.scss";
</style>