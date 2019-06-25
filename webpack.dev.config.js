const webpack = require("webpack");
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require("path")
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {//配置此静态文件服务器，可以用来预览打包后项目
        inline:true,//打包后加入一个websocket客户端
        hot:true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 8833,//端口号
        open:true,
        compress: true//开发服务器是否启动gzip等压缩
    },
    plugins: [
        //HMR
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        
    ]
})
