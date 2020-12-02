const mongoose = require('../db')
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    visitPeople: { //当天访问系统次数
        type: Number,
        default: 0
    },
    createTime: { //生产时间
        type: String,
        require: true
    },
    version: { //系统版本
        type: Number
    },
    updateCt: { //更新内容
        type: String
    }
})

const Global = mongoose.model('Global', demoSchema);
module.exports = Global