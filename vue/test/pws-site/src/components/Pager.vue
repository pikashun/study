<!--
 * @Author: your name
 * @Date: 2021-04-19 22:15:17
 * @LastEditTime: 2021-04-20 14:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\test\pws-site\src\components\Pager.vue
-->
<template>
  <div v-if="pageNumber !== 1" class="pager-container">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }" href="#"
      >|&lt;&lt;</a
    >
    <a
      @click="handleClick(current - 1)"
      :class="{ disabled: current === 1 }"
      href="#"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in nums"
      :key="i"
      @click="handleClick(n)"
      href="#"
      :class="{ active: current === n }"
    >
      {{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      href="#"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      href="#"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 10,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    min() {
      let min;
      min = this.current - Math.floor(this.visibleNumber / 2);
      if (min <= 0) {
        min = 1;
      } else if (
        min > this.pageNumber - this.visibleNumber &&
        this.pageNumber >= this.visibleNumber
      ) {
        min = this.pageNumber - this.visibleNumber;
      }
      return min;
    },
    max() {
      let max;
      max = this.current + Math.floor(this.visibleNumber / 2) - 1;
      if (max >= this.pageNumber) {
        max = this.pageNumber;
      } else if (max < this.visibleNumber) {
        max = this.visibleNumber;
      }
      return max;
    },
    nums() {
      let nums = [];
      if (this.pageNumber <= this.visibleNumber) {
        for (let i = 1; i <= this.pageNumber; i++) {
          nums.push(i);
        }
      } else {
        let i;
        if(this.pageNumber === this.current){
          i = this.pageNumber - this.visibleNumber + 1
        }else{
          i = this.min;
        }
        for (i; i <= this.max; i++) {
          nums.push(i);
        }
      }

      return nums;
    },
  },
  methods: {
    handleClick(newpage) {
      this.$emit("pageChange", newpage);
    },
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>