/*
 * @Author: your name
 * @Date: 2021-04-16 00:46:03
 * @LastEditTime: 2021-04-16 00:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\包管理器\test\index.js
 */
var axios = require('axios');
async function test() {
    const resp = await axios.get('https://movie.douban.com/chart')
    const body = reap.data;
    console.log(body);

}
test();
