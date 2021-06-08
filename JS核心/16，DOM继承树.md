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