<template>
  <div class="lgm-input-wrapper">
    <input class="lgm-input-inner" type="text" :placeholder="placeholder" :disabled="disabled">
  </div>
</template>
<script>
  export default {
    name: 'lgm-input',
    props: {
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-input-wrapper {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;

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
  }
</style>