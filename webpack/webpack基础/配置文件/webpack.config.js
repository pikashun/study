/*
 * @Author: your name
 * @Date: 2021-05-08 01:03:16
 * @LastEditTime: 2021-05-08 15:11:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\配置文件\webpack.config.js
 */
module.exports = {
    // 若配置文件和命令行冲突,以命令行为准
    mode : "development",//设置编译环境为开发环境
    entry : "./src/main.js",//设置入口文件为main.js
    output : {
        filename : "my-main.js"//将打包结果放在my-main.js文件中
    }
}
