<template>
  <div>
    web字体：<i class="web-font">明月几时有，自己抬头瞅</i>
  </div>
  <div>
    默认字体：<span class="default-font">明月几时有，自己抬头瞅</span>
  </div>
</template>

<script>
export default {
  name: "WebFont"
}
</script>

<style scoped>
@import "../assets/font/webfont.css";
.web-font{
  font-size: 50px;
}
.default-font{
  font-size: 50px;
}
</style>