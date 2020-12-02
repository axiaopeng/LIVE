const schedule = require('node-schedule')
const Global = require('./utils/models/global')
const { save } = require('./utils/curd')
    //每天 00:00:00 生成新的当天访问用户表 
const scheduleVisit = () => {
    schedule.scheduleJob('0 0 0 * * *', async() => {
        const res = await save(Global, {
            createTime: new Date().toLocaleString(),
            version: 1.00
        })
    })
}
scheduleVisit()