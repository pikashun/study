// 后台数据
var personArr = [
    {name : '彭万顺' , src : './scr/img/奇诺比奥.png', des : 'self', sex : 'f'},
    {name : '小彭的思齐' , src : './scr/img/奇诺比珂.png', des : 'like', sex : 'm'},
    {name : '小柒' , src : './scr/img/马里奥.png', des : 'hanhan', sex : 'm'},
    {name : '夏菁菁' , src : './scr/img/Mario.png', des : 'cute', sex : 'm'},
    {name : '思齐同学' , src : './scr/img/路易基.png', des : 'Gurtar', sex : 'm'},
    ]

var wrapperUl = document.getElementsByClassName('person')[0];
var input = document.getElementsByTagName('input')[0];
var statu = {
    text : "",
    sex : 'f m',
}
// 定义函数，根据数组生成列表
function createWrapper(arr) {
    wrapperUl.innerHTML = "";
    arr.forEach(function(elem,index,self) {
        wrapperUl.innerHTML += "<li><img src=" + elem.src + "></img><p class='name'>" + elem.name + "</p><p class='des'>" + elem.des + "</p></li>";
    });
}
// 根据输入内容确定数组并生成列表
input.oninput = function() {
    statu.text = input.value;
    createWrapper(finallyArr(personArr));
    }

// 根据选项确定数组并生成列表
// 将伪数组转换为数组
var btnArr = [].slice.call(document.getElementsByClassName('btn'));
var lastSelect = btnArr[2];
function changeSelect(elem) {
    if(elem != lastSelect){
        elem.className = "btn select";
        lastSelect.className = "btn";
        lastSelect = elem;
    }
    else{
        return;
    }
}
btnArr.forEach(function(elem,index,self) {

    elem.addEventListener('click',function() {
        changeSelect(this);
        statu.sex = this.getAttribute('sex');
        createWrapper(finallyArr(personArr));

    },false)
})





createWrapper(personArr);




