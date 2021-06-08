<!--
 * @Author: your name
 * @Date: 2021-06-07 13:34:25
 * @LastEditTime: 2021-06-07 21:08:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Page\index.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-06-04 09:02:03
 * @LastEditTime: 2021-06-07 00:09:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\page.vue
-->
<template>
  <div class="page-container">
    <div v-if="pageNumber!==1" class="container">
      <span>
        <a
          @click="$emit('changePage', 1)"
          :class="{
            selected: currentPage == 1,
          }"
          href="#"
          >|&lt;&lt;
        </a>
      </span>
      <span>
        <a
          @click="
            $emit('changePage', currentPage - 1 > 0 ? currentPage - 1 : 1)
          "
          :class="{
            selected: currentPage == 1,
          }"
          href="#"
          >&lt;&lt;
        </a>
      </span>
      <ul>
        <li
          @click="$emit('changePage', item)"
          v-for="(item, i) in pageArr"
          :key="i"
        >
          <a
            :class="{
              selected: item == currentPage,
            }"
            href="#"
            >{{ item }}</a
          >
        </li>
      </ul>
      <span>
        <a
          @click="
            $emit(
              'changePage',
              currentPage + 1 > maxPage ? maxPage : currentPage + 1
            )
          "
          :class="{
            selected: Boolean(currentPage == maxPage),
          }"
          href="#"
          >&gt;&gt;
        </a>
      </span>
      <span>
        <a
          @click="$emit('changePage', pageNumber)"
          :class="{
            selected: Boolean(currentPage == maxPage),
          }"
          href="#"
          >&gt;&gt;|
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    numberOfPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.numberOfPage);
    },
    minPage() {
      let minPage = this.currentPage - 4;
      if (minPage <= 1) {
        minPage = 1;
      }
      return minPage;
    },
    maxPage() {
      let maxPage = this.currentPage + 5;
      if (maxPage >= this.pageNumber) {
        maxPage = this.pageNumber;
      }

      return maxPage;
    },
    pageArr() {
      const arr = [];
      for (let i = this.minPage; i <= this.maxPage; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import "~@/style/var.less";
.page-container {
  text-align: center;
  .container {
    display: inline;
  }
  ul {
    display: inline-flex;
    justify-content: space-between;
    padding: 0 5px;

    li {
      padding: 0 5px;
      list-style: none;
    }
  }
  a {
    text-decoration: none;
    padding: 0 5px;
    &.selected {
      cursor: not-allowed;
      color: gray;
    }
  }
}
</style>