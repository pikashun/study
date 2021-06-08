/*
 * @Author: your name
 * @Date: 2021-05-07 16:05:09
 * @LastEditTime: 2021-05-07 18:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\test\src\page\event.js
 */
import creatNumber from "./creatNumber"
import NumberTimer from "./../util/produceNuber"
let isStart = true;

const number = new NumberTimer(200);
number.onCreatNumber = function(n,isPrime) {
    creatNumber(n,isPrime);
}
number.start();
window.onclick = function() {
    if(isStart){
        number.stop();
        isStart = false;
    }else{
        number.start();
        isStart = true;
    }
}

