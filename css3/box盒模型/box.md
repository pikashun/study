# box

## IE6混杂模式的盒模型
    用box-sizing属性触发；默认属性为content-box,可修改为border-box；

    resize ： 让元素可以调整大小，必须设置overflow属性才生效

## flex
    创建flex弹性盒子后，父元素以及子元素可以使用弹性盒子提供的方法和属性
    flex和inlin-flex的唯一区别就是块级和行级的区别
    默认自左向右为主轴，另一个方向为交叉轴，通过flex-direction可改变

    父级属性： flex-direction ： 主轴方向，默认自左向右，可改变，有四种属性
                                row 自左向右，默认
                                row-reverse 自右向左
                                column 自上向下
                                column-reverse 自下向上

              flex-wrap ： 设置是否可以换行；
                           nowrap 默认值，不换行
                           wrap 换行
                           wrap-reverse 改变主轴方向换行

              justify-content ：  设置子元素对齐方式
                                  flex-start 沿主轴在首部对齐
                                  flex-end 沿主轴在尾部对齐
                                  center 中间对齐
                                  space-between 两端对齐，其余的平均分布
                                  space-around 元素之间的间距平均分布，类似在元素两边加margin；

              align-items ： 基于交叉轴进行位置分配
                             flex-start ： 从首部对齐
                             flex-end ： 从尾部对齐 
                             center ： 中间对齐，分布式集中
                             baseline ： 基线对齐，子元素宽度不影响对齐方式
                             stretch ： 设置高度后此属性无效，默认情况下子元素高度由内容撑开，设置该属性后高度撑满父元素，为align-items的默认值
                             主要针对单行元素处理对齐方式

              align-content ： 类似align-items，但只针对多行元素有效，此方法下的center属性为内容集中式的居中
              
    子元素属性
              order ： 类似z-index 确定 排列顺序，默认值为0；要修改部分排列顺序建议改为负值；

              align-self ： 设置自己在交叉轴上的排列方式，优先级高于父级的align-items，但低于align-content；

              flex-grow ： 默认值为0；当当前行还有剩余空间时，子元素宽度会按照设定值比例分配剩余空间，

              flex-shrink ： 子元素宽度超出父元素宽度时，按比例缩小，默认值为1；

                             在不加border的情况下 ：  按照flex-shrink的值和自身宽度值进行加权分配，最终按分配比例缩减空间
                             设置border的情况下 ： 设置border-sizing ： border-box之后，按照content-box的width进行计算
                             总的来说就是按照content区域计算权重


              flex-basis ： 一般情况 代替width使用，优先级高于width 默认值为auto 
                            当内容区溢出时，元素宽度会自适应增加；
                            当width和flex-basis同时设置时flex-basis为宽度上限。width为下限

                            当flex-shrink和flex-basis同时设置时，若内容区溢出，则含有flex-basis属性的元素不参与压缩

              简写属性 ： flex ： flex-grow flex-shrink flex-basis
              

