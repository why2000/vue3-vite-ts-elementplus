import request from "./request"
const http = new request({
    baseURL:'http://lms.techbooming.com/',
    timeout:10000
})
export default http;