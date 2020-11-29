import axios from 'axios';
import { Message } from 'element-ui'
import store from '@/store'
let url = ''
if (process.env.NODE_ENV == 'development') {
    url = 'http://192.168.0.100:4000'
} else if (process.env.NODE_ENV == 'production') {
    url = 'test'
}

const http = axios.create({
    baseURL: url,
    timeout: 10000 //请求超时时间
})

http.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencoded;chatset=UTF-8'
    //request拦截器
http.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers["Authorization"] = 'store.state.userInfo.token'
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})


//response
http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log(error)
        Message({
            message: error.error,
            type: 'error',
            duration: 3000
        })
        return Promise.reject(error)
    }
)

export default http