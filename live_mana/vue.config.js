module.exports = {
    devServer: {
        proxy: {
            '/toutiao': {
                target: 'http://v.juhe.cn',
                wx: true,
                changeOrigin: true, // 是否跨域
            }
        }
    }
}