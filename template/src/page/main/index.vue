<template>
  <div class="main">
    <div class="title">demo</div>
    <SwitchItem />
    <SwitchItem2 />
    <div class="box">
      <el-slider
        :value="10"
        :min="5"
        :max="25"
        :step="5"
        show-stops
        show-numerial>
      </el-slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SwitchItem from './components/switch.vue'
import SwitchItem2 from './components/switch2.vue'

export default {
  name: 'Main',
  components: { SwitchItem, SwitchItem2 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
}
.main {
  padding-bottom: 60px;
}
.box {
  width: 90%;
  padding:0 5%;
}
</style>
