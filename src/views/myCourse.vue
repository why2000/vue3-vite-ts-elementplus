<template>
  <div class="courses">
    <div class="courseArea">
      <CourseCard class="courseCard" :courses="courses"></CourseCard>
    </div>
    <div class="rightSideArea">
      <todoCard></todoCard>
      <infoCard></infoCard>
    </div>
  </div>
</template>

<script lang="ts">
import CourseCard from '@/components/CourseCard.vue'
import todoCard from '@/components/todoCard.vue'
import infoCard from '@/components/infoCard.vue'
import CourseService from '@/services/CourseService.vue'

export default {
  name: 'myCourse',
  courses: null,
  components: {
    CourseCard,
    infoCard,
    todoCard,
  },
  data() {
    return {
      courses: null,
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
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "courseArea rightSideArea";
}

.courseArea {
  grid-area: courseArea;
  display: flex;
  flex-wrap: wrap;
}

.rightSideArea {
  grid-area: rightSideArea;
}
</style>
