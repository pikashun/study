const { ModuleFilenameHelpers } = require("webpack");

/*
 * @Author: your name
 * @Date: 2021-05-12 00:39:50
 * @LastEditTime: 2021-05-12 01:43:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\loader\loaders\test-loaders.js
 */
const loaderUtil = require("loader-utils");
module.exports = function(sourceCode) {
    const option = loaderUtil.getOptions(this);
    console.log(option);
    const reg = new RegExp(option.changVar,"g")
    const result = sourceCode.replace(reg,"const")
    console.log(result)
    return result
}