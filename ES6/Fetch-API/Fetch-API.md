# 基本介绍
    XMLHTTPRequest的问题
        所有的功能全部集中在一个对象上，容易书写出混乱不易维护的代码
        采用传统的事件驱动模式，无法适配新的Promise API

    Fetch API 的特点
        1，不是取代ajax 而是对Ajax传统API的改进，Ajax是一种概念，而不是一个具体的方法，Fetch API只是对Ajax的实现
        2，精细的功能分割：头部信息，请求信息，响应信息等均分布到不同的对象上，更利于处理各种复杂的Ajax场景
        3，使用Promise API，更利于异步代码的书写
        4，Fetch API并非ES6的内容，属于HTML5新增的web API
        5，需要掌握网络通信的知识；

# 基本使用
    请求测试地址 ：　http://101.132.72.36:5100/api/local

## 参数
    两个参数
        1，必填，字符串，请求地址
        2，选填，对象，请求配置

    请求配置对象
        method ： 字符串，请求方法，默认为get
        header ： 对象，请求头部信息
        body ： 请求体的内容，必须匹配请求头中的content-Type
        mode 6： 字符串，请求模式
            cors ： 默认值，配置为该值，会在请求头中加入origin和referer
            no-cors ： 配置为该值，不会在请求头中加入origin和referer，跨域时可能会出现问题
        credentials ： 如何携带凭据，cookie
            omit ： 默认值，不携带cookie
            same-origin ： 请求同源地址时携带cookie
            include ： 请求任何地址都携带cookie
        cache ： 配置缓存模式
            default ： 表示fetch请求之前将检查下http的缓存
            no-store ： 表示fetch请求将完全忽略http缓存的存在，请求之前不会检测http的缓存，请求之后也不会更新
            no-cache ： 如果存在缓存，那么fetch将发送一个条件查询request和一个正常的request，
                        拿到响应后，会更新http缓存
            reload ： 表示fetch请求之前将忽略http缓存的存在，但拿到后会更新缓存
            force-cache ： 表示fetch请求不顾一切的依赖缓存，即使缓存过期了，它依然从缓存中读取，
                           除非没有任何缓存，那么将发送一个正常的request请求
            only-if-cached ： 表示fetch请求不顾一切的依赖缓存，即使缓存过期了，依然从缓存中读取，若没有，则抛出错误
                              该设置只在mode为same-origin时有效

## 返回值
    当收到服务器的返回结果后，Promise进入fulfilled状态，状态数据为Response对象
    当网络发生错误(或其他原因导致无法完成交互的错误)时。Promise进入rejected状态，状态数据为错误信息

## Response对象
    ok ： Boolean，当响应消息码在200~299之间时，为true，其他为false
    status ： number，响应状态码
    text（） ：用于处理文本格式的ajax响应，它从响应中获取文本流，将其读完，然后返回一个被解决为string对象的Promise
    blob() ： 用于处理二进制文件格式(比如图片或者电子表格)的ajax响应，它读取文件的原始数据，一旦读取完整个文件，就返回一个被解决为blob对象的Promise
    json() ； 用于处理JSON格式的Ajax的响应，它将JSON数据流转换为一个被解决为JavaScript对象的Promise
    redirect() ： 可以用于重定向到另一个URL。它会创建一个新的Promise，以解决来自重定向的URL响应

    可通过new Response()手动创建Response

## Request对象
    fetch(url,data);//实际上，在发送请求时，自动将url和data结合，并创建一个request对象。
    在这里可以直接传递一个request对象来发送请求，
    
    const request = new Request(url,{});
    fetch(request);
    尽量保证每次请求都是一个新的Request对象；
    若需要相同的request对象，可使用方法clone；const req = request.clone();

## header对象
    通过new Headers({
        //创建headers对象
    })
    Headers对象中的方法，
        has(key) : 查找请求头中是否含有指定的key值；
        get(key) : 得到请求头中指定的key值
        set(key,value) : 修改对应的键值对，若修改的值不存在，则新增
        append(key,value) : 新增key值，若已存在，则新增一个值
        keys() : 得到所有的请求头的键的集合
        value() : 得到所有的请求头的值的集合
        entries() : 得到所有的键值对；

## 文件上传
    测试地址 ： http://101.132.72.36:5100/api/upload
    键的名称(表单域名称) ： imagefile

    流程： 
        1，客户端将问价数据发送给服务器
        2，服务器保存上传的文件数据到服务器端
        3，服务器响应给客户端一个文件访问地址

    请求方法：POST//文件一般比较大，所以需要POST格式
    请求的表单格式 ： multipart/form-data//一般情况，表单的上传使用此格式
    请求体中必须包含一个键值对，键的名称是服务器要求的名称，值是文件数据；//在H5中JS仍然无法随意的获取文件数据，但是可以获取到input元素中，被用户选中的元素；

    可以利用H5中提供的FormData()构造函数来创建请求体，可用append方法添加key和value







