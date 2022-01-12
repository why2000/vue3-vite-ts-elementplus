<template>
  <template>
    <el-card :body-style="{ padding: '0px' }" class="box-card" shadow="always">
      <img src="@/assets/CPU.png" class="image" />
      <div style="padding: 14px">
        <div class="course-name">
          <span>{{ course.name }}</span>
        </div>
        <div class="bottom">
          <time class="time">{{ course.name }}</time>
           <router-link to="/courseHome">
          <el-button type="text" class="button">Operating</el-button>
          </router-link>
        </div>
      </div>
    </el-card>
  </template>
</template>

<script setup lang="ts">
defineProps(['course'])
</script>

<style scoped>
.box-card {
  width: auto;
  height: 250px;
}

.course-name {
  margin-top: 5px;
  font-size: 16px;
  align-items: left;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 30px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
