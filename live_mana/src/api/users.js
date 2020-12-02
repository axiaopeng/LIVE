import req from '@/utils/request'

export function usersList(query) {
    return req({
        url: '/user/regi_u',
        method: 'get',
        params: query
    })
}