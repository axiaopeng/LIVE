//后台管理路由
const router = require('koa-router')()
const Global = require('../../utils/models/global');
const Role = require('../../utils/models/role');
const { query, queryOne, save, update, updateOne, deleteOne, deleteMany } = require('../../utils/curd')

router.get('/charts', async(ctx) => {
    const res = await query(Global, ctx.request.query)
    ctx.body = {
        status: 200,
        results: res
    }
})

router.post('/role', async(ctx) => {
    try {
        const res = await save(Role, ctx.request.body)
        ctx.body = {
            status: 200,
            results: res
        }
    } catch (err) {
        ctx.body = {
            status: 400,
            results: err.message
        }
    }
})

router.put('/role', async(ctx) => {
    try {
        const res = await updateOne(Role, { _id: ctx.request.body._id }, ctx.request.body)
        console.log(res)
        ctx.body = {
            status: 200,
            results: res
        }
    } catch (err) {
        ctx.body = {
            status: 400,
            results: err.message
        }
    }
})
router.get('/role', async(ctx) => {

    try {
        const res = await query(Role, ctx.query)
        ctx.body = {
            status: 200,
            results: res
        }
    } catch (err) {
        ctx.body = {
            status: 400,
            results: err.message
        }
    }
})
router.delete('/role', async(ctx) => {
    try {
        console.log(ctx.request.body._id)
        const res = await deleteOne(Role, { _id: ctx.request.body._id })
        ctx.body = {
            status: 200,
            results: res
        }
    } catch (err) {
        ctx.body = {
            status: 510,
            results: err
        }
    }
})

module.exports = router