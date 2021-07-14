<template>
  <!-- 排行 -->
  <div id="RankingList">
    <h2>官方榜</h2>
    <div class="list">
      <RankingListSon :cards="soar" style="margin-bottom: 30px"></RankingListSon>
      <RankingListSon :cards="newSong" style="margin-bottom: 30px"></RankingListSon>
      <RankingListSon :cards="original" style="margin-bottom: 30px"></RankingListSon>
      <RankingListSon :cards="hotSong" style="margin-bottom: 30px"></RankingListSon>
    </div>

    <div class="all">
      <h2>全球榜</h2>
      <div class="content">
        <div v-for="(item,index) in all" class="list">
          <img :src="item.coverImgUrl" alt="" loading="lazy">
          <div class="top" @mouseover="isOK=true"> {{
              item.playCount >= 100000000
                  ? (item.playCount / 100000000).toFixed(2) + "亿"
                  : parseInt(item.playCount / 10000) + "万"
            }}
          </div>
          <p style="padding: 3px 5px">{{ item.name }}</p>

          <div class="top-play">
            <i class="el-icon-video-play"></i>
          </div>
        </div>
      </div>
    </div>
    <Load v-if="loadOK"></Load>
  </div>
</template>

<script>
import {listGet} from "../../api/rankingList";
import RankingListSon from "../../components/RankingListSon"
import Load from "../../components/Load";

export default {
  name: "RankingList",
  data() {
    return {
      soar: {},//飙升
      newSong: {},//新歌
      original: {},//原创
      hotSong: {},//热歌
      all: {},  //全球
      loadOK: true
    }
  },
  methods: {

    //获得所有榜单
    listGetData() {
      this.loadOK = true
      listGet('/toplist').then(res => {
        this.all = res.list;
        this.soar = res.list[0]
        this.newSong = res.list[1]
        this.original = res.list[2]
        this.hotSong = res.list[3]
        this.loadOK = false
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {

    this.listGetData()

  },
  components: {Load, RankingListSon}
}
</script>

<style lang="scss" scoped>
#RankingList {
  h2 {
    font-size: 23px;
    margin-bottom: 30px;
  }

  .all {
    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .list {
        position: relative;
        width: 180px;
        height: 200px;
        margin-bottom: 20px;
        cursor: pointer;

        img {
          width: 100%;
          height: 180px;
          border-radius: 5px;
        }

        &:hover .top-play {
          opacity: 1;
        }

        .top-play {
          text-align: center;
          position: absolute;
          font-size: 55px;
          width: 100%;
          top: 40px;
          color: #e8e6e6;
          opacity: 0;
          transition: all .2s;
        }


        .top {
          position: absolute;
          right: 0;
          top: 0;
          margin-right: 10px;
          color: #FFFFFF;
        }
      }
    }
  }

}
</style>
