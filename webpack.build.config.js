const path = require('path')
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
         chunks: "all",  // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
         cacheGroups: {
             //第三方组件
             libs: {
                name: "chunk-libs",
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: "initial" // 只打包初始时依赖的第三方
              },
              jquery: {
                name: "chunk-jquery", // 单独将 jquery 拆包
                priority: 15, // 权重要大于 libs 和 common 不然会被打包进 libs 或者 common
                test: /[\\/]node_modules[\\/]jquery[\\/]/
              },
             common: {
                 chunks: "initial",
                 name: "common",
                 minChunks: 2,
                 maxInitialRequests: 5,
                 minSize: 0,
                 priority: 5
             },
             
         }
     },
    runtimeChunk: {

      name: entrypoint => `manifest.${entrypoint.name}`
    }
  },
  plugins: [
   // 依据每个entry生成单个css文件（将css从js中提取出来）不要在开发模式使用，因为不支持热加载
    new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: './css/[id].css'
    }),
    new CleanWebpackPlugin(),
    //其实我们发现打包生成的 runtime.js非常的小，gzip 之后一般只有几 kb，
   // 但这个文件又经常会改变，我们每次都需要重新请求它，它的 http 耗时远大于它的执行时间了，
   // 所以建议不要将它单独拆包，而是将它内联到我们的 index.html 之中(index.html 本来每次打包都会变)。
    // 注意一定要在HtmlWebpackPlugin之后引用
// inline 的name 和你 runtimeChunk 的 name保持一致
    new ScriptExtHtmlWebpackPlugin({
    //`runtime` must same as runtimeChunk name. default is `runtime`
        inline: /manifest\..*\.js$/
    }),
    
  ]
})
