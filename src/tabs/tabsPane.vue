<template>
  <div class="lgm-tabs-pane" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'lgm-tabs-pane',
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        require: true
      }
    },
    data(){
      return {
        active: false
      }
    },
    created(){
      this.eventBus.$on('selected', (name)=>{
        this.active = this.name === name
      })
    }

  }
</script>
<style lang="scss" scoped>
  .lgm-tabs-pane{
    padding: 1em;
  }
</style>