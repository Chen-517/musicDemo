<template>
  <div id="NewDis">
    <div class="top">
      <div class="calls">
        <el-radio-group v-model="radio1"  size="mini" @change="choice">
          <el-radio-button v-for="(item,index) in listClass" :key="index"
                           :label="item"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="list">
        <div ref="newMusic" :class="{none:addClass1}" class="new"
             @click="moveColor($refs.newMusic)">推荐
        </div>
        |
        <div ref="newDis" :class="{none:addClass2}" class="dis" @click="moveColor($refs.newDis)">全部</div>
      </div>
    </div>
    <!--  本周新碟  -->
    <p class="a">周榜</p>
    <ul class="content">
      <li v-for="(item,index) in weekData">
        <img :src="item.artist.picUrl" alt="" loading="lazy">
        <p class="title">{{ item.name }}</p>
        <p class="name">{{ item.artist.name }}</p>
      </li>
    </ul>
    <!--  月榜  -->
    <p class="a">月榜</p>
    <ul class="content" style="margin-top: 80px">
      <li v-for="(item,index) in monthData">
        <img :src="item.artist.picUrl" alt="" loading="lazy">
        <p class="title">{{ item.name }}</p>
        <p class="name">{{ item.artist.name }}</p>
      </li>
    </ul>
    <Load v-if="loadOk"></Load>
  </div>
</template>

<script>
import {NewDiscGet} from "../../api/newMusic";
import Load from "../Load";

export default {
  name: "NewDis",
  components: {Load},
  data() {
    return {
      radio1: '全部',  //默认值
      listClass: ["全部", "日本", "韩国", "中国", "欧美"],
      addClass1: false,
      addClass2: true,
      classification: 'ALL',
      limit: 30,
      weekData: [],
      monthData: [],
      loadOk: true
    }
  },
  methods: {
    moveColor(name) {
      if (name.className.length <= 3) return
      this.addClass1 = !this.addClass1
      this.addClass2 = !this.addClass2

      //选中  全部
      if (!this.addClass2) {
        this.limit = null
      }
    },
    choice() {
      switch (this.radio1) {
        case "全部":
          this.classification = "ALL";
          break
        case "日本":
          this.classification = "JP";
          break
        case "韩国":
          this.classification = "KR";
          break
        case "中国":
          this.classification = "ZH";
          break
        case "欧美":
          this.classification = "EA";
          break
      }

      this.NewDiscGetData(this.classification)
    },
    NewDiscGetData() {
      this.loadOk = true
      NewDiscGet("/top/album",
          {
            area: this.classification,
            limit: this.limit
          }
      ).then(res => {
        this.weekData = res.weekData
        this.monthData = res.monthData
        this.loadOk = false
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.NewDiscGetData();

  },

}
</script>

<style lang="scss" scoped>
#NewDis {
  .a {
    position: relative;
    top: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .top {

    display: flex;
    height: 27px;
    justify-content: space-between;

    .list {
      display: flex;
      height: 100%;
      line-height: 27px;

      div {
        padding: 0 10px;
        border-radius: 50px;
        width: 50%;
        line-height: 28px;
        background: #bdbaba;
        color: #FFFFFF;
        cursor: pointer;

        &.new {
          margin-right: 15px;
        }

        &.dis {
          margin-left: 15px;
        }

        &.none {
          color: rgba(57, 57, 57, 0.75);
          background: none;
        }

        &.none:hover {
          background: #eceaea;
        }
      }
    }
  }

  .content {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 150px;
      height: 200px;
      margin-bottom: 20px;

      p {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.title {
          margin-top: 5px;
          margin-bottom: 5px;
        }

        &.name {
          color: #bab0b0;
          font-size: 12px;
        }
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 3px;
      }
    }
  }
}
</style>
