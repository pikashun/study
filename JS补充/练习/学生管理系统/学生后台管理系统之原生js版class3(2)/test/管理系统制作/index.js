/**
 * @param {String} method 请求方式  不区分大小写
 * @param {String} url    请求地址  协议（http）+ 域名+ 端口号 + 路径
 * @param {String} data   请求数据  key=value&key1=value1
 * @param {Function} cb     成功的回调函数 callback: 回调函数
 * @param {Boolean} isAsync 是否异步 true 是异步  false 代表同步 
 * */

 function ajax(method, url, date, cd, isAsync) {

 }
//  ajax('GET','http://open.duyiedu.com/api/studet/findAll','appkey=LZP0703_1612355614631',function(res){
//      console.log(res);
//  },true)


//  bindEvent    绑定事件  选中dl里面的class
function bindEvent() {
    //左侧导航栏切换行为
    var leftMenu = document.querySelector(".left-menu");
    leftMenu.onclick = function (e) {
        // console.log(e.target); // 查看点击的目标元素
        // e.target:目标元素，当点击的时候是a标签
        var ddNode = e.target.parentNode;         //ddNode:当前点击的导航对应的dd元素节点  parentNode:父元素节点
        if(ddNode.tagName === 'DD') {             //tagName 是返回标签名字大写
            removeClass(ddNode.parentNode.children,'menu-active');    //先删除，后面在获取点击的a表签
            ddNode.className = 'menu-active';         //获取方法一   获取父节点的class
            //ddNode.classList.add('left-menu');    //获取方法二
           
        }
    }
}

// 新增学生按钮 点击行为
var studentAddBtn = document.getElementById('student-add-btn');
studentAddBtn.onclick = function (e) {
    // 阻止默认页面刷新行为
    e.preventDefault();
    // 获取表单元素
    var form = document.getElementById('student-add-form');
    // 获取表单元素下面的数据，并且校验
    var formDate = getFormDate(form);
    if(formDate.status === 'success') {
        var date = formDate.date;
        // 当前学生信息数据转换成字符串的结构
        var dateStr = '';
        for(var prop in date) {
            dateStr +=prop + '=' + date[prop] + '&';
        }
        // 提交给后台保存学生信息
      transferData({
        method: 'get',
        url: '/api/student/addStudent',
        data: dataStr,
        success: function (res) {
          alert('新增成功');
        }
      });
        
    }else{
        alert(formDate.msg);
    }
}

// removeClass  移除类名   nodeList  节点列表    className 要移除的类名
function removeClass(nodeList,className) {
    for(var i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(className);
    }
}

// 加载事件，页面加载
window.onload = function () {
    bindEvent();
    hashToMenu();

    // 浏览器的地址中 hash值的变化，监听hash值的变化
    window.onhashchange = function () {
        hashToMenu();
    }  
}

function hashToMenu() {      //hash值这块还没有理解透
    // 判断当前进入页面的时候 是不是有指定导航位置  如果有则定位到那个位置
    if (location.hash) {
      // hashName: 地址栏当中的hash的值  即锚点对应的值
      var hashName = location.hash;
      // activeMenu: 当前要定位的菜单元素
      var activeMenu = document.querySelector('.left-menu dd a[href="' + hashName + '"]');
      // 手动触发元素的点击事件
      activeMenu.click();
    } else {
      var activeMenu = document.querySelector('.left-menu dd a[href="#student-list"]');
      activeMenu.click();
    }
  }

//获取学生的表单数据函数   返回对像  {date：当前学生的信息，status：校验规则的状态，msg：没有按照规则填写的错误信息提示}
function getFormDate(form) {
    var name = form.name.value;
    var sex = form.sex.value;
    var email = form. email.value;
    var sNo = form.sNo.value; 
    var birth = form. birth.value;
    var address = form.address.value;
    var phone = form.phone.value;

    // 最终返回的信息
    var result = {
        // 学生的所有信息
        date:{},
        // 当前表单校验是否成功，即数据是否可以提交
        status:'success',
        // 若表单校验不成功，则msg表示提示的信息是什么
        msg:''
    };
    // 判断表单元素是否已经全部填写
    if(!name ||!email ||!sNo ||!birth ||!address ||!phone) {
        result.status = 'fail'; 
        result.msg = '信心填写不全，请校验后提交';
        return result;
    }
    // 判断邮箱的格式
    var emailReg =  /^[\w\.-_]+@[\w-_]+\.com$/  //邮箱的正则表达式
    if(!emailReg.test(email)) {
        result.status = 'fail'; 
        result.msg = '邮箱格式不正确';
        return result;
    }
    // 判断学号的规则  4--16为数
    var sNoReg = /^\d{4,16}$/;
    if(!sNoReg.test(sNo)) {
        result.status = 'fail'; 
        result.msg = '学号应为4-16为有效数字';
        return result;
    }
    // 出生年份的校验
    // var birthReg = /^(19|20)\d{2$}/;
    if(brith < 1975 || brith > 2020) {
        result.status = 'fail'; 
        result.msg = '出生年份不正确';
        return result;
    }
    // 校验手机号
    var phoneReg = /^1[3456789]\d{9}$/
    if(!phoneReg.test(phone)) {
        result.status = 'fail'; 
        result.msg = '手机号码不正确';
        return result;
    }
    result.date = {
        name,
        sex,
        eamil,
        sNo,
        brith,
        phone,
        address
    };
    return result;
}

 

// 封装一个调用ajax函数的方法
/**
 * 
 * @param {Object} options
 *         method: 请求方式
 *          url: 请求路径
 *          data: 请求数据  (数据是不包含appkey的)
 *          success： 请求成功之后的回调函数  即后台成功处理我的数据的时候要做的总能
 *          
 */
function transferData(options) {
    
    ajax(options.method || 'GET', 'http://open.duyiedu.com' + options.url, options.data + 'appkey=LZP0703_1612355614631',
      function (res) {
        if (res.status === 'fail') {
          alert(res.msg);
        } else {
          options.success(res.data);
        }
    }, true)
}
  

// // 获取表格数据    未获取到自己写的
// function getTableDate() {
//     // console.log(123);
//     transferData({
//         method:'get',
//         url:'/api/student/findAll',
//         data:'',
//         success:function (res) {
//             console.log(res);
//         }
//     })
// }

// getTableDate();


// 这个是复制老师的
function getTableData() {
    transferData({
      method: 'get',
      url: '/api/student/findAll',
      data: '',
      success: function (res) {
        tableData = res;
        renderTable(res);
      }
    })
  }
  
  getTableData();














