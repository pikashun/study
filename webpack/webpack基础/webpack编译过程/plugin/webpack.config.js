/*
 * @Author: your name
 * @Date: 2021-05-13 15:25:59
 * @LastEditTime: 2021-05-13 15:29:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\plugin\webpack.config.js
 */
const Plugin = require("./plugins/my-plugin")

module.exports = {
    mode : "development",
    plugins : [
        new Plugin()
    ]
}