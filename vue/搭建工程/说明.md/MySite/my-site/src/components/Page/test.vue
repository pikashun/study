<!--
 * @Author: your name
 * @Date: 2021-06-02 14:09:08
 * @LastEditTime: 2021-06-07 21:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\App.vue
-->

<template>
  <div>
    <Page
      @changePage="changeToNewPage"
      :total="total"
      :numberOfPage="numberOfPage"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import Page from "./index.vue";

export default {
  components: {
    Page,
  },
  data() {
    return {
        total: 3,
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