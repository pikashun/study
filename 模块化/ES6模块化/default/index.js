/*
 * @Author: your name
 * @Date: 2021-04-14 01:45:40
 * @LastEditTime: 2021-04-14 17:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\ES6模块化\index.js
 */
import data from './test.js';//将test中的默认导出赋值给常量data
console.log(data);

import {pws as pks} from './test.js';
console.log(pks);

import * as allData from './test.js';
console.log(allData);

import datas,{a} from './test.js';//将默认导出赋值给datas，基本导出a导出
console.log(datas,a);