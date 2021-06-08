# DOM --Document Object Model  //文档操作模型
    定义了表示和修改文档所需要的方法。DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合，也有人称DOM是对html和xml的标准编程接口。
    xml里面的标签可以自定义

    只能改变CSS行间样式，操作不了样式表

## 寻找元素的方法
    DOM对象
    1.doucument.getElementByTagName(""): 通过元素名查找，将所有元素查找出来，按顺序添加到数组里面可用[0]选中第一个元素；
        属性名没有-必须用小驼峰写法
        onclick 点击执行
    2.doucument.getElementByClassName(""): 通过类名查找，



## 创建元素
    document.createElement('div');创建新元素div；此时body里还没有这个div标签；
    用document.body.appendChild(div)；可以在body里面插入标签；

## 定时器功能
    setInterval(function(){},100)每隔100毫秒执行一次函数；
    clearInterval(定时器的名字)可以停止定时器

        
    document.onkeydown = function(e) {
        console.log(e);
        
    } 
    此函数可以监听键盘操作，e为返回的对象，e.which为具体动作的键位
    

    


