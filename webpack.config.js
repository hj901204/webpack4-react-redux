const path = require("path")
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
    entry:{
        index:"./src/index.js",
        page:'./src/pageIndex.js'
    },
    output:{
        filename:"[name].bundle.[hash].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        outputPath:'images/',//输出到images文件夹
                        limit:500  //是把小于500B的文件打成Base64的格式，写入JS
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: { minimize: true }
                  }
                ]
              }
        ]
    },
    
    plugins: [// 对应的插件
       
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './src/index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
            //chunks: ["index","vendor", "common" ]    
        }),
        new HtmlWebpackPlugin({ //配置
            filename: 'page.html',//输出文件名
            template: './src/page.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
           // chunks: ["page","vendor", "common" ]    
        }),

       // new webpack.HotModuleReplacementPlugin(),
       new webpack.ProvidePlugin({
            // npm i jquery -S 安装jquery，然后利用ProvidePlugin这个webpack内置API将jquery设置为全局引入，从而无需单个页面import引入
            $: "jquery"
        }),
    

    ],
    

}