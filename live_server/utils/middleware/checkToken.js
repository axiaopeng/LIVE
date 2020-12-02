const jwt = require('jsonwebtoken');
const secretOrkey = 'secret';

async function check(ctx, next) {
    let url = ctx.url.split('?')[0]
        // 如何访问接口为注册或登录 则不需要验证token
    if (url === '/user/login_u' || url === '/user/regi_u') {
        await next();
    } else {
        let token = ctx.request.headers["authorization"].split(' ')[1]
     
        if (token) { //token存在
            try { //判断token是否过期
                // 未过期
                jwt.verify(token, secretOrkey)
                await next();
            } catch (err) {
                //token过期
                if (err.message == 'jwt expired') {
                    ctx.body = {
                        status: 50001,
                        message: 'token 已过期'
                    }
                } else if (err.message == 'jwt malformed') {
                    // token无效
                    ctx.body = {
                        status: 50002,
                        message: '该token无效'
                    }
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