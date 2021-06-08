<!--
 * @Author: your name
 * @Date: 2021-04-18 09:11:56
 * @LastEditTime: 2021-04-18 10:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\test\pws-site\src\components\Avatar.vue
-->
<template>
  <img class="avatar-img" :src="url" :style="{
      width : size + 'px',
      height : size + 'px'
  }" />
</template>

<script>
export default {
    props : {
        url : {
            type : String,
            required : true
        },
        size : {
            type : Number
        }
    }
}
</script>

<style scoped>
    .avatar-img{
        border-radius: 50%;
        object-fit: cover;
    }
</style>
