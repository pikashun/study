<!--
 * @Author: your name
 * @Date: 2021-06-07 21:39:24
 * @LastEditTime: 2021-06-07 22:20:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Empty\test.vue
-->
<template>
<div class="container">
    <Empty :text="text" :fontSize="fontSize" />
</div>
  
</template>

<script>
import Empty from "./index"
export default {
    components : {
        Empty,
    },
    data() {
        return {
            text : "no data",
            fontSize : 12
        }
    }

}
</script>


<style lang="less" scoped>
    .container{
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid;
    }
</style>