/*
 * @Author: your name
 * @Date: 2021-05-31 21:50:06
 * @LastEditTime: 2021-05-31 22:33:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\CSS工程化\webpack中使用postCSS\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename : "[name].[hash:5].html"
    },
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use : ["style-loader","css-loader","postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}