<!--
 * @Author: your name
 * @Date: 2021-06-02 14:09:08
 * @LastEditTime: 2021-06-03 13:35:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Avatar.vue
-->
<template>
  <div>
      <img class="avatar-img" :src="url" :style="{
          width : size + 'px',
          height : size + 'px'
      }">
  </div>
</template>

<script>
export default {
    props : {
        url : {
            type : String,
            required : true,
        },
        size : {
            type : Number,
            required : true,
        }
    }

}
</script>

<style lang="less" scoped>

.avatar{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

</style>