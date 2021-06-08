# DOM 操作

## class
    addClass ： 添加class
    removeClass ： 移除class，不写具体class为移除全部
    hasClass ： 检查是否有该标签
    toggleClass ： 切换标签

## DOM插入

    //内部插入
    $('div').append('<h2></h2>') ：插入新标签；
    $('div').append('$('p')') : 剪切插入已有标签；
    $('p').appendTo('div') : p插入div；插入在后面；
    $('p').prependTo('div') : p插入div；插入在后面；

    //外部插入
    $('div').after('div') : 在div后面添加div；
    $('div').insertAfter('div') : 紧跟div后面添加div；
    $('div').before('div') : 在div前面添加div；
    $('div').insertBefore('div') : 紧跟div前面添加div；

    //插入元素；html与text方法，可读写
    $('div').html();//读取div内部html内容
    $('div').html('htmlhtml');//修改内容
    htmlText类似，不过htmlText是纯文本，如果内容带有标签也会当字符串输出；

    //包裹元素
    $('dvi span').wrap('<li>');//在每个span标签外面添加li标签；
    $('li').wrapAll('<ul>');//在所有li标签外面添加ul标签；
    $('div span').wrapInner('strong');//在每个span标签里面添加strong标签；
    $('li').unwrap();//移除父级元素；

    //删除元素；
    $('div').remove();//删除自己
    $('div').remove('span');//删除子元素span；
    $('div').detach();//删除自己，
                //返回值为所删除的对象；remove会彻底清空，detach会保留之前绑定的事件方法
    $('div').empty();//清空自己所有子元素；

    //克隆与替换
    $('div').clone(true).appendTO('body');//克隆并添加，clone的参数为true时为深度克隆，包括事件，否则就是仅克隆标签；
    $('div span').replaceAll('p');主动替换，将p替换为span；类似append，也可以用已有元素替换，等同于剪切；j
    $('div span').replaceWith('p');将span替换为p；

    //通用属性操作；
    $('img').attr('src');//返回img的src属性 //只获取第一个
    $('img').attr('src','123445');//添加或者修改  // 修改全部；
            //也可以传对象，同时设置多个属性：$('img').attr({
                                                    class : pws,
                                                    alt : xptx,
                                                })
    $('img').prop('src');//返回绝对地址  ,无法取得通过标签添加的自定义属性；
            //也可传对象，但同样，自定义属性不会添加到标签身上，只会添加到dom对象上
    $('img').removeAttr('pws');//移除属性；
    $('img').removeProp('pws');//移除dom对象上的属性，而不是标签上的属性；
    $('input').val();//输出input的value。可用val('修改value')修改；

    //css属性
    $('.container').css('border');//获取计算后的值；
    $('.container').css({
        width : '200px',
        height : '200px',
    });//设置css属性；
    $('container').css('width','200px').text('插入文字');//也可插入文字；
    $('container').width();//输出计算后的不带单位的值，number类型；也可通过在(300)里面书写去修改，书写number类型
    $('conrainer').offset().left;//相对document左边的距离，计算后的值，number类型；只有left和top值
                修改方式：$('container').offset({
                    top : 0,
                    left : 0,
                })
    $('container').position().left;//相对父级；其他操作类似offset；
    $(ducument).scrollTop();//滚动条位置，scrollLeft类似；也可修改。

## 遍历
    $('div').children();//选中所有子元素；也可在（）内添加其他属性选择器；
    $('div').find('span');//找到所有后代元素的span标签；
    $('div').parent();//选中div的父级元素，
    $('div').parents();//选中div的祖先元素，可在()中添加其他条件，如.parents('div'),选中祖先元素中的div标签；
    $('div').parentsUntil('li');//选中div的祖先元素，到li标签为止；
    $('div').offsetParent();//选中第一个有定位的父级元素；若都没有则选中HTML；
    $('div').closest('li'),//选中包括自身的祖先元素；

    $('div').next();//选中下一个兄弟元素；（）也可添加内容限制范围
    $('div').nextAll();//选中后面所有兄弟元素；也可限制范围 ；
    $('div').nextUntil('li');//向后查找直到li元素；
    //prev和next一样；往前查找；
    $('div').siblings();//选中所有兄弟元素节点；

## 事件
    通过事件函数名称添加。也可链式操作
        $('.button').mouseover(function() {
            $(this).css('color' : 'red');
            console.log('mouseover');
        }).mouseleave(function() {
            console.log('mouseleave');
        });//通过事件函数名称添加。也可链式操作


    通过on添加
        $('button').on('click',{name ; 'pws'},function(event) {
            console.log(event.data.name);//event.data是添加的事件对象；
        } )

    事件委托
        $('button').on('click','h2',{color : 'red'},function(evnet) {
            $(this).css({
                color : event.data.color,//this指向触发事件的元素，即h2
            })
        })
    
    on可添加多个事件
        $('button').on({
            mouseover : function() {
                $(this).css('border','1px solid red');
            }
            mouseleave : function() {
                $(this).css('background','red');
            }
        })

    通过one添加，通过此方法添加的事件仅生效一次
        $('button').one('click',{color : 'yellow'},function(event) {
            $(this).css('background',event.data.color);
        })

    解除事件 : off();
        $('button').click(function() {
            $('button2').off();//不写参数会解除所有事件；
            $('button2').off('mouseover');//解除button2上的mouseover事件；
        })


    手动触发事件，自定义事件只能通过此方式触发；
    trigger和triggerHandler的区别
    1，默认行为不一样；trigger会触发事件的默认行为；triggerHandler不会；
    2，trigger会执行所有选中元素的事件，triggerHandler只会执行第一个元素的事件；
    3, trigger会冒泡 ，triggerHandler不会冒泡；
    4，trigger可以使用链式操作，triggerHandler不能；因为trigger返回的是事件对象，triggerHandler返回的是事件函数的返回值，若想使用链式操作，将事件对象作为返回值即可；
    
        trigger():
            setTimeout(function() {
                $('button').trigger('click');//1秒后触发button的点击事件；
            },1000)

            触发自定义事件
                $('button').on({
                    end : function() {
                        console.log('自定义事件')；
                    }
                })
                setTimeout(function() {
                    $('button').trigger('end');
                },1000)

## 事件对象
    event.pageX;//相对可视区的X坐标，






    

                                              
    


    






