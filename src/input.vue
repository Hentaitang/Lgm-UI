<template>
  <div :class="{['lgm-input-wrapper']: true, clearable: clearable, ['prefix-icon-input']: prefixIcon, ['suffix-icon-input']: suffixIcon}">
    <template v-if="type !== 'textarea'">
      <input class="lgm-input-inner"
             :type="type"
             :placeholder="placeholder"
             :disabled="disabled"
             :readonly="readonly"
             :value="value"
             @change="$emit('change', $event.target.value)"
             @input="$emit('input', $event.target.value)"
             @focus="inputFocus"
             @blur="inputBlur">
      <lgm-icon v-if="prefixIcon"
                :icon="prefixIcon"
                class="prefix-icon"></lgm-icon>
      <lgm-icon v-if="suffixIcon && !clearable"
                :icon="suffixIcon"
                class="suffix-icon"></lgm-icon>
      <lgm-icon v-if="clearable"
                icon="i-close-circle"
                :class="{['suffix-icon']: true, ['clearShow']: value && clearShow, ['hoverClearShow']: value}"
                @mousedown.native="$emit('input', '')"></lgm-icon>
    </template>
    <textarea v-else
              class="lgm-textarea-inner"
              cols="30"
              :rows="rows"
              :value="value"
              @change="$emit('change', $event.target.value)"
              @input="$emit('input', $event.target.value)"
              @focus="$emit('focus', $event)"
              @blur="$emit('blur', $event)"
              :disabled="disabled"
              :readonly="readonly"
              :placeholder="placeholder"></textarea>
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
      type: {
        type: String,
        default: 'text',
        validator: function(value){
          return value === 'text' || value === 'textarea'
        }
      },
      rows: {
        type: Number,
        default: 4
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      value: {
        type: String
      },
      clearable: {
        type: Boolean
      },
      prefixIcon: {
        type: String
      },
      suffixIcon: {
        type: String
      }
    },
    components: {
      [Icon.name]: Icon
    },
    methods: {
      inputFocus($event){
        this.clearShow = true;
        this.$emit('focus', $event)
      },
      inputBlur($event){
        this.clearShow = false;
        this.$emit('blur', $event)
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

    > .lgm-textarea-inner{
      padding: 10px;
    }
    > .lgm-input-inner{
      padding: 0 8px;
      height: 32px;
      line-height: 32px;
    }
    > .lgm-input-inner,
    > .lgm-textarea-inner{
      border-radius: 4px;
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

      &[readonly]{
        cursor: default;
        &:hover,
        &:focus{
          border-color: #ccc;
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

    > .suffix-icon,
    > .prefix-icon{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      fill: #c0c4cc;
    }
    > .suffix-icon{
      right: 6px;
    }
    > .prefix-icon{
      left: 6px;
    }


    &.prefix-icon-input{
      > .lgm-input-inner {
        padding-left: 24px;
      }
    }
    &.suffix-icon-input{
      > .lgm-input-inner {
        padding-right: 24px;
      }
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