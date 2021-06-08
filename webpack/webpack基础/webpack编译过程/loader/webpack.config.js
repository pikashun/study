/*
 * @Author: your name
 * @Date: 2021-05-12 00:39:28
 * @LastEditTime: 2021-05-12 01:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\webpack编译过程\loader\webpack.config.js
 */
module.exports = {
    mode : "development",
    module : {
        rules : [
            {
                test : /index\.js$/,//正则表达式,匹配模块的路径
                use : [
                    {
                        loader : "./loaders/test-loaders.js",//加载器的路径
                        //对于简单的参数,可直接写为 : loader : "./loaders/test-loaders.js?chang='参数'"
                        //若只有一个loader可直接写为字符串放在数组中,不需要放在对象中
                        options : {
                            changVar : "参数"
                        }
                    }//每个加载器的使用是一个 对象,

                ]//匹配到之后使用哪些加载器
            },
            {
                //读取顺序是按照rule的书写顺序,执行顺序是反过来
            }
        ]//,模块的匹配规则
    }
}