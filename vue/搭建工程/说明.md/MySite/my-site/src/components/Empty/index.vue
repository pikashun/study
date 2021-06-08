<!--
 * @Author: your name
 * @Date: 2021-06-07 21:39:19
 * @LastEditTime: 2021-06-07 22:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Empty\index.vue
-->
<template>
  <div class="empty-container">
      <Icon :type="type" :fontSize="fontSize" />
      <p :style="{fontSize : fontSize + 'px'}">{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    data() {
        return {
            type : "empty",
        }
    },
    props : {
        text : {
            type : String,
            default : "无数据"
        },
        fontSize : {
            type : Number,
            default : 12,
        }
    },
    components : {
        Icon,
    }
}
</script>

<style lang="less" scoped>

@import url("~@/style/var.less");
.empty-container{
    .positionCenter();
    text-align: center;
    .icon-container{
        display: inline-block;
    }
    p{
        text-align: center;
        margin: 0;
    }
}

</style>