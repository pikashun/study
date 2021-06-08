/*
 * @Author: your name
 * @Date: 2021-05-12 02:10:19
 * @LastEditTime: 2021-05-12 02:25:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\处理样式\loaders\loaders.js
 */
module.exports = function(sourceCode) {
    console.log(1);
    return `
    const style = document.createElement("style");
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    console.log(1);`
}
