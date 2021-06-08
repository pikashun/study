/*
 * @Author: your name
 * @Date: 2021-05-13 15:24:38
 * @LastEditTime: 2021-05-13 15:28:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\plugin\plugins\my-plugin.js
 */
module.exports = class myPlugin {
    apply() {
        console.log("插件运行了");
    }
}