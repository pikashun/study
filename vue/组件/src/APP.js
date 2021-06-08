/*
 * @Author: your name
 * @Date: 2021-06-02 13:07:59
 * @LastEditTime: 2021-06-02 13:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\组件\src\APP.js
 */
import MyButton from "./component/myButton.js"
export default {
    components : {
        MyButton,
    },
    template : `
        <div>
            <MyButton />
            <MyButton />
            <MyButton />
        </div>
    `
}