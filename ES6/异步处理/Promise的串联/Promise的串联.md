# Promise的串联
    当后续的Promise需要用到之前的Promise的处理结果时，需要Promise的串联

    Promise对象中，无论是then方法还是catch方法，都有返回值，返回的是一个全新的Promise对象，状态规则如下
        1，如果当前的Promise是挂起状态，则新的到的Promise是挂起状态
        2，若当前的Promise是已决状态，会运行响应的后续处理函数，
            并将后续处理函数的结果（返回值）作为resolved状态数据，应用到新的Promise中，
            若后续处理函数发生错误，则把返回值作为rejected状态数据，应用到新的Promise中

            后续的Promise一定会等到前面的Promise有了后续处理结果后，才会变成已决状态

    如果前面的Promise的后续处理，返回的是一个Promise，则返回的新的Promise状态和后续处理返回的Promise状态保持一致。