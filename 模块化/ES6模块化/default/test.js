

/*
 * @Author: your name
 * @Date: 2021-04-14 01:41:25
 * @LastEditTime: 2021-04-14 02:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\ES6模块化\default\test.js
 */
export const a = 1;
export default {
    [a] : a,
    'b' : 'b',
};
const b = 2;
// export {b as default};
export const pws = {
    'name' : 'pws',
}