<!--
 * @Author: your name
 * @Date: 2021-06-04 20:55:32
 * @LastEditTime: 2021-06-07 23:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\imageLoader.vue
-->
<!--
加载完成抛出事件，删除原图，利用状态数据    

-->
<template>
<div class="imageLoader-container">
    <img class="init" :src="initSrc" alt="">
    <img @load="imageOnLoad" :class="{fade : timing}" class="origin" :src="originSrc" alt="">
</div>
  
</template>

<script>



export default {
    data() {
        return {
            timing : 0,
        }
    },
    props : {
        initSrc : {
            type : String,
            required : true
        },
        originSrc : {
            type : String,
            required : true
        },
        duration : {
            type : Number,
            default : 1000
        }
    },
    methods : {
        imageOnLoad() {
            console.log(1);
            setTimeout(() => {
                    console.log(2);
                    this.timing = 1;
            }, this.duration);
        }
    }
}
</script>=o=o


<style lang="less" scoped>
    .imageLoader-container{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            object-fit: cover;
            &.fade{
                transition: all 1s 1s;
                opacity: 0;
            }
        }
    }
</style>