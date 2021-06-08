/*
 * @Author: your name
 * @Date: 2021-05-12 02:02:33
 * @LastEditTime: 2021-05-12 02:22:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\处理样式\webpack.config.js
 * 
 */

module.exports = {
     mode : "development",
     module : {
         rules : [
             {
                 test : /\.css$/,
                 use : ["./loaders/loaders.js"]
             }
         ]
     }
 }