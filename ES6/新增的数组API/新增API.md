# 方法

## 静态方法
    Array.of(...arg);接收数组项，返回新的数组
    Array.from(arg);接收类数组或者可迭代对象，返回新数组

## 实例方法
    find(callback) :用于查找满足条件的第一个元素
    findIndex(callback) : 用于查找满足条件的第一个元素的下标
    fill(data) : 用指定的数据填充数组的所有内容
    copyWithin(target,start?,end?) : 在数组内部完成复制,从下标为target的位置开始改变数组数据，
                                     数据来自自身数组的下标为start开始，到end处结束
                                     start默认值为0，end默认为数组最后一位；
    includes(data) : 判断数组中是否包含某个值，使用Object.is匹配；(ES7);

# 类型化数组
    JS默认64位存储数字
    用于优化多个数字的存储；

    分为
        Int8Array: 8为有符号整数
        UInt8Array: 8位无符号整数
        Int16Array: 16为有符号整数
        UInt16Array: 16位无符号整数
        Int32Array: 32为有符号整数
        UInt32Array:328位无符号整数
        Float32Array: 32位浮点数
        Float64Array:64位浮点数
## 两种定义方式
    const arr - new Int8Array(10),//
        返回结果位长度为10，值为0的初始化数组
    const arr = Int32Array.of(1,2,3)
        arr.lenght //得到元素数量
        arr.byteLenght //得到数组占用的字节数；

    复制数组
    const arr1 = new Int8Array(arr);

    其他用法和普通数组一致；但该数组不能增加以及删除数据，长度固定

    调用方法时返回的是同类型的新数组

# ArrayBuffer
    一个对象，用于存储一个固定内存大小的数据

    JS代码
        const bf = new AarrayBuffer(10);创造一个占10个字节的对象

    字节数在创建时固定，可用byteLength获取长度
    slice方法，两个参数，截取范围内，左闭右开区间内的数据，返回新的对象

## ArrayBuffer读写
    1，使用dataview ： 通常徽章需要混用时用dataview

    2，使用类型化数组
        实际上，每一个类型化数组都对应一个ArrayBuffer，如果没有手动指定ArrayBuffer，则自动创建一个新的ArrayBuffer
        创建类型化数组时可传递ArrayBuffer
            const bf = new ArrayBuffer(10);//10字节的内存
            const arr1 = new Int8Array(bf);
            const arr2 = new Int16Array(bf);
                //可用两个类型化数组操作同一个内存空间
            arr[1] = 1;//具体操作方式，直接赋值即可；
    


