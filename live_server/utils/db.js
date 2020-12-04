const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/live", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('connected', () => {
    console.log('数据库连接成功...');
})
db.on('error', (error) => {
    console.log('数据库连接失败...', error);
})
db.on('connected', () => {
    console.log('数据库已断开...');
})

module.exports = mongoose;