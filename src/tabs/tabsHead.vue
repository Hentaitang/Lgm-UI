<template>
  <div class="lgm-tabs-head" :class="{[position]: position}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lgm-tabs-head',
    inject: ['eventBus'],
    data() {
      return {
        position: ''
      }
    },
    created() {
      // this.eventBus.$on('selected', () => {
      //   console.log(1);
      // });
      this.eventBus.$on('position', (position) => {
        this.position = position
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-tabs-head {
    display: flex;
    border-bottom: 2px solid #eee;
    flex-wrap: wrap;
    order: 1;

    &.top {
      order: 1;
      border: none;
      border-bottom: 2px solid #eee;
      flex-direction: row;
    }

    &.left {
      order: 1;
      border: none;
      flex-wrap: nowrap;
      border-right: 2px solid #eee;
      flex-direction: column;
      /*overflow: auto;*/
      &::-webkit-scrollbar{
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-button{
        display: none;
      }
      &::-webkit-scrollbar-thumb{
        background-color: rgba(144,147,153,.3);
        border-radius: 4px;
      }
    }

    &.bottom {
      order: 2;
      border: none;
      border-top: 2px solid #eee;
      flex-direction: row;
    }

    &.right {
      order: 2;
      border: none;
      flex-wrap: nowrap;
      border-left: 2px solid #eee;
      flex-direction: column;
      /*overflow: auto;*/
      &::-webkit-scrollbar{
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-button{
        display: none;
      }
      &::-webkit-scrollbar-thumb{
        background-color: rgba(144,147,153,.3);
        border-radius: 4px;
      }
    }
  }
</style>