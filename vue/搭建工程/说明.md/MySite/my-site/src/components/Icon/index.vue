<!--
 * @Author: your name
 * @Date: 2021-06-03 14:13:43
 * @LastEditTime: 2021-06-08 17:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\icon.vue
-->
<template>
  <div
    class="icon-container iconfont"
    :class="className"
    :type="type"
    :style="{
      fontSize: fontSize + 'px',
    }"
  ></div>
</template>

<script>
const classMap = {
  error: "iconcuowu",
  home: "iconzhuye",
  weixin: "iconweixin",
  qq: "iconqq",
  message: "iconliuyan",
  blog: "iconblog",
  code: "iconcode",
  about: "iconaboutus",
  email: "iconEmail-",
  empty: "iconempty",
  close: "iconguanbi",
  warn: "iconiconfontcolor100-copy-copy-copy",
  information: "iconxinxi",
  arrowDown: "icondownArrow-bold",
  arrowUp: "iconupArrow-bold",
  git: "iconhuaban88",
  correct: "iconquerenyuanzhengqueduigoutijiaochenggongwancheng",
};
export const type = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 10,
    },
  },
  computed : {
      className() {
          return classMap[this.type]
      }
  }
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2495319_iuwx33u7t0j.css");
@import url("~@/style/var.less");
.iconfont {
  display: inline-block;
  color: inherit;
}
</style>