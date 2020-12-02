import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
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
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/login.vue')
    }

]

// 解决路由跳转重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router