<template>
  <div class="box" :style="{'justify-content':justifyContent}">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
    <div class="fourth"></div>
  </div>
  <div class="options">
    justify-content:
    <select name="justifyContent" id="justifyContent" v-model="justifyContent">
      <option value="">请选择</option>
      <option value="flex-start">Flex-Start</option>
      <option value="flex-end">Flex-End</option>
      <option value="space-between">Space-Between</option>
      <option value="space-evenly">Space-Evenly</option>
      <option value="space-around">Space-Around</option>
    </select>
  </div>
</template>

<script setup>
import {ref} from "vue";

let justifyContent = ref('')
</script>

<style scoped>
.options{
  margin-top: 10px;
}
.box{
  width: 1000px;
  height: 200px;
  border: solid 1px red;
  box-sizing: border-box;
  display: flex;

}
.box>div{
  width: 200px;
  height: 100%;
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
</style>