//创建一个HTTP对象
var http = require('http');
//createServer: 方法，创建一个HTTP服务,监听3000端口号
// listen方法，设置监听端口号
http.createServer(function(request,response) {
    // request: 请求信息，客户端发出网络通信请求时传来的信息
    // response： 响应信息，服务器对客户端请求的响应信息
    // console.log(request.url);
    response.write("pws的信息");
    // console.log(response.write("pws的信息"));
    response.end();

}).listen(3000)