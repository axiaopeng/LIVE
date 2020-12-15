import req from "@/utils/request";
export {
    loginbyusername,
    getuserinfo
}
// 获取token   用户名登录
function loginbyusername(username, password) {
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
function getuserinfo(token) {
    return req({
        url: '/user/info_u',
        method: 'get',
        params: {
            token
        }
    })
}