<template>
  <div class="test">
    <h1>\{{ test }}</h1>
    <div v-for="(item, i) in list" :key="i" >
      <span v-if="item.name === 'a'">这里是a</span>
      <span v-else-if="item.name === 'b'">我是b</span>
      <span v-else>其他</span>
      <span>: </span>
      \{{item.name}}
    </div>
    <span v-for="(v, i) in object" :key="i">\{{v}}-</span>
    <div v-on:click="btnClick" class="click">点击事件</div>
    <p class="total">合计：<span>\{{total}}</span></p>
    <p>计算属性的now：\{{nowComputed}}</p>
    <p>方法调用的now: \{{nowMethods()}}</p>
    <p>vuex状态:\{{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () { // 属性
    return {
      test: '这是一段测试文案',
      list: [{ name: 'a', c: 3 }, { name: 'b', c: 5 }, { name: 'c', c: 4 }],
      object: { firstName: 'ChuanGe', lastName: 'Li', age: '18' },
      nums: [1, 4, 6]
    }
  },
  methods: { // 方法
    btnClick () {
      console.log('点击了按钮', this)
      this.$store.commit('increment')
      // 数组
      // this.list[0] = { name: 'aa', c: 5 } // 不是响应式的
      // this.$set(this.list, 0, { name: 'aa', c: 5 }) // 响应式的
      // this.list.push({ name: 'd', c: 4 }) // 响应式的
      // 对象
      // this.object.weight = 54 // 不是响应式的
      // this.$set(this.object, 'weight', 54) // 响应式的
      // Object.assign(this.object, { weight: 54 }) // 不是响应式的
      // this.object = Object.assign({}, this.object, { weight: 54 }) // 响应式
    },
    nowMethods () {
      return Date.now()
    }
  },
  computed: { // 计算属性
    count () {
      return this.$store.state.count
    },
    nowComputed () {
      return Date.now()
    },
    total () {
      return this.list.reduce((sum, nextitem, index) => {
        if (index === 1) {
          sum = sum.c
        }
        return sum + nextitem.c
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" type="text/css">
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

.total {
  color: red;
  span {
    color: #000000;
  }
}
.click {
  cursor: pointer
}
</style>
