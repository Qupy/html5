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
    flex-flow：是flex-wrap和flex-direction的结合
  </div>
  <div class="options">
    flex-wrap:
    <select v-model="boxStyle.flexWrap">
      <option value="">请选择</option>
      <option value="nowrap">nowrap</option>
      <option value="wrap">wrap</option>
      <option value="wrap-reverse">wrap-reverse</option>
    </select>
    控制子元素是否换行，默认是不换行 nowrap  wrap wrap-reverse
  </div>
  <div class="options">
    flex-direction:
    <select v-model="boxStyle.flexDirection">
      <option value="">请选择</option>
      <option value="row">row</option>
      <option value="row-reverse">row-reverse</option>
      <option value="column">column</option>
      <option value="column-reverse">column-reverse</option>
    </select>
    用来设置主轴方向，默认主轴方向是水平排列 默认是row水平方向
  </div>

  <div class="box" :style="boxStyle">
    <div class="first">1</div>
    <div class="second">2</div>
    <div class="third">3</div>
    <div class="fourth">4</div>
    <div class="fifth">5</div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

let boxStyle = reactive({
  justifyContent:'space-around',
  flexWrap:'',
  flexDirection:'',
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
  font-size: 100px;
}
.first{
  background-color: red;
}
.second{
  background-color: blue;
}
.third{
  background-color: green;
}
.fourth{
  background-color: orange;
}
.fifth{
  background-color: lightcoral;
}
</style>