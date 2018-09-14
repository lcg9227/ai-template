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
  </div>
</template>

<script src="./testmain.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./teststyle.scss" scoped  lang="scss" type="text/css"></style>
