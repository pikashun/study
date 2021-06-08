# JS 收官

## 浏览器请求
    从输入网址，按回车之后的过程

    1，URL解析为IP地址，
    2，tcp建立连接；三次握手
    3，返回JS，html，css，img资源
    4，浏览器解析资源  //参见JS时间线
    5，渲染引擎渲染页面
    6，tcp四次挥手

## 浏览器基本组成
    1，用户界面； shell
    2，浏览器引擎；浏览器启动时的程序
    3，渲染引擎；
    4，网络
    5，UI后端
    6，JS引擎
    7，数据存储

## 渲染过程
    解析html从而构架dom数->css rule树->构建render树->布局render树->绘制render树

### 渲染模式
    <!DOCTYPE html>  书写为标准模式，不写为怪异模式

## label标签
    绑定文字和输入框
    单向绑定；label绑定输入框，输入框不触发label的事件

## 属性和特性
    属性包括特性
    特性 与生俱来的，
    属性 后面添加，
    type value id class 特性
    data     属性，自定义的

    特性在document有定义，可操作
    属性通过document.data 无法查看，且赋值无效
    属性可通过setAttribute添加，通过getAttribute查看

## 图片预加载和懒加载
    默认情况，图片是从上到下逐渐显示，
    预加载是让图片资源未下载完成时用灰色背景覆盖，下载完成之后再展示，
    img.onload = function() {} 图片下载完成触发事件
    懒加载就是视口滑到图片是再加载

## Math.random()
    取随机数范围为[0，1)左闭右开区间

## 文档碎片
    查看，获取，修改dom非常耗性能
    var oF = document.createDocumentFragment();
    减少重排

    var ul = document.getElementsByTagName('ul');
    for(var i = 0;i < 10;i++){
        var newLi = document.createElement('li');
        newLi.innerHTML = i + "";
        oF.appendChild(newLi);
    }
    ul appendChild(oF);
    但实际效果有限；

    虚拟dom效果更好

## 断点调试
    debugger
    程序运行到断点停止，若有多个断点，可执行到下一个断点，也可以一步步执行，