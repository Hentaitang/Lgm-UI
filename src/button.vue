<template>
  <button class="lgm-button" :class="{
    [`icon-${iconPosition}`]: true,
    [`lgm-button-${type}`]: type,
    'circle': circle && !$slots.default,
    'round': round,
    'iconOnly': icon && !$slots.default
    }" :disabled="disabled" @click="$emit('click')">
    <lgm-icon icon="i-loading" class="icon" v-if="loading"></lgm-icon>
    <lgm-icon v-if="icon && !loading" :icon="icon" class="icon"></lgm-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'lgm-button',
    components: {
      'lgm-icon': Icon
    },
    props: {
      icon: {},
      disabled:{
        type: Boolean
      },
      circle:{
        type: Boolean
      },
      round: {
        type: Boolean
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return value === 'left' || value === 'right'
        }
      },
      type: {
        type: String,
        validator: function (value) {
          return ['primary', 'success', 'info', 'warning', 'danger'].indexOf(value) >= 0
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  $button-height: 32px;
  $font-size: 14px;
  $border-radius: 4px;
  $border-color: #aaa;
  $button-color: #606266;
  $border-color-active: #888;
  $button-normal-bg: white;
  $button-normal-active-bg: #ddd;
  $button-normal-hover-bg: #eee;
  .lgm-button {
    font-size: $font-size;
    line-height: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-normal-bg;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: $button-color;
    &.round{
      border-radius: 20px;
    }

    &.circle{
      border-radius: 50%;
    }

    &[disabled], &[disabled]:hover, &[disabled]:active{
      cursor: not-allowed;
      background-color: #fff;
      border-color: #ddd;
      color: #ccc;
    }
    &[disabled] >.icon{
      fill: #ccc;
    }
    &.lgm-button-primary{
      background-color: #409eff;
      border-color: #409eff;
      color: #fff;
      & >.icon{
        fill: #fff;
      }
      &:hover{
        background-color: #66aeff;
        border-color: #66aeff;
        color: #fff;
      }
      &:active {
        background-color: #109eff;
        border-color: #109eff;
        color: #fff;
      }
      &[disabled], &[disabled]:hover, &[disabled]:active{
        cursor: not-allowed;
        background-color: #a0cfff;
        border-color: #a0cfff;
        color: #fff;
      }
      &[disabled] >.icon{
        fill: #fff;
      }
    }
    &.lgm-button-success{
      background-color: #44e291;
      border-color: #44e291;
      color: #fff;
      & >.icon{
        fill: #fff;
      }
      &:hover{
        background-color: #75e291;
        border-color: #75e291;
        color: #fff;
      }
      &:active {
        background-color: #10d291;
        border-color: #10d291;
        color: #fff;
      }
      &[disabled], &[disabled]:hover, &[disabled]:active{
        cursor: not-allowed;
        background-color: #a9e999;
        border-color: #a9e999;
        color: #fff;
      }
      &[disabled] >.icon{
        fill: #fff;
      }
    }
    &.lgm-button-info{
      background-color: #888;
      border-color: #888;
      color: #fff;
      & >.icon{
        fill: #fff;
      }
      &:hover{
        background-color: #999;
        border-color: #999;
        color: #fff;
      }
      &:active {
        background-color: #777;
        border-color: #777;
        color: #fff;
      }
      &[disabled], &[disabled]:hover, &[disabled]:active{
        cursor: not-allowed;
        background-color: #bbb;
        border-color: #bbb;
        color: #fff;
      }
      &[disabled] >.icon{
        fill: #fff;
      }
    }
    &.lgm-button-warning{
      background-color: #fec771;
      border-color: #fec771;
      color: #fff;
      & >.icon{
        fill: #fff;
      }
      &:hover{
        background-color: #ffd771;
        border-color: #ffd771;
        color: #fff;
      }
      &:active {
        background-color: #dec771;
        border-color: #dec771;
        color: #fff;
      }
      &[disabled], &[disabled]:hover, &[disabled]:active{
        cursor: not-allowed;
        background-color: #f3d19e;
        border-color: #f3d19e;
        color: #fff;
      }
      &[disabled] >.icon{
        fill: #fff;
      }
    }
    &.lgm-button-danger{
      background-color: #eb7070;
      border-color: #eb7070;
      color: #fff;
      & >.icon{
        fill: #fff;
      }
      &:hover{
        background-color: #fd8989;
        border-color: #fd8989;
        color: #fff;
      }
      &:active {
        background-color: #db7070;
        border-color: #db7070;
        color: #fff;
      }
      &[disabled], &[disabled]:hover, &[disabled]:active{
        cursor: not-allowed;
        background-color: #fab6b6;
        border-color: #fab6b6;
        color: #fff;
      }
      &[disabled] >.icon{
        fill: #fff;
      }
    }
    &:hover {background-color: $button-normal-hover-bg;}
    &:active {background-color: $button-normal-active-bg;border-color: $border-color-active;}
    &:focus {outline: none;}


    > .lgm-icon {
      order: 0;
    }

    > .content {
      order: 1;
    }

    > .icon {
      order: 0;
      margin: 0 .3rem 0 0;
      fill: $button-color;
    }

    &.iconOnly{
      padding: 8px;
      > .icon{
        margin: 0;
      }
    }

    > .content {
      order: 1;
    }


    &.icon-right {
      > .icon {
        order: 1;
        margin: 0 0 0 .3rem;
      }

      > .content {
        order: 0;
      }
    }
  }
</style>