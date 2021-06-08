/*
 * @Author: your name
 * @Date: 2021-04-14 01:08:44
 * @LastEditTime: 2021-04-14 01:39:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\ES6模块化\index.js
 */
import {age,sex} from './basic.js';//import语句在预编译过程中会存在提升，提升至最前面
import {a as pws} from './basic.js';//可用as修改变量名
console.log(sex,age);
console.log(pws);
import * as obj from './basic.js';//由于导出所有，必须重命名，
console.log(obj.Person);

import './basic';//这条导入语句仅仅运行该模块的程序，不导出任何内容