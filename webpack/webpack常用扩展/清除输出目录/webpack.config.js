/*
 * @Author: your name
 * @Date: 2021-05-15 00:51:46
 * @LastEditTime: 2021-05-15 15:03:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\清除输出目录\webpack.config.js
 */
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode : "development",
    devtool : "source-map",
    output : {
        filename : "[name].[chunkhash:3].js",
        path : path.resolve(__dirname,"dist")
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new CopyPlugin({
            patterns : [
                {
                    from : "./public",
                    to : "./"
                }
            ]
        })
    ]
}