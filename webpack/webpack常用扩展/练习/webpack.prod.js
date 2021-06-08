/*
 * @Author: your name
 * @Date: 2021-05-20 20:21:09
 * @LastEditTime: 2021-05-21 15:47:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\练习\webpack.prod.js
 */
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode : "production",
    plugins : [
        new CleanWebpackPlugin()
    ]
}
