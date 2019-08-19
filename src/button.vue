<template>
  <button class="lgm-button" :class=`icon-${iconPosition}` @click="$emit('click')">
    <lgm-icon icon="i-loading" class="icon" v-if="loading"></lgm-icon>
    <lgm-icon v-if="icon && !loading" :icon="icon" class="icon"></lgm-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    name: 'lgm-button',
    props: {
      icon: {},
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
      }
    }
  }
</script>
<style scoped lang="scss">
  .lgm-button {
    font-size: var(--font-size);
    line-height: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .lgm-icon {
      order: 0;
    }

    > .content {
      order: 1;
    }

    > .icon {
      order: 0;
      margin: 0 .3rem 0 0;
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