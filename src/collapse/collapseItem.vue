<template>
  <div class="lgm-collpase-item">
    <div class="title" @click="showContent">
      {{title}}
      <lgm-icon icon="i-right" class="icon" :class="{'active': active}"></lgm-icon>
    </div>
    <div class="content" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Icon from '../icon/icon';

  export default {
    name: 'lgm-collapse-item',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    components: {
      [Icon.name]: Icon
    },
    mounted() {
      this.eventBus.$on('update:selected', (selected) => {
        this.active = selected.indexOf(this.name) >= 0;
      })
    },
    methods: {
      showContent() {
        if(this.active){
          this.eventBus.$emit('removeSelected', this.name)
        }else{
          this.eventBus.$emit('addSelected', this.name)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-collpase-item {
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    margin-top: -1px;

    .title {
      padding: .8em;
      color: rgba(0, 0, 0, .85);
      cursor: pointer;
      position: relative;

      .icon {
        position: absolute;
        top: 50%;
        right: 1em;
        transform: translateY(-50%);
        fill: rgba(0, 0, 0, 0.5);
        transition: all .3s;
        &.active{
          transform: translateY(-50%) rotate(90deg);
        }
      }
    }

    .content {
      padding: .5em .5em 1.2em .8em;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border-bottom: none;
    }
  }
</style>
