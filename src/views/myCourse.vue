<template>
  <div class="courses">
    <div class="courseArea"> 
      <CourseCard
        v-for="course in courses.data"
        :key="course.id"
        :course="course"
        class="courseCard"
      ></CourseCard>
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
import infoCard from '@/components/InfoCard.vue'
import CourseService from '@/services/CourseService'

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
        this.courses = response.data;
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
  grid-template-columns: 4fr 1.2fr;
  grid-template-areas: "courseArea rightSideArea";
  grid-gap: 5%;
}

.courseArea {
  grid-area: courseArea;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

}

.courseCard {
  display: grid;
}

.rightSideArea {
  grid-area: rightSideArea;
}
</style>
