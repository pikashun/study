/*
 * @Author: your name
 * @Date: 2021-04-13 20:42:02
 * @LastEditTime: 2021-04-13 22:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\commonJS练习\poker.js
 */
class poker{
    
    constructor(num1,num2) {
        this.color = num1;
        this.number = num2;
        this.poker = '';
        this.toString();
    }

    toString() {
        console.log(this.poker);
        if(this.color === 1){
            this.poker += '♠';
        }else if(this.color === 2){
            this.poker += '♥';
        }else if(this.color === 3){
            this.poker += '♣';
        }else if(this.color === 4){
            this.poker += '♦';
        }
        if(this.number === 1){
            this.poker += 'A';
        }else if(this.number === 11){
            this.poker += 'J';
        }else if(this.number === 12){
            this.poker += 'Q';
        }else if(this.number === 13){
            this.poker += 'K';
        }else if(this.number === 14){
            this.poker = 'joker';
        }else if(this.number === 15){
            this.poker = 'JOKER';
        }else{
            this.poker += this.number;
        }
    }
}
module.exports = {
    poker : poker,
}