<!--
 * @Author: your name
 * @Date: 2021-04-22 01:06:27
 * @LastEditTime: 2021-04-22 02:41:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\ImageLoader\index.vue
-->
<template>
  <div class="image-loader-container">
          <img :src="placeholder" alt="" class="placeholder">
          <img :src="origin" alt="" class="origin">
  </div>
</template>

<script>
export const urls = {
    mario : '/image/kupa.png',
    kupa : '/image/superMario.jpg'
}

export default {
    props : {
        placeholder : {
            type : String,
            required : true
        },
        origin : {
            type : String,
            required : true

        }
    }
    

}
</script>
<style lang="less" scoped>
    .image-loader-container{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: 0;
            top: 0;
            .origin{
                opacity: 0;
                transition-duration: 1s;
            }
        }
    }
</style>
