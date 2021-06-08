/*
 * @Author: your name
 * @Date: 2021-05-10 22:48:01
 * @LastEditTime: 2021-05-11 01:59:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\dirname.js
 */
/*

    ./ : 1,模块化代码中,比如require("./"),表示当前JS文件所在的目录
         2,在路径或文件处理中,表示node运行目录

    __dirname: 所有情况下,都表示当前运行的JS文件所在的目录,是一个绝对目录,从盘符开始

    node的内置模块
        path
        使用require("path")可直接使用
        const path = require("path") //导出一个对象


*/
const path = require("path");

const result = path.resolve("./","child","abc","123");//组装为一个绝对路径
console.log(result);

const url = path.resolve(__dirname,"src");
console.log(url);
