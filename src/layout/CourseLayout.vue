<template>
    <el-container>
      <el-aside width="auto"><AsideMenu :courseID="courseID"></AsideMenu></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import AsideMenu from './AsideMenu/AsideMenu.vue'
import Header from './Header/Header.vue'
let courseID: number=0;
</script>

<style lang="scss">
.el-container{
  height: 100%;
}

header.el-header {
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border-right: none;
}

.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

</style>