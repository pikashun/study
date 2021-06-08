<!--
 * @Author: your name
 * @Date: 2021-06-07 21:11:30
 * @LastEditTime: 2021-06-07 21:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Icon\test.vue
-->

<template>
  <div class="container">
    <Icon v-for="item in type" :type="item" :key="item" :fontSize="fontSize" />
  </div>
</template>

<script>
import Icon,{type} from "./index";
console.log(type)


export default {
  components: {
    Icon,
  },
  data() {
    return {
        fontSize : 2,
        type : type
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
@import url("~@/style/var.less");
.container{
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: @words;
    .icon-container{
        padding: 0 10px;
    }
}
</style>