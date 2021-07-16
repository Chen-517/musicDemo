<template>
  <div id="Content">
    <!--  通过其他组件点击后跳转进来，数据是通过this.$route获取  -->
    <div class="top">
      <!--   歌单头像   -->
      <img alt="" src="../assets/image/bj/bg.jpg">
      <div class="left">
        <!--    歌单内的作者    -->
        <h2>等什么君/王巨星/要不要买菜/en/七叔</h2>
        <!--    创建人的头像，名字，创建日期    -->
        <div class="author">
          <img alt="" src="../assets/image/bj/bg.jpg">
          <!--     歌单创建人     -->
          <div class="name">小胖</div>
          <!--     创建日期     -->
          <div class="year"><span>2018-07-24</span>创建</div>
        </div>

        <!--    播放，收藏，分享，下载    -->
        <div class="console">
          <!--     播放全部     -->
          <div class="pally">
            <a-button type="danger">
              <span><a-icon class="pallyIcon" type="caret-right"/></span>播放全部
            </a-button>
          </div>

          <!--      收藏      -->
          <div class="like">
            <a-button>
              <span><a-icon class="likeIcon" type="diff"/></span>
              收藏
            </a-button>
          </div>


          <!--      分享      -->
          <div class="like">
            <a-button>
              <span><a-icon class="likeIcon" type="logout"/></span>
              分享
            </a-button>
          </div>

          <!--      下载      -->
          <div class="like">
            <a-button>
              <span><a-icon class="likeIcon" type="download"/></span>
              下载全部
            </a-button>
          </div>
        </div>

        <!--    信息列表    -->
        <div class="information">
          <div><span>标签：</span>
            <!--      接口数据的分类      -->
            <span style="color: #658cde">华语/古风/翻唱</span>
          </div>
          <div>
            <span>歌曲：</span>
            <!--      接口歌单内数量      -->
            <span style="margin-right: 10px">70</span>
            <span>播放：</span>
            <!--      播放量      -->
            <span>1722万</span>
          </div>
          <!--    信息大全(暂时不写)      -->
          <p>
            <span>简介：</span>
            喜欢歌单的可以点点关注哦~
          </p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!--   选项卡   -->
      <div class="title">
        <div>
          <a-tabs default-active-key="1" @change="callback">
            <a-tab-pane key="1" tab="歌曲列表"></a-tab-pane>
            <a-tab-pane key="2" force-render tab="评论"></a-tab-pane>
            <a-tab-pane key="3" tab="收藏者"></a-tab-pane>
          </a-tabs>
        </div>
        <div>
          <a-input-search placeholder="输入查找歌曲" style="width: 200px" @search="onSearch"/>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  data() {
    return {}
  },
  methods: {
    callback(key) {
      switch (key) {
        case '1':
          if (this.$route.path === "/content/list") break
          this.$router.push("/content/list")
          break
        case '2':
          if (this.$route.path === "/content/comment") break
          this.$router.push("/content/comment")
          break
        case '3':
          if (this.$route.path === "/content/collection") break
          this.$router.push("/content/collection")
          break

      }

    },
    onSearch() {


    }

  },

}
</script>

<style lang="scss" scoped>
#Content {
  width: 100%;
  height: 550px;
  background: #FFFFFF;
  padding: 20px;
  overflow: auto;

  .top {
    display: flex;

    img {
      width: 200px;
      height: 200px;
      border-radius: 3px;
      margin-right: 15px;
      box-shadow: 0 0 1.5px black;
    }

    .left {
      .information {
        padding-top: 10px;
      }

      .console {
        padding-top: 10px;
        display: flex;

        > div {
          margin-right: 10px;
        }


        .like .likeIcon {
          position: relative;
          top: -3px;
          left: -3px;
          font-size: 17px;
        }

        .pally {


          .pallyIcon {
            font-size: 18px;
            position: relative;
            top: -2px;
            left: -4px;
          }


        }

      }

      h2 {
        font-size: 20px;
        font-weight: 700;
      }

      .author {
        display: flex;
        line-height: 30px;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }

        .name {
          color: rgb(37, 110, 231);
          margin-right: 5px;
        }


      }
    }


  }

  .bottom {
    .title {
      padding-top: 5px;
      display: flex;

      justify-content: space-between;

      div:nth-child(1) {
        width: 287px;
      }

      div:nth-child(2) {
        position: relative;
        top: 10px;
      }
    }
  }


  &::-webkit-scrollbar {
    width: 8px;
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(202, 202, 202, 0.07)), color-stop(100%, rgba(229, 229, 229, 0.07)));
    background: -webkit-linear-gradient(left, rgba(202, 202, 202, 0.07) 0%, rgba(229, 229, 229, 0.07) 100%);
    background-color: rgba(229, 229, 229, .3);
    -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, .15) inset, 0 1px 0 0 #fff;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, .15) inset, 0 1px 0 0 #fff;
    overflow: visible;
    border-radius: 4px;
    border: solid 1px #A6A6A6;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: block;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(233, 233, 233, 0.05)), color-stop(100%, rgba(221, 221, 221, 0.05)));
    background: -webkit-linear-gradient(left, rgba(233, 233, 233, 0.05) 0%, rgba(221, 221, 221, 0.05) 100%);
    -webkit-box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .05), inset 1px 1px 0 0 #FFF;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .05), inset 1px 1px 0 0 #FFF;
    background-color: rgba(229, 229, 229, .9);
    overflow: visible;
    border-radius: 4px;
    border: solid 1px #A6A6A6;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(229, 229, 229, 1);
    -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, .15) inset;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, .15) inset;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(229, 229, 229, .4);
  }
}

</style>
