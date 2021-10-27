<template>
  <div class="carousel">
    <ul>
      <li v-for="n in 5" :style="'transform:rotateX('+currentDeg+'deg)'">
        <div class="front"></div>
        <div class="back"></div>
        <div class="top"></div>
        <div class="bottom"></div>
      </li>
    </ul>
    <a href="" @click.prevent="currentDeg+=90" class="pre">&lt;</a>
    <a href="" @click.prevent="currentDeg-=90" class="next">&gt;</a>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let currentDeg = ref(0);

onMounted(()=>{
  setInterval(()=>{
    currentDeg.value -= 90;
  },3000)
})

</script>

<style lang="scss" scoped>
$width:500px;
$height:300px;

@mixin liStyle($index){
  transition-delay: ($index - 1)*0.2s;
  &>div{
    background-position-x: -$width*($index - 1)/5 ;
  }
}

.carousel{
  width: $width;
  height: $height;
  margin: 100px auto;
  position: relative;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    transform: rotate3d(1,1,0,-30deg);
    transform-style: preserve-3d;

    li{
      width: $width/5;
      height: $height;
      position: relative;
      transform-origin: center center;
      transform-style: preserve-3d;
      transition: transform 1s;

      div{
        position: absolute;
        left: 0;
        right: 0;
        width: $width/5;
        height: $height;
        background-size: $width $height;
      }

      div.front{
        transform: translateZ($height/2);
        background-image: url("../../assets/images/c1.jpg");
      }
      div.back{
        transform: translateZ(-$height/2) rotateX(180deg);
        background-image: url("../../assets/images/c2.jpg");
      }
      div.top{
        transform: translateY(-$height/2) rotateX(90deg);
        background-image: url("../../assets/images/c3.jpg");
      }
      div.bottom{
        transform: translateY($height/2) rotateX(-90deg);
        background-image: url("../../assets/images/c4.jpg");
      }
    }

    li:nth-of-type(1){
      @include liStyle(1)
    }
    li:nth-of-type(2){
      @include liStyle(2)
    }
    li:nth-of-type(3){
      @include liStyle(3)
    }
    li:nth-of-type(4){
      @include liStyle(4)
    }
    li:nth-of-type(5){
      @include liStyle(5)
    }
  }

  .pre,.next{
    width: $height/5;
    height: $height/5;
    background-color: rgba(0,0,0,0.4);
    text-align: center;
    position: absolute;
    font-size: $height/6;
    line-height: $height/5;
    text-decoration: none;
    color:white;
    top:50%;
    transform: translateY(-50%);
  }
  .pre{
    left:0;
  }
  .next{
    right: 0;
  }
}


</style>