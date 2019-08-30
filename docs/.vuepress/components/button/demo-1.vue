<template>
  <div class="wrapper">
    <div class="content">
      <lgm-button>默认按钮</lgm-button>
      <lgm-button type="primary">主要按钮</lgm-button>
      <lgm-button type="success">成功按钮</lgm-button>
      <lgm-button type="info">信息按钮</lgm-button>
      <lgm-button type="warning">警告按钮</lgm-button>
      <lgm-button type="danger">危险按钮</lgm-button>
    </div>
    <div class="content">
      <lgm-button round>默认按钮</lgm-button>
      <lgm-button type="primary" round>主要按钮</lgm-button>
      <lgm-button type="success" round>成功按钮</lgm-button>
      <lgm-button type="info" round>信息按钮</lgm-button>
      <lgm-button type="warning" round>警告按钮</lgm-button>
      <lgm-button type="danger" round>危险按钮</lgm-button>
    </div>
    <div class="content">
      <lgm-button icon="i-setting" circle></lgm-button>
      <lgm-button type="primary" icon="i-check" circle></lgm-button>
      <lgm-button type="success" icon="i-check" circle></lgm-button>
      <lgm-button type="info" icon="i-check" circle></lgm-button>
      <lgm-button type="warning" icon="i-check" circle></lgm-button>
      <lgm-button type="danger" icon="i-delete" circle></lgm-button>
    </div>
  </div>

</template>

<script>
  import Button from '../../../../src/button/button';
  import ButtonGroup from '../../../../src/button/button-group'

  export default {
    components: {
      [Button.name]: Button,
      [ButtonGroup.name]: ButtonGroup
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb
  }

  .content, .wrapper {
    padding: 10px;

    .lgm-button {
      margin-right: 10px;
    }
  }
</style>