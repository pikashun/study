<!--
 * @Author: your name
 * @Date: 2021-06-07 23:21:50
 * @LastEditTime: 2021-06-08 14:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Contact\test.vue
-->
<template>
  <div class="container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index";
export default {
    components : {
        Contact,
    }
};
</script>
<style scoped lang="less">

@import url("~@/style/var.less");
@import url("~@/style/global.less");

    .container{
        width: 400px;
        height: 600px;
        background: @dark;
        .positionCenter();
        padding: 200px 0 0 0;
        box-sizing: border-box;
    }

</style>