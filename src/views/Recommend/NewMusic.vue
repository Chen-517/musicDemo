<template>
  <!-- 最新音乐 -->
  <div id="NewMusic">
    <!--  选项  -->
    <div class="list">
      <div ref="newMusic" :class="{none:addClass1}" class="new" @click="moveColor($refs.newMusic,'new')">新歌速递</div>
      <div ref="newDis" :class="{none:addClass2}" class="dis" @click="moveColor($refs.newDis,'dis')">新碟上架</div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "NewMusic",
  data() {
    return {
      animationIsOk: false,
      addClass1: false,
      addClass2: true,
    }
  },
  methods: {
    //选项变换颜色
    moveColor(name, url) {
      if (name.className.length <= 3) return
      this.addClass1 = !this.addClass1
      this.addClass2 = !this.addClass2
      let router = "/recommend/newMusic"
      let over = router + '/' + url
      this.$router.push(over)
    },



  },
  created() {
    let flag = window.location.href.split('#')[1]
    if (flag == "/recommend/newMusic/dis") {
      this.addClass1 = true;
      this.addClass2 = false;
    }

  }


}
</script>

<style lang="scss" scoped>
#NewMusic {

  .list {
    display: flex;
    width: 165px;
    height: 30px;
    margin: 15px auto;
    border: 1px solid #99a9bf;
    border-radius: 50px;
    justify-content: space-between;
    text-align: center;

    > div {
      border-radius: 50px;
      width: 50%;
      height: 28px;
      line-height: 28px;
      background: #bdbaba;
      color: #FFFFFF;
      cursor: pointer;

      &.none {
        color: rgba(57, 57, 57, 0.75);
        background: none;
      }

      &.none:hover {
        background: #eceaea;
      }
    }

  }

  .classTitle {
    position: relative;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;

    .calls {
      position: relative;
      top: -8px;

    }

    .playAll {
      position: relative;
      background: red;
      border-radius: 50px;
      height: 30px;
      width: 100px;
      text-align: center;
      color: #FFFFFF;
      font-size: 15px;
      line-height: 30px;
      cursor: pointer;
      top: -10px;

      &:hover {
        background: #db3737;
      }

      i {
        position: relative;
        top: 1px;
        font-size: 20px;
        margin-right: 2px;
      }
    }
  }

  .content {
    li {
      position: relative;
      display: flex;
      padding: 10px 10px;
      border-radius: 2px;
      height: 90px;

      .left {
        width: 120px;
        height: 100%;

        .index {
          margin: 0px 10px;
          position: relative;
          top: 2px;
          color: #c9c9c9;
        }
      }

      .right {
        padding-right: 20px;
        flex: 1;
        height: 100%;
        line-height: 70px;
        display: flex;
        justify-content: space-between;

        .title {
          display: inline-block;
          width: 300px;
        }

        .name {
          width: 150px;
        }

        .title-name {
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }


      .el-icon-video-play {
        position: absolute;
        font-size: 30px;
        color: #FFFFFF;
        top: 32px;
        left: 66px;
      }


      &:hover {
        background: rgba(240, 241, 242, 1) !important;
      }

      &:nth-child(odd) {
        background: #F9F9F9;
      }
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }
  }
}
</style>
