import axios from 'axios';
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000 //请求超时时间
})

http.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencoded;chatset=UTF-8'
    //request拦截器
http.interceptors.request.use(
        config => {
            if (store.getters.token) {
                config.headers["Authorization"] = getToken()
            }
            return config
        }, error => {
            console.log(error)
            Promise.reject(error)
        })
    //response
http.interceptors.response.use(
    response => {
        const res = response.data

        if (res.status === 50000) {
            MessageBox.alert(res.message, '提示', {
                confirmButtonText: '确定',
                type: 'warn'
            }).then(() => {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            })

        } else if (res.status === 50001) {
            MessageBox.alert(res.message, '提示', {
                confirmButtonText: '确定',
                type: 'warn'
            }).then(() => {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            })

        } else if (res.status === 50002) {
            MessageBox.alert(res.message, '提示', {
                confirmButtonText: '确定',
                type: 'warn'
            }).then(() => {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            })
            return
        } else if (res.status === 400) {
            if (res.results.indexOf('11000') >= 0) {
                res.results += '--该字段已被创建'
            }
            MessageBox.alert(res.results, '警告', {
                confirmButtonText: '确定',
                type: 'error'
            })
            return res
        } else if (res.errno === 504) {
            MessageBox.alert('更新数据已经失效，请刷新页面重新操作', '警告', {
                confirmButtonText: '确定',
                type: 'error'
            })
            return Promise.reject('error')
        } else if (res.errno === 505) {
            MessageBox.alert('更新失败，请再尝试一次', '警告', {
                confirmButtonText: '确定',
                type: 'error'
            })
            return Promise.reject('error')
        } else if (res.errno === 506) {
            MessageBox.alert('没有操作权限，请联系管理员授权', '错误', {
                confirmButtonText: '确定',
                type: 'error'
            })
            return Promise.reject('error')
        } else if (res.errno !== 0 && res.errno != undefined) {
            // 非5xx的错误属于业务错误，留给具体页面处理
            return Promise.reject(response)
        } else if (res.status != 200) {
            console.log('ss')
            message({
                type: 'warn',
                message: '操作过程出现问题'
            })
        } else {

            return response.data
        }
    },

    error => {
        console.log(error)
        Message({
            message: '登录连接超时（后台不能连接，请联系系统管理员）',
            type: 'error',
            duration: 3000
        })
        return Promise.reject(error)
    }
)

export default http