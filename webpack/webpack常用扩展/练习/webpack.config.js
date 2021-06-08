/*
 * @Author: your name
 * @Date: 2021-05-20 20:12:46
 * @LastEditTime: 2021-05-21 15:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack常用扩展\练习\webpack.config.js
 */
const dev = require("./webpack.dev");
const produciton = require("./webpack.prod");
const common = require("./webpack.common");

module.exports = function(env) {
    if(env && env.prod) {
        //生产环境
        const config = {
            ...common,
            ...produciton
        };
        config.plugins = [...common.plugins,...produciton.plugins];
        return config;
    }else{
        return {
            ...common,
            ...dev
        }
    }
}