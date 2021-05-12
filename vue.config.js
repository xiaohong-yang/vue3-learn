const webpack = require("webpack")
module.exports = {
    devServer: {
        host: '10.10.12.3', //ip地址
        // host: '10.10.10.120', //ip地址
        port: 8085, //端口
        proxy: {
            '/apis': {
                // 测试环境
                target: 'https://aip.baidubce.com/',  // 接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/apis': ''   //需要rewrite重写的,
                }
            }
        }
    },
    configureWebpack: {
        //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    publicPath : './',
    outputDir : 'dist',
    assetsDir: '',
    indexPath : 'index.html',
    lintOnSave: false // 关闭eslint语法检查
}
