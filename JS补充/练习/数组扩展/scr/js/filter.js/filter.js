// 根据输入筛选数组
function inputFilter(text,arr) {
    var finallyArr = arr.filter(function(elem,index,self) {
        return elem.name.indexOf(text) >= 0? 1 : 0;
    })
    if(text == ""){
        return arr;
    }else{
        return finallyArr;
    }
}
//根据性别筛选数组
function sexFilter(sex,arr) {
    var sexFilterArr = arr.filter(function(elem,index,self) {
        return sex.indexOf(elem.sex) >= 0? 1 : 0;
    })
    return sexFilterArr;
}
// 合并
function combine(config) {
    // {text : inputFiler,sex : sexFilter}
    return function (data) {
        var finallyArr = [];
        for(var prop in config){
            console.log(statu[prop]);
            finallyArr = config[prop](statu[prop],data);
            data = finallyArr;
            console.log(finallyArr);
        }
        return finallyArr;
    }
}
var finallyArr = combine({'text' : inputFilter,'sex' : sexFilter})