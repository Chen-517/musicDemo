<template>
  <div id="PlayBar">
    <!-- 进度条 -->
    <div class="progress">
      <a-slider v-model="time" :tooltip-visible="false"/>
    </div>
    <!--  letterbox 信息  -->
    <div class="letterbox">
      <img alt="" src="../assets/image/bj/bg.jpg">
      <div class="text">
        <p class="title">九万字 (片段)</p>
        <p class="name">妖娆</p>
        <div class="time">04:13 / 00:01</div>
      </div>
    </div>

    <!--  播放  -->
    <div class="pally">
      <div class="left">
        <a-icon type="step-backward"/>
      </div>

      <div class="suspend-pally" @click="pally(current)">
        <a-icon :type="current"/>
      </div>

      <div class="right">
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
  </div>
</template>

<script>
export default {
  name: "PlayBar",
  data() {
    return {
      type: ["play-circle", "pause-circle"],
      current: '',
      colors: false,
      filled: 'outlined',
      time: '0'
    }
  },
  methods: {
    //是暂停还是播放
    pally(state) {
      //传入当前值
      if (state === 'play-circle') {
        //说明是暂停状态
        this.current = this.type[1]
        return
      }
      this.current = this.type[0]
    },

    //收藏的变化
    filledColor() {
      this.colors = !this.colors
      this.filled === 'outlined' ? this.filled = 'filled' : this.filled = 'outlined'
    }

  },
  created() {
    this.current = this.type[0]

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

      .time{
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
