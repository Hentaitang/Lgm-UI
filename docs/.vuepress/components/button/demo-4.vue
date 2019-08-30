<template>
  <div class="wrapper">
    <div class="content">
      <lgm-button-group>
        <lgm-button type="primary" icon="i-left">上一页</lgm-button>
        <lgm-button type="primary" icon="i-right" icon-position="right">下一页</lgm-button>
      </lgm-button-group>
      <lgm-button-group>
        <lgm-button type="primary" icon="i-search">搜索</lgm-button>
        <lgm-button type="primary">更多</lgm-button>
        <lgm-button type="primary" icon="i-delete">删除</lgm-button>
      </lgm-button-group>
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
  * {
    box-sizing: border-box;
  }
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    .lgm-button-group{
      margin: 10px 10px 10px 0;
    }
  }
</style>