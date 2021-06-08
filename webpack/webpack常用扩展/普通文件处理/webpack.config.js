/*
 * @Author: your name
 * @Date: 2021-05-16 00:45:44
 * @LastEditTime: 2021-05-16 01:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\普通文件处理\webpack.config.js
 */
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode : "development",
    devtool : "source-map",
    output : {
        filename : "script/[name].[chunkhash:5].js",
        path : path.resolve(__dirname,"dist")
    },
    module : {
        rules : [
            {
                test : /\.(png)|(jpg)|(gif)$/,
                use : [{
                    loader : "file-loader",
                    options : {
                        
                        name : "[name].[hash].[ext]"//此处的hash是文件自身的hash
                    }
                }]
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        }),
    ],
    devServer : {
        open : true
    },
    stats : {
        modules : false,
        colors : true
    }

}