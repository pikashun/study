<!--
 * @Author: your name
 * @Date: 2021-04-18 09:00:48
 * @LastEditTime: 2021-04-19 23:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\test\pws-site\src\App.vue
-->
<template>
  <div id="app">
    <h1>PWS-SITE</h1>
    <Avatar url="https://img0.baidu.com/it/u=2395976427,3130729378&fm=26&fmt=auto&gp=0.jpg" :size="200" />
    <Icon type="home" />
    <Pager :current="current" :total="153" @pageChange="handlePageChanged" />
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import Icon from './components/Icon.vue'
import Pager from './components/Pager.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Icon,
    Pager
    
  },
  data() {
    return {
      current : 1
    }
  },
  methods : {
    handlePageChanged(newpage) {
      this.current = newpage;
    }

  }
}
</script>
<style scoped>
.iconfont{
  font-size: 30px;
}

</style>


