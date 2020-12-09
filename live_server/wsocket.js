const WebScoket = require('ws')

const server = new WebScoket.Server({ port: 8225 });
console.log('ws已运行在8225端口')
server.on('open', function open() {
    console.log('connected')
})

server.on('close', function close() {
    console.log('disconnected')
})


server.on('connection', (ws, req) => {
    ws.on('message', message => {
        // 解析数据，客户端只能发送字符串过来
        const result = JSON.parse(message)
        console.log(result)
        if (result.login) { //如果是登录
            ws.clientId = result.id; //在连接中保存客户的id 私人id或房间id
        } else {
            server.clients.forEach(c => {
                if (c.clientId == result.to || c.clientId == result.id) { //私聊发送给对方和自己，不影响群聊
                    if (c.readyState == WebScoket.OPEN) {
                        console.log('萨达')
                        c.send(JSON.stringify({...result.myself, msg: result.msg }))
                            //将信息保存到数据库中， 待敲 已读
                    } else {
                        //将信息保存到数据库中， 待敲 未读
                    }

                }
            })
        }
    })
})