<template>
  <div id="Content">
    这是内容区
  </div>
</template>

<script>
import {getName, getObj} from "../api/personalityData";

export default {
  name: 'Content',
  data() {
    return {
      obj: ""
    }
  },
  methods: {},
  created() {
    getName('/test1', {
      user: "北浊清风",
      password: "123456"
    }).then(res => {
      console.log(res)
      this.obj = res.data

    }).catch(err => {
      console.log(err)
    })


  }

}
</script>

<style lang="scss" scoped>
#Content {
  width: 100%;
  height: 550px;
  background: azure;
}

</style>
