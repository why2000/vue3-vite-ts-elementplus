<script lang="ts">
import axios from 'axios'
const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCourses() {
    return apiClient.get('/course/all')
  },
  postLogin() {
    return apiClient.post(
        '/login',
        {
          userid: '2007210041',
          password: '2007210041' 
        }
    )
  }
}

</script>