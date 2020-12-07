import req from '@/utils/request'

// 获取所有用户列表
export function usersList(query = {}) {
    return req({
        url: '/user/regi_u',
        method: 'get',
        params: query
    })
}

// 创建用户
export function addUser(data) {
    return req({
        url: '/user/regi_u',
        method: 'post',
        data
    })
}
// 修改用户
export function editUser(data) {
    return req({
        url: '/user/regi_u',
        method: 'put',
        data
    })
}
// 删除用户
export function removeUser(id) {
    return req({
        url: '/user/regi_u',
        method: 'delete',
        data: {
            _id: id
        }
    })
}