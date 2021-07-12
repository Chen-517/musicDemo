<template>
  <div id="Recommend">
    <!--  头部导航栏  -->
    <!--  我这里a-tabs 想给他默认值，使刷新不会重新回第一个选项  -->
    <a-tabs :default-active-key="active" class="Top" @change="callback">
      <a-tab-pane v-for="(item,index) in tabsList" :key="index" :tab=item.label></a-tab-pane>
    </a-tabs>

    <!--  内容区  -->
    <div class="recommend">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>


export default {
  name: "Recommend",
  data() {
    return {
      tabsList: [
        {label: "个性推荐", url: "/recommend/personality"},
        {label: "歌单", url: "/recommend/songster"},
        {label: "主播电台", url: "/recommend/radioStation"},
        {label: "排行榜", url: "/recommend/rankingList"},
        {label: "歌手", url: "/recommend/singer"},
        {label: "最新音乐", url: "/recommend/newMusic"}
      ],
      active: 0,  //默认值
      activeKey: ''
    };
  },
  methods: {
    callback(key) {
      this.$router.push(this.tabsList[key].url)
    },


  },
  created() {
    //保持选项卡和路由对应
    let flag = window.location.href.split('#')[1]
    let arr = []
    for (let i = 0; i < this.tabsList.length; i++) {
      arr.push(this.tabsList[i].url)
    }
    this.active = arr.indexOf(flag)

  }
}
</script>

<style lang="scss" scoped>
#Recommend {
  width: 100%;
  height: 550px;
  background: #ffff;
  overflow: auto;

  .Top {
    width: 620px;
    margin: 0 auto;
  }

  .recommend {
    height: 700px;
    background: #ffff;
    padding: 0 80px;
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
