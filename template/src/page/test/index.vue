<template>
  <div class="test">
    <div class="title">模拟接口调用示例</div>
    <div>
      <el-button type="primary" v-for="(item,i) in btns" :key="i" @click="mapMethods(item)">\{{item.text}}</el-button>
    </div>
    <p>vuex count状态:\{{count}}</p>
    <Foot />
  </div>
</template>

<script>
import Foot from './components/foot'
export default {
  name: 'test',
  data () { // 属性
    return {
      btns: [
        { methodsName: 'btnClick4', text: 'active调用，同步方法示例' },
        { methodsName: 'btnClick3', text: 'active调用，count异步加10' },
        { methodsName: 'btnClick2', text: 'active调用，异步倍增' },
        { methodsName: 'btnClick', text: 'count自增' }
      ]
    }
  },
  components: { Foot },
  computed: { // 计算属性
    count () {
      return this.$store.state.count
    }
  },
  methods: { // 方法
    mapMethods (item) {
      this[item.methodsName](item)
    },
    btnClick () {
      console.log('点击了按钮', this)
      this.$store.commit('increment')
    },
    btnClick2 () {
      this.$store.dispatch('multiple', {
        n: 2,
        scb: () => {
          console.log('成功回调')
        },
        fcb: () => {
          console.log('失败回调')
        }
      })
    },
    btnClick3 () {
      this.$store.dispatch('mockRequest')
    },
    btnClick4 () {
      this.$store.dispatch('asyncTest')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
.test {
  text-align: center;
  padding-bottom: 60px;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 0;
  }
}
</style>
