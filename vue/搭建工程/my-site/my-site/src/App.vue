<!--
 * @Author: your name
 * @Date: 2021-04-17 15:41:03
 * @LastEditTime: 2021-04-19 15:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\App.vue
-->
<template>
  <div id="app">
    <h1>APP组件</h1>
    <Pager @pageChange="handlePageChange($event)" :total="153" :current="current" /><!-- $event为抛出的参数 -->
    
  </div>
</template>
<script>
import Pager from './components/Pager'

export default {
  name : "pws",//若组件没有在注册时使用名字，则使用该名字
  components : {
    Pager,
  },
  data() {
    return {
      current : 1
    }
  },
  methods : {
    handlePageChange(newpage) {
      this.current = newpage;
    }

  }
}
</script>

<style scoped>


</style>