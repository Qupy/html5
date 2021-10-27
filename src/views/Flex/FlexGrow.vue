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
    flex-grow（1）:
    <input type="number" min="0" v-model="firstStyle.flexGrow">
    可以扩展子元素的宽度,需要设置在子元素上:设置当前元素应该占据剩余空间的比例值 比例值计算：当前空间的flex-grow/所有兄弟元素的flex-grow的和
  </div>
  <div class="options">
    flex-grow（2）:
    <input type="number" min="0" v-model="secondStyle.flexGrow">
  </div>
  <div class="options">
    flex-grow（3）:
    <input type="number" min="0" v-model="thirdStyle.flexGrow">
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
  flexGrow: 0
})
let secondStyle = reactive({
  flexGrow: 0
})
let thirdStyle = reactive({
  flexGrow: 0
})
</script>

<style scoped>
.options {
  margin-bottom: 10px;
}

.box {
  width: 900px;
  height: 400px;
  border: solid 1px red;
  display: flex;
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