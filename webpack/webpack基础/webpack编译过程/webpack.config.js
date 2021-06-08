/*
 * @Author: your name
 * @Date: 2021-05-11 02:05:27
 * @LastEditTime: 2021-05-11 02:44:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\webpack.config.js
 */
const path = require("path");
module.exports = {
    mode : "development",
    output : {
        path : path.resolve(__dirname,"target"), //必须配置绝对路径,表示资源放置的文件夹,默认dist
        filename : "[name]-[hash].js" // 配置的是合并的JS文件的规则,name代表替换规则,替换为chunk的名字 ;
    },
    entry : {//可配置多个chunk
        main/**属性名为chunk的名称,默认为main*/ : "./src/index.js",//属性值为入口模块
        pks : "./src/a.js"//此处的入口文件路径可写为一个数组,一个chunk可对应多个入口模块,但最终依然只生成一个bundle
    }
}