/*
 * @Author: your name
 * @Date: 2021-05-06 22:14:34
 * @LastEditTime: 2021-05-06 22:28:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\test\src\util\isPrime.js
 */
export default function (n) {
     if(n < 2){
         return true;
     }
     const j = Math.sqrt(n,2);
     for(let i = 2;i <= j;i++){
         if(n % i == 0){
             return false;
         }
     }
     return true;
 } 
