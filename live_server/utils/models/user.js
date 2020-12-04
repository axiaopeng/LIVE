const mongoose = require('../db')
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    username: {
        type: String,
        unique: [true, '该手机号已被创建'],
        match: [/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/, '手机号格式错误'],
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'COMMON_USER'
    },
    email: {
        type: String
    },
    updateTime: {
        type: String
    },
    createTime: {
        type: String,
        require: true
    },
    perms: {
        type: Array,
    }
})


const User = mongoose.model('User', demoSchema);
module.exports = User