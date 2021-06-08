# text

## text-shadow
    基本属性：x y blur color 水平垂直偏移量，模糊值，颜色

        配合-webkit-background-clip-使用时 clip会将文字变为背景的一部分，再使用text-shadow时，阴影会在文字上方；

        @font-face{
            font-family : 'pws' ;//此处可以自定义名字
            src : url();
        }
        div { 
            font-family : 'pws'; //引入自己下载的字体样式;
        }

## 字体格式
    TrueType  微软  苹果   .ttf
    opentype  微软  abode  .opt
    woff                   .woff  兼容性不好,前两者的集合
                           .eot  IE
                           .svg  H5  

    浏览器能打开图片，视频等格式的文件需要借助操作系统，操作系统打开后呈现在浏览器上，借助MIME协议给操作系统发送请求；
    MIME定义了映射关系，确定每个后缀名文件对应的应用
    MIME协议内置在浏览器里，

    format 相当于在电脑里增加一个映射兼容老版本浏览器，但打开结果可能不理想