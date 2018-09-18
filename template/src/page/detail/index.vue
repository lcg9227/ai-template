<template>
  <div id="main">
    <h1>\{{ msg }}</h1>
    <el-button type="primary" v-on:click="backMain">返回主页面</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Main',
  data () {
    return {
      msg: '这里是detail页面'
    }
  },
  methods: {
    backMain () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
