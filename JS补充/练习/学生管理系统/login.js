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
//封装ajax方法
/**
 * obj{
 *  method : 'get'
 *  url : 
 *  data : 
 *  cb : function() {}
 * }
 */
function transforData(obj){
  ajax(obj.method || 'get','http://open.duyiedu.com/' + obj.url,obj.data + 'appkey=pengwanshun_1612102591731',function(res){
    obj.cb(res);
  },true);

}
var loginbtn = document.querySelector('#login-form button');
var regesteredBtn = document.querySelector('#regestered-form button');
//定义函数，根据按钮触发不同事件
window.onclick = function(e) {
//判断触发点击事件的按钮；
  if(e.target === loginbtn){
    var loginForm = document.getElementById('login-form');
    var goal = 'login';
    var result = formData(goal,loginForm);
  }else if(e.target === regesteredBtn){
    var regesteredForm = document.getElementById('regestered-form');
    var goal = 'regestered';
    var result = formData(goal,regesteredForm);
  }else{
    return;
  }
  e.preventDefault();
//根据不同按钮触发ajax
  if(result.statu === 'fail'){
    alert(result.msg);
  }else{
    var data = transToStr(result.data);
    if(goal === 'login'){
      transforData({
        method : 'post',
        url : 'api/student/stuLogin',
        data : data,
        cb : function(res) {
          if(res.status === 'success'){
            window.location = './index.html';
          }else{
            alert(res.msg);
          }
        }
      })
    }else{
      transforData({
        method : 'post',
        url : 'api/student/stuRegister',
        data : data,
        cb : function(res) {
          alert(res.msg);
        }
      })

    }
  }
}
//获取表格数据
function formData(state,form) {
  var account = form.account.value;
  var password = form.password.value;
  var username;
  var rePassword;
  if(!account || !password){
    alert('请输入完整信息')
  }

  if(state === 'regestered'){
    username = form.username.value ? form.username.value : 0;;
    rePassword = form.rePassword.value? form.rePassword.value : 0;
    if(!username || !rePassword){
      alert('请输入完整信息');
    }
  }
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
    var passwordReg = /\w{8,16}/;
    if(!passwordReg.test(password)){
      result.statu = 'fail';
      result.msg = '请输入正确格式的密码';
    }
  }
  if(rePassword){
    if(rePassword !== password){
      result.status = 'fail'
      result.msg = '两次密码不一致，请重新输入';
      return result;
    }
  }
//判断是否含有username，有的话是注册区域，否则为登陆区域，更新data；
  if(username){
    result.data = {
      account,
      username,
      password,
      rePassword,
    }
  }else{
    result.data = {
      account,
      password,
    }
  }
  return result;

}
//表格数据转换为字符串格式
function transToStr(obj) {
  var dataStr = ''
  for(var prop in obj){
    dataStr += prop + "=" + obj[prop] + "&";
  }
  return dataStr;
}