<!--
 * @Author: your name
 * @Date: 2021-06-02 14:09:08
 * @LastEditTime: 2021-06-07 22:49:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\App.vue
-->

<template>
  <div>
    <ImageLoader :initSrc="initSrc" :originSrc="originSrc" />
  </div>
</template>

<script>
import ImageLoader from "./index";
import initImage from "@/img/kupa.png";
import originImage from "@/img/solar.jpg";

export default {
  components: {
    ImageLoader
  },
  data() {
    return {
      initSrc : initImage,
      originSrc : originImage,
    };
  }
};
</script>

<style lang="less" scoped>
@import url("~@/style/global.less");
.imageLoader-container{
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>