<template>
  <!-- 主播电台的公共样式和框架 -->
  <div id="RadioStationCare">
    <div class="recommend">
      <h3>{{ name }}</h3><span>更多></span>
      <hr>
      <div>
        <div v-for="(item,index) in reads" class="content">
          <img :src="item.picUrl" alt="" loading="lazy">
          <div class="text">
            <p>{{ item.name }}</p>
            <p>{{ item.copywriter }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RadioStationCare",
  props: {
    reads: {
      type: Array
    },
    name:{
      type:String
    }
  }

}
</script>

<style lang="scss" scoped>
#RadioStationCare {

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
