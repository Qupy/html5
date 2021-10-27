<template>
  <div class="error">
    <div class="lock">
      <div class="bigRing"></div>
      <div class="smallRing"></div>
      <i class="iconfont icon-lock"></i>
    </div>
    <div class="message">
      <h2>对不起，您没有权限</h2>
      <p>请联系管理员开通</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
$lockWidth:320px;
$fontColor:#5caaff;
.error {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .message{
    margin-top: 10px;
    text-align: center;
    h2{
      color:$fontColor;
      font-size: 30px;
    }
    p{
      color: #888;
      font-size: 16px;
    }
  }
  .lock{
    width: $lockWidth;
    height: $lockWidth;
    position: relative;

    div{
      position: absolute;
    }

    .bigRing{
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      box-sizing: border-box;
      border: dashed 5px #CCC;
      border-radius:$lockWidth/2;
      animation-name: alongRotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .smallRing{
      width: ($lockWidth - 120);
      height: ($lockWidth - 120);
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      box-sizing: border-box;
      border: dashed 5px #CCC;
      border-radius:($lockWidth - 120px)/2;
      animation-name: inverseRotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .iconfont{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 100px;
      color: $fontColor;
    }
  }
}

@keyframes alongRotate {
  from{
    transform:translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform:translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes inverseRotate {
  from{
    transform:translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform:translate(-50%,-50%) rotate(-360deg);
  }
}

</style>
