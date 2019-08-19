<template>
  <svg class="lgm-icon" >
    <use :xlink:href=`#${icon}`></use>
  </svg>
</template>
<script>
  export default {
    name: "lgm-icon",
    props: ['icon']
  }
</script>
<style scoped>
  .lgm-icon {
    width: 1em;
    height: 1em;
  }
</style>