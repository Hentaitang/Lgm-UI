<template>
  <div class="wrapper">
    <lgm-icon icon="i-poweroff"></lgm-icon>
    <lgm-icon icon="i-cleanup"></lgm-icon>
    <lgm-icon icon="i-sync" spin></lgm-icon>
  </div>
</template>
<script>
  import Icon from '../../../../src/icon/icon';
  export default {
    name: 'icon-demo-1',
    components: {
      [Icon.name]: Icon
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    .lgm-icon {
      margin: 10px 20px 10px 0;
    }
  }
</style>