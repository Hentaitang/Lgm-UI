<template>
  <div class="lgm-tabs-body" :class="{[position]: position}">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'lgm-tabs-body',
    inject: ['eventBus'],
    data(){
      return {
        position: ''
      }
    },
    created() {
      this.eventBus.$on('position', (position)=>{
        this.position = position
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-tabs-body{
    order: 2;
    flex: 1;
    &.top{
      order: 2;
    }
    &.left{
      order: 2;
    }
    &.bottom{
      order: 1;
    }
    &.right{
      order: 1;
    }
  }
</style>