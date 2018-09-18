<template>
  <div id="main">
    <h1>\{{ msg }}</h1>
    <test />
    <el-button type="primary" v-on:click="goDetail">进入detail页面</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import test from './components/test'
export default {
  name: 'Main',
  data () {
    return {
      msg: '李传格测试'
    }
  },
  components: { test },
  methods: {
    goDetail () {
      this.$router.push('/detail')
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
