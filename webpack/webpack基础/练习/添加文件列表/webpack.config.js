/*
 * @Author: your name
 * @Date: 2021-05-14 23:12:08
 * @LastEditTime: 2021-05-14 23:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\添加文件列表\webpack.config.js
 */
const FileNamePlugins = require("./plugins/fileNamePlugins")

module.exports = {
    mode : "development",
    devtool : "source-map",
    plugins : [
        new FileNamePlugins(),
    ]
}