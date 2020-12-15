//客户端路由
const router = require('koa-router')();
const User = require('../../utils/models/user')
const Global = require('../../utils/models/global')
const MyQQ = require('../../utils/models/myQQ')
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
    const body = ctx.request.body

    //校验 注册账号信息
    try {
        const res = await save(User, {
            ...body,
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
            results: err.message
        }
    }

})
router.put('/regi_u', async(ctx) => {
    try {
        const res = await updateOne(User, { _id: ctx.request.body._id }, ctx.request.body)
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
                    results: '密码错误'
                }
            }
        } else { //该用户不存在
            ctx.body = {
                status: 400,
                results: '该账号不存在'
            }
        }
    })
    //@login_u     --end

//@info_u  --start 获取用户信息
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

//@myQQ --start  即时通信模块 
//获取我的QQ信息
router.get('/myQQ', async(ctx) => {
        let res = await queryOne(MyQQ, ctx.request.query)
        if (res == null) {
            res = await save(MyQQ, ctx.request.query)
        }
        ctx.body = {
            status: 200,
            result: res
        }
    })
    //查找好友或群聊
router.get('/findOne', async(ctx) => {
    let phoneReg = /^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/
    let res
    if (phoneReg.test(ctx.request.query.ipt)) { //如果是手机号的话

        res = await queryOne(User, { username: ctx.request.query.ipt })
        ctx.body = {
            status: 200,
            result: res
        }

    } else {
        //群聊搜索
        console.log('2')
    }
})

//添加好友或群聊
router.post('/acceptFriend', async(ctx) => {
    let item = ctx.request.body
        // console.log(item)
    const res = await updateOne(MyQQ, { userId: item.toid, "friends.groupName": '我的好友' }, { $addToSet: { "friends.$.friend": item.id } })
    const res1 = await updateOne(MyQQ, { userId: item.id, "friends.groupName": '我的好友' }, { $addToSet: { "friends.$.friend": item.toid } })
    console.log(res)
    console.log(res1)
})

//@myQQ --end  即时通信模块    


module.exports = router