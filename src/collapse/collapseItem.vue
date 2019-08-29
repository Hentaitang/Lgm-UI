<template>
  <div class="lgm-collpase-item">
    <div class="titleWrapper" @click="showContent">
      <div v-if="title" class="title">{{title}}</div>
      <div v-else class="title"><slot name="title"></slot></div>
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
        type: String
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
    font-size: 13px;

    .titleWrapper {
      padding: .8em;
      cursor: pointer;
      position: relative;
      .title{
        color: rgba(0, 0, 0, .85);
        word-break: break-all;
        padding-right: 2em;
        .lgm-icon{
          display: inline-block;
          vertical-align: middle;
        }
      }

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
