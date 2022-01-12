<template>
<div class="container">
  <button class="button" @click="login">登录测试用户</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CourseService from '@/services/CourseService.vue'

export default defineComponent({
  name: 'LoginUser',
  data() {
  },
  methods: {
    login() {
      CourseService.postLogin()
      .then(response => {
        console.log('LoginInfo1:', response.data);
        this.$router.push('/myCourse')
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    // moved login to login() method above
  }
})
</script>

<style scoped>
.container {
  display: grid;
  padding: 16px;
}
.button {
  background-color: #274FAE;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
}
</style>
