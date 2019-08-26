<template>
  <svg class="lgm-icon" :class="{loadingIcon: icon === 'i-loading'}" @click="$emit('click', $event)">
    <use :xlink:href=`#${icon}`></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: "lgm-icon",
    props: ['icon']
  }
</script>
<style lang="scss" scoped>
  @keyframes loading {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
  .lgm-icon {
    width: 1em;
    height: 1em;
    &.loadingIcon{
      animation: loading 2s infinite linear;
    }
  }
</style>