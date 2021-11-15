<template>
  <div class="loading">
    <section>
      <span class="blocks" style="--i:1"></span>
      <span class="blocks" style="--i:2"></span>
      <span class="blocks" style="--i:3"></span>
      <span class="blocks" style="--i:4"></span>
      <span class="blocks" style="--i:5"></span>
      <span class="blocks" style="--i:6"></span>
      <span class="blocks" style="--i:7"></span>
      <span class="blocks" style="--i:8"></span>
      <span class="blocks" style="--i:9"></span>
      <span class="blocks" style="--i:10"></span>
      <span class="blocks" style="--i:11"></span>
      <span class="blocks" style="--i:12"></span>
      <span class="blocks" style="--i:13"></span>
      <span class="blocks" style="--i:14"></span>
      <span class="blocks" style="--i:15"></span>
      <span class="blocks" style="--i:16"></span>
      <span class="blocks" style="--i:17"></span>
      <span class="blocks" style="--i:18"></span>
      <span class="blocks" style="--i:19"></span>
      <span class="blocks" style="--i:20"></span>
      <h3>Loading</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style lang="scss" scoped>
.loading{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  section{
    width:250px;
    height: 250px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;

    h3{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      margin: 0;
      font-size: 2em;
      color: white;
    }
    .blocks{
      position: absolute;
      width: 8px;
      height: 25px;
      background-color: #3d4044;
      transform-origin: 0 125px;
      transform: rotate(calc(18deg*var(--i)));
      animation: blockAnimate 1s infinite ease-in-out ;
      animation-delay: calc(0.05s*var(--i));
    }
  }
}
@keyframes blockAnimate {
  0%,50%{

  }
  50.1%,100%{
    background-color: #0d84ff;
  }
}
</style>