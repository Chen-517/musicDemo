<template>
  <div id="NewMusic">
    <div class="classTitle">
      <!--  分类  -->
      <div class="calls">
        <el-radio-group v-model="radio1" fill="black" size="mini" @change="choice">
          <el-radio-button v-for="(item,index) in listClass" :key="index"
                           :label="item"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 播放全部 -->
      <div class="playAll"><i class="el-icon-video-play"></i>播放全部</div>
    </div>
    <ul ref="ul" class="content">
      <li v-for="(item,index) in newMusicData" :key="index">
        <div class="left">
          <span class="index">{{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}</span>
          <img :src="item.album.blurPicUrl" alt="" loading="lazy">
          <i class="el-icon-video-play"></i>
        </div>
        <div class="right">
          <span class="title">{{ item.name }}</span>
          <span class="name">{{ item.artists[0].name }}</span>
          <!--   可能是专辑   -->
          <span class="title-name">{{ item.album.name }}</span>
          <span class="time">{{ item.bMusic.playTime | time }}</span>
        </div>
      </li>

    </ul>
    <Load v-if="loadOk"></Load>
  </div>
</template>

<script>
import {newMusicGet} from "../../api/newMusic";
import Load from "../Load";

export default {
  name: "NewMusic",
  components: {Load},
  data() {
    return {
      radio1: '全部',  //默认值
      listClass: ["全部", "华语", "欧美", "韩国", "日本"],
      classification: 0,
      newMusicData: [],
      loadOk: true
    }
  },
  methods: {
    choice() {
      console.log(this.radio1); //确定选择哪一个
      switch (this.radio1) {
        case "全部":
          this.classification = 0;
          break
        case "华语":
          this.classification = 7;
          break
        case "欧美":
          this.classification = 96;
          break
        case "韩国":
          this.classification = 16;
          break
        case "日本":
          this.classification = 8;
          break
      }

      this.newMusicGetData(this.classification)
    },
    //获得新歌速递
    newMusicGetData() {
      this.loadOk = true
      newMusicGet("/top/song", {type: this.classification}).then(res => {
        this.newMusicData = res.data
        this.loadOk = false
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.newMusicGetData()
  },
  filters: {
    time: function (val) {
      var date = new Date(val);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return minute + '分' + second + "秒";
    }

  }

}
</script>

<style lang="scss" scoped>
#NewMusic {
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
