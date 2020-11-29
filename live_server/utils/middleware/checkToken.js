const jwt = require('jsonwebtoken');
const secretOrkey = 'secret';

async function check(ctx, next) {
    let url = ctx.url.split('?')[0]
        // 如何访问接口为注册或登录 则不需要验证token
    if (url === '/user/login_u' || url === '/user/regi_u') {
        await next();
    } else {
        let token = ctx.request.headers["authorization"]

        if (token) { //token存在
            const tokenItem = jwt.verify(token, secretOrkey)
            if (tokenItem) { //token是否被成功解码
                //判断token是否过期
                let { time, timeout } = tokenItem;
                let data = new Date().getTime();
                if (data - time <= timeout) { // 未过期
                    await next();
                } else { //过期
                    ctx.body = {
                        status: 50001,
                        message: 'token 已过期'
                    }
                }
            } else { //该token无效
                ctx.body = {
                    status: 50002,
                    message: '该token无效'
                }
            }
        } else { //如何token不存在
            ctx.body = {
                status: 50000,
                message: 'token不存在，请重新登录'
            }
        }
    }
}

module.exports = check