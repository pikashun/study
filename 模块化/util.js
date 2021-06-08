//需要隐藏的内容
let i = 2;
//需要暴露的内容
const getNumber = (() => {
    let i = 0;
    return function() {
        i++;
        return i;
    }
})();
console.log(getNumber());
console.log('pws');
console.log(getNumber());
exports.getNumber = getNumber;
// exprots = {
//     getNumber : getNumber,
// }