<template>
  <div class="options">
    left-style-flowgrow：<input type="number" min="0" v-model="style.left.flexGrow">
    right-style-flowgrow：<input type="number" min="0" v-model="style.right.flexGrow">
    <br>
    flex是用来设置当前伸缩子项占据剩余空间的比例值
  </div>
  <div class="box">
    <div class="left" :style="style.left"></div>
    <div class="right" :style="style.right"></div>
  </div>
</template>

<script setup>
  import {reactive} from "vue";

  let style = reactive({
    left:{
      flexGrow: 1
    },
    right:{
      flexGrow: 4
    }
  })
</script>

<style scoped>
.options{
  margin-bottom: 10px;
}
.box{
  width:100%;
  height: 500px;
  background-color: #ccc;
  margin: 0 auto;
  display: flex;
}
.box>div{
  height: 100%;
}
.left{
  background-color: orange;
}
.right{
  background-color: green;
}

</style>