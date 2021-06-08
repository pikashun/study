<!--
 * @Author: your name
 * @Date: 2021-04-22 01:06:37
 * @LastEditTime: 2021-04-22 02:40:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\ImageLoader\test.vue
-->
<template>
<div class="app">
    <ImageLoader 
    :origin="urls.mario"
    :placeholder="urls.kupa" />

</div>
  
</template>

<script>
import {urls} from "./index"
import ImageLoader from "./index"
export default {
    data() {
        return {urls}
    },
    components : {
        ImageLoader,
    },
}
</script>

<style lang="less" scoped>
    .app{
        width: 600px;
        height: 400px;
        border: 1px solid ;
        margin: 0 auto;
    }
</style>