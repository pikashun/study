/*
 * @Author: your name
 * @Date: 2021-04-14 00:59:33
 * @LastEditTime: 2021-04-14 01:08:30
 * @LastEditors: Please set LastEditors
 * @Description: 基本的导入导出，
 * @FilePath: \site\前端学习\笔记\模块化\ES6模块化\basic.js
 */

export var a = 1;//导出a，值为1，类似于commonJS中的exports.a = 1;
const b = 2;
export {b as b2};//导出也可更改变量名；
export function print() {
    console.log('导出一个函数print')//导出print 值为一个函数，类似于commonJS中的export.print = function () {}
}
export class Person {
    
}
//export后面必须接声明语句
const age = 18;
const sex = 1;
export {age,sex}//将age变量的名称作为导出的名称，age变量的值作为导出的值,特殊语法，不是对象

