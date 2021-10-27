<template>
<div class="leftBar">
  <div class="logo">
    100RUI
  </div>
  <el-scrollbar>
    <el-menu
        router
        default-active="1"
        :default-openeds="['2']"
        :unique-opened="true"
        class="el-menu-vertical-demo"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-apple"></i>
          <span>HTML5+CSS3学习</span>
        </template>
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="1-2">
          <template #title>伸缩布局</template>
          <el-menu-item index="/flex/justifyContent">JustifyContent</el-menu-item>
          <el-menu-item index="/flex/flow">FlexFlow</el-menu-item>
          <el-menu-item index="/flex/grow">FlexGrow</el-menu-item>
          <el-menu-item index="/flex/shrink">FlexShrink</el-menu-item>
          <el-menu-item index="/flex/demo">FlexDemo</el-menu-item>
          <el-menu-item index="/flex/demo2">FlexDemo2</el-menu-item>
          <el-menu-item index="/flex/alignItems">AlignItems</el-menu-item>
          <el-menu-item index="/flex/demo3">FlexDemo3</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-3">
          <template #title>Sass学习</template>
          <el-menu-item index="/sass/variable">Variable变量</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cube">立方体</el-menu-item>
        <el-menu-item index="/animation">动画</el-menu-item>
        <el-menu-item index="/animationroll">图片滚动</el-menu-item>
        <el-menu-item index="/clock">时钟</el-menu-item>
        <el-menu-item index="/webfont">WEB字体</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-cloudy"></i>
          <span>毕业案例</span>
        </template>
        <el-menu-item index="/demo/ctrip">携程首页</el-menu-item>
        <el-menu-item index="/demo/carousel">轮播图</el-menu-item>
        <el-menu-item index="/demo/hexagon">六边形</el-menu-item>
        <el-menu-item index="/demo/401">401</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</div>
</template>

<script>
export default {
  name: "LeftBar"
}
</script>

<style lang="scss" scoped>
.leftBar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    width: 100%;
    &.logo{
      font-size: 24px;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>