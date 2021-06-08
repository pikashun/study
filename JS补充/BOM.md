# BOM
    browser Object mode的缩写

## 核心--window
    window对象是BOM的顶层（核心）对象，玩转BOM就是玩转window的属性和方法

    window即是JS访问浏览器窗口的一个接口，也是全局对象

    JS的语法标准化组织是ECMA，dom的标准化组织是W3C，BOM。。。没有

## BOM的组成
    Window JavaScript层级中的顶层对象表示浏览器窗口
    Navigator包含客户端浏览器的信息
    History包含浏览器窗口访问过的URL
    Location包含了当前URL的信息
    Screen包含了客户端显示屏的信息

## window的属性
    window.innerheight/innerwidth   ; 窗口尺寸包含滚动条高度

    window.pageXOffset/pageYOffset   ;滚动条位置

    window.screenX/y    ；浏览器边距离屏幕的距离，左边与边框或者顶部与边框的距离
    不同浏览器兼容性不同，window.screenX || window.screenLeft  //兼容性写法

    若存在iframe标签，则window.parent表示父级window ；window.top表示最顶层的window
    若自定义属性有top，则top只读，不能被赋值；

    window.name 为窗口添加名字，与打开的页面无关，定义了name后，打开百度，Chrome都不变

    window.confirm 也是弹窗。类似alert。但有返回值，确定为true，取消为false

    window.prompt 输入弹窗，返回值为输入内容

    window.onbeforeunload = function () {return '123'} 关闭窗口是弹出提示框，内容仅IE9及以下可见，

    window.open('链接地址','描述','特征值')  eg： window.open('https://www.baidu.com','pws','width = 200,height = 200'),其他特征可参考W3C 此方法是打开新窗口，描述为window.name,返回值为window

    window.close 关闭窗口

## Navigator 
    Navigator为构造函数，navigator为对象

    嗅探，确定当前打开页面的是什么浏览器
    
    navigator.userAgent
    返回浏览器及版本信息 内核信息，操作系统信息

    navigator.cookieEnable  ;查看浏览器是否启用cookie

    navigator.online  查看系统是否在脱机状态，即是否联网

## History
    history.lenght  查看该窗口打开过的窗口个数

    history.back()  ;返回上一个窗口
    history.forword()   ;到下一个窗口
    history.go()   ;中间写参数，正往后，负往前

## location
    可读写

    location.protocol :协议
            .host     :域名
            .pathname :路径
            .search   :参数
            .hash     :锚点
            .href     :全部包括

            修改时必须加符号
            改锚点不会刷新页面，但会被history记录，锚点格式也为字符串

    location.assign 加载新文档
    location.reload('force'):  重新加载文档，参数可选，不填或者填false是取浏览器缓存文件
                                true时重新去服务器获取
    location.replace()      :  用新文档替换当前文档；
  
