<template>
  <div class="hexagon">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hexagon"
}
</script>

<style lang="scss" scoped>

$imgWidth:300px;
$imgHeight:200px;
$diameter:300px;

@mixin li-style($index,$url){
  background-image: url($url);
  transform: rotateY($index*60deg) translateZ($diameter) ;
}

.hexagon{
  width: $imgWidth;
  height: $imgHeight;
  border: solid 1px #ccc;
  margin: 150px auto;

  ul{
    margin: 0;
    padding:0;
    list-style: none;
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation-name: hexagon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    &:hover{
      animation-play-state: paused;
    }
    li{
      width: 100%;
      height: 100%;
      background-color: #888;
      position: absolute;
      left: 0;
      top: 0;
      background-size: 100% 100%;


      &:nth-of-type(1){
        @include li-style(1,'../../assets/images/c1.jpg')
      }
      &:nth-of-type(2){
        @include li-style(2,'../../assets/images/c2.jpg')
      }
      &:nth-of-type(3){
        @include li-style(3,'../../assets/images/c3.jpg')
      }
      &:nth-of-type(4){
        @include li-style(4,'../../assets/images/c4.jpg')
      }
      &:nth-of-type(5){
        @include li-style(5,'../../assets/images/c3.jpg')
      }
      &:nth-of-type(6){
        @include li-style(6,'../../assets/images/c2.jpg')
      }
    }

  }

  @keyframes hexagon {
    from{
      transform: rotate3d(1,1,0,-30deg) rotateY(0deg);
    }
    50%{
      transform: rotate3d(1,1,0,-30deg) rotateY(180deg);
    }
    to{
      transform: rotate3d(1,1,0,-30deg) rotateY(360deg);
    }
  }
}
</style>