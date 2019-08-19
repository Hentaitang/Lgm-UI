<template>
  <button class="lgm-button">按钮</button>
</template>
<script>
  export default {
    name: 'lgm-button'
  }
</script>
<style scoped lang="scss">
  .lgm-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    cursor: pointer;
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background-color: var(--button-active-bg);
    }
    &:focus{
      outline: none;
    }
  }
</style>