<template>
  <div>
    <lgm-icon icon="i-poweroff"></lgm-icon>
    <lgm-icon icon="i-cleanup"></lgm-icon>
    <lgm-icon icon="i-reload" spin></lgm-icon>
  </div>
</template>
<script>
  import Icon from '../../../../src/icon/icon';
  export default {
    components: {
      [Icon.name]: Icon
    }
  }
</script>

<style scoped>

</style>