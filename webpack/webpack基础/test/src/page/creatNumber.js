/*
 * @Author: your name
 * @Date: 2021-05-06 23:17:56
 * @LastEditTime: 2021-05-07 16:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\test\src\page\creatNumber.js
 */
import randomColor from "./../util/randomColor"
import {getRandom} from "./../util/randomColor"
const divContainer = document.getElementById("divContainer");
const divCenter = document.getElementById("divCenter");
export default function(n,isPrime) {
    
    let span = document.createElement("span");
    span.innerText = n;
    if(isPrime){
        let color = randomColor();
        span.style.color = color;
        moveCenterNumber(n,color);
    }
    divContainer.appendChild(span);
    createCenterNumber(n);
}
function createCenterNumber(n) {
    divCenter.innerText = n;
    //读取某个元素的尺寸或者位置信息，会导致浏览器重新渲染，reflow
}

function moveCenterNumber(n,color) {
    let div = document.createElement("div");
    div.classList = "center";
    div.style.color = color
    div.innerText = n;
    document.body.appendChild(div);
    getComputedStyle(div).left;//强制渲染页面；
    div.style.opacity = 0;
    div.style.transform = `translate(${getRandom(-150,150)}px,${getRandom(-200,200)}px)`;
}