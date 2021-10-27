<template>
  <div class="options">
    justify-content:
    <select v-model="boxStyle.justifyContent">
      <option value="">请选择</option>
      <option value="flex-start">Flex-Start</option>
      <option value="flex-end">Flex-End</option>
      <option value="space-between">Space-Between</option>
      <option value="space-evenly">Space-Evenly</option>
      <option value="space-around">Space-Around</option>
    </select>
    设置子元素在主轴上的排列方式
  </div>

  <div class="options">
    flex-shrink（1）:
    <input type="number" min="0" v-model="firstStyle.flexShrink">
    定义收缩比例，通过设置的值来计算收缩空间 默认值为1
  </div>
  <div class="options">
    flex-shrink（2）:
    <input type="number" min="0" v-model="secondStyle.flexShrink">
  </div>
  <div class="options">
    flex-shrink（3）:
    <input type="number" min="0" v-model="thirdStyle.flexShrink">
  </div>

  <div class="box" :style="boxStyle">
    <div class="first" :style="firstStyle">1</div>
    <div class="second" :style="secondStyle">2</div>
    <div class="third" :style="thirdStyle">3</div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

let boxStyle = reactive({
  justifyContent: 'space-around',
})

let firstStyle = reactive({
  flexShrink: 1
})
let secondStyle = reactive({
  flexShrink: 1
})
let thirdStyle = reactive({
  flexShrink: 1
})
</script>

<style scoped>
.options {
  margin-bottom: 10px;
}

.box {
  width: 500px;
  height: 400px;
  border: solid 1px red;
  display: flex;
  margin: 0 auto;
}

.box > div {
  width: 200px;
  height: 200px;
  font-size: 100px;
}

.first {
  background-color: red;
}

.second {
  background-color: blue;
}

.third {
  background-color: green;
}
</style>