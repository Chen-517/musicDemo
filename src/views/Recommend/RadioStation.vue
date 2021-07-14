<template>
  <!-- 主播电台 -->
  <div id="RadioStation">
    <!--  走马灯  -->
    <div class="slide">
      <el-carousel :interval="4000" height="200px" type="card">
        <el-carousel-item v-for="(item,index) in slideData" :key="index">
          <img :src=item.pic alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--  主播电台的分类  -->
    <div class="class">
      <div v-for="(item,index) in classData" :key="index" class="radioStation-class">
        <img :src="item.pic56x56Url" alt="">
        <p>{{ item.name }}</p>
      </div>
    </div>

    <!--  付费精选  -->
    <div class="money">
      <h3>付费精选</h3><span>更多></span>
      <hr>
      <div>
        <div v-for="(item,index) in PaidSelectionData" class="content">
          <img :src="item.picUrl" alt="" loading="lazy">
          <div class="text">
            <p>{{ item.name }}</p>
            <p>{{ item.rcmdText }}</p>
            <p>￥<span>{{ item.originalPrice / 100 }}</span></p>
          </div>
        </div>
      </div>
    </div>

    <!--  个性电台推荐  -->
    <RadioStationCare :reads="recommendData" name="个性电台推荐"></RadioStationCare>
    <RadioStationCare :reads="coverUp" name="翻唱"></RadioStationCare>
    <RadioStationCare :reads="electronic3D" name="电子3D"></RadioStationCare>
    <RadioStationCare :reads="musicStory" name="音乐故事"></RadioStationCare>
    <RadioStationCare :reads="emotionalFrequencyModulation" name="情感调频"></RadioStationCare>
    <RadioStationCare :reads="quadraticElement" name="二次元"></RadioStationCare>

    <Load v-if="loadOK"></Load>
  </div>
</template>

<script>
import {classGet, completeGet, PaidSelectionGet, recommendGet, slideGet} from '../../api/radioStation'
import RadioStationCare from "../../components/RadioStationCare";
import Load from "../../components/Load";

export default {
  name: "RadioStation",
  components: {Load, RadioStationCare},
  data() {
    return {
      slideData: [],
      classData: [],
      PaidSelectionData: [],
      recommendData: [],
      coverUp: [],//翻唱
      electronic3D: [],//电子3D
      musicStory: [],//音乐故事
      emotionalFrequencyModulation: [],//情感调频
      quadraticElement: [],//二次元
      loadOK: true
    }
  },
  methods: {

    //获取主播电台的幻灯片
    slideGetData() {
      this.loadOK = true
      slideGet('dj/banner').then(res => {
        this.slideData = res.data
        this.loadOK = false
      }).catch(err => {
        console.log(err)
      })
    },

    //分类
    classGetData() {
      this.loadOK = true
      classGet('dj/catelist').then(res => {
        this.classData = res.categories
        this.loadOK = false
      }).catch(err => {
        console.log(err);
      })
    },

    //付费精选
    PaidSelectionGetData() {
      this.loadOK = true
      PaidSelectionGet("/dj/paygift", {limit: 4}).then(res => {
        this.PaidSelectionData = res.data.list
        this.loadOK = false
      }).catch(err => {
        console.log(err);
      })
    },


    //  电台个性推荐
    recommendGetData() {
      this.loadOK = true
      recommendGet('/dj/recommend').then(res => {
        this.recommendData = res.djRadios
        this.loadOK = false
      }).catch(err => {
        console.log(err);
      })
    },

    completeGetData() {
      this.loadOK = true
      //翻唱
      completeGet('/dj/recommend/type', {
        type: 2001
      }).then(res => {
        this.coverUp = res.djRadios
      }).catch(err => {
        console.log(err);
      })
      //电子3d
      completeGet('/dj/recommend/type', {
        type: 10002
      }).then(res => {
        this.electronic3D = res.djRadios
      }).catch(err => {
        console.log(err);
      })
//音乐故事
      completeGet('/dj/recommend/type', {
        type: 2
      }).then(res => {
        this.musicStory = res.djRadios
      }).catch(err => {
        console.log(err);
      })
      //情感调频
      completeGet('/dj/recommend/type', {
        type: 3
      }).then(res => {
        this.emotionalFrequencyModulation = res.djRadios
      }).catch(err => {
        console.log(err);
      })
      //二次元
      completeGet('/dj/recommend/type', {
        type: 3001
      }).then(res => {
        this.quadraticElement = res.djRadios
        this.loadOK = false
      }).catch(err => {
        console.log(err);
      })

    }
  },
  created() {

    this.slideGetData()
    this.classGetData()
    this.PaidSelectionGetData()
    this.recommendGetData()
    this.completeGetData()
  }
}
</script>

<style lang="scss" scoped>
#RadioStation {
  p {
    margin: 0;
  }

  .recommend, .money {
    > span, h3 {
      display: inline-block;
    }

    > span {
      float: right;
    }

    h3 {
      font-size: 20px;
    }
  }

  .class {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .radioStation-class {
      padding: 5px;
      width: 110px;
      text-align: center;
      border-radius: 5px;
      transition: all .2s;
      cursor: pointer;

      &:nth-last-child(1) {
        display: none;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }

      img {
        width: 50px;
      }
    }
  }

  .money {
    margin-top: 30px;

    > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .content {
        padding: 10px;
        margin-top: 20px;
        width: 500px;
        display: flex;
        border-radius: 5px;
        transition: all .3s;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.2);

        }

        .text {
          text-indent: 10px;

          p:nth-child(1) {
            font-size: 16px;
            letter-spacing: 0.2em;
            margin-bottom: 10px;
          }

          p:nth-child(2) {
            color: rgba(125, 125, 125, 0.79);
          }

          p:nth-last-child(1) {
            color: rgba(99, 150, 245, 0.9);
            margin-top: 10px;
          }
        }

        p {
          margin: 0;
        }

        img {
          width: 100px;
          height: 100px;
          border-radius: 5px;
        }
      }
    }


  }

  .recommend {
    margin-top: 30px;

    hr {
      margin-bottom: 30px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .content {
        width: 173px;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;

        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        p:nth-child(1) {
          position: absolute;
          top: 130px;
          background: rgba(0, 0, 0, 0.3);
          color: #FFFFFF;
          text-indent: 5px;
          width: 150px;
          height: 20px;
        }
      }
    }

    img {
      width: 150px;
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
