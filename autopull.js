// //该js文件用于 git push 后自动更新服务端代码
// // 需要 npm install github-webhook-handler  
// // 需要创建一个当前目录下新建一个 deploy.sh 文件 存放命令 如 git pull \   npm i 等

// var http = require('http')
// var createHandler = require('github-webhook-handler')
// var handler = createHandler({ path: '/test', secret: 'zzp147369' })
// var spawn = require('child_process').spawn;
// // 上面的 secret 保持和 GitHub 后台设置的一致

// http.createServer(function(req, res) {

//     handler(req, res, function(err) {
//         res.statusCode = 404
//         res.end('no such location')
//     })
// }).listen(8081, () => {
//     console.log('WebHooks Listern at 8081');
// })
// handler.on('push', function(event) {
//     console.log('Received a push event for %s to %s');
//     init() //每次拉取都重新监听
// })

// function runCommand(cmd, args, cwd, callback) {

//     var child = spawn(cmd, args, { cwd: cwd });
//     var resp = "";

//     child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
//     child.stdout.on('end', function() { callback(resp) });
// }

// function init() {
//     runCommand('sh', ['./deploy.sh'], './', function(result) {
//         console.log(result)
//     })
// }
// init()