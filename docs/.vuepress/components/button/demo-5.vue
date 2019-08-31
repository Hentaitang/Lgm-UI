<template>
  <div class="wrapper">
    <div class="content">
      <lgm-button type="primary" :loading="loading" @click="loading = !loading" icon="i-setting">加载中</lgm-button>
    </div>
  </div>

</template>

<script>
  import Button from '../../../../src/button/button';

  export default {
    name: 'button-demo-5',
    data() {
      return {
        loading: false
      }
    },
    components: {
      [Button.name]: Button
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;

    .lgm-button {
      margin: 10px 10px 10px 0;
    }
  }
</style>