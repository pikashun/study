<!--
 * @Author: your name
 * @Date: 2021-06-02 14:09:08
 * @LastEditTime: 2021-06-07 17:01:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\App.vue
-->

<template>
  <div>
    <Avatar :size="size" :url="url" />
    <Icon :type="type" :fontSize="fontSize" />

    <Page
      @changePage="changeToNewPage"
      :total="total"
      :numberOfPage="numberOfPage"
      :currentPage="currentPage"
    />
    <ImageLoader :initSrc="initSrc" :originSrc="originSrc" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
import Page from "./components/Page";
import ImageLoader from "./components/ImageLoader";
import initImage from "./img/kupa.png";
import originImage from "./img/solar.jpg";

export default {
  components: {
    Avatar,
    Icon,
    Page,
    ImageLoader
  },
  data() {
    return {
      initSrc : initImage,
      originSrc : originImage,
      fontSize: 5,
      type: "home",
      size: 50,
      url:
        "data:image/jpeg;base64,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",
      total: 153,
      numberOfPage: 10,
      currentPage: 3,
    };
  },
  methods: {
    changeToNewPage(newPage) {
      this.currentPage = newPage
      console.log(this.currentPage)
    },
  },
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