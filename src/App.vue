<template>
  <div class="app">
    <el-container class="main">
      <el-aside>
        <LeftBar></LeftBar>
      </el-aside>
      <el-container>
        <el-header>
          <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    href="https://www.bilibili.com/video/BV1b4411i742?p=95">
            HTML5+CSS3教程
          </el-link>
          |
          <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    href="https://www.bilibili.com/video/BV1sJ411D7xN?p=12">
            Gif学习
          </el-link>
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import LeftBar from "@/components/LeftBar";

</script>
<style lang="scss">
@import "assets/css/base.css";

.el-header,
.el-footer {
  line-height: 60px;
  background-color: white;
  color: var(--el-text-color-primary);
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.el-container {
  height: 100vh;
}

</style>