<template>
  <!-- 歌单 -->
  <div id="Songster">
    <h3>{{ selected }} ></h3>
    <div class="title">
      <div v-for="(item,index) in list" class="fast" @click="selectedColor(index)">{{ item.name }}</div>
    </div>

    <div class="tags">
      <div v-for="item in playlists" class="fast">
        <!--    顶部固定播放量      -->
        <div class="topTitle">
          <i class="el-icon-headset"></i>
          <span>{{ item.playCount >= 10000 ? (parseInt(item.playCount / 10000)) + '万' : item.playCount }}</span>
        </div>
        <!-- 热歌图片 -->
        <img :src="item.coverImgUrl" alt="">
        <!--    描述      -->
        <p class="describe">{{ item.name }}</p>
        <!--    作者    -->
        <div class="name"></div>
        <!--    右边进来播放按钮      -->
        <div class="right"><i class="el-icon-video-play"></i></div>
      </div>

      <div class="paging">
        {{ list.total }}
        <el-pagination
            :page-size="this.limit"
            :total="palyAll.total"
            background
            layout="prev, pager, next"
            @current-change="currentPage ">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import {classification, classificationList} from "../../api/songsterData"

export default {
  name: "Songster"
  , data() {
    return {
      list: [],
      playlists: [],
      selected: '全部',
      palyAll: '',
      cats: '',
      limit: 30,
      currentPages: 1  //当前页
    }
  }
  , methods: {
    //选择华语分类还是什么
    selectedColor(index) {
      let color = document.querySelectorAll(".title .fast")

      //再次点击，取消颜色，并且选项变成全部
      if (color[index].style.color == "red") {
        color[index].style.color = 'rgba(0, 0, 0, 0.65)'
        this.selected = '全部'
        this.cats = '全部'
        this.classificationGetlist()
        return
      }

      for (let i = 0; i < color.length; i++) {
        color[i].style.color = 'rgba(0, 0, 0, 0.65)'
      }
      color[index].style.color = 'red'
      this.selected = color[index].innerText
      this.cats = color[index].innerText
      this.classificationGetlist()
    },

    //修改当前页面时触发(分页的回调函数)
    currentPage(e) {
      this.currentPages = e
      this.classificationGetlist()
    },

    //分类
    classificationGet() {
      classification('/playlist/hot').then(res => {
        this.list = res.tags
      }).catch(err => {
        console.log(err);
      })
    },
    //分类歌单获取
    classificationGetlist() {
      classificationList('/top/playlist', {
        limit: this.limit,
        offset: this.currentPages,
        cat: this.cats
      }).then(res => {
        this.playlists = res.playlists;
        this.palyAll = res;
      }).catch(err => {
        console.log(err);
      })
    }


  }


  , created() {
    this.classificationGet()
    this.classificationGetlist()

  }
}
</script>

<style lang="scss" scoped>
#Songster {
  position: relative;
  display: flex;

  .tags {
    position: absolute;
    top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .paging {
      padding: 10px 0;
      width: 450px;
      margin: auto;
    }
  }

  .tags .fast {
    margin-bottom: 15px;
    box-sizing: border-box;
    position: relative;
    width: 180px;
    height: 230px;
    overflow: hidden;
    border-radius: 5px;

    img {
      width: 100%;
      height: 180px;
      border-radius: 5px;
    }

    .top {
      position: absolute;
      width: 100%;
      height: 20px;
      background: rgba(0, 0, 0, 0.3);
      top: -20px;
      color: #FFFFFF;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .5s;
    }

    .topTitle {
      position: absolute;
      right: 0;
      padding-left: 20px;
      padding-right: 15px;
      height: 20px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
      color: #FFFFFF;

      span {
        margin-left: 5px;
      }
    }

    .right {
      position: absolute;
      bottom: 55px;
      right: -30px;
      font-size: 30px;
      transition: all .3s;
      color: #ff0000;
    }

    &:hover .right {
      right: 10px;
    }


  }

  h3 {
    height: 25px;
    padding: 0 10px;
    border-radius: 15px;
    background: #dedada;
    text-align: center;
    line-height: 25px;
  }

  .title {
    position: absolute;
    display: flex;
    right: 0;

    > div {
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }

    .color {
      color: red;
    }
  }
}


</style>
