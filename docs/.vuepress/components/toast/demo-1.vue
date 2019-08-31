<template>
  <div class="wrapper">
    <lgm-button @click="infoShow">打开消息提示</lgm-button>
    <lgm-button @click="HTMLShow">使用 HTML 片段</lgm-button>
  </div>
</template>

<script>
  import Toast from '../../../../src/toast/toast';
  import Button from '../../../../src/button/button';
  import Vue from 'vue';

  Toast.install(Vue);

  export default {
    name: "toast-demo-1",
    components: {
      [Button.name]: Button
    },
    methods: {
      infoShow() {
        this.$toast({message: '这是一条消息提示'})
      },
      HTMLShow() {
        this.$toast({message: '<strong>内容可以是 <span style="color: #eb7070;">HTML</span></strong>', dangerouslyUseHTMLString: true})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
  }
</style>