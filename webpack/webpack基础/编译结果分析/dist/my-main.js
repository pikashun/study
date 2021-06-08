/*
 * @Author: your name
 * @Date: 2021-05-07 23:48:13
 * @LastEditTime: 2021-05-08 00:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\编译结果分析\dist\my-main.js
 */


    (function (modules) {
        let moduleExports = {}

        // 运行一个模块,得到导出的结果
        function require(moduleId) {
            if(moduleExports[moduleId]){
                return moduleExports[moduleId];
            }
            // 通过路径找到对应的模块,并得到其对应的函数
            let func = modules[moduleId];
            let module = {
                exports : {}
            }
            func(module,module.exports,require);//运行模块
            const result = module.exports;//得到导出的结果并返回
            moduleExports[moduleId] = result;
            return result;
        }

        // 执行入口模块
        require("./src/index.js");//require函数相当于运行一个模块，得到模块的导出结果

    })({
        //该对象保存了所有的模块，以及模块对应的代码；
        // 每一个模块都放在一个函数中去执行,实际上的webpack是放在eval里面执行的,方便调试,
        "./src/a.js": function (module, exports) {
            console.log("module a");
            module.exports = "pws";
        },
        "./src/index.js": function (module, exports, require) {
            console.log("index module");
            const a = require("./src/a.js");
            console.log(a);
        }
    })
