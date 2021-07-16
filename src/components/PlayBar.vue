<template>
  <div id="PlayBar">
    <!-- 进度条 -->
    <div class="progress">
      <a-slider v-model="time" :max="max" @change="jump"/>
    </div>
    <!--  letterbox 信息  -->
    <div class="letterbox">
      <img :src="information.musicPhoto" alt="">
      <div class="text">
        <p class="title">{{ information.musicName }}</p>
        <p class="name">{{ information.name }}</p>
        <div class="time">{{ information.MusicTime | time }} / <span>{{ currentTime | time }}</span></div>
      </div>
    </div>

    <!--  播放  -->
    <div class="pally">
      <div class="left" @click="backAndForward('back')">
        <a-icon type="step-backward"/>
      </div>

      <div class="suspend-pally" @click="pally(taste)">
        <a-icon :type="taste"/>
      </div>

      <div class="right" @click="backAndForward('forward')">
        <a-icon type="step-forward"/>
      </div>
    </div>


    <!--  控制台  -->
    <div class="console">
      <!--   收藏   -->
      <div :class="{red:colors}" class="collection"
           @click="filledColor">
        <a-icon :theme="filled" type="heart"/>
      </div>
      <!--   音量   -->
      <div class="volume">
        <a-icon type="audio"/>
      </div>
      <!--   列表   -->
      <div class="list">
        <a-icon type="profile"/>
      </div>
    </div>
    <audio
        id="audio"
        ref="audio"
        :src="Mp3"
        autoplay
        @timeupdate="progress"
    >
    </audio>
  </div>
</template>

<script>
import {mapState} from "vuex/dist/vuex.mjs";

export default {
  name: "PlayBar",
  data() {
    return {
      colors: false,
      filled: 'outlined',
      time: 0,
      currentTime: 0,
      max: 0 //进度条的最大值
    }
  },
  methods: {
    //进度
    progress() {
      const audio = this.$refs.audio
      this.currentTime = audio.currentTime * 1000
      this.time = this.currentTime / 1000
      this.max = this.information.MusicTime / 1000

    }
    ,
    //是暂停还是播放
    pally(state) {
      const audio = this.$refs.audio
      //传入当前值
      if (this.information.MusicTime === 0) return
      this.$store.commit('musicTaste')
      if (state === 'play-circle') {
        //说明是暂停状态,切换为播放
        audio.play()
        return
      }
      audio.pause()
    },

    //快进或者后退 5s
    backAndForward(name) {
      const audio = this.$refs.audio
      if (name === "back") {
        audio.currentTime -= 5
        return
      }
      audio.currentTime += 5

    }
    ,

    jump(value) {
      const audio = this.$refs.audio
      audio.currentTime = value
    },

    //收藏的变化
    filledColor() {
      this.colors = !this.colors
      this.filled === 'outlined' ? this.filled = 'filled' : this.filled = 'outlined'
    }

  },

  computed: {
    ...mapState(['information', 'Mp3', 'taste'])
  },

  filters: {
    time: function (val) {
      let date = new Date(val);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return minute + ':' + second;
    }
  }
}
</script>

<style lang="scss" scoped>
#PlayBar {
  position: relative;
  padding: 5px;
  display: flex;
  width: 100%;
  height: 80px;
  background: #E4E6FF;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  justify-content: space-between;

  .progress {
    position: absolute;
    top: -20px;
    left: -6px;
    width: 1212px;
  }

  .letterbox {
    display: flex;
    height: 100%;

    .text {
      margin-left: 10px;
      width: 120px;

      .title {
        margin-top: 5px;
        letter-spacing: 1px;
      }

      .name {
        color: #A6A6A6;
        font-size: 12px;
        margin-top: 5px;
      }

      .time {
        width: 150px;
        letter-spacing: 1.5px;
      }

    }

    p {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 3px;
    }
  }

  .pally {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    font-size: 30px;

    display: flex;
    margin: auto;
    width: 150px;
    height: 60px;

    > div {
      cursor: pointer;
    }

    .left {
      margin-right: 30px;
    }

    .right {
      margin-left: 30px;
    }
  }

  .console {
    display: flex;
    font-size: 20px;
    height: 100%;
    line-height: 60px;


    > div {
      margin-right: 20px;
      cursor: pointer;
    }

    .red {
      color: red;
    }
  }
}
</style>
