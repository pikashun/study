# cookie
    http协议属于无状态协议；不同请求之间没有联系，cookie用来关联不同的请求
        客户端发送请求，头部带有cookie-set 
        服务器端返回数据，并给出一个cookie，
        之后客户端再次访问会带上cookie，这样服务器端就能识别了；
        cookie由服务器端设置；

        cookie不可跨域，一级域名可用于二级域名 比如.baidu.com的cookie可用于zhidao.baidu.com,
        cookie有大小和数量限制，数量在50左右，大小在4kb左右，
        存储时间灵活，可自行设置
        cookie客户端也可以设置，通过document.cookie 可读写，形式为键值对；

## cookie参数
    
        document.cookie = 'name=pikashun'; //每次只能设置一个
        //name: cookie的名字；唯一性；
        //value: cookie的值，字符串格式；
        //domain: cookie在那个域下是有效的；默认当前域
        //path: cookie的路径；默认当前路径；限制cookie的存储路径，只有当前路径才能使用cookie；
        //expires: cookie过期时间，不给默认为session，浏览器关闭时删除；时间设置必须是GMT格式；HTTP1.0的内容，具体时间点
                //new Date();返回日期为GMT格式；
        //max-age: cookie的有效期。html1.1的内容，设置cookie的存活时间，
                //-1: 临时cookie。不会生成
                //0： 有效期已到，即将失效
                //正数： 能存活的时间
        //以下为前端只读
        //httpOnly  有这个标记的cookie，前端无法获取
        //secure 设置cookie只能通过HTTPS传输
        //sameSite 设置cookie在跨域请求的时候不能跨域。
        document.cookie = 'color=red; domain=127.0.0.1; path=/doc' //只有在doc路径下才有此cookie；

        document.cookie = 'margin=20; expires='+new Date(2108,1,1);//日期设置为2008年2月1号，已过期，所以cookie失效,取的是客户端时间

        document.cookie = 'padding=4; max-age=5'//存活时间为5秒；控制台不会实时更新，切换后才更新；