/*
 * @Author: your name
 * @Date: 2021-04-13 21:32:29
 * @LastEditTime: 2021-04-13 23:15:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\commonJS练习\player.js
 */
const poker = require('./poker')
const pokers = []
function pokersProduce() {
    for(let i = 1;i < 5;i++){
        for(let j = 1;j < 14;j++){
            pokers.push(new poker.poker(i,j).poker);
        }
    }
    pokers.push(new poker.poker(null,14).poker,new poker.poker(null,15).poker);
}
pokersProduce();
module.exports = {
    pokers : pokers,
}