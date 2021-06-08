# rotate
    rotate()  : 默认旋转中心为中心；
                 transform-origin ： 0 0 ；设置旋转中心为左上角

    rotateX()
    rotateY()
    rotateZ() 以X，Y，Z轴为旋转中心旋转，旋转时是带着坐标轴一起旋转，可以设置多个旋转

    rotate3d(x,y,z,deg) ; 以(x,y,z)向量为轴旋转deg角度

# scale 伸缩变换
        伸缩的不是元素本身，伸缩的是此元素的变换的坐标轴的刻度，伸缩变换之后会影响transform的变化，伸缩变换之后，盒模型的尺寸不变
        scale(x,y)，按比例伸缩变换坐标轴刻度，可叠加操作。transform: scale(1.3,1.3),scale(2,2);两者可叠加
        scaleX()
        scaleY()
        scaleZ() ；
        scale3d() ;这个3d为前面三个的和

        伸缩轴是基于当前坐标轴建立的，且建立后一直存在，若坐标轴旋转，则基于新的坐标轴建立伸缩轴，之前的伸缩轴依然存在

# skew
    倾斜
    skew(x,y)；填写角度值，倾斜，倾斜的是坐标轴，且元素高度不变，即坐标轴会拉伸

# translate
    translate变化也会移动坐标轴

# perspective
    景深
    默认值为none，可设置1-infinite
    父元素设置perspective属性时，设置一个针对所有子元素的视角
    子元素还可以设置transform ： perspective(800px) 属性，此时景深效果仅自己有效；若要书写，需写在transform属性的最前面，否则浏览器会不识别，且默认视角位置时center center，不可修改

# transform-style
    默认值为flat，即3d只是视觉效果，浏览器的实际渲染还是2d的平面，
    设置为preserver-3d之后，就改用堆叠方式进行3d渲染，变为真正的3d

    元素设置perspective或者transform-style后，元素会变为一个参照元素，类似有定位，变成定位元素

# transform-origin
    transform-origin : (100px 100px 100px);添加空间变换的中心，rotate时绕该点旋转

# matrix
    利用矩阵改变图形，平面变化是添加一个3*3矩阵，空间是4阶矩阵


# screen&px
    相比cpu，gpu更擅长处理高精度浮点数运算，
    transform底层原理是点阵式，对家用显卡性能会产生比较大的消耗，尽量使用gpu


    opacity和transform：translateZ()会触发gpu建立一个新的层去绘制，提高性能，一般加translateZ(0);
    或者will-change : transform ； //标准的方法，提前让浏览器准备好，遇到这个属性变换时调用gpu，尽量写在需要变换的前面
            div：hover{
                will-change : transform;
            }
            div:active{
                transform : scale(2,3);
            }//全局监听比较耗费性能；尽量用此方法；
    一般情况下浏览器刷新频率为60HZ 一帧16ms，若gpu可以再一帧里渲染好页面，则改动元素或者实现动画时，会非常流畅， 
