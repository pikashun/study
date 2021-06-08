# Promise
    Promise并没有消除回调，只是让回调变得可控

    1，未决阶段的函数是同步的，会立即执行
    2，thenable和catchable函数是异步的，就算是立即执行，也是立即放入事件队列，而且是放在微队列
    3，pro.then可以只添加thenable函数，也可用pro.then单独添加catchable函数
    4，在未决阶段的处理函数中，如果发生未捕获的错误，会将状态推向rejected，并被catchable捕获
    5，一旦状态变为已决，无法再对状态做出更改
