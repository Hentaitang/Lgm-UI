<template>
  <div class="wrapper">
    <div class="content">
      <lgm-button disabled>默认按钮</lgm-button>
      <lgm-button type="primary" disabled>主要按钮</lgm-button>
      <lgm-button type="success" disabled>成功按钮</lgm-button>
      <lgm-button type="info" disabled>信息按钮</lgm-button>
      <lgm-button type="warning" disabled>警告按钮</lgm-button>
      <lgm-button type="danger" disabled>危险按钮</lgm-button>
    </div>
    <div class="content">
      <lgm-button round disabled>默认按钮</lgm-button>
      <lgm-button type="primary" round disabled>主要按钮</lgm-button>
      <lgm-button type="success" round disabled>成功按钮</lgm-button>
      <lgm-button type="info" round disabled>信息按钮</lgm-button>
      <lgm-button type="warning" round disabled>警告按钮</lgm-button>
      <lgm-button type="danger" round disabled>危险按钮</lgm-button>
    </div>
  </div>

</template>

<script>
  import Button from '../../../../src/button/button';

  export default {
    components: {
      [Button.name]: Button
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    .lgm-button {
      margin: 10px 10px 10px 0;
    }
  }
</style>