/*
 * @Author: your name
 * @Date: 2021-05-16 00:44:42
 * @LastEditTime: 2021-05-16 01:42:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\普通文件处理\src\index.js
 */
const png = require("./assets/img/kupa.png").default;

if(true){
    const img = document.createElement("img");
    console.log(png);
    img.src = `${png}`;
    document.body.appendChild(img);
}
