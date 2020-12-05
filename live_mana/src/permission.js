import router from './router'
import store from './store'
import { Message } from "element-ui";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) //进度条



// 判断是否有权限函数
function hasPermission(perms, permissions) {
    if (perms.indexOf('*') >= 0) return true //管理员权限为 '*'
    if (!permissions) return true
    return perms.some(perm => permissions.indexOf(perm) >= 0)
}

const whiteList = ['/login', '/auth-rediect'] //路由白名单 ，可修改配置

router.beforeEach(async(to, from, next) => {
    NProgress.start() // 进度条开始加载
    if (getToken()) { // 判断是否有token
        // token存在
        if (to.path === '/login') {
            //有token的情况下访问登录路由直接让它重定向到首页
            next({ path: '/' })
                // NProgress.done() // 关闭进度条
        } else {
            if (store.getters.perms.length === 0) { //判断当前用户是否已经拉取完user_info信息
                let perms
                try {
                    const res = await store.dispatch('GetUserInfo') //通过token请求头获取user_info
                        // if (res.status === 50001) {
                        //     Message({
                        //         type: 'warning',
                        //         message: res.message
                        //     })
                        // }
                        // perms = res.data.data.perms // 用户权限数组列表
                        // await store.dispatch('GenerateRoutes', { perms }) //根据perms 生成可访问的路由表
                        // router.addRoutes(store.getters.addRoutes) //动态添加可访问路由表
                    next({ replace: true })
                } catch (err) {
                    // await store.dispatch('FedLogOut')

                    Message.error(err || '验证失败，请重新登录')
                    next(`/login?rediect=${to.path}`)
                }
            } else {

                if (hasPermission(store.getters.perms, to.meta.perms)) {
                    // 有权限
                    next()
                } else {
                    next({
                        path: '/401',
                        replace: true,
                        query: { noGoBack: true }
                    })
                }
            }
        }
    } else {
        // token不存在
        if (whiteList.indexOf(to.path) != -1) {
            //在免登陆白名单中，直接进入  
            next()
        } else {
            // 不在免登录白名单内，重定向到登录并携带参数从哪个路由跳转过来的
            next(`/login?rediect=${to.path}`)
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})