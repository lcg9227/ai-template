<template>
  <div class="detail">
    <div class="title">page2</div>
    <Message />
    <MessageBox />
    <Foot />
  </div>
</template>

<script type="text/ecmascript-6">
import Foot from './components/foot'
import Message from './components/message'
import MessageBox from './components/messageBox'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: { Foot, Message, MessageBox },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css"  scoped>
.detail {
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
