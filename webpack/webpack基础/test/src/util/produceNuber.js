/*
 * @Author: your name
 * @Date: 2021-05-06 22:52:00
 * @LastEditTime: 2021-05-06 23:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\test\src\util\produceNuber.js
 */
import isPrime from "./isPrime"
import randomColor from "./randomColor"
export default class {
    constructor(duration = 500) {
        this.duration = duration;
        this.count = 1;
        this.onCreatNumber = null;
        this.timerId = null;
    }

    start() {
        if(this.timerId){
            return;
        }
        this.timerId = setInterval(() => {
            this.onCreatNumber && this.onCreatNumber(this.count,isPrime(this.count));
            this.count ++;

        },this.duration);
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;

    }
}