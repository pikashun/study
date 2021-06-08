/*
 * @Author: your name
 * @Date: 2021-05-06 22:32:57
 * @LastEditTime: 2021-05-07 15:47:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\test\src\util\randomColor.js
 */
const colors = ["#f26359","#62efab","#ffe868","#80e3f7","#d781f9"];
// 返回一个随机下标
export function getRandom(min,max) {
    return (max - min)*Math.random() + min;
}
export default function() {
    const index = Math.floor(getRandom(0,colors.length));
    return colors[index];
}