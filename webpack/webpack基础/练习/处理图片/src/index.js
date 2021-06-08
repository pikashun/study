/*
 * @Author: your name
 * @Date: 2021-05-14 00:30:39
 * @LastEditTime: 2021-05-14 01:56:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\处理图片\src\index.js
 */
const imgsrc = require("./../assets/webpack.png");
console.log(imgsrc);
let img = document.createElement("img");
img.src = imgsrc;
document.body.appendChild(img);