import http from '../http'
// 用户管理模块
const usermana = {
    // 获取用户列表
    userList(data) {
        return http.get('/user/regi_u', { params: data })
    }
}



export default usermana