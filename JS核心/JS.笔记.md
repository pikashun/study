
# typeof输出结果为字符串类型
    typeof（null）输出结果为"object"

## 显示类型转换

### number():
    number(null) = 0;
    number(undefinde) = NaN;
    number():里面含非数字字符会转化成NaN；

### parseInt():
    转化为整型，首位必须是数字才能转换，否则为NaN，遇到第一个非数字停止并输出；
    parseInt(demo,radix) radix代表进制，以radix进制为基底转化为10机制数；radix取值范围为2-36；
    parseFloat(): 从数字位开始，到第一个小数点后的数字截止：
    .toFixed(radix) 转化为几位小数，四舍五入

### toString()
    用法为.toString;
    null和undefined不能用toString,否则会报错；

    若转换对象为数字，则.toString(radix)输出结果是 以10进制为基底转化为radix进制；

## 隐式类型转换

### isNaN()
    先用number（）转换再判断是否为NaN，输出true和false；

### ++/--  +/-
    ++/--;运算之前先用number转换为数字；
    +/-（一元正负）； 也会先用number（）转为number类型；

### +
    只要+两边包含字符串，结果输出为字符串；
    若不包含字符串，则转化为number类型；

### - * / %
    隐含number转换；

### &&  ||  ！
    转换为布尔类型；

### > < <= >=
    有number类型则转化为number类型，否则比较ASCAII码；

### == ！= 
    1 == "1" == true;都为真；
    undefined和null都不能和0比较；但null == undefined 输出结果为真

### === !==
    绝对的等于和不等于
    但NaN === NaN 不成立；

### 未定义的变量值除非放在typeof（）里面，否则会报错；


# 浏览器console功能可执行JS代码，执行顺序在执行完所有代码之后。可直接查看变量
    console.log为在控制台输出；



# 函数
    大量重复代码称为偶合，用函数代替，可简化代码
    document.write() 是输出函数体，具体函数内容；

## 书写方式：
 
###        函数声明
        function test(){

        }
###        命名函数表达式
        var test = function abc(){
            表达式：忽略名字，实际函数为test；
            abc为函数名。test.name输出结果为abc
        }
###        匿名函数表达式（一般函数表达式指匿名函数表达式）
        var test = function (){
            匿名函数，test.name输出结果为test；
        }

## 组成

### 参数
    sum（a，b）a，b为形参，调用函数时输入的值为实参。
    形参和实参可以数量不对等，若形参大于实参，则多的形参会变为undefined；

#### 不定参
    实参>形参：比如
                function sum（a）｛
                    首先会生成arguments数组列表--[1,2,3]实参列表
                    sum.length 输出为形参长度；
                ｝
                sum（1，2，2）
                argument和实参不是同一个地址，但有绑定规则，一个变，另一个也会变；
                实参列表argument和实际输入有关，若function sum（a，b），输入sum（1），则argument[1]为undefined，改变b的值不影响argument[1],此时多余部分无映射

### 返回值
    默认含有隐式return；返回值，可中断函数；

    字符串可用.charAt函数取出字符串的第几位；
        var str = "123";
        则：str.charAt[1] = 1；
        数字类字符串也可当数组取用，字符串也有长度

## 作用域
    函数作用域仅在函数内

# js特点
    单线程
    解释性语言，读一句执行一句，有预编译过程；

## 编译过程
    1.语法分析
        通篇扫描：检查语法问题；
    2.预编译
    3.解释执行

## 预编译
        函数声明整体提升：函数声明永远在最前面
        变量 声明提升

        var a = 123；
        包含声明，赋值两个过程；
        声明提升，赋值不提升；

    imply （暗示）
    imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量为全局对象（window）所有
    一切声明的全局变量都是window的属性；
    综上，window是全局的域，window是一个对象；

    var a = 123;
    console.log(a) 实际是访问window.a

    var a = b = 123; 赋值顺序是自右向左先将123赋值给b，此时b未声明；

### 函数预编译过程
    预编译发生在函数执行的前一刻；
    1.创建AO对象--Activation Object（执行期上下文）
    2.找形参和变量声明，将变量和形参名作为AO属性名，值为undefined；
    3.将实参和形参统一，
    4.在函数体里找函数声明，将函数体赋值给函数声明
    预编译期间提升过的声明在执行期间会忽略；提升即为优先执行；

    function fn(a) {
        console.log(a);

        var a = 123;

        console.log(a);

        function a () {}

        console.log(a);

        var b = function () {}

        console.log(b);

        function d() {}
    }

    全局预编译与函数编译相同；
# test.[[scope]] 函数创建的作用域 隐式属性，无法访问，系统会调用
    [[scope]]：每个javas函数都是一个对象，对象中有些属性我们可以访问，但有些不可以，这些属性仅供javascript引擎存取，
               [[scope]]指的就是我们所说的作用域，其中存储了运行期的上下文的集合。

               函数每次执行都会产生新的执行期上下文，执行完毕后销毁。

               在函数被定义时生成所处环境的执行期上下文，被执行时生成自身的执行期上下文

    作用域链： [[scope]]中所存储的执行期上下文对象的集合，这个集合呈链式链接，叫做作用域链。
              查找变量时从顶端向下查找


              function a() {
                  function b() {
                      var bb = 0;
                      aa = 0;
                  }
                  var aa = 123;
                  function b();
                  //此时console.log(a)的值为0；说明在作用域链里a和b共用a的AO和GO；
              }

    function a() {
        function b() {
            var bbb = 234;
            document.write(aaa);
        }
        var aaa = 123;
        return b;
    }
    var glob = 100;
    var demo = a();
    demo()；
    此时输出结果为123

# 立即执行函数
    针对初始化功能的函数，执行完毕立即释放；

## 函数形式
    (function () {}())；
    (function (){})();

    两种书写方式都可以，W3C建议使用第一种
    执行一次之后就不存在，立即销毁，其他和函数一样。

## 只有表达式才能被执行符号()执行
    function test() {
        var = 123;
    } ();
    编译不通过，因为函数声明不是表达式；
    var test = function(){

    }();
    可以通过编译，此处为函数表达式；

    能被执行符号执行的表达式，函数名会被自动忽略
    因此写法也可以是：
    var test = funtion(){

    }();
    + function test() {
        console.log('a');
    }();  (因为前面有“+”，会有类型转换，所以此函数声明也变为表达式)

    (function() {}());
    (function() {})();
    这两种形式都是讲函数声明变成表达式；从而成为立即执行函数；

    function(a,b,c,d){
        console.log(a+b+c+d);
    }(a,b,c,d);
    此时(a,b,c,d)不是执行符号，变量声明与下面这条语句无关，不会报错。
# 闭包
    当内部函数被保存到外部时，将会生成闭包。闭包会导致原有的作用链不释放，造成内存泄漏
    不一定是保存为函数，通过构造函数，返回对象同样生成闭包；

## 闭包的作用

### 实现公有变量
    eg: 函数累加器
    function add() {
        var count = 0;
        function demo() {
            count++;
            console.log(count);
        }
        return demo();
    }
    var counter = add();
    counter()  每执行一次，count自加一；
### 可以当缓存（存储结构）
    function() {
        var num = 100;
        function a() {
            num ++;
            console.log(num);
        }
        function b() {
            num --;
            console.log(b);
        }
        return [a,b];
    }
    var myArr = test();
    myArr[0];
    myArr[1];
    输出结果为101，100；
    两个函数作用域中，test部分AO共用；
### 可以实现封装，属性私有化；
    eg： Person();

### 模块化开发，防止污染变量；



### eg
    var arr = [];
    function test() {
        for(var i = 0;i < 10;i++){
            arr[i] = function() {
                cosole.log(i);
            }
        }
        return arr;
    }

    var myArr = test();
    for(j = 0; j < 10; J++){
        myArr[j]();
    }
    输出结果为10个10；因为数组内的所有函数共用一个i；且test内循环了10次，i = 10；
        var arr = [];
    function test() {
        for(var i = 0;i < 10;i++){
            (function(j) {
                arr[j] = function() {
                    console.log(j);
                }
            }(i));
        }
        return arr;
    }

    var myArr = test();
    for(j = 0; j < 10; J++){
        myArr[j]();
    }
    此时j是数组内各函数自身的j，输出结果为0到9；

# 对象

## 定义及调用
    var obj = {
        name : pikashun,
        age : 24,
        wish : freedom,
        ageAdd : function() {
            this.age++;
        }
    }
    在函数内部调用可用this代替自身，外部调用方式为obj.name 对象名.属性名

## 属性改变
    添加：直接对象名.所需要的属性
    obj.dream = "IT";
    修改：直接修改
    obj.age = 23;
    删除：delete +需要删除的属性；
    delete obj.age;

    访问对象里没有的属性会返回undefined，不会报错；

## 对象的创建方法

    1，var obj = {}    plainObject    对象字面量/对象直接量
    2，构造函数
        1.系统自带的构造函数 new Object（） Array()  Number() 
            var obj = new Object(); 
            字符串单引号和双引号都可以，建议使用单引号，便于后端接受数据
            引号嵌套必须单双混用，否则会识别错误，比如"afd"ashdfj"dsf",中间的引号不知道和前后哪个引号匹配。

        2.自定义
            由于和函数声明一样，因此构造函数首字母大写；new可以将其定义为对象；
            function Person() {

            }
            var person1 = new person();

            function Car() {
                this.name = "BMW";
                this.height = "1600";
                this.lang = "4900";
                this.weight = 1000;
            }
            var Car1 = new Car();
            var Car2 = new Car();

            此时可通过一个构造函数生成多个初始值相同的对象；
            **对于不变的属性可通过原型赋值，减少代码执行次数；

            构造函数能产生对象的原理
                通过new可以在函数最开始产生一个this{}的空对象，在函数最后返回this{}
                function Test() {
                    //创建一个this{}
                    this.name = "pks";
                    //retutrn this;
                }
                只有通过new才能转化成对象，否则就是普通的函数

                eg：function Person() {
                    this.name = "name";
                    this.weight = "weight";
                    this.say = function() {
                        console.log(this.say);
                    }
                    //在此处return {},返回一个空对象，可以让构造函数无法生成对象。return其他原始类型影响构造函数的生成，依然可以用new强制返回对象；

                }
                console.log(new Person("peng","65").name);

## 通过构造函数和闭包可以产生一个无法访问但是能被调用的变量
    function Person() {
        var name =  'pws';
        function say() {
            console.log(name);
        }
    }
    person = new Person();
    此时，person.name 值为undefined，只能通过对象设置的方法去访问，person.say;


## 对象的枚举
    var  obj() {
        name : 1,
        age : 2,
        height : 3,
    }
    for(var prop/可以随意命名 in obj){
        console.log(prop) //可输出所以对象属性，且为字符串类型；
        想访问每个对象值必须使用obj[prop] 因为prop已经是字符串,若使用obj.prop则会隐式转换为obj.['prop'];
    }
    ***枚举里面访问必须使用obj[prop];




    若obj对象中原型已经修改过/*__proto__ : {name: 'pws'}*/ 则遍历时会输出原型，
    obj.hasOwnProperty(prop)表示是否为自己的方法，不包括原型；若自己设置的属性在原型里面，也可以输出




    in可以判断属性是否属于对象，只要可以调用的都算，包括原型 但必须用字符串：eg: 'name' in obj;输出true




    A instanceof B  //A对象是不是B构造函数构造出来的，
    A instanceof B  //A的原型链上有没有B的原型
    可通过此方法分辨数组和对象



# 包装类 

## 原始值
    字符串和值分为两种，原始值和数字对象或字符串对象；

    原始值没有属性和方法；

    比如，num = new Number（123），
        此时的num为对象类型的123，可用num.abc = "a"向num加入其他属性和值，
        若直接使用运算， num *= 2；输出结果为246；计算完之后num重新变为原始值类型；

        字符串和布尔类型也类似；
        var str = new String('abc');
        var bol = new Boolean('true');
    var str = 'abcd';
    str.a = 'abcd';
    此时函数不报错，str.a的输出值为undefined；
    str.length输出值为4；

    var num = 4;

    num.len = 3;
    //此时发生隐式 new Number(4).len = 3;
    //赋值完后立即销毁；
    //此时用console.log(num.len)访问，系统会再次生成new Number(4).len,所以返回值是undefined。


    var arr = [1,2,3,4];
    arr.length = 2;
    此时console.log(arr)结果为[1,2]

    但字符串不同；
    var a = 'abcd';
    a.length = 2;
    此时和原始数值类似，发生隐式转换；对a无影响
    a.length的值为4


    eg：
        
# 原型

## 定义：function对象的一个属性，它定义了构造函数制造出的对象的公共祖先，通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
    Person.prototype ---原型
    函数自带，在出生时就已经生成，是一个空对象
    Person.prototype = {} --是祖先；

    Person.prototype.name = pws;
    function Person() {

    }
    var person1 = Person();
    var person2 = Person();
    此时console.log(person1)输出值为空对象，但是person.name输出值为pws；且person2也能继承该值；
    在构造函数里面可修改；

    利用原型的特点，可构造公有属性

## 增，删，查，改。
    修改属性只能通过Person.prototype.name修改；
    其他类似，都只能通过原型修改 ；
    删除用delet；
    若在原型中存在name值，则仅仅删除后代对象里的name无法删除该属性，name属性依旧可以访问调用；
    delete没有的值会返回true；

## 增加对象可以通过操作对象的方法增加
    eg:
        Person.prototype = {

        }

## 初始属性
    Person.constructor 会返回Person的构造函数；

    通过构造函数构造的空对象，初始会包含两个属性
        constructor: Person()
        __proto__: Object
        且为隐式属性，在console中颜色为浅粉色，自己定义的属性为紫色；
    可通过Person.constructor修改函数的原构造函数

## __proto__
    实际通过new创造的对象，在构造函数第一步创建的this｛｝对象，不是空对象，含有__proto__属性，属性值Person.prototype
    此属性也可以被修改；
    此处只是赋值，不是指向，赋值完毕之后再修改Person.prototype,不影响原__porto__的值；
    Person.prototype = {
        age: 100;
    }
    function Person() {
    }
    var person = new Person();
    此时执行person.age++; 会在person中创建一个新的属性age，值为原型值加一，不影响原型中的值；






## 原型链
    原型可以一层一层嵌套，构成原型链；
    a.sayName() sayName 里面this的指向是，谁调用这个方法，this就指向谁
    原型链的终端是Object.prototype;

## Object.create()
    可通过此方法构造对象
    var obj = Object.create(原型)，括号里面必须放原型
    eg： 
        var obj = {name:pws,age:24};
        var obj1 = Object.create(obj);
        此时会创建一个obj1对象，原型为obj;
    
    Object.create(null)不会报错，会生成一个真正的空对象，不含__proto__，自己添加无效，因此也不会继承Object.prototype;


    所以undefined和null不能用.toString() 会报错，而其他类型会生成包装类，会生成对象，包含toString()

    直接123.toString()不可用，系统看到小数点会默认为浮点型，必须定义为变量才可以用；

## 重写
    定义一个和原型同名的方法称为重写，不仅可以自己重写，系统自身也存在重写，
        Object.prototype.toString
        Number.prototype.toString
        Array.prototype.toString
        Boolean.prototype.toString
        String.prototypr.toString
        都存在，后面四个重写了toString方法；


## call/aplay
    function test() {

    }
    test();  //实际执行是  test.call();



    function Person(name,age) {
        this.name = name;
        this.age = age;
    }
    var person = new Person('pws',24);  //不new的话，this默认指向window；
    var obj = {

    }
    Person.call(obj，csq，23); //此时，Person里所有预设的this全部指向obj，在obj后可写参数


### call和aply应用：改变this指向
    call主要用法：借用其他函数实现自己的功能；

    function Person(name,age,sex) {
        this.name = name;
        this.age = 24;
        this.sex = sex;
    }

    function Student(name,age,sex,tel,grade) {
        this.name = name; //
        this.age = age;   //可修改为Person.call(this,name,age,sex);
        this.sex = sex;   //
        this.tel = tel;
        this.grade = grade;
    }
    var student = new Student.call()


    apply，和call一样，不过传参列表不同，apply只能传递一个参数


    call需要把实参按照形参的个数传进去，apply需要传一个arguments


# 继承

## 传统形式----原型链
    但过多的继承了没用的属性

## 借用构造函数
    不能继承借用构造函数的原型
    每次构造函数都要多走一个函数

## 共享原型
    不能随便改动自己的原型

    比如
        function Father() {

        }
        function Son() {

        }
        Son.prototype = Father.prototype;

        Son.prototype.sex = "male";
        //此时也改变了Farther的原型；
        所以，prototype 是指向一个地址,甚至可以通过Person.prototype.__proto__给最初始的原型增加属性

## 圣杯模式
    function Father() {}
    function F() {}
    F.prototype = Father.prototype;
    function Son() {

    }
    Son.prototype = new.F()

    函数封装 //圣杯模式
        function inherit(Target,Origin) {
            function F(){};
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.prototype.uber = Origin.prototype;
        }
    因为F()实际无用，只是中间量，因此用闭包让其变成私有化变量更好；


    YUI库，


## 命名空间
    管理变量，防止污染全局，适用于模块化开发，
    webpack //目前使用此方法，

    也可使用立即执行函数加闭包
    var name = 234;
    var init = (function () {
        var name = 123;
        function callName() {
            console.log(name);
        }
        return function() {
            callName();
        }

    }())
    init();
    init//初始化的意思，一般用于入口函数；加强函数可读性；
## 常见应用
    function test() {
        name: function() {
            console.log(a);
            return this //通过return this可以实现函数的连续调用；
        }
        age: function() {
            console.log(b);
            return this;
        }
    }

    function obj（）｛
    name = 213；
    ｝
    可通过obj.name  /  obj['name'] 访问； [里面必须是字符串]使用更加灵活，可以实现属性拼接
    obj.name实际经过了隐式转换转换成obj['name'];

## this

### 函数预编译过程中 this指向window
    function test() {
        //若 new test,则存在this = Object.create(test.ptototype);即替换了this的指向；
        var a = 123;
        function b() {

        }
    }
    test(1);

    //new test();

    //预编译过程
        OA {
            arguments : [1],
            this : window,
            a : undefined,
            b : function () {}
        }

### 在全局里（GO）里，this指向window
### call和apply可以改变this的指向
### 谁调用函数，函数里的this就指向谁
    eg:
        function obj() {
            funvtion b() {
                console.log(this.name);
            }
        }

        obj.b(); //执行结果为obj；

        var name = '222';
        var a = {
            name = '111';
            say : function () {
                console.log(this.name);
            }
        }
        var fun = a.say;
        fun() //222
        a.say()  //111
        var b = {
            name : '333',
            say : function (fun) {
                fun();
            }
        }
        b.say(a.say);  //222 函数执行，没人调用，
        b.say = a.say;
        b.say();  //333;

## arguments

### arguments.callee
    arguments.callee == 函数自身；
    function test() {
        console.log(arguments.callee == test) //输出结果为true；
    }

    阶乘：
        var num = (function (n) {
            if(n == 1) {
                return 1;
            }
            return n * arguments.callee;
        }(100)

        );

### func.caller
    函数自身的属性

# 数组

## 构造方法
    var arr = [];  //字面量；推荐使用字面量
    var arr = new Array(); //唯一区别，如果只传一个参数，会生成该个数长度的空数组，传小数会报错；

## 报错
    除非使用不存在的方法，否则不会报错，本质是对象，访问超过长度的位会返回undefined；
    
## 改变原数组
    push : 往数组最后一位添加数据，可同时添加多位； 
    
    pop ： 把数组最后一位去除，剪切出来，返回剪切值；
    
    shift : 类似pop ，操作第一位
    
    unshift : 类似push，操作第一位 //自己实现可以拼接；
    
    sort ： 自小到大排序，按AsicII码，可添加方法，按任意方式排序；//
    必须传两个形参，
    当返回值为负数是，那么前面的数放在前面，
    为正数时，后面的数在前，
    为0时不动；
    
    reverse ：逆反数组；

    splice ： （从第几位开始，截取多少长度，在切口处添加新的数据）返回截取值，添加数据可以传任意位；可以从负数为开始，为倒数；

### sort的用法
    var arr = [1,6,43,8,4,86,10.5];
    arr.sort(function(a,b) {
        return a-b;
    });
    可实现数组的升序排序；sort类似冒泡，从[1,6]开始，陆续传[1,43],[1,8]```[6,43]```直到[10,5];

    让有序数组乱序
    var arr =  [1,4,7,2,8,4,9,45,37,28,10];
    arr.sort(function() {
        return Math.random() - 0.5;
    });

## 不改变原数组
    concat： 拼接；arr.concat(arr1);将后面的数组拼接到前面的数组里面，并返回；

    join： ("")必须传字符串
            ("_") 若传_，则将数组用_连接，然后输出字符串比如"1_1_2_2_3_3";可以传任意字符串，都会添加在中间；
            用数字也可以，但建议用字符串；
            不传用逗号连接；

    tostring： 将数组转化为字符串输出；

    slice： 两个参数（从第几位开始截取，截取到多少位），需要新变量接受，不改变原数组；也可用负数表示倒数；
            一个参数（从第几位截取到最后）；
            不写   （整个截取）；
            

    split：与join互逆；针对字符串，返回数组；

# 类数组
    数组所有的操作方式都无效；比如arguments，用push操作无效

    类数组组成：属性必须为索引属性（数字），必须有length属性，最好加上push属性,加上这些属性，对象就变成了类数组
    var obj = {
        "1" : a,
        "2" : b,
        "3" : c,
        "length" : 3,
        "push" : Array.prototype.push,
        "Splice" ： Array.prototype.splite, // 加上splice属性后，此时obj是对象，但可以像数组一样使用，控制台输出为[a,b,c]
    }

## push原理
    Array.prototype.push = function(target) {
        this[this.length] = target;
        length ++;
    }

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

# DOM --Document Object Model  //文档操作模型
    定义了表示和修改文档所需要的方法。DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合，也有人称DOM是对html和xml的标准编程接口。
    xml里面的标签可以自定义

    只能改变CSS行间样式，操作不了样式表

## 寻找元素的方法
    DOM对象
    1.doucument.getElementByTagName(""): 通过元素名查找，将所有元素查找出来，按顺序添加到数组里面可用[0]选中第一个元素；
        属性名没有-必须用小驼峰写法
        onclick 点击执行
    2.doucument.getElementByClassName(""): 通过类名查找，



## 创建元素
    document.createElement('div');创建新元素div；此时body里还没有这个div标签；
    用document.body.appendChild(div)；可以在body里面插入标签；

## 定时器功能
    setInterval(function(){},100)每隔100毫秒执行一次函数；
    clearInterval(定时器的名字)可以停止定时器

        
    document.onkeydown = function(e) {
        console.log(e);
        
    } 
    此函数可以监听键盘操作，e为返回的对象，e.which为具体动作的键位
    
# DOM
    document代表整个文档
    在HTML之上的标签，HTML只是文档的根标签

## 查看标签的方法
    除ID外，其他都是类数组，要用div[0]调用；且ID尽量别用，后端调用可能会改变ID；

    var div = document.getElementById(''); 元素唯一；元素在IE8一下的浏览器不区分大小写，且name当ID用；

    var div = document.getElementsByTagName('');元素名，选中所有元素，类数组；所有浏览器都能兼容

    var div = document.getElementsByClassName('');ie8及以下版本没有，兼容性不好；

    var div = document.getElementsByName('');只有部分标签的name属性可以生效；（表单。img。iframe）

    querySelector: 
        <div>
            <strong>
            </strong>
        </div>
        <div>
            <span>
                <strong class="demo">
                </strong>
            </span>
        </div>
    var div = document.querySelector('div>span strong.demo');  //可以类似CSS的写法；选中一个
    var div = document.querySelectorAll('div>span strong.demo');  //选中一组；
        这两个在ie7 及以下版本没有；且此选择器选出来的元素不是实时的，是静态副本；自己修改有效，其他选择器修改的无效；

## 遍历节点树
    节点类型：
            1，元素节点--------------------1
            2，属性节点--------------------2
            3，文本节点--------------------3
            4，注释节点--------------------8
            5，document节点----------------9
            6，documentFragment节点；------11



    div.parentNode: 选中父元素，可持续选中，div.parentNode.parentNode.parentNode;document.parentNode往上为null

    div.childNodes: 选中直接子节点，包含空格、换行等文本节点；为一组，可用【选中具体的元素】

    firstChild/lastChild: 第一/最后一个节点

    nextSibling/previouSibling: 下一个/上一个兄弟*节点*，不是元素；也可连续书写
## 遍历元素节点树
    parentElement; 这里没有document，html上面即为null；（IE9以下不兼容）

    children;元素子节点

    childElementCount == children.length;

    firstElementChild/lastElementChild: 第一个/最后一个子元素；（IE9以下不兼容）

    nextElementSibling/previousElementSibling: 上/下一个兄弟元素；（IE9以下不兼容）

## 节点的属性
    nodeName: 显示节点标签名，不可赋值；

    nodeValue: 只有文本节点和注释节点才有；可查看具体值，可读写，能修改元素值

    nodeType: 返回该节点的属性，具体属性值如下：
                1，元素节点--------------------1
                2，属性节点--------------------2
                3，文本节点--------------------3
                4，注释节点--------------------8
                5，document节点----------------9
                6，documentFragment节点；------11

    attributes: 元素属性节点的集合；可以访问ID和属性，ID可读写，class可读不可写

    Node.hasChildNodes()；查看是否有子节点

## 增加元素节点
    document,createElement('div');  //创建元素节点
    document.createTextNode('pws'); //创建文本节点
    document.createComment('pks');  //创建注释节点
    
## 插入节点
    document.appendChild(div);  //插入节点。类似push，在最后插入；
    若将已存在的节点插入已存在的节点，此时是剪切操作；

    document.insertBefore(a,b);  // insert  a   bofore   b;

## 删除
    parent.removeChild();  // 删除自己的子节点；实际是剪切出来，返回值为所剪切的元素，可用var li =  div.removeChild(i) 将i剪切并赋值给li

    i.remove();  //自己销毁；彻底删除，无返回值；

## 替换
    parentNode.replaceChild(p,strong);将内部strong变为p；返回值为所替换值


## 基本属性
    innerHTML； //改变元素HTML里面的内容  div.innerHTML = '123';  覆盖原本内容；，可写可读；
    可直接写 div.innerHTML = "<span style="background-color: red;font-size: 20px;color: #FFF;">123</span>"


    innerText(火狐不兼容)/// 火狐支持textContent,效果和innerText一样
        <div>
            <p>123</p>
            <strong>234</strong>
        </div>

        div.innerText 输出结果为“123 234”，输出所有文本信息
        赋值的话，将所有元素清空，并赋值，
        div.innerText = "123";结果变为
        <div>
            123
        </div>


## element节点操作
    div.setAttribute('a','b'),给div 的a属性附上b值
        如div.setAttrbute('class','demo'),添加一个class为demo
    div.getAttribute('a'),查看元素属性


## 尺寸

### 获取滚动条滚动距离
    window.pageXOffset/pageYOffset(ie9一下不兼容)

    window.pageXOffset 调用时输出值为像素值，number类型；

    ie9以下：  document.body.scrollLeft/Top
              document.documentElement.scrollLeft/Top
            有且只有一个有用，另一个为零，用两者相加即可

            可封装函数适用所有浏览器
            function getScrollOffset(){
                if(window.pageXOffset){
                    return {
                        x : window.pageXOffset,
                        y : window.pageYOffset,
                    }
                }
                else{
                    return {
                        x : document.body.scrollLeft + document.documentElement.scrollLeft,
                        y : document.bodu.scrollLeft + document.documentElemnet.scrollTop,
                    }
                }
            }

### 视口尺寸
    window.innerWidth/ window.innerWidth ;受窗口缩放影响  //IE9一下不兼容
    <!DOCTYPE html> ;// 有此声明为标准模式，不写为怪异模式，可向后兼容，浏览器会按照之前的语法渲染

    IE9以下  document.documentElement.clientHeight/clientHeight; 适用标准模式
             document.body.clientHeight/clientWidth;  适用怪异模式

            //查看文档兼容模式document.compatMode   compat:兼容；
            若返回值为CSS1Compat，则为标准模式，BackCompat为怪异模式

### 元素尺寸
    domEle.getBoundingClientRect()
    返回值为对象。包含元素的信息 四个方向是边的位置
    但IE9以下 里面没有width和height
    返回结果为静态，不会实时改变

    div.offsetWidth/Height 也可以，返回值不包含margin
    div.offsetLeft ;// 若元素嵌套，则距离为相对有定位的父元素；

    dom.offsetParent // 返回最近的有定位的父级

### 让滚动条滚动

    window.scroll(x,y)  //让滚动条滚动一个距离，重复执行不变，指相对现在位置滚动一个距离 === window.scrollTo();

    window.scrollBy(x,y) //每次点击滚动一个距离；

# 继承树

    document代表文档，Document可以理解为构造函数，但不能new
    document的构造函数是HTMLDocument；HTMLDocument.prototype里面含有__proto__;这个__proto__指向Document.prototype;


    Node为最原始的值，为构造函数，继续往上追溯，是到Object.prototype

    getElementById方法定义在了Document.prototype上，
    getElementByName方法定义在了HTMLDocument.prototype上，XML使用不了
    getElenetByTagName方法 定义在了Document.prototype和Element.prototype上，即可以使用div.getElementByTagName(),里面可以写*选中所有标签
    document.head和document.body已经定义好了可以直接使用；

    document.documentElement == html;

    getElemntByClassName,querySlectorAll,querySelector在Document.prototype,Element.prototype上均有定义；

# Date(日期对象)
    系统提供好的，可通过new Data（）构造
      
## 方法 
    所以返回值都是返回对象出生时刻的时间
    var date  =  new Date();
    data.Data();

    Date()  //直接执行返回日期
    getDate()  //从Data对象中返回一个月中的某一天
    getDay（）  //从Data对象中返回一周中的第几天；0是第一天；
    getMonth()  // 从Data对象中返回月数，从0开始
    getFullYear()  //从Data对象中返回四位数年份；
    getHours() 
    getMinutes()
    getSeconds()
    getMilliseconds()  //返回毫秒
    getTime()  //返回1970.01.01 至今的毫秒数，  //计算机的纪元时间1970，01，01，，计算机是通过此方法计算时间的
                主要用来求时间差
    
    setDate() 选择一个时间，具体天数
    年月日时分秒毫秒同样

    setTime()  //计算机之间传递时间用，设置时间代表从纪元年开始，以毫秒计时之后的时间；
    toString()  //转换为字符串

## 定时器
    setInterval(function(){},time)每隔timems执行一次程序，time只读取一次，之后再改变无法改变函数执行间隔；
    时间方面非常不准；是window上面的方法，会有返回值，一个数字，作为唯一标识

    clearInterval（定时器的唯一标识） 可终止定时器；

    setTimeout(function(){},1000) 1000ms后执行程序，只执行一次；
    有返回值，也可用cleatTimeout清除；

    内部函数this指向window


    其他写法
        setInterval("",1000)  //字符串可以写代码，但一般不用这种写法 


# 脚本化CSS

## 读写CSS属性  //除了此方法，其他都是只读，不可写入
    div.style是一个对象，只能可以读写行间样式表，不包括head部分的样式表
    float这种保留样式的需要在前面添加css;
    复合属性建议拆解；
    属性值为字符串；

    读取时未写入的属性值为空；

## 查询计算样式、   
    window.getComputedStyle(div,null//0 false都行);  获取当前元素显示属性值，结果都是经过计算的最终结果，为绝对值 若写入10em 则返回计算后的像素值；也是对象；
    IE9以下不兼容；

    IE9以下用  div.currentStyle;,返回值为写入值，如10em，则返回10em；为IE独有属性

    window.getComputedStyle(div."after") 可获取伪元素；


    修改伪元素属性

        .yellow::after{

        }
        .green::after{

        }
        通过改变元素class来改变after

## 实际改变
    先写好需要改变的属性，通过改变class来改变，效率更高；易维护；

# 事件

## 绑定事件
    方式一：
    div.onclick = function() {

    }
    为事件绑定处理函数；兼容性很好，但只能绑定一个处理函数，本质还是属性赋值，基本等同于写在行间；
    <div onclick="console.log('a')"></div>

    方式二：
    obj.addEventListener(type,function,false);  //函数可写函数名；
        IE9以下不兼容，可以绑定多个事件，按照绑定顺序执行，同一个函数只能绑定一次；

        div.addEventListener('click',处理函数function() {},false)；

    方式三：
        div.attachEvent('on+type',function)  //和方式二一样，但同一个函数可以绑定多次；IE独占


    前两种程序this指向dom本身；
    方式三的this指向window；若需要指向this，则可以
        div.attchEvent('onclick',function(){

            handle.call(div);
        })
        function handle() {
            this```;
        }

## 解除绑定
    方式一：
    div.onclick = null;
    需要一次生效可在函数最后添加，this.onclick = null;

    方式二；
    div.removeEventListener(type,function//此处写函数名,false); 无法清除匿名函数

    方式三：
    ele.detachEvent('on' + type,fn);; 无法解除匿名函数的绑定

## 事件处理模型

### 事件冒泡
    定义：结构上（非视觉上）嵌套关系的元素，会存在事假冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）
        视觉上顺序排列的元素，若结构上嵌套，同样存在这种情况；

### 事件捕获
    IE没有此功能，
    一个对象的一个处理函数只能遵循一个事件模型，即要么冒泡，要么捕获；
    实现方式：
    div.addEventListener('type',function,true);
    与冒泡顺序相反；


    div.setCapture();  //仅IE可用，会将所有事件捕获到自身；
    div.releaseCapture(); //移除；


### 触发顺序
    先执行捕获，再执行冒泡，事件本身触发为正常执行，不属于捕获和冒泡；

    focus，blur,change,submit,reset,select 等事件不存在冒泡；

### 阻止事件冒泡；
    方式一：W3C标准
        div.onclick = function(e){
            {} //需要写一个形参e，系统会自动生成一个对象；记载事件发生时的一些关键信息
            e.stopPropagation(); //可清除冒泡；
        }

    方式二：IE可用
        e.cancelBubble = true; //也是写在函数中；

### 阻止默认事件
    //右键出菜单默认事件：document.oncontextmenu = function() {};

    方式一：return false，以对象属性的方式注册的事件才生效；

    方式二： e.preventDefault(); //ie9以下不兼容

    方式三： event.returnValue = false; 兼容IE；

    <a href="javascript:void() //这样写可清除a的默认事件，此处也可写其他JS代码"></a>

## 事件对象
    div.onclick = function (e) {
        console.log(e);  //除IE外都好用，IE对象存在window中，window.event;

        var event = e || window.event;//  兼容性写法；
    }

    在事件冒泡或捕获中存在事件源,即出发事件的元素 ；event.srcElement可查看；
        event.target // 火狐只有这个
        event.srcElement // IE只有这个
        Chrome都有；

        var target = event.srcElement || event.target; //兼容性用法
### 事件委托
    利用事件冒泡和事件源对象进行处理
    优点： 1，性能好 ，不需要循环所有元素一个个的绑定事件
          2，灵活 ，添加新的子元素是不需重新绑定
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        var ul = document.getElementByTagName('ul');
        ul.onclick = function(e) {
            var event = e || window.event;
            var target = event.srcElement || event.target;
            console.log(target.innerText);
        }
## 鼠标事件
    click = mousedown + mouseup;
    按顺序触发顺序
    contextmenu: 右键菜单事件
    onmouseover/mouseenter: 鼠标移入事件
    onmouseout/mouseleave: 鼠标离开事件

    监听鼠标左右键; e.button 0为左键，2为右键， 1为中键
    click只能监听左键，只能通过mousedown和mouseup来判断鼠标键；// DOM3规定；

    移动端为touchstar，touchmove，touchend

## 键盘事件
    onkeypress 和 onkeydown + onkeyup无关;
    顺序是down，press，up，   press可以持续响应
    press和down的区别
        down没有Charcode，press有，为ASCII码；
        down可以响应任意按键，除了Fn 但无法区分大小写
        press只能监听有ASCII字符的按键 可区分大小写

        string.fromChatCode(e.charCode);可将ASCII码转化为字符串输出

## 文本类操作事件
    oninput //只有文本有变化就会触发事件；

    onchanged //鼠标聚焦和失去焦点发生变化会触发，

    onfocus  //鼠标聚焦
    onblur  // 失去焦点

## 窗体类事件
    scroll 滚动条滚动触发；window上的事件
    load window.onload = function() {
        var div = document,getElementsByTagName('div') //可以选中script标签后面的代码；但效率低，需等到页面加载完成才开始渲染；                 
    }
# json
    简单来说就是对象；
    最初是为了前后端的数据传输；以xml传输，类似对象（可以自定义标签）
    现在传输就是对象，及json，对象属性名必须加双引号
    {
        "name" : "p",
        "age"  : "24" 
    }
    实际传输到后端是'{"name":"p","age":"24"}'  字符串格式
    前端拿到后端的数据可以转化为自己可用的数据
        JSON.parse(); ---> string  to json
        JSON.stringfy();-> json  to  string

        JSON 属于静态类，类似MATH

## 浏览器渲染页面
    首先检索HMTL代码，绘制DOMTree；节点解析，不管数据是否加载
    深度优先原则，一条支线绘制完毕再返回到下一个节点，

    生成domtree后再生成CSSTree，原则也是深度优先

    之后DOMTree和CSSTree合并为randerTree；  //rander（渲染）

    若在randerTree构建之后重新生成节点，则会重新解析；称为reflow，重排；所以应尽量避免节点的修改
    dom节点的删除，添加，宽高变化，位置变化
    offsetWidth offsetleft也会触发reflow，系统需要保证查看的数据是实时的，所以也会触发reflow
    都会触发reflow；
    编程要尽量避免reflow

    repaint 重绘 可接受，浪费效率较少

## 异步加载JS
    正常情况JS的加载为同步加载，JS的加载会阻断html和CSS的加载；
    但有些加载工具没必要阻塞文档，有些工具按需加载；

    异步加载JS的三种方法

### defer
    <script defer="defer"><script>
    在标签里添加defer = “defer”
    仅IE9可用；IE9以下也可以用，可以写在script标签里

    需等页面解析完才会执行，即domTree生成完毕时执行
### aysnc
    <script async="async"><script>
    W3C标准方法
    加载完就执行，async只能加载外部脚本，不能把JS加在script标签里

    async : asychronous//异步；

### 创建script，插入到dom中

    <sctipt>
        var script = document.createElement('script');
        script.type = "javascript";
        script.src = 'tools.js';
        document.head.appenChild(script);
    </sctipt>
    但存在问题，若立即执行tool.js里面的程序，则执行不了，因为程序执行时tool.js还未下载完毕；

    可通过load判断是否下载完毕
    script.onload = function() {
        test();  //tool.js里面的函数；且兼容性比较好，仅IE的script上没有load事件
    }

    IE的方法
    script.readyState = "loading";  //里面的值会根据加载状态动态更改，加载完时为loaded或content
    script.onreadystatechange = function () {
        //监听加载状态改变的事件
        可用if判断状态；
    }

## JS加载时间线
    1，创建Document对象，开始解析web界面，解析HTML，此阶段document.readyState = 'loading';

    2，遇到link外部css，创建线程加载，并继续解析文档，

    3，遇到script外部js，并且没有设置async，defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，继续解析该文本

    4，遇到script外部js，并且设置async，defer，浏览器创建线程加载，并继续解析文档；
        对于async属性的脚本，脚本加载完成后立即执行；（异步禁止使用document.write()）;//document.write() 会清空原文档流，包括删除script

    5，遇到img等，先正常生成dom结构，然后浏览器异步加载src，并继续解析文档

    6，当文档解析完毕, document.readyState = 'interactive';

    7, 文档解析完成后，所有设置有defer的脚本会按照顺序执行；（注意与async的区别，但同样禁止使用documen.write）

    8，document对象会触发DOMContentLoaded事件//仅绑定addEventListener可用；程序从同步脚本执行阶段转化为事件驱动阶段；

    9. 当所有的async的脚本加载完成并执行之后，img等加载完成后，document.readyState = 'complete'; windowx对象触发load事件；

    10，从此，以异步响应的方式处理用户输入，网络事件等；-


尽量用addEventListener('DOMContentLoaded',function() {},false);而不是window.onload

# 正则表达式

## 转义字符
    在双引号中间输入一个双引号；需添加转义字符\;  //\会强制将后面的字符变为文本 eg："asnfs\"sfa" ;可输出",\\可输出\
    \n为换行
    \r为行结束
    \t为table 缩进

## RegExp  正则表达式
    作用：匹配特殊字符或有特使搭配原则的字符的最佳选择
    属于规则对象

### 创建方式
    方式1：直接量
    本质类似Date（）
    var reg = /在斜线中书写内容/;  //若写/abc/代表匹配的规则名为abc，
    在//后面可以添加属性
    //i: ignoreCase： 忽视大小写；

    //g: 执行全局匹配,找到所有匹配

        var reg = /ab/;
        var str = "abababab";
        str.match(reg);
        执行结果为"ab";
        若此处var reg = /ab/g
        则console.log(str) = ['ab','ab','ab','ab']


    //m: 执行多行匹配
        /^a/g; ^表示必须以a开头；b$表示以b结尾
        此时若str = 'avnsj/naj'
             reg = /^a/g;
             str.match(reg)输出结果依然为[a],因为此时没有多行匹配；
             reg = /^a/gm 时才会输出两个a





    三种属性可一起书写；随意组合

    var str = 'abcd';
    reg.test(str); //测试str是否含有规则片段，顺序大小写必须相同；

    方式2：new RegExp();
    RegExp('abc'，'i')  ;第一个参数写规则，第二个参数写属性
    第一个参数还可以写其他正则表达式；加new为不同的，不加就是相同的

### 语法
    reg.test()判断是否含有片段
    str.match()查找相同的片段并返回


    /[][][]/[]叫表达式，若书写[1234567890]则表示范围为数字1234567890都算作符合规则，写0-9，A-z也可以，也可以写[0-9A-z]表示所有数字加字母
    [^abc]: 表示不是abc 取反
    （a|b）:表达式里面|代表或；这里是用()而不是[]

### 元字符
表达式里面可以写元字符
    /\w/: ===  [0-9A-z_]
    /\W/: ^w
    /\d/: 0-9
    /\D/: ^d
    /\s/: 空白字符，包括\n,\r,\t,\v,\f加空格  \r:回车符。\v: 垂直制表符，\f: 换页符，正则表达式可直接写空格
    /\S/: ^s
    /\b/: 单词边界  /\bc/表示c前面必须是单词边界
    /\B/: ^b
    /\t/: 输入的制表符无法识别，必须是\t;\n类似
    /\uxxxx/: 查找以十六进制数xxxx规定的Unicode编码
    /./ : == ^\r\n

### 量词

    n+：  n可以出现次数（1.正无穷）
    n*：  n可以出现次数（0.正无穷）
    n？： n可以出现次数（0.1）
    n{x}: n可以出现次数x,可写为1-4；x， 为x到正无穷

### 对象方法
####    test： 检查是否含有字符串

####    exec： 匹配方法

        var src = 'abababab';
        var reg = /ab/g;
        console.log(reg.lastIndex) 游标位置，可修改
        console.log(reg.exec(str)) 可以由lastIndex控制
        返回值为类数组
        index代表在哪里匹配，匹配的具体位置
        若包含g属性，输出也是一次，一直输出会循环
        不包含就只有一次输出，不会循环

    /(a)\1/  ()括号会记住匹配的内容 \1为子表达式，即匹配第一个子表达式里面匹配的内容；
            /\w\1\1\1/,表示匹配四个一样的内容，aaaa类型的
            /\w\1\w\2/,aabb型
            此时，exec会包含子表达式的内容

            console.log(str.matcn(reg);)若匹配方法不包含g，则输出["aabb"]

    
####    str.search(reg) 会返回匹配到的位置，没有匹配到会返回-1

####    str.splir(reg): 按规则拆分字符串

####    var str = "abcdedfa"
        srt.replace("a","b");   //  无法访问全局；只能改变一个a，只能通过正则表达式改变

        var reg = /\w\1\w\2/;
        var str = "aabb";
        console.log(str.replace(reg."$2$2$1$1"))      //$1表示第一个子表达式,y
        //console.log(str.replace(reg,function($,$1,$2) {
            $代表正则表达式匹配的结果；
            全局时，每次查找触发一次function
        }))


        str.toUpperCase()  //变为大写
        str.toLowerCase()  //变为小写

        将the-first-name变为theFirstName
        var reg = /-(\w)/    将\w变为子表达式

####    正向预查 ，正向断言
        var str = 'aabaa'
        var reg = /a(?b)/g        ;此处b只是条件后面是b的a，b只是条件，不参与输出
        ？^b为不包含

####    贪婪匹配
        默认为贪婪匹配 可加？取消
        var reg = /a+?/g;

    
