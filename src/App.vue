<template>
  <div class="main">
    <img alt="" src="./assets/image/bj/bg.jpg">
    <div id="app">
      <!--  头部导航(固定死)  -->
      <NavigationBar></NavigationBar>
      <!--   内容区(可变动)   -->
      <router-view></router-view>
      <!--   播放栏(固定死)   -->
      <PlayBar></PlayBar>
    </div>

  </div>
</template>
<script>
import NavigationBar from "./components/NavigationBar";
import PlayBar from "./components/PlayBar";

export default {
  components: {PlayBar,  NavigationBar}
}
</script>


<style lang="scss">
@import "./assets/css/reset.css";

html, body, .main {
  height: 100%;
}

.main {
  position: relative;
  overflow: hidden;

  >img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(80px);
  }

  #app {
    width: 1200px;
    position: relative;
    margin: 20px auto 0;
  }
}


</style>
