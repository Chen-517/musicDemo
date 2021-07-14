<template>
  <div id="RankingListSon" @mouseout="isOK=false">
    <img :src="cards.coverImgUrl" alt="" @mouseout="isOK=false" @mouseover="isOK=true" loading="lazy">
    <div class="time" @mouseover="isOK=true">{{ cards.createTime |formate }}更新</div>
    <div v-show="isOK" class="top-play" @mouseover="isOK=true">
      <i class="el-icon-video-play"></i>
    </div>
    <div class="content">
      <div v-for="(item, index) in SongList" class="list">
        <span class="index">{{ index + 1 }}</span>
        <span>{{ item[0].al.name }}</span>
        <span class="name">{{ item[0].ar[0].name }}</span>
      </div>
    </div>
    <div class="all">查看全部 ></div>
  </div>
</template>

<script>
import {DetailSongGet, ListGetId} from "../api/rankingList";
import {formatDateTime} from "../common/common"

export default {
  name: "RankingListSon",
  props: {
    cards: {
      type: Object
    }
  },
  data() {
    return {
      SongList: [],
      isOK: false
    }
  },
  methods: {
    //关联id获取详细地址
    ListGetIdData(id) {
      ListGetId("/playlist/detail", {id}).then(res => {
        const list = res.privileges.splice(0, 5);
        list.map((item) => {
          //请求每一个id的详细地址
          this.DetailSongGetData(item.id);
        });
      }).catch(err => {
        console.log(err);
      })
    },

    //歌单列表
     DetailSongGetData(ids) {
       DetailSongGet('/song/detail', {
        ids
      }).then(res => {
        this.SongList.push(res.songs)
      }).catch(err => {
        console.log(err);
      })
    }


  },
  //直接在里面用created这种生命周期是不行的，因为他的过程是需要时间，可能还没拿到就结束了
  //所以就需要watch来监听props传入的cards的值
  watch: {

    cards: function (val, old) {
      this.ListGetIdData(val.id)
    }
  },
  filters: { // 1创建过滤器format：处理时间格式
    formate: function (val) { //val 处理的数据 1404115136883    日 时
      //处理方法
      const tiemData = formatDateTime(val)
      return tiemData
    }
  }
}
</script>

<style lang="scss" scoped>
#RankingListSon {
  position: relative;
  display: flex;
  height: 175px;

  .time {
    position: absolute;
    text-align: center;
    width: 150px;
    bottom: 50px;
    color: #FFFFFF;
  }

  .top-play {
    position: absolute;
    font-size: 55px;
    color: #bab0b0;
    width: 150px;
    text-align: center;
    top: 35px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .content {
    height: 150px;
    width: 100%;

    .list {
      padding: 4.5px 5px;
      text-indent: 5px;
      border-radius: 5px;
      transition: all .3s;
      cursor: pointer;

      .name {
        float: right;
      }

      .index {
        margin-right: 5px;
        font-weight: 700;
        color: red;
      }

      &:hover {
        background: rgba(45, 45, 45, 0.5);
      }

      &:nth-child(odd) {
        background: rgba(219, 219, 219, 0.58);

        &:hover {
          background: rgba(45, 45, 45, 0.5);
        }
      }
    }
  }

  .all {
    position: absolute;
    bottom: -5px;
    left: 177px;
    cursor: pointer;
  }

}

</style>
