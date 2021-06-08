<!--
 * @Author: pws
 * @Date: 2021-04-19 00:11:08
 * @LastEditTime: 2021-04-19 00:16:54
 * @LastEditors: Please set LastEditors
 * @Description: iconfont
 * @FilePath: \site\前端学习\笔记\vue\test\pws-site\src\components\Icon.vue
-->
<template>
  <i class="iconfont" :class="fontClass"></i>
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
            type :String,
            required : true
        }
    },
    computed : {
        fontClass() {
            return classMap[this.type]
        }
    }

}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_2495319_iuwx33u7t0j.css");

</style>