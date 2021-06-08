/*
 * @Author: your name
 * @Date: 2021-05-14 00:32:34
 * @LastEditTime: 2021-05-14 02:02:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\处理图片\webpack.config.js
 */
module.exports = {
    mode : "development",
    devtool : "source-map",
    module : {
        rules : [
            {
                test : /\.(png)|(jpg)|(gif)$/,
                use : [{
                    loader : "./loaders/imgloaders.js",
                    options : {
                        limit : 3000,//限定3000字节以内使用该方式,
                        filename : "img-[contenthash:5].[ext]"
                    }
                }]
            }
        ]
    }
}