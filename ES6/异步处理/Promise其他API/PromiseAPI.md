# 实例成员
    then ： 注册一个后续处理函数，当Promise为resolved状态时运行该函数，也可添加rejected状态时运行的函数
    catch ： 注册一个后续处理函数，当Promise为rejected状态时运行该函数
    finally(ES2018) : 注册一个后续处理函数(无参)，当Promise为已决时运行该函数。不管处于何种状态

# 静态成员
    resolve(数据) ： 该方法返回一个resolve状态的Promise，传递的数据作为状态数据
        特殊情况，如果传递的数据是Promise，则直接返回传递的Promise对象

    rejected(数据) ： 该方法返回一个rejected状态的Promise，传递的数据作为状态数据

    all(iteable) : 返回一个Promise对象，一般传递一个由Promise对象组成的数组，只有当所有的Promise变成resolve状态之后，
                   返回的Promise对象才会变成resolve状态，该状态的数据为数组里面所有Promise的resolve状态数据组成的数组，顺序为Promise的注册顺序
                   一旦有任何一个Promise对象触发失败，则立即触发返回的新的Promise对象的失败
    race(iteable) : 返回一个Promise对象，数组里任何一个Promise完成都会触发返回的Promise对象的resolve或者reject