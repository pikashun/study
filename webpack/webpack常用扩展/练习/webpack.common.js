/*
 * @Author: your name
 * @Date: 2021-05-20 20:21:24
 * @LastEditTime: 2021-05-21 15:51:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\练习\webpack.base.js
 */
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry : {
        list : "./src/list/index.js",
        detail : "./src/detail/index.js"
    },
    output : {
        filename : "script/[name].[chunkhash:3].js",
        path : path.resolve(__dirname,"dist")
    },
    stats : {
        modules : false,
        colors : true
    },
    plugins : [
        new HTMLWebpackPlugin({
            template : "./public/list.html",
            filename : "list.html",
            chunks : ["list"]
        }),
        new HTMLWebpackPlugin({
            template : "./public/detail.html",
            filename : "detail.html",
            chunks : ["detail"]
        }),
        new CopyWebpackPlugin({
            patterns : [
                {
                from : "./public",
                to : "./"
                }
            ]})
        
    ],
}