<template>
  <div class="wrapper">
    <lgm-button @click="leftShow">左侧</lgm-button>
    <lgm-button @click="middleShow">居中</lgm-button>
    <lgm-button @click="rightShow">右侧</lgm-button>
  </div>
</template>

<script>
  import Toast from '../../../../src/toast/toast';
  import Button from '../../../../src/button/button';
  import Vue from 'vue';

  Toast.install(Vue);

  export default {
    name: "toast-demo-4",
    components: {
      [Button.name]: Button
    },
    methods: {
      leftShow() {
        this.$toast({message: '这是一条消息提示', position: 'left'})
      },
      middleShow() {
        this.$toast({message: '恭喜你，这是一条成功消息', type: 'success', position: 'middle'})
      },
      rightShow() {
        this.$toast({message: '错了哦，这是一条错误消息', type: 'error', position: 'right'})
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