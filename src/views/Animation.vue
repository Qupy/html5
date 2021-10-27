<template>
  <div :class="{animationPaused:isPaused}"></div>
  <button @click="isPaused = !isPaused">{{isPaused?'播放':'暂停'}}</button>
</template>

<script setup>
  import {ref} from "vue";

  let isPaused = ref(false);
</script>

<style lang="scss" scoped>
$width:100px;

.animationPaused{
  animation-play-state: paused;
}

div{
  width: $width;
  height: $width;
  background-color: red;
  animation-name: moveTest;
  animation-duration: 3s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes moveTest {
  from{
    transform: translate(0,0) rotate(60deg);
  }
  30%{
    transform: translate(0,400px);
  }
  to{
    transform: translate(500px,400px);
  }
}
</style>