/**
*@param {String} method 请求方式 需要大写
*@param {String} url 请求地址 协议 + 域名 + 端口号 + 路径
*@param {String} data 请求数据 key=value&key1=value1
*@param {Function} callback 成功的回调函数
*@param {Boolean} isAsync 是否异步加载，true为异步，false为同步
*/
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



//添加点击事件，改变选中元素状态
var menu = document.querySelector('.main .left-menu');

menu.addEventListener('click', function(e) {
    var dd = menu.getElementsByTagName('dd');
    for(var i = 0;i < dd.length;i++){
            dd[i].classList.remove('select');
    }    
    e.target.parentElement.classList.add('select');
},false);
//获取hash值，根据hash值确定页面位置
function init() {
    if(location.hash){
        console.log(1);
        var select = menu.querySelector('dd a[href="' + location.hash + '"]');
        var dd = menu.getElementsByTagName('dd');
        for(var i = 0;i < dd.length;i++){
            dd[i].classList.remove('select');
        } 
        select.parentElement.classList.add('select');
        select.click();
    }else{
        var select = menu.querySelector('dd a[href="#student-add"');
        select.click();

    }
    
    
}
//绑定按钮，点击提交获取数据
var submit = document.querySelector('button.add-btn');
console.log(submit);
submit.onclick = function(e) {
    e.preventDefault();
    var studentData = getFormData(form);
    console.log(studentData);
    if(studentData.status === 'success'){
        var dataStr = '';
        for(var prop in studentData.data){
            dataStr += prop + '=' + studentData.data[prop] + '&';
        }
        transforData({
            method : 'GET',
            url : 'api/student/addStudent',
            data : dataStr,
            fun : function(res) {
                alert(res.msg);
                creatList();
                var list = document.querySelector('.main .left-menu a[href="#student-list"]');
                list.click();
            }
        })

    }else{
        alert(studentData.msg);
    }
}
/**
 * 
 * @param {object} obj
 *          method 请求方式
 *          url 请求地址
 *          data 请求数据 
 */
// 封装调用ajax的函数;
function transforData(obj) {
    ajax(obj.method || 'GET','http://open.duyiedu.com/' + obj.url,obj.data + 'appkey=pengwanshun_1612102591731',function(res) {
        if(res.status === 'fail'){
            alert(res.msg);
        }else{
            obj.fun(res);
        }
    },true) 
}

//获取输入的数据

var form = document.getElementById('student-add-form');
function getFormData(form) {
    var name = form.name.value;
    var sex = form.sex.value;
    var email = form.email.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;
    result = {
        data : {},
        status : 'success',
        msg : '',
    }
    //判断数据有效性
    if(!name || !sex || !email || !sNo || !birthYear || !tel || !address){
        result.status = 'false';
        result.msg = '请输入完整信息';
        return result;
    }
    //验证邮箱
    var emailReg = /^[\w\.-_]+[@][\w\.-_]+$/;
    if(!emailReg.test(email)){
        result.status = 'false';
        result.msg = '请输入有效邮箱';
        return result;
    }
    //验证学号
    var sNoReg = /\d{4,16}/;
    if(!sNoReg.test(sNo)){
        result.status = 'false';
        result.msg = '请输入有效学号';
        return result;
    }
    //验证出生年
    if(birth < 1975 || birth > 2021){
        result.status = false;
        result.msg = '请输入有效年份';
        return result;

    }
    //验证手机号
    var telReg = /^1[3456789]\d{9}$/;
    if(!telReg.test(phone)){
        result.status = 'false';
        result.msg = '请输入有效手机号';
        return result;
    }
    result.data = {
        name,
        sex,
        email,
        sNo,
        birth,
        phone,
        address,
    }
    return result;  
}
//获取学生数据生成列表
var studentList = [];
function creatList() {
    transforData({
        method : 'GET',
        url : '/api/student/findAll',
        data : '',
        fun : function(res) {
            studentList = res.data;
            rendeTable(studentList);
        }
    });
}


//根据后台数据渲染页面
function rendeTable(arr) {
    var tableList = document.querySelector('.main .right-container #student-list table tbody');

    var tableStr = ''
    arr.reduce(function(pre,elem,index) {
        tableStr += `
        <tr>
            <td>${elem.sNo}</td>
            <td>${elem.name}</td>
            <td>${elem.sex === 0? '男' : '女'}</td>
            <td>${elem.email}</td>
            <td>${new Date().getFullYear() - elem.birth}</td>
            <td>${elem.phone}</td>
            <td>${elem.address}</td>
            <td>
                <button class="operation-btn edit" data-index=${index}>编辑</button>
                <button class="operation-btn delet" data-index=${index}>删除</button>
            </td>
        </tr>`;
    },'')
    tableList.innerHTML = tableStr;
}
// 编辑弹框
var tbody = document.querySelector('.right-container tbody');
tbody.onclick = function(e) {
    if(e.target.nodeName === 'BUTTON'){
        if(e.target.className.includes('edit')){
            var modal = document.querySelector('.right-container .modal');
            modal.style.display = "block";
            modal.onclick = function(e) {
                if(e.target.className === 'modal'){
                    modal.style.display = 'none';
                }
            }
            var index = e.target.dataset.index;
            var renderObj = studentList[index];
            var editRender = document.querySelector('#student-edit-form');
            for(var prop in renderObj){
                if(editRender[prop]){
                    editRender[prop].value = renderObj[prop];
                }
            }

            var editBtn = document.querySelector('.edit-form-btn');
            editBtn.onclick = function() {
                var editData = getFormData(editRender);
                var sure = confirm('是否确定修改');
                console.log(sure);
                if(sure){
                    if(editData.status === 'success'){
                    var dataStr = '';
                    for(var prop in editData.data){
                        dataStr += prop + '=' + editData.data[prop] + '&';
                    }
                    transforData({
                        method : 'GET',
                        url : 'api/student/updateStudent',
                        data : dataStr,
                        fun : function(res) {
                            console.log(res.msg);
                            creatList(); 
                            modal.click();
                        }
                    })
                    }else{
                        alert(editData.msg);
                    }
                }
            }
        }
        else{
            var index = e.target.dataset.index;
            var deletObj =  studentList[index];
            var deletSNo = deletObj.sNo;
            var sure = confirm('是否确定删除')
            if(sure){
                transforData({
                    method : 'GET',
                    url : 'api/student/delBySno',
                    data : 'sNo=' + deletSNo + '&',
                    fun : function(res) {
                        alert(res.msg);
                        creatList();
                    }
                })
            }
        }
    }

}
//渲染编辑框数据
function renderEditForm() {

};
window.onload = init;
window.onhashchange = init;
creatList();