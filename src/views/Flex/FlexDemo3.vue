<template>
  <div class="options">
    宽度：<input type="text"
              @keydown.up="layoutStyle.width=(parseInt(layoutStyle.width)+10)+'px'"
              @keydown.down="layoutStyle.width=(parseInt(layoutStyle.width)-10)+'px'"
              v-model="layoutStyle.width">
    高度：<input type="text"
              @keydown.up="layoutStyle.height=(parseInt(layoutStyle.height)+10)+'px'"
              @keydown.down="layoutStyle.height=(parseInt(layoutStyle.height)-10)+'px'"
              v-model="layoutStyle.height">
  </div>
  <div class="layout" :style="layoutStyle">
    <div class="header"></div>
    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

let layoutStyle = reactive({
  width:'600px',
  height:'500px',
})
</script>

<style lang="scss" scoped>
.options{
  text-align: center;
  margin-bottom: 10px;
}
.layout{
  margin: 0 auto;
  border: solid 1px red;
  display: flex;
  flex-direction: column;

  .header{
    height: 80px;
    background-color: darkred;
  }
  .content{
    display: flex;
    flex: 1;
    background-color: darkgoldenrod;

    .left{
      flex: 1;
      background-color: darkmagenta;
    }
    .right{
      flex: 3;
      background-color: darkorange;
    }
  }
  .footer{
    height: 80px;
    background-color: darkgreen;
  }
}

</style>