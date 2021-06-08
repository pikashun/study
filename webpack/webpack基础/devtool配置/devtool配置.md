<!--
 * @Author: your name
 * @Date: 2021-05-08 01:34:00
 * @LastEditTime: 2021-05-08 01:35:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\devtool配置\devtool配置.md
-->
## source map
    由于现在实际运行的代码,是源代码经过合并压缩之后的代码,当运行发生错误的时候,调试会比较麻烦,错误信息很难定位

    source map就是为了处理这一问题

    source map会记录源码,运行时代码以及两者的对应关系

## webpack中的source map
    使用webpack编译后的代码,难以调试,可以通过devtool配置来优化


    