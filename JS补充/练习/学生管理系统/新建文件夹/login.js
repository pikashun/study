function ajax(method, url, data, cb, isAsync) {
    // get   url + '?' + data
    // post
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    // xhr.readyState    1 - 4  监听是否有响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(JSON.parse(xhr.responseText));
        }
      }
    };
    method = method.toUpperCase();
    if (method == "GET") {
      xhr.open(method, url + "?" + data, isAsync);
      xhr.send();
    } else if (method == "POST") {
      xhr.open(method, url, isAsync);
      // key=value&key1=valu1
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }
  }

var loginForm = document.getElementById('login-form');
var loginbtn = document.querySelector('#login-form button');
loginbtn.onclick = function() {

}
function dataStr(form) {
  var account = form.account.value;
  var username = form.username.ualue;
  var password = form.password.value;
  var rePassword = form.rePassword.value;
  var result = {
    statu : 'success',
    msg : '',
    data : {},
  }
  if(account) {
    var accountReg = /\d{6,16}/;
    if(!accountReg.test(account)){
      result.statu = 'fail';
      result.msg = '请输入6到16位数字';
      return result;
    }
  }
  if(username){
    var usernameReg = /[A-z]/;
    if(!usernameReg.test(username)){
      result.statu = 'fail';
      result.msg = '请输入正确用户名（仅包含字母）';
      return result;
    }
  }
  if(password){
    var passwordReg = /\d{8,16}/;
    if(!passwordReg.test(password)){
      result.statu = 'fail';
      result.msg = '请输入正确格式的密码';
    }
  }
}