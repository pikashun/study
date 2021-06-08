<!--
 * @Author: your name
 * @Date: 2021-04-15 23:50:23
 * @LastEditTime: 2021-04-16 00:27:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\包管理器\npm1.md
-->
<!--
 * @Author: your name
 * @Date: 2021-04-15 00:50:10
 * @LastEditTime: 2021-04-15 15:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\包管理器\npm.md
-->
# 包的安装
    安装(install) 即下载包,
    由于服务器在国外，需利用国内的服务器镜像，命令方式为
    npm config set registry https://registry.npm.taobao.org
    查看是否设置成功用命令 ： npm config get registry

## 本地安装
    使用命令npm install 包名
    或 ： npm i 包名

    随着开发的进展，node_modules目录会变得很大，目录下的内容不适合直接传输到生成环境，因此通常使用.gitignore文件忽略该目录中的内容
    
    本地安装适用于绝大部分包，它会在当前目录及其子目录中发挥作用，通常在项目的根目录中使用本地安装，

    安装一个包时，npm会自动管理依赖，它会下载该包的依赖包到node_modules目录中

    如果本地安装的包带有CLI，npm会将它的CLI脚本文件放置到node_modules/bin下，使用命令npx 命令名即可调用



## 全局安装
    全局安装的包放置在一个特殊的全局目录，该目录可以通过命令npm config get prefix 查看
    使用命令 npm install --global 包名
    或 npm i -g 包名

    全局安装的包并非所有工程可用，它仅提供全局的CLI工具

    大部分情况下都不需要全局安装包 除非 ：
        1，包的版本非常稳定，很少有大的更新，
        2，提供的CLI工具在各个工程中使用非常频繁
        3，CLI工具仅为开发环境提供支持，而非部署环境


    可同时下载安装多个包 ： npm i jquery lodash

# 包配置
    目前的问题
        1，拷贝工程后如何还原，
        2，如何区分开发依赖和生产依赖
        3，如果自身的项目也是一个包，如何描述包的信息
    以上问题通过包的配置文件解决

## 配置文件
    npm将每个使用npm的工程本身都看作是一个包，包的信息需要通过一个名称固定的配置文件来描述
    配置文件的名称固定为 ： packkage.json

    可以手动创建该文件，而更多的时候，是通过命令npm init创建的

    配置文件中可以描述大量的信息，包括 ：
        name : 包的名称 ，该名称必须是英文单词字符，支持连字符
        version ： 版本
            版本规范 ：主版本号.次版本号.补丁版本号
            主版本号 ： 仅当程序发生重大改变时才会增长，如新增重要功能，新增大量API，技术架构发生重大变化
            次版本号 ： 仅当程序发生了一些小的变化时才会增长，如新增一些小功能，新增一些辅助性API；
            补丁版本号 ： 仅当解决了一些bug或进行了一些局部优化时更新，如修复某个函数的bug，提升某个函数的运行效率
        description ： 包的描述
        homepage ： 官网地址;
        author :  包的作者，必须是有效的npm账户名，书写规范是account<mail>，例如 ： pws <952704496@qq.com>
                  不正确的账号和邮箱可能导致发布包时失败
        respository : 包的仓储地址，通常指git或svn地址，它是一个对象
            type ： 仓储类型，git或svn
            url ： 地址
        main ： 包的入口文件，使用包的人默认从该入口导入包的内容
        keywords ： 搜索关键字，发布包后，可以通过该数组文件中的关键字搜到包
        license : 协议

## 保存依赖关系
    大部分时候，我们仅仅是开发项目，并不会把它打包发布出去，尽管如此，我们任然需要package.json文件

        package.json文件最重要的作用是记录当前工程的依赖关系
            dependencies ： 生产环境的依赖包
            devDependencies ： 仅开发环境的依赖包
        配置号依赖后，使用下面的命令即可安装依赖
            本地安装左右依赖 dependencies + devDependencies 
                npm install
                npm i
            仅安装生产环境的依赖 dependencies
                npm install -- production


    为了方便添加依赖，npm支持在使用install命令时，加入一些额外的参数，用于将安装的依赖包保存到package.json文件中
    命令如下 ： 
        安装依赖到生产环境
            npm i 包名
            npm i --save 包名
            npm i -S 包名
        安装依赖到开发环境
            npm i --save-dev 包名
            npm i -D 包名

    自动保存的依赖版本 ： ^(1.0.0)

# 包的使用
    当使用nodeJS导入模块时，如果模块路径不是以./或../开头，则node会认为导入的模块来自于node_modules目录，若当前目录没有这样的文件，则会回溯到上级目录安装同样的方式查找，如果到顶级目录都无法找到文件，则抛出错误

    之前提到的入口文件按照以下规则确定，
        1，查看导入包的package.json文件，读取main字段作为入口文件
        2，若不包含main字段，则使用index.js作为入口文件
    
    入口文件的规则同样适用于自己的工程文件

    若需要导入的模块为nodeJS的内置模块，则不会去node-modules里面寻找，会直接引用nodeJS的内置模块

# 运行环境配置
    一般有三种运行环境
        开发环境，生产环境，测试环境。
    有时候我们需要node代码在不同的环境中做出不同的处理，所以让node明确所处环境很重要
    通常使用以下 处理方式
        node中有一个全局变量 global (可以类比浏览器环境的window) ，该变量是一个对象，对象中的所有属性均可以直接使用
        global有一个属性是process，该属性是一个对象，包含了运行当前node程序的计算机的很多信息，其中一个信息是env，是一个对象包含了计算机中所有的系统变量，
        通常我们通过系统变量 NODE_ENV 的值，来判定node程序处于何种环境，有两种方式设置NODE_ENV的值
            1，永久设置
                在计算机的环境变量中新增 NODE_EVN 的值，在node中用process.env.NODE_ENV读取
                一般development代表开发环境

            
            2，临时设置，一般使用临时设置，
                用script脚本，
                    "start" : "set NODE_ENV=development&&node index.js"//用 && 表示先执行前面的，成功后执行后面的


    不同系统下的命令写法不同
        cross-env ：一个第三方库，可跨越环境，将set 改为 cross-env 即可


    在node中，默认将json格式的文件变为对象，可直接使用require导入


# 其他npm命令
    1，精确安装最新版本 ： npm i --save-exact 包名  //  npm install -E 包名
    
    2，安装指定版本 ： npm install 包名@版本号

    3，查询包安装路径 ： npm root [-g] //-g可选，不写是查看当前目录，加上是查看全局目录

    4，查询包信息 ： npm view 包名[子信息] // view aliases(别名) ： v info show (使用后面三个效果一样)
                     子信息可写name等属性

    5，查询安装包 ： npm list [-g] [--depth=依赖深度] //list aliases : ls la ll,深度从0开始

    6，检查有哪些包需要更新 ： npm outdated

    7，更新包 ：npm updata [-g] [包名]，更新npm 本身，直接 npm i -g npm//npm updata -g npm

    8，卸载包 ： npm uninstall [-g] 包名; // uninstall aliases : remove rm r un unlink

    9，查询目前生效的各种配置 ： npm config ls [-l] [--json],分号开头表示配，l表示列表形式，-json表示json格式

    10，设置配置 ： npm config set 配置项=值

    11，获取某个配置项 ： npm config get 配置项

    12，移除某个配置 ： npm config delete配置项

    