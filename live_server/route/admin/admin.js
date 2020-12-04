//后台管理路由
const router = require('koa-router')()
const Global = require('../../utils/models/global')

router.get('/', (ctx) => {
    ctx.body = 'test child_admin_router'
})


module.exports = router