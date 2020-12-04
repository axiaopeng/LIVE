const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')))



app.listen(8223, () => {
    console.log('服务器启动成功')
})