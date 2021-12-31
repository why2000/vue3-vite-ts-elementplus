<template>
  <div class="courses">
    <CourseCard v-for="course in courses" :key="course.id" :course="course"></CourseCard>
  </div>
</template>

<script lang="ts">
import CourseCard from '@/components/CourseCard.vue'
import CourseService from '@/services/CourseService'

export default {
  name: 'courseHome',
  courses: null,
  components: {
    CourseCard
  },
  data() {
    return {
      courses:null,
    }
  },

  created() {
    CourseService.getCourses()
      .then(response => {
        this.courses = response.data,
        console.log('courses:', response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.courses {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
