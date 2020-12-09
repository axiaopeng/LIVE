import { loginbyusername, getuserinfo } from '@/api/login'
import { getToken, removeToken, setToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const user = {
    state: {
        _id: '',
        myImg: '',
        user: '',
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
        perms: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_PERMS: (state, perms) => {
            state.perms = perms
        },
        SET_ID: (state, _id) => {
            state._id = _id
        }
    },
    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim() // 去除字符串前面的空格
            return new Promise((resolve, reject) => {
                loginbyusername(username, userInfo.password).then(response => {
                    if (response.status === 400) {
                        reject(response)
                    } else if (response.status === 200) {
                        const token = response.token
                        commit('SET_TOKEN', token)
                        setToken(token)
                        resolve()
                    }

                }).catch(error => {
                    reject(error)
                })
            })
        },
        //获取用户信息
        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getuserinfo(state.token).then(response => {
                    if (response.status === 200) {
                        commit('SET_ID', response.result._id)
                            // commit('SET_ROLES', data.roles)
                            // commit('SET_ROLES', data.roles)
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        LogOut({ commit }) {
            return new Promise((resolve) => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                commit('SET_PERMS', [])
                removeToken()
                    // resetRouter()
                resolve('logout ok')
            })
        },
        // 强制登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                // 清除store中的信息
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                    // 清除缓存中的信息
                removeToken()
                resolve()
            })
        }
    }
}


export default user