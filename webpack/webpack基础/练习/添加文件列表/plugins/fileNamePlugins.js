/*
 * @Author: your name
 * @Date: 2021-05-14 23:16:28
 * @LastEditTime: 2021-05-15 00:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\添加文件列表\plugins\fileNamePlugins.js
 */
module.exports =  class FileNamePlugins {
    apply(compiler) {
        compiler.hooks.emit.tap("filelistplugin",complation => {
            const nameArr = [];
            for (const key in complation.assets) {
                let str = key;
                let size = complation.assets[key].size();
                let content = `[${str}]
${size}kb`;
                nameArr.push(content);
            }
            const result = nameArr.join("\n\n");
            /**
             * complation.assets是资源列表,一个对象,包含dist目录下的所有文件,可在对象中添加新的文件,source方法返回文件内容吗,size方法返回文件大小
             * {
             *      "main.js" : {
             *                      source : function(){return 文件内容}
             *                      size : function() {return 文件大小,字节数}
             *                   }
             * 
             * }
             * 
             * 
             */
            const str = "pws";
            complation.assets["csq.txt"] = {//
                source : function() {
                    return result;
                },
                size : function() {
                    return result.length
                }

            }
        })
    }
}