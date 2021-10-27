<template>
  <div>
    <ul>
      <li>
        <img src="../assets/images/1.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/2.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/3.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/4.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/5.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/6.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/7.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/1.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/2.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/3.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/4.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/5.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/6.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/7.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

div {
  width: 882px;
  height: 86px;
  margin: 100px auto;
  background-color: #ddd;
  overflow: hidden;


  ul {
    width: 200%;
    margin: 0;
    padding: 0;
    list-style: none;
    animation-name: move;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    li {
      width: 126px;
      float: left;

      img {
        width: 100%;
        height: 86px;
      }
    }
  }
}

div:hover>ul{
  cursor: pointer;
  animation-play-state: paused;
}

@keyframes move {
  from{
    transform: translate(0);
  }
  to{
    transform: translate(-882px);
  }
}

</style>