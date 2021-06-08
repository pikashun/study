<!--
 * @Author: your name
 * @Date: 2021-04-20 14:49:40
 * @LastEditTime: 2021-04-20 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\Empty\test.vue
-->
<template>
<div id="app">
    <Empty />
    <p></p>
</div>
  
</template>

<script>
import Empty from "./index" ;
export default {
    components :{
        Empty,
    }
}
</script>

<style lang="less" scoped>


    #app{
        width: 300px;
        height: 300px;
        border: 1px solid #000;
        margin: 0 auto;
    }

</style>
