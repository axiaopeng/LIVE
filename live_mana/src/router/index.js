import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ("@/views/user_mana/home.vue")
            },
            {
                path: '/usersInfo',
                name: 'usersInfo',
                component: () =>
                    import ('@/views/user_mana/usersInfo.vue')
            },
            {
                path: '/adminMana',
                name: 'adminMana',
                component: () =>
                    import ('@/views/user_mana/adminMana.vue')
            },
            {
                path: '/roleMana',
                name: 'roleMana',
                component: () =>
                    import ('@/views/user_mana/roleMana.vue')
            },
            {
                path: '/editUserInfo',
                name: 'editUserInfo',
                component: () =>
                    import ('@/views/user/editUserInfo.vue')
            },
            {
                path: '/editPwd',
                name: 'editPwd',
                component: () =>
                    import ('@/views/user/editPwd.vue')
            }
        ]
    }

]

// 解决路由跳转重复
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



const router = new Router({
    mode: 'hash',
    // scrollBehavior: () => ({ y: 0 }), 路由切换页面到达位置
    base: process.env.BASE_API,
    routes
})

export default router