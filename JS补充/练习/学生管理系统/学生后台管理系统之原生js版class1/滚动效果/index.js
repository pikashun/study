


window.onhashchange = function (e) {
    hashToMenu()
}

function bindEvent () {
    var menuList = document.querySelector('.left-menu');
    menuList.onclick = function (e) {
        removeClass(e.target.parentNode.parentNode.children, 'menu-active')
        e.target.parentNode.classList.add('menu-active');
    }
    var rightContent = document.querySelector('.right-content');
    rightContent.onscroll = function (e) {
        console.log(e.target.scrollTop);
        var scrollTop = e.target.scrollTop;
        if (scrollTop === 0) {
            location.hash = '#student-list';
        }  else if (scrollTop >= e.target.offsetHeight ) {
            location.hash = 'student-add';
        }
        
    }
}

function removeClass(nodeList, className) {
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(className);
    }
}

bindEvent()
function hashToMenu() {
    var activeMenu = document.querySelector('.menu-item');
    if (location.hash) {
        activeMenu = document.querySelector('.menu-item[hash="' + location.hash + '"]') || activeMenu;
    } 
    activeMenu.getElementsByTagName('a')[0].click();
}
hashToMenu()

