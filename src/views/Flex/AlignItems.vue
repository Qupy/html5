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
  </div>
  <div class="options">
    align-items:
    <select v-model="boxStyle.alignItems">
      <option value="">请选择</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="center">center</option>
      <option value="baseline">baseline</option>
      <option value="stretch">stretch</option>
    </select>
    stretch为默认值，拉伸的意思 ，因子项目已设置了高度，所以不会出现拉伸
  </div>

  <div class="options">
    align-self（1）:
    <select v-model="itemStyle.first.alignSelf">
      <option value="">请选择</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="center">center</option>
      <option value="baseline">baseline</option>
      <option value="stretch">stretch</option>
      <option value="auto">auto</option>
    </select>
    align-self（2）:
    <select v-model="itemStyle.second.alignSelf">
      <option value="">请选择</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="center">center</option>
      <option value="baseline">baseline</option>
      <option value="stretch">stretch</option>
      <option value="auto">auto</option>
    </select>
    align-self（3）:
    <select v-model="itemStyle.third.alignSelf">
      <option value="">请选择</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="center">center</option>
      <option value="baseline">baseline</option>
      <option value="stretch">stretch</option>
      <option value="auto">auto</option>
    </select>
  </div>

  <div class="box" :style="boxStyle">
    <div class="first" :style="itemStyle.first">abcdefg</div>
    <div class="second" :style="itemStyle.second">hijklmn</div>
    <div class="third" :style="itemStyle.third">opqrst</div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
let boxStyle=reactive({
  justifyContent:'space-around',
  alignItems:''
})

let itemStyle = reactive({
  first:{
    alignSelf:''
  },
  second:{
    alignSelf: ''
  },
  third:{
    alignSelf:''
  }
})

</script>

<style scoped>
.options{
  margin-bottom: 10px;
}
.box{
  width: 900px;
  height: 600px;
  border: solid 1px red;
  box-sizing: border-box;
  display: flex;
}
.box>div{
  width: 200px;
  height: 200px;
  color: white;
}
.first{
  background-color: darkred;
}
.second{
  font-size: 40px;
  background-color: darkblue;
}
.third{
  background-color: darkgreen;
}
</style>