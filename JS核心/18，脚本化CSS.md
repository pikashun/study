# 脚本化CSS

## 读写CSS属性  //除了此方法，其他都是只读，不可写入
    div.style是一个对象，只能可以读写行间样式表，不包括head部分的样式表
    float这种保留样式的需要在前面添加css;
    复合属性建议拆解；
    属性值为字符串；

    读取时未写入的属性值为空；

## 查询计算样式、   
    window.getComputedStyle(div,null//0 false都行);  获取当前元素显示属性值，结果都是经过计算的最终结果，为绝对值 若写入10em 则返回计算后的像素值；也是对象；
    IE9以下不兼容；

    IE9以下用  div.currentStyle;,返回值为写入值，如10em，则返回10em；为IE独有属性

    window.getComputedStyle(div."after") 可获取伪元素；


    修改伪元素属性

        .yellow::after{

        }
        .green::after{

        }
        通过改变元素class来改变after

## 实际改变
    先写好需要改变的属性，通过改变class来改变，效率更高；易维护；