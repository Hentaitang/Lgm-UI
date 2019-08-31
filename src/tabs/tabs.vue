<template>
  <div class="lgm-tabs" :class="{[position]: position}">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    name: 'lgm-tabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    watch: {
      position() {
        this.eventBus.$emit('position', this.position);
      }
    },
    mounted() {
      if (!this.$children.length) {
        console.warn('tabs组件的子组件应该是tabs-head和tabs-body，但你没写子组件')
      }
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'lgm-tabs-head') {
          vm.$children.forEach(childVm => {
            if(childVm.label === this.selected){
              this.eventBus.$emit('selected', this.selected, childVm.$el);
            }
          })
        }
      });
      this.eventBus.$emit('position', this.position);
      this.eventBus.$on('selected', (select) => {
        this.$emit('update:selected', select)
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-tabs {
    font-size: 14px;
    display: flex;
    flex-direction: column;

    &.top {
      flex-direction: column;
    }

    &.left {
      flex-direction: row;
    }

    &.bottom {
      flex-direction: column;
    }

    &.right {
      flex-direction: row;
    }
  }
</style>