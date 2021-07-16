<template>
  <div id="List">
    <ul>
      <li class="fats">
        <!--   图标样式   -->
        <div class="icon"></div>
        <!--   音乐标题   -->
        <div class="musicTitle">音乐标题</div>
        <!--   歌手   -->
        <div class="singer">歌手</div>
        <!--   专辑   -->
        <div class="album">专辑</div>
        <!--   时长   -->
        <div class="time">时长</div>
      </li>
      <li class="son">
        <!--   图标样式   -->
        <div class="icon">
          <div class="index">01</div>
          <div class="collectionIcon">
            <a-icon type="heart"/>
            <!--  实心theme="filled"  -->
          </div>
          <div class="downloadIcon">
            <a-icon class="likeIcon" type="download"/>
          </div>
        </div>
        <!--   音乐标题   -->
        <div class="musicTitle">落霜</div>
        <!--   歌手   -->
        <div class="singer">等什么君/要不要买菜</div>
        <!--   专辑   -->
        <div class="album">等什么君翻唱合集</div>
        <!--   时长   -->
        <div class="time">00:22</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List"
}
</script>

<style lang="scss" scoped>
#List {
  ul {


    li {
      display: flex;
      height: 30px;
      width: 100%;

      &.son:nth-child(even) {
        background: #f5f3f3;
        border-radius: 2px;
      }

      &.son:hover {
        background: #dcdada;
        border-radius: 2px;
      }

      &.fats .icon {
        background: none !important;
      }

      > div {
        padding: 5px 10px;
      }

      &.fats div:hover {
        background: #dcdada;
        border-radius: 2px;
      }

      .icon {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        color: #999797;

        .index {
          margin-left: 15px;
        }

        .downloadIcon, .collectionIcon {
          position: relative;
          top: -5px;
          font-size: 16px;
        }

      }

      .musicTitle {
        width: 400px;
        height: 100%;
      }

      .singer {
        width: 230px;
        height: 100%;
      }

      .album {
        width: 300px;
        height: 100%;
      }

      .time {
        flex: 1;
        height: 100%;
      }
    }
  }

}
</style>
