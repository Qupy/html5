<template>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="tips">
    使用 $变量名:变量值  来定义变量
  </div>
</template>

<script>
export default {
  name: "Variable"
}
</script>

<style lang="scss" scoped>
  $leftBgc:red;
  $rightBgc:green;

  .tips{
    text-align: center;
    color: #888;
  }

  .box{
    width: 500px;
    height: 300px;
    margin: 100px auto;
    border: solid 3px #ccc;
    display: flex;
    justify-content: space-evenly;
    div{
      width: 200px;
      height: 100%;
    }
    .left{
      background-color: $leftBgc;
    }
    .right{
      background-color: $rightBgc;
    }
  }
</style>