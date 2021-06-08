# Restful API
    是一种互联网软件架构的设计规范，设计指南，设计风格，设计原则；


    1，API ： Application Programming Interface 应用程序接口（接口）；
    2，Rest Resource Representational State Transfer 

        resource ： 资源 URI ：统一资源标识符，是一个字符串，用来标识互联网资源的名称
                        URL ： 统一资源定位符，它是一种具体的URI

        Representational： 表现层 资源具体呈现的形式；

        State Transfer ： 状态转化；

        以上共同组成Rest；


## Restful API具体设计规范
    1，协议
        HTTPS ： 需要申请
    2，域名
        http://www.ssdpks.com
        若需对外提供接口，尽量放在http://api.ssdpks.com或http://www.ssdpks.com/api/下
    3，版本
        http://api.ssdpks.com/v1
    4，路径
        资源地址
        http://api.ssdpks.com/v1/blogs  //路劲不能出现动词
    5，方法
        1，GET 获取资源
            GET http://api.ssdpks.com/v1/blogs  获取所有的文章；            
            GET http://api.ssdpks.com/v1/blogs/id  获取某一篇文章；
        2，POST 添加资源
            POST http://api.ssdpks.com/v1/blogs 添加一篇文章，
        3，PUT 修改资源 （客户端需要提供修改后的完整资源）
            PUT http://api.ssdpks.com/v1/blogs/id 修改某一篇文章
        4，PATCH 更新资源（客户端需要提供改变的属性）
            PATCH http://api.ssdpks.com/v1/blogs/id 更新某一篇文章；
        5，DELETE 删除资源
            DELETE http://api.ssdpks.com/v1/blogs/id 删除某一篇文章；
    6，数据过滤,名字由后端定义
        1，?Limit=10 指定返回数据的数量
            GET http://api.ssdpks.com/v1/blogs?Limit=10;//返回10篇文章
        2，?offset=10; 指定一个偏移量
            GET http://api.ssdpks.com/v1/blogs?offset=10;//指定从第十条开始获取
        3，?page=2&per_page=10 指定第几页，每一页的数量
            GET http://api.ssdpks.com/v1/blogs?page=2&per_page=10 
        4，?sortby=time&order=arc  指定返回结果按照哪个属性排序，以及排序的方式，//此处，time表示时间排序，arc表示升序；
            GET http://api.ssdpks.com/v1/blogs?sortby=time&order=arc
    7，状态码
        4xx
        3xx
        2xx
        5xx
    8，返回结果
        1，GET     资源对象列表（数组），如果取的是一条数据，则返回一个对象
        2，POST    返回添加后的资源对象，以及有可能加上是否成功
        3，PUT     返回修改后的资源对象，以及有可能加上是否成功
        4，PATCH   返回更新后的资源对象，以及有可能加上是否成功；
        5，DELETE  返回空，以及有可能加上是否成功
    9，返回数据格式
        尽量使用JSON 避免使用XML

    
    5，总结
        1，看URL知道要什么
        2，看HTTP method知道做什么
        3，看HTTP status知道结果如何
        
            
