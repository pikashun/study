# web storage
    存储大小：5MB以内
    不能跨域,永不过期，只能手动删除

    localStorege: 页面关闭之后依然存在
    sessionStorage： 页面关闭之后消失；

## 属性
    1，length ： 数据个数；
    2，key ： 通过索引找到存储的数据
    3，getItem： 通过键名取到存储的数据
    4，setItem： 设置一个本地存储数据 //可解析数组、对象，但是会转成字符串，对象转为字符串是[object,Object]
    5，removeItem： 删除一个本地存储数据
    6，clear() : 清空本地存储数据；

    //无痕模式：创建临时的localStorage，页面关闭时删除；

## 事件
    监听localStorage的变化，可跨页面但不能跨域
    storage发生修改时，此事件发生在另外的页面
    window.addEvenrListener('storage',function(ev) {
        ev.key//修改的是哪一个值
        ev.newValue//修改后的数据
        ev.oldValue//修改前的数据
        ev.storagetArea//storage对象
        ev.url//返回操作页面的URL；
    })
    