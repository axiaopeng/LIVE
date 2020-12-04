//客户端路由
const router = require('koa-router')();
const User = require('../../utils/models/user')
const Global = require('../../utils/models/global')
const { query, queryOne, save, update, updateOne, deleteOne, deleteMany } = require('../../utils/curd')
const jwt = require('jsonwebtoken');
const secretOrkey = 'secret';
const { getDate } = require('../../utils/time');



//@regi_u     --start 处理用户账号的接口
router.get('/regi_u', async(ctx) => {

    const res = await query(User, ctx.query)
    ctx.body = {
        status: 200,
        results: res
    }
})
router.post('/regi_u', async(ctx) => {
    //解构赋值 获取注册账号信息  
    const { username, password } = ctx.request.body

    //校验 注册账号信息
    try {
        const res = await save(User, {
            username,
            password,
            createTime: new Date()
        })
        console.log(res)
        ctx.body = {
            status: 200,
            results: res
        }
    } catch (err) {
        ctx.body = {
            status: 400,
            results: err
        }
    }

})
router.put('/regi_u', async(ctx) => {
    const newDate = ctx.request.body
    const res = await updateOne(User, { _id: newDate.id }, newDate)
    ctx.body = {
        status: 200,
        results: res
    }
})
router.delete('/regi_u', async(ctx) => {
        const { id } = ctx.request.body
        const res = await deleteOne(User, { _id: id })
        ctx.body = {
            status: 200,
            results: res
        }
    })
    //@regi_u     --end
    //@login_u     --start  处理登录的接口
router.post('/login_u', async(ctx) => {
        const { username, password } = ctx.request.body;
        //校验登录账号
        const user = await queryOne(User, { username: username })

        if (user) { //如果该账号存在，检测密码是否正确
            if (user.password == password) { //密码正确的情况
                //检验成功生成token，并返回用户信息
                const token = jwt.sign({ username: username, password: password }, secretOrkey, { expiresIn: 43200 })
                let info = null; // 用户信息
                // 深度克隆一个对象
                info = JSON.parse(JSON.stringify(user))
                    // info = {...user }
                delete info.password //不能返回密码

                // 同时更新用户登录时间
                await updateOne(User, { _id: user._id }, { updateTime: getDate('yyyy-mm-dd hh:mm:ss') })

                ctx.body = {
                        status: 200,
                        token: 'Bearer ' + token
                    }
                    // 访问人数自增
                await updateOne(Global, {
                    createTime: new RegExp("^" + getDate('yyyy-mm-dd'))
                }, { $inc: { visitPeople: 1 } })
            } else { //密码错误
                ctx.body = {
                    status: 400,
                    error: '密码错误'
                }
            }
        } else { //该用户不存在
            ctx.body = {
                status: 400,
                error: '该账号不存在'
            }
        }
    })
    //@login_u     --end

//@info_u  --start
router.get('/info_u', async(ctx) => {
        let token = ctx.query.token
        token = token.split(' ')[1]
        const { username } = jwt.verify(token, secretOrkey)
        let res = await queryOne(User, { username })
        res = JSON.parse(JSON.stringify(res))
        delete res.password
        ctx.body = {
            status: 200,
            result: res
        }
    })
    //@info_u  --end


module.exports = router