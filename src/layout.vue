<template>
  <div class="lgm-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lgm-layout',
    data(){
      return {
        layoutClass: ''
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if(vm.$options.name === 'lgm-sider'){
          this.layoutClass = 'hasSider'
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-layout{
    flex: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>