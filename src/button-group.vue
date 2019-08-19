<template>
  <div class="lgm-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'lgm-button-group',
    mounted(){
      for(let node of this.$el.children){
        const name = node.tagName.toLowerCase();
        if(name !== 'button'){
          throw Error(`lgm-button-group 的子元素应该全是 lgm-button，不能包含${name}`)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .lgm-button-group{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .lgm-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>