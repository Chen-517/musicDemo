<template>
  <div id="NavigationBar">
    <div class="log">
      <img
          alt=""
          src="//bpic.588ku.com/element_pic/20/06/30/b0609948382016f498a7c700ea91d205.jpg!/fw/253/quality/90/unsharp/true/compress/true">
      <div class="title">网抑云音乐</div>
    </div>

    <div class="break">
      <div class="left" @click="returnFrom"><</div>
      <div class="right" @click="returnTo">></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    //返回上一级
    returnFrom() {
      history.back()
    },
    returnTo() {
      history.forward()
    },

  },
}
</script>

<style lang="scss" scoped>
#NavigationBar {
  display: flex;
  border-radius: 5px 5px 0 0;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background: #6396f5;

  .log {
    display: flex;
    height: 100%;
    width: 200px;

    img {
      margin-top: 5px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }

    .title {
      text-indent: 10px;
      line-height: 50px;
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: bolder;
      color: #FFFFFF;
    }
  }

  .break {
    margin-top: 10px;
    display: flex;
    font-size: 18px;
    text-align: center;

    .left, .right {
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.3);
      color: #FFFFFF;
      border-radius: 50%;
      cursor: pointer;
    }

    .left {
      margin-right: 10px;
    }

    .color {
      cursor: unset;
      color: rgba(167, 167, 167, 0.8);
    }
  }
}
</style>
