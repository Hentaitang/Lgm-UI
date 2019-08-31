<template>
  <div class="wrapper">
    <div class="content">
      <lgm-button type="primary" icon="i-home"></lgm-button>
      <lgm-button type="success" icon="i-check"></lgm-button>
      <lgm-button type="warning" icon="i-skinning"></lgm-button>
      <lgm-button type="info" icon="i-search">搜索</lgm-button>
      <lgm-button type="danger" icon="i-delete" icon-position="right">删除</lgm-button>
    </div>
  </div>

</template>

<script>
  import Button from '../../../../src/button/button';

  export default {
    name: 'button-demo-3',
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