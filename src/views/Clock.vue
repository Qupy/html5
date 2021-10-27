<template>
  <div class="clock">
    <div class="scale"></div>
    <div class="scale"></div>
    <div class="scale"></div>
    <div class="scale"></div>
    <div class="scale"></div>
    <div class="scale"></div>
    <div class="white"></div>
    <div class="hour" :style="'transform:rotate('+hour+'deg)'">
      <div class="pointer"></div>
    </div>
    <div class="minute" :style="'transform:rotate('+minute+'deg)'">
      <div class="pointer"></div>
    </div>
    <div class="second" :style="'transform:rotate('+second+'deg)'">
      <div class="pointer"></div>
    </div>
    <div class="core"></div>
  </div>
</template>

<script setup>
  import {reactive} from "vue";

  let curDate = new Date();
  let hour = (curDate.getHours()/12*360 + curDate.getMinutes()/60*30 + curDate.getSeconds()/60);
  let minute = (curDate.getMinutes()/60*360 + curDate.getSeconds()/60);
  let second = (curDate.getSeconds()/60*360)


</script>

<style lang="scss" scoped>
$width:300px;
$clockBorder:10px;
$whiteWidth:250px;
$speed:60s;

.clock{
  width: $width;
  height: $width;
  margin: 100px auto;
  border: solid $clockBorder #ccc;
  border-radius: 50%;
  position: relative;
  background-color: #fff;
}
.white{
  width: $whiteWidth;
  height: $whiteWidth;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.core{
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.scale{
  width: 8px;
  height: $width;
  background-color: #ccc;
  position: absolute;
  left: 50%;
  top:0;
}
.scale:first-of-type{
  transform: translate(-50%,0);
  width: 10px;
}
.scale:nth-of-type(2){
  transform:translate(-50%,0) rotate(30deg);
}
.scale:nth-of-type(3){
  transform:translate(-50%,0) rotate(60deg);
}
.scale:nth-of-type(4){
  transform:translate(-50%,0) rotate(90deg);
  width: 10px;
}
.scale:nth-of-type(5){
  transform:translate(-50%,0) rotate(120deg);
}
.scale:nth-of-type(6){
  transform:translate(-50%,0) rotate(150deg);
}
.hour,.minute,.second{
  position: absolute;
  width: $width;
  height: $width;
  border-radius: $width/2;
}

.hour{

  .pointer{
    background-color:red;
    width: 8px;
    height: $width/4;
    position: absolute;
    left: $width/2 - 4px;
    top: $width/4;
    animation-name: rotate;
    animation-duration: $speed*60*12;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

.minute{
  .pointer{
    width: 6px;
    height: $width/3;
    background-color:blue;
    position: absolute;
    left: $width/2 - 3px;
    top: $width/2 - $width/3;
    animation-name: rotate;
    animation-duration: $speed*60;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

.second{
  .pointer{
    width: 2px;
    height: $width/2.5;
    background-color:black;
    position: absolute;
    left: $width/2 - 1px;
    top: $width/2 - $width/2.5;
    animation-name: rotate;
    animation-duration:($speed);
    animation-iteration-count: infinite;
    animation-timing-function: steps(60);
  }
}

.pointer{

  transform-origin: bottom center;
}

@keyframes rotate {
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}

</style>