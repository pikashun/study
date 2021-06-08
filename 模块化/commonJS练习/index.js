/*
 * @Author: your name
 * @Date: 2021-04-13 20:05:18
 * @LastEditTime: 2021-04-13 23:13:35
 * @LastEditors: Please set LastEditors
 * @Description: 斗地主发牌；
 * @FilePath: \site\前端学习\笔记\模块化\commonJS练习\index.js
 */
const random = require('./util');
let  pokers = random.sortRandom(require('./player').pokers);
const player1 = pokers.slice(0,17);
const player2 = pokers.slice(17,34);
const player3 = pokers.slice(34,51);
const desk = pokers.slice(51,54);


