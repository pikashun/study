<!--
 * @Author: your name
 * @Date: 2021-06-07 23:21:45
 * @LastEditTime: 2021-06-08 22:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \site\前端学习\笔记\vue\搭建工程\说明.md\MySite\my-site\src\components\Contact\index.vue
-->
<template>
  <div class="contact-container">
    <ul>
      <li class="contact git">
        <a href="https://github.com/pikashun?tab=repositories">
          <Icon type="git" :fontSize="fontSize" />
          <span>pikashun</span>
        </a>
      </li>
      <li class="contact email">
        <a href="mailto:952704496@qq.com">
          <Icon type="email" :fontSize="fontSize" />
          <span>952704496@qq.com</span>
        </a>
      </li>
      <li class="contact weixin">
        <a href="#">
          <Icon type="weixin" :fontSize="fontSize" />
          <span>pws605217776</span>
        </a>
        <div class="code">
          <img :src="WeixinCode" alt="" />
        </div>
      </li>
      <li class="contact qq">
        <a href="tencent://message/?Menu=yes&uin=952704496&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
          <Icon type="qq" :fontSize="fontSize" />
          <span>952704496</span>
        </a>
        <div class="code">
          <img :src="QQCode" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import QQCode from "@/img/personImformation/qq.jpg";
import WeixinCode from "@/img/personImformation/weixin.jpg";
export default {
  data() {
    return {
      QQCode,
      WeixinCode,
      QQCodeHeight: 0,
      WeixinCodeHeight: 0,
      fontSize: 24,
    };
  },
  components: {
    Icon,
  },
  methods: {
    changeHeight(e) {
      if (e) {
        this.WeixinCodeHeight = "100%";
      } else {
        this.QQCodeHeight = "100%";
      }
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
@import url("~@/style/global.less");
@liHeight: 30px;
ul {
  padding: 0;

  li {
    position: relative;
    width: 100%;
    height: @liHeight;
    padding: 10px 15px;
    color: gray;
    font-size: 14px;
    list-style: none;
    .icon-container {
      margin: 0 5px;
    }
    &:hover .code {
      transform: scale(1);
    }
    a {
      display: flex;
      align-items: center;
    }
    .code {
      transform: scale(0);
      transform-origin: bottom;
      transition: all 0.5s;
      position: absolute;
      bottom: @liHeight + 12px;
      left: 15px;
      padding: 10px;
      background: 5px;
      border-radius: 5px;
      background: #fff;
      img {
        width: 150px;
        height: 150px;
      }
      &::after {
        width: 8px;
        height: 8px;
        content: "";
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        background: #fff;
      }
    }
  }
}
</style>