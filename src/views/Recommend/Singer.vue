<template>
  <!-- 歌手 -->
  <div id="Singer">
    <!--  语种  -->
    <div class="language">
      <span>语种：</span>
      <div class="class">
        <a-radio-group v-model="value" defaultValue="全部" size="small" @change="classification(value,value2,value3)">
          <a-radio-button value="全部">
            全部
          </a-radio-button>
          <a-radio-button value="华语">
            华语
          </a-radio-button>
          <a-radio-button value="欧美">
            欧美
          </a-radio-button>
          <a-radio-button value="日本">
            日本
          </a-radio-button>
          <a-radio-button value="韩国">
            韩国
          </a-radio-button>
          <a-radio-button value="其他">
            其他
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <!--  分类  -->
    <div class="language">
      <span>分类：</span>
      <div class="class">
        <a-radio-group v-model="value2" defaultValue="全部" size="small"
                       @change="classification(value,value2,value3)">
          <a-radio-button value="全部">
            全部
          </a-radio-button>
          <a-radio-button value="男歌手">
            男歌手
          </a-radio-button>
          <a-radio-button value="女歌手">
            女歌手
          </a-radio-button>
          <a-radio-button value="乐队组合">
            乐队组合
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <!--  筛选  -->
    <div class="language">
      <span>筛选：</span>
      <div class="class">
        <a-radio-group v-model="value3" defaultValue="热门" size="small"
                       @change="classification(value,value2,value3)">
          <a-radio-button v-for="(item,index) in screen" :key="index" :value="item">
            {{ item }}
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>

    <ul class="singer">
      <li v-for="(item,index) in getData">
        <img :src="item.img1v1Url" alt="">
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
    <Load v-if="loadOk"></Load>
  </div>
</template>

<script>
import {singerGet} from "../../api/singer";
import Load from "../../components/Load";

export default {
  name: "Singer",
  components: {Load},
  data() {
    return {
      type: '-1',  //全部 男女歌手或者乐队 -1 1 2 3
      initial: '-1',  //全部 # -1热门 歌手首字母要小写
      area: '-1',  //全部 国家
      limit: 60,  //50条
      value: "全部",
      value2: "全部",
      value3: "热门",
      screen: ['热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      getData: [],
      loadOk: true,

    }

  },
  methods: {
    classification(val1, val2, val3) {
      console.log(val1, val2, val3)
      //进行数据匹配替换
      switch (val2) {
        case  '全部':
          this.type = '-1'
          break
        case  '男歌手':
          this.type = '1'
          break
        case  '女歌手':
          this.type = '2'
          break
        case  '乐队组合':
          this.type = '3'
          break
      }

      //点击后直接赋值
      if (val3 === '热门') {
        this.initial = '-1';
      } else if (val3 === '#') {
        this.initial = '0';
      } else {
        this.initial = val3.toLowerCase()
      }
      switch (val1) {
        case  '全部':
          this.area = '-1'
          break
        case  '其他':
          this.area = '0'
          break
        case  '华语':
          this.area = '7'
          break
        case  '欧美':
          this.area = '96'
          break
        case  '韩国':
          this.area = '16'
          break
        case  '日本':
          this.area = '8'
          break

      }
      this.singerGetData();
    }

    , singerGetData() {
      this.loadOk = true
      singerGet("/artist/list", {
        type: this.type,
        initial: this.initial,
        area: this.area,
        limit: this.limit

      }).then(res => {
        this.getData = res.artists
        this.loadOk = false
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.singerGetData()
  }
}
</script>

<style lang="scss" scoped>
#Singer {
  width: 100%;
  height: 600px;

  .language {
    display: flex;
    line-height: 30px;
    margin-top: 20px;

    &:nth-child(1) {
      margin-top: 5px;
    }
  }


  .singer {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      cursor: pointer;
    }

    img {
      width: 150px;
      height: 170px;
      border-radius: 3px;
      box-shadow: 0 0 2px #bab0b0;
    }
  }
}
</style>
