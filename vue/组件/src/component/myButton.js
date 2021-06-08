/*
 * @Author: your name
 * @Date: 2021-06-02 13:18:09
 * @LastEditTime: 2021-06-02 13:19:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\组件\src\component\mybutton.js
 */
export default {
    data() {
        return {
            count : 0,
        }
    },
    template : "<button @click='count++'>点击了{{count}}次</button>"
}
