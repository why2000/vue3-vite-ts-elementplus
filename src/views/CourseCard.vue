<template>
  <template v-for="course in courses.data" :key="course.id">
    <el-card :body-style="{ padding: '0px' }" class="box-card" shadow="always">
      <img src="@/assets/CPU.png" class="image" />
      <div style="padding: 14px">
        <div class="course-name">
          <span>{{ course.name }}</span>
        </div>
        <div class="bottom">
          <time class="time">{{ course.name }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </template>
</template>

<script setup lang="ts">
defineProps(['courses'])
</script>

<style>
.box-card {
  margin-left: 15px;
  margin-bottom: 20px;
  width: 250px;
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
