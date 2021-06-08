/**
 *
 * @param {String} method 请求方式  需要大写
 * @param {String} url    请求地址  协议（http）+ 域名+ 端口号 + 路径
 * @param {String} data   请求数据  key=value&key1=value1
 * @param {Function} cb     成功的回调函数
 * @param {Boolean} isAsync 是否异步 true 是异步  false 代表同步
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


// bindEvent： 绑定事件函数
function bindEvent() {
    // 左侧导航切换行为 即 左侧菜单栏的点击事件
    var leftMenu = document.querySelector('.left-menu');
    leftMenu.onclick = function (e) {
        // e.target： 目标元素  当点击导航的时候是a标签
        // parentNode 父节点   ddNode： 当前点击的导航对应的dd元素节点
        var ddNode = e.target.parentNode;
        if (ddNode.tagName === 'DD') {
            removeClass(ddNode.parentNode.children, 'menu-active');
            ddNode.className = 'menu-active';
            // e.target.parentNode.classList.add('menu-active')
        }
    }
}
// removeClass: 移除类名    nodeList: 节点列表  className： 要移除的类名
function removeClass(nodeList, className) {
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(className);
    }
}

window.onload = function () {
    
    bindEvent();
    hashToMenu();
    // 浏览器的地址栏中 hash值变化
    window.onhashchange = function () {
        hashToMenu();
    }
}

// hashToMenu： 由hash值 对应左侧导航
function hashToMenu() {
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