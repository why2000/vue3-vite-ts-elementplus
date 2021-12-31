<template>
  <div class="course-card">
    <span>@{{ course.id }} on {{ course.date }}</span>
    <h4>{{ course.name }}</h4>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    course: {
      type: Object,
      required: true  
    }
  }
}
</script>

<style scoped>
.course-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-right: 18px;
}

.course-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
