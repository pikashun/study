# catch
## 写法
    try{

    }catch(e) {
        //将错误信息，error.message  error.name等错误信息封装在error对象中，这个错误对象会传送至e（可自定义变量）
    }

    对于不确定的代码可用此方法，若try里面代码出现错误，不影响后续代码的执行；但不会执行try里面错误代码后面的代码，若错误不止一个，则只能确定第一个错误点；

    try里面的代码不出错，则catch里面的代码不会执行；

## error对应的六种值与对应信息：
    1，EvalError： eval（）的使用与定义不一致；

    2，RangeError： 数值越界；

    3，ReferenceError： 非法或不能识别的引用值；

    4，SyntaxError： 发生语法或解析错误；

    5，TypeError： 操作数类型错误；

    6，URIError： URI处理函数使用不当；




    