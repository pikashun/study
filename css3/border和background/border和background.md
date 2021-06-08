## border-radius
## border-image
    border-image-source : linear-gradient(red,yellow);//内置的渐变色，也可用url()添加
    border-image-slice : 可添加1-5个值，只能添加数字和百分比，顺序为上右下左，值为截取图片与边缘的距离，
                         不写默认为100%
    border-image-outset : ;像素值，border往外延申的距离
    border-image-width : 像素值，border里面可以显示图片的宽度；auto时为slice的值加px2
    border-image-repeat : strtch : 默认值，将被分割的图像使用拉伸的方式填充
                          repeat ：将被分割的图像使用重复平铺的方式填充，超出部分会被截断
                          round ： 类似repeat，不是整数次平铺时会根据情况缩放图片
                          space ： 类似repeat，不是整数次平铺时会用空白填充//兼容性不好

    简写： border-image ： source slice width repeat;


    css1和css2中，若不设置border-color的值，默认会使用color的值；
    css3中使用current-color中转，最终结果还是color的值

## background
    background-image: 除了可以写url外，还可写渐变色，两个渐变色生成器： linear-gradient();radial-garadient();
                      可以写多个背景图片
                      linear-gradient(to right top,#0f0 20px,#ff0 20px)第一个值可以写角度，90deg 后面时颜色属性，可写多个值，颜色后面的值为截至位置

                      radial-gradient()放射性渐变，第一个值可写circle at 20px 30px确定圆心位置以及圆的形状ellipse为椭圆
                      ellipse后面还可以写四个属性，代表放射到哪里截至

    background-origin : 有三种属性值，只能确定从哪里开始渲染，不能确定从哪里结束，默认值为padding-box
                        position的值相对origin的值定位
                        border-box
                        content-box
                        padding-box

    background-clip ：  有以下属性值，设置背景图片从哪里截至；默认值为border-box
                        border-box
                        content-box
                        padding-box
                        text ：仅文字区域出现背景图片，webkit私有属性，配个text-fill-color：transparent使用；也是webkit的私有属性 

    background-attachment ： 改变背景图片的定位属性，默认相对容器进行定位，
                             scroll；相对容器进行定位
                             local；相对内容进行定位
                             fixed； 相对视口进行定位，但无法在容器外显示

    background-size : 设置背景图片的尺寸
                      cover ： 会让一张图片填充满整个容器，不改变图片比例，可能会超出
                      contain ： 会让容器展示一张完整的图片。可能会repeat

    background-rapeat ： 原有no-repeat repeat-x repeat-y三种值。css3新增了round space的值，
                         可写round space 两个值，分别代表横向和纵向的平铺方式，带repeat的属性只能书写一个，

    

    