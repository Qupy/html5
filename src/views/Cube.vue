<template>
  <div class="box" :class="{rotate:isRotate}">
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="top">top</div>
    <div class="bottom">bottom</div>
    <div class="front">front</div>
    <div class="back">back</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$width:200px;

.box{
  width: $width;
  height: $width;
  margin: 150px auto;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 2s;

  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.rotate{
  transform: rotate3d(1,1,0,360deg);
}
.box>div{
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
}
.front{
  background-color: red;
  transform: translateZ($width/2);
}
.back{
  background-color: blue;
  transform: translateZ(-$width/2) rotateY(180deg);
}
.left{
  background-color: orange;
  transform: translate(-$width/2) rotate3d(0,1,0,90deg);
}
.right{
  background-color: green;
  transform: translate($width/2) rotate3d(0,1,0,90deg);
}
.top{
  background-color: darkmagenta;
  transform: translateY(-$width/2) rotate3d(1,0,0,90deg);
}
.bottom{
  background-color: deepskyblue;
  transform: translateY($width/2) rotate3d(1,0,0,90deg);
}

@keyframes rotate {
  from{
    transform: rotate3d(1,1,0,0deg) rotate3d(0,1,1,0deg);
  }
  to{
    transform: rotate3d(1,1,0,360deg)  rotate3d(0,1,1,360deg);
  }
}
</style>
