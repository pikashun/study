/*
 * @Author: your name
 * @Date: 2021-05-15 15:20:25
 * @LastEditTime: 2021-05-15 15:39:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\开发服务器\webpack.config.js
 */
const path = require("path");
const { CleanPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports = {
    mode : "development",
    devtool : "source-map",
    output : {
        filename : "[name].[chunkhash:3].js",
        path : path.resolve(__dirname,"dist")
    },
    devServer : {
        contentBase : "./dist",
    },
    plugins : [
        new CleanPlugin(),
        new HtmlWebpackPlugin({
            template : "./src/public/index.html"
        })
    ]
}