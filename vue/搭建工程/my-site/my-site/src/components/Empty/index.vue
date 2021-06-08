<!--
 * @Author: your name
 * @Date: 2021-04-20 14:49:25
 * @LastEditTime: 2021-04-20 15:36:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\Empty\index.html
-->
<template>
  <div class="empty-container">
    <div class="main">
      <Icon :type="'empty'" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "./../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mix.less";
@import "~@/styles/var.less";
.empty-container {
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  color: @gray;
  .main {
    .self-center();
    .icon-container{
        font-size: 50px;
    }
  }
}
</style>