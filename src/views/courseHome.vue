<template>
  <div class="courses">
    <CourseCard :courses="courses"></CourseCard>
    <InfoCard></InfoCard>
  </div>
</template>

<script lang="ts">
import CourseCard from '@/views/CourseCard.vue'
import InfoCard from '@/components/InfoCard.vue'
import CourseService from '@/services/CourseService.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  name: 'CourseHome',
  courses: null,
  components: {
    CourseCard,
    InfoCard
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
          console.log('courses:', this.courses);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.courses {
  display: flex;
  flex-wrap: wrap;
}
</style>
