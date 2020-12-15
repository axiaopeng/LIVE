const mongoose = require('../db')
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    userId: {
        type: String,
        require: true,
        unique: true
    },
    friends: { //好友
        type: Array,
        default: {
            groupName: '我的好友',
            friend: []
        }
    }
    //   [{
    //     id: {
    //         type: String,
    //         require: true
    //     },
    //     img: {
    //         type: String
    //     }
    // }]
    ,
    groupChats: [{ //群聊
        id: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        img: {
            type: String
        },
        members: [{
            id: {
                type: String,
                require: true
            },
            img: {
                type: String
            }
        }]
    }],
    unRead: [{ //未读信息数量
        id: {
            type: String,
            require: true
        },
        number: {
            type: Number,
            default: 0
        }
    }],
    notices: [{
        date: {
            type: String
        },
        id: {
            type: String
        },
        img: {
            type: String
        },
        nickName: {
            type: String
        },
        ctx: {
            type: String
        },
        isRead: {
            type: Boolean
        }
    }]

})

const MyQQ = mongoose.model('MyQQ', demoSchema);
module.exports = MyQQ