const mongoose = require('../db')
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    roleName: {
        type: String,
        required: true,
        unique: [true, '该角色已被创建'],
        validate: {
            validator: value => {
                let pattern = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
                return !pattern.test(value)
            },
            message: '角色名不能含有特殊字符'
        }
    },
    powers: {
        type: Array,
        require: true
    },
    describe: {
        type: String
    }
})

const Role = mongoose.model('Role', demoSchema);
module.exports = Role