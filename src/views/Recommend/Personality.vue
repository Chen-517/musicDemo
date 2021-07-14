<template>
  <!-- 个性推荐 -->
  <div id="Personality">
    <!--  走马灯  -->
    <div class="slide">
      <el-carousel :interval="4000" height="200px" type="card">
        <el-carousel-item v-for="(item,index) in PhotoArr" :key="index">
          <img :src=item.imageUrl alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--  推荐歌单  -->
    <div class="recommendSong">
      <h3>推荐歌单</h3><span>更多></span>
      <hr>

      <div class="content">
        <!--    渲染前10热门    -->
        <div v-for="item in songArr" class="fast">
          <!--    顶部下移      -->
          <div class="top">666</div>

          <!--    顶部固定播放量      -->
          <div class="topTitle">
            <i class="el-icon-headset"></i>
            <span>{{
                item.playCount >= 100000000
                    ? (item.playCount / 100000000).toFixed(2) + "亿"
                    : parseInt(item.playCount / 10000) + "万"
              }}</span>
          </div>
          <!-- 热歌图片 -->
          <img :src="item.coverImgUrl" alt="" loading="lazy">
          <!--    描述      -->
          <p class="describe">{{ item.name }}</p>
          <!--    右边进来播放按钮      -->
          <div class="right"><i class="el-icon-video-play"></i></div>
        </div>

      </div>
    </div>

    <!--  独家放送  -->
    <div class="Exclusive-broadcast">
      <h3>推荐歌单</h3><span>更多></span>
      <hr>
      <div class="content">
        <div v-for="item in ExclusiveBroadcastArr" class="fast">
          <!-- 热歌图片 -->
          <img :src="item.picUrl" alt="">
          <!--    描述      -->
          <p class="describe">{{ item.name }}</p>
          <!--    右边进来播放按钮      -->
          <div class="right"><i class="el-icon-video-play"></i></div>
        </div>
      </div>

    </div>

    <!--  最新音乐  -->
    <div class="NewMusic">
      <h3>最新音乐</h3><span>更多></span>
      <hr>

      <div class="content">
        <div v-for="item in NewMusicDataGetArr" class="fast">
          <img :src="item.picUrl" alt="">
          <div class="text">
            <div class="title">{{ item.name }}</div>
            <div class="name">{{ item.song.artists[0].name }}</div>
            <div class="play"><i class="el-icon-video-play"></i></div>
          </div>
        </div>
      </div>
    </div>

    <Load v-if="loadOK"></Load>
  </div>
</template>

<script>
import {getSlidePhoto, recommendedPlayGet, ExclusiveBroadcastGet, NewMusicDataGet} from '../../api/personalityData'
import Load from "../../components/Load";

export default {
  name: "Personality",
  components: {Load},
  data() {
    return {
      PhotoArr: [],
      songArr: [],
      ExclusiveBroadcastArr: [],
      NewMusicDataGetArr: [],
      loadOK: true
    }
  },
  methods: {
    //请求轮播图的照片
    requestPhoto() {
      this.loadOK = true
      getSlidePhoto('/banner').then(res => {
        this.PhotoArr = res.banners;
        this.loadOK = false
      }).catch(err => {
        console.log(err)
      })
    },

    //请求推荐歌单的数据
    getRecommendedData() {
      this.loadOK = true
      //limit限制个数(接口有写)
      recommendedPlayGet('/top/playlist', {limit: 10}).then(res => {
        this.songArr = res.playlists;
        this.loadOK = false
      }).catch(err => {
        console.log(err)
      })
    },

    ExclusiveBroadcast() {
      this.loadOK = true
      ExclusiveBroadcastGet('/personalized/privatecontent', {limit: 3}).then(res => {
        this.ExclusiveBroadcastArr = res.result
        this.loadOK = false
      }).catch(err => {
        console.log(err)
      })
    },

    NewMusicData() {
      this.loadOK = true
      NewMusicDataGet('/personalized/newsong', {limit: 12}).then(res => {
        this.NewMusicDataGetArr = res.result
        this.loadOK = false
      }).catch(err => {
        console.log(err)
      })
    }


  },
  created() {

    this.requestPhoto()
    this.getRecommendedData()
    this.ExclusiveBroadcast()
    this.NewMusicData()

  }
}
</script>

<style lang="scss" scoped>
#Personality .recommendSong, #Personality .Exclusive-broadcast {
  > span, h3 {
    display: inline-block;
  }

  > span {
    float: right;
  }

  h3 {
    font-size: 20px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0 0 0;

    .fast {
      margin-bottom: 15px;
      box-sizing: border-box;
      position: relative;
      width: 200px;
      height: 230px;
      overflow: hidden;
      border-radius: 5px;

      img {
        width: 100%;
        height: 190px;
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
        bottom: 40px;
        right: -30px;
        font-size: 30px;
        transition: all .5s;
        color: #ff0000;
      }

      &:hover .top {
        top: 0;
      }

      &:hover .right {
        right: 5px;
      }


    }
  }


}

#Personality .Exclusive-broadcast {
  padding: 20px 0;

  .content .fast {
    width: 335px;
    height: 240px;

    img {
      width: 100%;
      height: 200px;
    }
  }

}

#Personality .NewMusic {
  padding: 20px 0;

  > h3, span {
    display: inline-block;
  }

  > span {
    float: right;
  }

  > h3 {
    font-size: 20px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 10px;

    .fast {
      position: relative;
      display: flex;
      width: 330px;
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
      background: transparent;
      transition: all .3s;

      &:hover {
        background: rgba(0, 0, 0, 0.1);

      }

      .text {
        margin-left: 10px;
        margin-top: 5px;
        line-height: 25px;

        .name {
          color: #bfbfbf;
        }

        .play {
          opacity: 0;
          position: absolute;
          font-size: 35px;
          left: 15px;
          top: 15px;
          color: #f3e8e8;
          transition: all .5s;
        }
      }

      &:hover .play {
        opacity: 1;
      }

      img {
        border-radius: 5px;
        width: 60px;
        height: 60px;
      }

    }

  }

}


.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
