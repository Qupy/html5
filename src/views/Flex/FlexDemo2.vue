<template>
  <div class="box">
    <ul>
      <li>首页</li>
      <li>Flex布局</li>
      <li>时钟安全</li>
      <li>动画制作</li>
      <li>Java</li>
      <li>C#</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FlexDemo2"
}
</script>

<style lang="scss" scoped>
.box{
  width: 500px;
  height: 300px;
  border: solid 1px red;
  margin: 100px auto ;

  ul{
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li{
      background: #42b983;
      height: 36px;
      line-height: 36px;
      text-align: center;
      flex: 1;
      border-right: solid 2px orange;
    }
    li:last-of-type{
      border: none;
    }
  }
}
</style>