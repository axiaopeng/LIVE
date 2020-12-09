const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const compression = require('compression')

var bodyParser = require('koa-bodyparser')
var admin = require('./route/admin/admin.js')
var global = require('./route/admin/global.js')
var user = require('./route/user/user.js')

const app = new Koa()
const router = new Router()

console.log(new Date().toLocaleDateString())
require('./schedule')
require('./wsocket')

app.use(cors())
app.use(bodyParser())
app.use(compression()) //开启gzip
    // 验证token中间件
const check = require('./utils/middleware/checkToken')
app.use(check)


// 错误处理
app.use(async(ctx, next) => {
    try {
        // 这里给ctx对象添加了一个error方法
        // 后面的代码中，当执行ctx.error方法时，就会抛出一个异常
        // 这样，在其他的路由或中间件里，代码执行到ctx.error时就会直接跳回到这个的错误捕捉中间件，ctx.error后面的代码就不会再执行了
        ctx.error = (code, message) => {
            if (typeof code === 'string') {
                message = code
                code = 500
            }
            ctx.throw(code || 500, message || '服务器错误')
        }
        await next()
    } catch (err) {
        ctx.status = 501;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx)
    }
})


router.get('/', (ctx) => {
    ctx.body = 'test main_router'
})


router.use('/admin', admin.routes())
router.use('/user', user.routes())
router.use('/global', global.routes())


app.use(router.routes()).use(router.allowedMethods())


app.on("error", (err, ctx) => {
    console.log(new Date(), ':', err)
    ctx.body = {
        status: 501,
        results: err.message
    }
})

app.listen(8224, () => {
    console.log('已运行')
})