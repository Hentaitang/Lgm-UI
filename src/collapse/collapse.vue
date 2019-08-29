<template>
  <div class="lgm-collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    name: 'lgm-collapse',
    props: {
      selected: {
        type: Array,
        default() {
          return []
        }
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        eventBus: new Vue(),
        selectItems: []
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.single = this.single
      });
      if (this.single) {
        this.selectItems = this.selected.slice(0, 1);
      } else {
        this.selectItems = JSON.parse(JSON.stringify(this.selected));
      }
      this.eventBus.$emit('update:selected', this.selectItems);
      this.eventBus.$on('addSelected', (select) => {
        if (this.single) {
          this.selectItems = [select];
        } else {
          this.selectItems.push(select);
        }
        this.eventBus.$emit('update:selected', this.selectItems);
        this.$emit('update:selected', this.selectItems);
      });
      this.eventBus.$on('removeSelected', (select) => {
        this.selectItems.splice(this.selectItems.indexOf(select), 1);
        this.eventBus.$emit('update:selected', this.selectItems);
        this.$emit('update:selected', this.selectItems);
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-collapse {
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
</style>