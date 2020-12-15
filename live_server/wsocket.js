const MyQQ = require('./utils/models/myQQ')
const { query, queryOne, save, update, updateOne, deleteOne, deleteMany } = require('./utils/curd')


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
    ws.on('message', async message => {

        // 解析数据，客户端只能发送字符串过来
        const result = JSON.parse(message)

        if (result.type == 'login') { //如果是登录
            ws.clientId = result.id; //在连接中保存客户的id 私人id或房间id
        } else if (result.type == 'msg') { //如果是发消息


            const res1 = await updateOne(MyQQ, { userId: ws.noticeId, "unRead.id": ws.noticeId }, {
                $inc: { "unRead.$.number": 1 }
            })
            if (res1.n === 0) { //不存在就创建
                const res = await updateOne(MyQQ, { userId: ws.noticeId }, {
                    $addToSet: { unRead: { id: ws.noticeId, number: 1 } }
                })
                console.log(res)
            }
            let isOnline = 0; //用来判断对方是否连接当前窗口
            //判断对方是否连接当前窗口， 是则发送信息给对方
            server.clients.forEach(c => {
                if (c.clientId == result.to || c.clientId == result.id) { //私聊发送给对方和自己，不影响群聊
                    if (c.readyState == WebScoket.OPEN) {
                        c.send(JSON.stringify({...result.myself, msg: result.msg, type: 'msg' }))
                        isOnline++; //对方正连接当前窗口
                    }
                }
            })

            if (isOnline == 1) { //对方没有连接当前窗口
                console.log('chufa')
                server.clients.forEach(c => { //判断对方是否在线
                    if (c.noticeId == result.to.split('-')[0] && c.readyState == WebScoket.OPEN) {
                        c.send(JSON.stringify({ type: 'unRead', id: ws.noticeId }))
                    }
                })
            }
        } else if (result.type == 'notice') { // 消息通知盒子模块
            if (result.to == '') {
                ws.noticeId = result.id //无论何种情况都得先绑定好通知ID
            } else {

                server.clients.forEach(async c => {
                    if (c.noticeId == result.to) {
                        if (c.readyState == WebScoket.OPEN) {
                            c.send(JSON.stringify({...result.myself, msg: result.msg, isRead: false, date: new Date().toLocaleString }))
                                //将信息保存到数据库中， 待敲 已读
                        }

                    }
                })
            }

        }



    })
})