/*
 * @Author: your name
 * @Date: 2021-04-18 09:00:48
 * @LastEditTime: 2021-04-19 22:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\test\pws-site\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
