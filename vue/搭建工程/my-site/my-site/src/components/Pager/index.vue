<!--
 * @Author: your name
 * @Date: 2021-04-19 00:27:23
 * @LastEditTime: 2021-04-19 15:04:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\my-site\my-site\src\components\pager.vue
-->

<!-- 在style中使用~@表示srcmul，在script中使用@表示src目录 -->
<template>
  <div class="pager-container " v-if="pageNumber > 1">
      <a @click="handleClick(1)" :class="{disabled : current === 1}" href="#">|&lt;&lt;</a>
      <a @click="handleClick(current - 1)" :class="{disabled : current === 1}" href="#">&lt;&lt;</a>
      <a @click="handleClick(n)" v-for="(n,i) in number" 
        :key="i" 
        :class="{active : current === n}" 
        href="#">
        {{n}}
        </a><!-- 始终先运行v-for 所以后面的代码可以用n-->
      <a @click="handleClick(current + 1)" :class="{disabled : current === this.pageNumber}" href="#">&gt;&gt;</a>
      <a @click="handleClick(pageNumber)" :class="{disabled : current === this.pageNumber}" href="#">&gt;&gt;|</a>
      
  </div>
</template>
<style lang="less" scoped>
    @import "~@/styles/var.less";
    .pager-container{
        display: flex;
        justify-content: center;
        margin: 20px 0;
        a{
            color: @primary;
            margin: 0 6px;
            &.disabled{
                color: @lightWords;
                cursor: not-allowed;
            }
            &.active{
                color: @words;
                font-weight: bold;
                cursor: text;
            }
        }
    }

</style>

<script>
export default {
    props : {
        current : {
            type : Number,
            default : 1
        },
        total : {
            type : Number,
            default : 0
        },
        limit : {
            type : Number,
            default : 10
        },
        visibleNumber : {
            type : Number,
            default : 10
        }
    },
    computed : {
        pageNumber() {
            return Math.ceil(this.total/this.limit);
        },
        number() {
            let nums = [];
            for(let i = this.visibleMin;i <= this.visibleMax;i++){
                nums.push(i);
            }
            return nums;
        },
        //得到最小页码
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber/2);
            if(min <= 0){
                min = 1;
            }
            return min;
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1;
            if(max > this.pageNumber){
                max = this.pageNumber;
            }
            return max;

        }
    },
    methods :{
        handleClick(newpage) {
            console.log(newpage);
            this.$emit('pageChange',newpage);

            
        }
    }
}
</script>


