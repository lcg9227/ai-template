<template>
  <div class="hello">
    <test />
    <h1>\{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import test from './test/test.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { test }
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
