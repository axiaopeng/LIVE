import req from "@/utils/request";
import axios from 'axios'
// 获取首页访问次数数据
export function getCharts(params) {
    return req({
        url: '/global/charts',
        method: 'get',
        params
    })
}
// 获取天气数据
export function getWeather() {
    return axios({
        url: 'https://v0.yiketianqi.com/api',
        method: 'get',
        params: {
            version: 'v9',
            appid: '37376872',
            appsecret: 'WV37bjCR',
            vue: 1
        }
    })
}

//创建角色
export function addRole(data) {
    return req({
        url: '/global/role',
        method: 'post',
        data
    })
}
// 修改角色
export function editRole(data) {
    return req({
        url: '/global/role',
        method: 'put',
        data
    })
}
//获取角色
export function getRole(params = {}) {
    return req({
        url: '/global/role',
        method: 'get',
        params: params
    })
}

//删除角色
export function deleteRole(id) {
    return req({
        url: '/global/role',
        method: 'delete',
        data: {
            _id: id
        }
    })
}
// 删除多个角色
export function deleteRoles(ids) {
    let arr = []
    ids.forEach(id => {
        arr.push(req({
            url: '/global/role',
            method: 'delete',
            data: {
                _id: id
            }
        }))
    })
    return Promise.all(arr)
}

// 获取新闻资讯api 
// export function getFooterGame() {
//     return axios({
//         url: 'http://v.juhe.cn/toutiao/index',
//         method: 'get',
//         params: {
//             type: 'top',
//             key: 'APPKEY'
//         }
//     })
// }