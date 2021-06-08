/*
 * @Author: your name
 * @Date: 2021-05-21 22:02:04
 * @LastEditTime: 2021-05-21 22:09:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\CSS工程化\利用webpack拆分css\webpack.config.js
 */
module.exports = {
    mode : "development",
    devtool : "source-map",
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            }
        ]
    }
}