<template>
  <div class="wrapper">
    <lgm-button @click="infoShow" type="primary">消息</lgm-button>
    <lgm-button @click="successShow" type="success">成功</lgm-button>
    <lgm-button @click="errorShow" type="danger">错误</lgm-button>
    <lgm-button @click="warningShow" type="warning">警告</lgm-button>
  </div>
</template>

<script>
  import Toast from '../../../../src/toast/toast';
  import Button from '../../../../src/button/button';
  import Vue from 'vue';

  Toast.install(Vue);

  export default {
    name: "toast-demo-2",
    components: {
      [Button.name]: Button
    },
    methods: {
      infoShow() {
        this.$toast({message: '这是一条消息提示'})
      },
      successShow() {
        this.$toast({message: '恭喜你，这是一条成功消息', type: 'success'})
      },
      errorShow() {
        this.$toast({message: '错了哦，这是一条错误消息', type: 'error'})
      },
      warningShow() {
        this.$toast({message: '警告哦，这是一条警告消息', type: 'warning'})
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