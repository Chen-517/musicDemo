<template>
  <div class="load-box">
    <div class="center center">
      <div><i class="el-icon-loading"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Load'
}
</script>

<style lang="scss" scoped>
.load-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.2);
  z-index: 9000 !important;

  .center {
    position: absolute;
    font-size: 50px;
    color: #fff;
    width: 50px;
    height: 50px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
