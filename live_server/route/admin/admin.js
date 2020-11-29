//后台管理路由
const router = require('koa-router')()

router.get('/', (ctx) => {
    ctx.body = 'test child_admin_router'
})


module.exports = router