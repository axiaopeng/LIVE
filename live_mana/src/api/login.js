import req from "@/utils/request";

// 获取token   用户名登录
export function loginbyusername(username, password) {
    const data = {
        username,
        password
    }
    return req({
        url: '/user/login_u',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getuserinfo(token) {
    return req({
        url: '/user/info_u',
        method: 'get',
        params: {
            token
        }
    })
}