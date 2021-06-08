# async await
    async和await是 ES2016 新增的两个关键字，它们借鉴了 ES2015 中生成器在实际开发中的应用，目的是简化Promise API的使用，而不是代替

## async
    目的是简化在函数的返回值中对Promise的创建

    async用于修饰函数，(无论是函数字面量还是函数表达式，)，放置在函数最开始的位置，被修饰函数的返回结果一定是Promise对象


    async function test() {
        console.log(1);
        return 2;
    }
    等效于
    function tes() {
        return new Promise((resolve,reject) => {
            console.log(1);
            resolve(2);
        })
    }
    return触发resolve，return的值为result，
    throw触发reject，throw的值为result，
    若返回的是Peomise对象，则结果为返回的Promise对象
    若在async中有await的循环，则在当前等待的Promise resolve之前，下一次循环不会运行；


    也可写成立即执行函数；  

    async function test() {
        const result = await 1;
        console.log(result);
    }
    等同于
    function test() {
        return new Promise((resolve,reject) => {
            const pro = Promise.resolve(1);
            pro.then(data => {
                const result = data;
                console.log(data);
                resolve;
            })
        })
    }


## 适配async的计时器
    function delay(duration,result) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(result);
            },duration);
        })
    }