# select

## relationship Selectors
    E+F : E的下一个满足条件的兄弟元素节点
    E~F : E的后面的所有的满足条件的兄弟节点
    E>F : 直接子元素选择器

## Attribute Selectors
    E[attr ~='val'] : 属性值存在独立的val的元素
    E[attr |='val'] : 属性值以val开头的元素
    E[atrr ^='val'] : 属性值以val开头的元素
    E[attr $='val'] : 属性值以val结尾的元素
    E[attr *='val'] ：属性值里存在val的元素

## Pseudo-Element Selectors
    E::placeholder : 只能修改字体颜色
    E::selection : 改变字体选中后的样式，只能设置3个属性 ，color background-color text-shadow ；

## Pseudo-Classes Selectors
    被选中的元素的一种状态
    E:not(s) ： 选中E的子元素中不包含s属性的元素
    E:root : 选中根标签，html文件中为html标签
    E:target : 被标记为锚点之后。及location.hash的值为目标id；
    E:first-child/last-child ;作为第一个/最后一个元素的E元素
    E:only-child ;E为单独的子元素
    E:nth-child(n) ;作为第n个子元素的E元素，odd为奇数，even为偶数，//css是从1开始的查数，但n为自然数，从0开始
    E:nth-last-child ;从后往前数。
    E:first-of-type ;作为同类型的第一个元素
    E:only-of-type ;仅存在的子元素；其他child的有的方式都有

    E:empty ;内容为空的元素，注释不算内容，其他形式都算
    E:checked ;input type='checkout'选择框被选中的状态
    E:enabled ;input属性不含disable的；
    E:disabled ;input属性包含disable的；
    E:read-only 只读输入框；
    E:read-write 读写输入框；
