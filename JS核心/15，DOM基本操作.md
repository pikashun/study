# DOM
    document代表整个文档
    在HTML之上的标签，HTML只是文档的根标签

## 查看标签的方法
    除ID外，其他都是类数组，要用div[0]调用；且ID尽量别用，后端调用可能会改变ID；

    var div = document.getElementById(''); 元素唯一；元素在IE8一下的浏览器不区分大小写，且name当ID用；

    var div = document.getElementsByTagName('');元素名，选中所有元素，类数组；所有浏览器都能兼容

    var div = document.getElementsByClassName('');ie8及以下版本没有，兼容性不好；

    var div = document.getElementsByName('');只有部分标签的name属性可以生效；（表单。img。iframe）

    querySelector: 
        <div>
            <strong>
            </strong>
        </div>
        <div>
            <span>
                <strong class="demo">
                </strong>
            </span>
        </div>
    var div = document.querySelector('div>span strong.demo');  //可以类似CSS的写法；选中一个
    var div = document.querySelectorAll('div>span strong.demo');  //选中一组；
        这两个在ie7 及以下版本没有；且此选择器选出来的元素不是实时的，是静态副本；自己修改有效，其他选择器修改的无效；

## 遍历节点树
    节点类型：
            1，元素节点--------------------1
            2，属性节点--------------------2
            3，文本节点--------------------3
            4，注释节点--------------------8
            5，document节点----------------9
            6，documentFragment节点；------11



    div.parentNode: 选中父元素，可持续选中，div.parentNode.parentNode.parentNode;document.parentNode往上为null

    div.childNodes: 选中直接子节点，包含空格、换行等文本节点；为一组，可用【选中具体的元素】

    firstChild/lastChild: 第一/最后一个节点

    nextSibling/previouSibling: 下一个/上一个兄弟*节点*，不是元素；也可连续书写
## 遍历元素节点树
    parentElement; 这里没有document，html上面即为null；（IE9以下不兼容）

    children;元素子节点

    childElementCount == children.length;

    firstElementChild/lastElementChild: 第一个/最后一个子元素；（IE9以下不兼容）

    nextElementSibling/previousElementSibling: 上/下一个兄弟元素；（IE9以下不兼容）

## 节点的属性
    nodeName: 显示节点标签名，不可赋值；

    nodeValue: 只有文本节点和注释节点才有；可查看具体值，可读写，能修改元素值

    nodeType: 返回该节点的属性，具体属性值如下：
                1，元素节点--------------------1
                2，属性节点--------------------2
                3，文本节点--------------------3
                4，注释节点--------------------8
                5，document节点----------------9
                6，documentFragment节点；------11

    attributes: 元素属性节点的集合；可以访问ID和属性，ID可读写，class可读不可写

    Node.hasChildNodes()；查看是否有子节点

## 增加元素节点
    document,createElement('div');  //创建元素节点
    document.createTextNode('pws'); //创建文本节点
    document.createComment('pks');  //创建注释节点
    
## 插入节点
    document.appendChild(div);  //插入节点。类似push，在最后插入；
    若将已存在的节点插入已存在的节点，此时是剪切操作；

    document.insertBefore(a,b);  // insert  a   bofore   b;

## 删除
    parent.removeChild();  // 删除自己的子节点；实际是剪切出来，返回值为所剪切的元素，可用var li =  div.removeChild(i) 将i剪切并赋值给li

    i.remove();  //自己销毁；彻底删除，无返回值；

## 替换
    parentNode.replaceChild(p,strong);将内部strong变为p；返回值为所替换值


## 基本属性
    innerHTML； //改变元素HTML里面的内容  div.innerHTML = '123';  覆盖原本内容；，可写可读；
    可直接写 div.innerHTML = "<span style="background-color: red;font-size: 20px;color: #FFF;">123</span>"


    innerText(火狐不兼容)/// 火狐支持textContent,效果和innerText一样
        <div>
            <p>123</p>
            <strong>234</strong>
        </div>

        div.innerText 输出结果为“123 234”，输出所有文本信息
        赋值的话，将所有元素清空，并赋值，
        div.innerText = "123";结果变为，
        <div>
            123
        </div>


## element节点操作
    div.setAttribute('a','b'),给div 的a属性附上b值
        如div.setAttrbute('class','demo'),添加一个class为demo
    div.getAttribute('a'),查看元素属性


## 尺寸

### 获取滚动条滚动距离
    window.pageXOffset/pageYOffset(ie9一下不兼容)

    window.pageXOffset 调用时输出值为像素值，number类型；

    ie9以下：  document.body.scrollLeft/Top
              document.documentElement.scrollLeft/Top
            有且只有一个有用，另一个为零，用两者相加即可

            可封装函数适用所有浏览器
            function getScrollOffset(){
                if(window.pageXOffset){
                    return {
                        x : window.pageXOffset,
                        y : window.pageYOffset,
                    }
                }
                else{
                    return {
                        x : document.body.scrollLeft + document.documentElement.scrollLeft,
                        y : document.bodu.scrollLeft + document.documentElemnet.scrollTop,
                    }
                }
            }

### 视口尺寸
    window.innerWidth/ window.innerWidth ;受窗口缩放影响  //IE9一下不兼容
    <!DOCTYPE html> ;// 有此声明为标准模式，不写为怪异模式，可向后兼容，浏览器会按照之前的语法渲染

    IE9以下  document.documentElement.clientHeight/clientHeight; 适用标准模式
             document.body.clientHeight/clientWidth;  适用怪异模式

            //查看文档兼容模式document.compatMode   compat:兼容；
            若返回值为CSS1Compat，则为标准模式，BackCompat为怪异模式

### 元素尺寸
    domEle.getBoundingClientRect()
    返回值为对象。包含元素的信息 四个方向是边的位置
    但IE9以下 里面没有width和height
    返回结果为静态，不会实时改变

    div.offsetWidth/Height 也可以，返回值不包含margin
    div.offsetLeft ;// 若元素嵌套，则距离为相对有定位的父元素；

    dom.offsetParent // 返回最近的有定位的父级

### 让滚动条滚动

    window.scroll(x,y)  //让滚动条滚动一个距离，重复执行不变，指相对现在位置滚动一个距离 === window.scrollTo();

    window.scrollBy(x,y) //每次点击滚动一个距离；