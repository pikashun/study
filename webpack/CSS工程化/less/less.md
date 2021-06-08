<!--
 * @Author: your name
 * @Date: 2021-05-21 23:50:34
 * @LastEditTime: 2021-05-22 14:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\webpack\CSS工程化\less\less.md
-->
# 定义变量
    @width : 10px;//类似JS作用域，也可在内部定义
    @height : @width*2 + 10px;//可计算，单位无法互通

    .container{
        width : @width;
        height : @height;
        //直接引用即可
    }//若此处使用.container(){},则该样式不会出现在最终的css文件里

    .container(@type:absolute) {
        position : @type;//可传参，不传默认absolute
    }


    .main{
        .container();//可直接将代码引入
    }

# 嵌套
    .main{
        font-size : 10px;
        .container{
            color : red;
            >h1{
                //此处表示直接子元素
            }
        }
        .&::before{
            //用并列表示伪类
        }
        li{
            margin : 10px;
            &.selected{
                //表示被选中的li元素
            }
        }
    }

# 函数
    具体可参考文档

# 注释
    //   : 仅less里面可见
    /**/ : 在最终的css代码可见

# 导入
    @import "common"; //类似css的导入，可省略后缀名

