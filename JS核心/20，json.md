# json
    简单来说就是对象；
    最初是为了前后端的数据传输；以xml传输，类似对象（可以自定义标签）
    现在传输就是对象，及json，对象属性名必须加双引号
    {
        "name" : "p",
        "age"  : "24" 
    }
    实际传输到后端是'{"name":"p","age":"24"}'  字符串格式
    前端拿到后端的数据可以转化为自己可用的数据
        JSON.parse(); ---> string  to json
        JSON.stringfy();-> json  to  string

        JSON 属于静态类，类似MATH

## 浏览器渲染页面
    首先检索HMTL代码，绘制DOMTree；节点解析，不管数据是否加载
    深度优先原则，一条支线绘制完毕再返回到下一个节点，

    生成domtree后再生成CSSTree，原则也是深度优先

    之后DOMTree和CSSTree合并为randerTree；  //rander（渲染）

    若在randerTree构建之后重新生成节点，则会重新解析；称为reflow，重排；所以应尽量避免节点的修改
    dom节点的删除，添加，宽高变化，位置变化
    offsetWidth offsetleft也会触发reflow，系统需要保证查看的数据是实时的，所以也会触发reflow
    都会触发reflow；
    编程要尽量避免reflow

    repaint 重绘 可接受，浪费效率较少

## 异步加载JS
    正常情况JS的加载为同步加载，JS的加载会阻断html和CSS的加载；
    但有些加载工具没必要阻塞文档，有些工具按需加载；

    异步加载JS的三种方法

### defer
    <script defer="defer"><script>
    在标签里添加defer = “defer”
    仅IE9可用；IE9以下也可以用，可以写在script标签里

    需等页面解析完才会执行，即domTree生成完毕时执行
### aysnc
    <script async="async"><script>
    W3C标准方法
    加载完就执行，async只能加载外部脚本，不能把JS加在script标签里

    async : asychronous//异步；

### 创建script，插入到dom中

    <sctipt>
        var script = document.createElement('script');
        script.type = "javascript";
        script.src = 'tools.js';
        document.head.appenChild(script);
    </sctipt>
    但存在问题，若立即执行tool.js里面的程序，则执行不了，因为程序执行时tool.js还未下载完毕；

    可通过load判断是否下载完毕
    script.onload = function() {
        test();  //tool.js里面的函数；且兼容性比较好，仅IE的script上没有load事件
    }

    IE的方法
    script.readyState = "loading";  //里面的值会根据加载状态动态更改，加载完时为loaded或content
    script.onreadystatechange = function () {
        //监听加载状态改变的事件
        可用if判断状态；
    }

## JS加载时间线
    1，创建Document对象，开始解析web界面，解析HTML，此阶段document.readyState = 'loading';

    2，遇到link外部css，创建线程加载，并继续解析文档，

    3，遇到script外部js，并且没有设置async，defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，继续解析该文本

    4，遇到script外部js，并且设置async，defer，浏览器创建线程加载，并继续解析文档；
        对于async属性的脚本，脚本加载完成后立即执行；（异步禁止使用document.write()）;//document.write() 会清空原文档流，包括删除script

    5，遇到img等，先正常生成dom结构，然后浏览器异步加载src，并继续解析文档

    6，当文档解析完毕, document.readyState = 'interactive';

    7, 文档解析完成后，所有设置有defer的脚本会按照顺序执行；（注意与async的区别，但同样禁止使用documen.write）

    8，document对象会触发DOMContentLoaded事件//仅绑定addEventListener可用；程序从同步脚本执行阶段转化为事件驱动阶段；

    9. 当所有的async的脚本加载完成并执行之后，img等加载完成后，document.readyState = 'complete'; windowx对象触发load事件；

    10，从此，以异步响应的方式处理用户输入，网络事件等；-


尽量用addEventListener('DOMContentLoaded',function() {},false);而不是window.onload

