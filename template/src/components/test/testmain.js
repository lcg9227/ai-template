
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
