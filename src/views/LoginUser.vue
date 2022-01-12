<template>
</template>

<script lang="ts">
import CourseService from '@/services/CourseService'

export default {
  name: 'LoginUser',
  courses: null,
  data() {
  },
  created() {
    CourseService.postLogin()
      .then(response => {
        console.log('LoginInfo1:', response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
