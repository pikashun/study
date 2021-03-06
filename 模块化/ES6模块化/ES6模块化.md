<!--
 * @Author: your name
 * @Date: 2021-04-14 00:36:52
 * @LastEditTime: 2021-05-05 01:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\模块化\ES6模块化\ES6模块化.md
-->
# ES6 模块化

## 简介 
    ECMA组织参考了众多社区模块化标准，在2015年，随着ES6发布了官方的模块化标准，后称为了ES6模块化

    ES6的特点： 
        1，使用依赖预声明的方式导入模块；//在代码执行过程中导入所需文件，称为依赖延迟声明；
            依赖延迟声明 ： 有些时候可以提高效率；比如根据条件导入
                           但无法在一开始确定模块的依赖关系
            依赖预声明 ： 在一开始就可以确定模块的依赖关系
                         缺点是某些时候效率较低
        2，灵活的多种导入导出方式
        3，规范的路径表示法：所有的路径必须以./或../开头

## 基本的导入导出
    模块的引入 ： 这一部分非模块化标准
        目前，浏览器使用以下方式引入一个ES6模块文件
        <script src='入口文件' type='module'>

    模块的基本导入导出
        ES6中的模块导入导出分为两种 ： 
            1，基本的导入导出
            2，默认的导出导出

### 基本的导出
    类似于exports.xxx = xxx
    基本导出可以有多个，每个必须有名称
    基本导出的语法如下 ： 
        export 声明表达式
        或
        export{具名符号},此时的{}不代表对象，只是告诉export语句此处将{}里的变量作为变量名，值作为变量值，可写多个值，用逗号隔开

        由于基本导出必须具有名称，所以要求导出内容必须跟上声明表达式或具名符

### 基本的导入
    由于使用的是依赖预加载，因此导入其他任何模块，导入代码必须放置在所有代码之前
    对于基本导出，如果要进行导入，使用下面的代码

        import {导入的符号列表} from "模块路径"

    注意以下细节 ： 
        1，导入时，可以通过关键字'as'对导入的符号进行重命名
        2，导入时使用的符号是常量，不可修改
        3，可以使用*号导入所有的基本变量，形成一个对象

    自带缓存机制；

## 默认的导入导出

### 默认导出
    每个模块，除了允许有多个基本导出之外，还允许有一个默认导出，默认导出类似于commonJS中的module.exports，由于只有一个，因此无需具名

    具体的语法，
        export default //默认导出的数据
        或
        export {默认导出的数据 as default}
        由于每个模块仅允许有一个默认导出，因此，每个模块不能出现多个默认导出语句

### 默认导入
    需要导入一个模块的默认导出，需要使用下面的语法
        import 接收变量 from '模块路径'；

        类似commonJS中的

        var 接收变量名 = require('模块路径')

        注 ： 如果使用*号，会将所有基本导出和默认导出聚会到一个对象中，默认导出会作为属性default存在
        

## ES6模块化补充 
    1，尽量导出不可变的值
        当导出一个内容时，尽量保证该内容是不可变的(大部分情况都是如此)，因为，虽然导入后，无法更改导入的内容，但是在导入模块的内部却有可能发生更改，这将导致一些无法预料的事情
            模块内部的方法可能会改变其他的导出的值

    2，可以使用无绑定的导入用于执行一些初始化代码
        如果只是想执行模块中的一些代码，而不需要导入它的任何内容，可以使用无绑定的导入
            import '模块路径'；

    3，可以使用绑定再导出，来重新导出来自另一个模块的内容
        有时候，我们可能需要用一个模块封装多个模块。然后有选择的将多个模块的内容分别导出，可以使用下面的语法完成
            export {绑定的标识符} from '路径'


    