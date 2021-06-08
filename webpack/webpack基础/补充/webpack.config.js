/*
 * @Author: your name
 * @Date: 2021-05-14 02:46:33
 * @LastEditTime: 2021-05-14 23:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\补充\webpack.config.js
 */
const path = require("path")
module.exports = {
    mode : "development",
    devtool : "source-map",
    entry : {
        index : "./src/index.js"
    },
    resolve : {
        modules : ["./src","abc"],//模块的查找位置
        extensions : [".js",".json"],//配置自动补齐的后缀名
        alias : {
            "@" : path.resolve(__dirname,"./src")
        }
    },
    externals : {
        jquery : "$",
        lodash : "_",//在打包过程中,遇到lodash和jquery时导出"$""_",不需要导出全部的代码,在此之前需先用script标签导入相应的库
        //当一些第三方库来自于外部CDN时,这种配置可以让bundle的体积更小,且不影响源码的编写
    }

}
