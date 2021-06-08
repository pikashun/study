const loaders = require("../../处理样式/loaders/loaders");

/*
 * @Author: your name
 * @Date: 2021-05-14 00:36:30
 * @LastEditTime: 2021-05-14 02:17:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\练习\处理图片\loaders\imgLoaders.js
 */
const loaderUtil = require("loader-utils");

function loader(buffer) {//给的是buffer,二进制数据
    let {limit = 10000,filename = "[contenthash].[ext]"} = loaderUtil.getOptions(this);//解构获取配置参数
    let result;
    if(buffer.byteLength >= limit){
        result = getFilePath.call(this,buffer,filename);
    }else{
        result = "data:image/png;base64," + getBase64(buffer);
    }
    return `module.exports = \`${result}\``
}
loader.raw = true;//该loader要处理的原始数据,
function getBase64(source){
    return source.toString("base64");//将二进制数据转换为base64格式
}


function getFilePath(buffer,name) {//采用文件导入
    let fileName = loaderUtil.interpolateName(this,name,{
        content : buffer,
    });//获取文件名
    console.log(fileName);
    this.emitFile(fileName,buffer);//新增一个文件,需要两个参数,文件名和文件内容
    return fileName;
}

module.exports = loader;