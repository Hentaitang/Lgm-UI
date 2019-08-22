<template>
  <div :class="{['lgm-input-wrapper']: true, clearable: clearable}">
    <input class="lgm-input-inner"
           type="text"
           :placeholder="placeholder"
           :disabled="disabled"
           :value="value"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="inputFocus"
           @blur="inputBlur">
    <lgm-icon v-if="clearable"
              icon="i-close-circle"
              :class="{['suffix-icon']: true, ['clearShow']: value && clearShow, ['hoverClearShow']: value}"
              @mousedown.native="$emit('input', '')"></lgm-icon>
  </div>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'lgm-input',
    data() {
      return {
        clearShow: false
      }
    },
    props: {
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      value: {
        type: String
      },
      clearable: {
        type: Boolean
      }
    },
    components: {
      [Icon.name]: Icon
    },
    methods: {
      inputFocus(){
        this.clearShow = true;
        this.$emit('focus', this.$event)
      },
      inputBlur(){
        this.clearShow = false;
        this.$emit('blur', this.$event)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-input-wrapper {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    position: relative;

    > .lgm-input-inner {
      padding: 0 8px;
      border-radius: 4px;
      height: 32px;
      line-height: 32px;
      font-size: inherit;
      border: 1px solid #ccc;
      color: #606266;

      &:hover {
        border: 1px solid #aaa;
      }

      &:focus {
        outline: none;
        border-color: #777;
      }

      &[disabled] {
        cursor: not-allowed;
        background-color: #eee;
        color: #999999;
        &:hover {
          border: 1px solid #ccc;
        }
      }

      &::-webkit-input-placeholder {
        color: #ccc;
      }

      &::-moz-placeholder {
        color: #ccc;
      }

      &::-ms-input-placeholder {
        color: #ccc;
      }
    }

    > .suffix-icon{
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translateY(-50%);
      fill: #c0c4cc;
    }

    &.clearable{
      &:hover{
        > .suffix-icon.hoverClearShow {
          display: block;
        }
      }
      > .lgm-input-inner{
        padding-right: 24px;
      }
      > .suffix-icon {
        cursor: pointer;
        display: none;
        &.clearShow.hoverClearShow {
          display: block;
        }
        &:hover {
          fill: #999;
        }
      }
    }
  }
</style>