const mongoose = require('../db')
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: Array,
        default: [0]
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
    }
})


const User = mongoose.model('User', demoSchema);

module.exports = User