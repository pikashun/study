<!--
 * @Author: your name
 * @Date: 2021-04-18 23:35:10
 * @LastEditTime: 2021-04-19 00:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\icon.vue
-->
<template>
  <i class='iconfont icon-container' :class="fontClass"></i>
</template>

<script>
const classMap = {
    home : "iconzhuye",
    error : "iconcuowu",
    weixin : "iconweixin",
    qq : "iconqq",
    chat : "iconliuyan",
    blog : "iconblog",
    code : "iconcode",
    about : "iconaboutus",
    mail : "iconEmail-",
    empty : "iconempty",
    colse : "iconguanbi",
    warn : "iconiconfontcolor100-copy-copy-copy",
    info : "iconxinxi",
    arrowDown : "icondownArrow-bold",
    arrowUp : "iconupArrow-bold",
    github : "iconhuaban88",
    success : "iconquerenyuanzhengqueduigoutijiaochenggongwancheng",
}
export default {
    props : {
        type : {
            type : String,
            required : true
        }
    },
    computed : {
        fontClass() {
            return classMap[this.type];
        }
    }

}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_2495319_iuwx33u7t0j.css");

</style>
