<template>
  <div class="wrapper">
    <lgm-popover trigger="hover">
      <template v-slot:content>
        <h4>标题</h4>
        <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
      </template>
      <lgm-button>Top</lgm-button>
    </lgm-popover>
    <lgm-popover trigger="hover" position="left">
      <template v-slot:content>
        <h4>标题</h4>
        <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
      </template>
      <lgm-button>Left</lgm-button>
    </lgm-popover>
    <lgm-popover trigger="hover" position="bottom">
      <template v-slot:content>
        <h4>标题</h4>
        <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
      </template>
      <lgm-button>Bottom</lgm-button>
    </lgm-popover>
    <lgm-popover trigger="hover" position="right">
      <template v-slot:content>
        <h4>标题</h4>
        <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
      </template>
      <lgm-button>Right</lgm-button>
    </lgm-popover>
  </div>
</template>

<script>
  import Popover from '../../../../src/popover/popover'
  import Button from '../../../../src/button/button'
  export default {
    name: "popover-demo-3",
    components: {
      [Popover.name]: Popover,
      [Button.name]: Button
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
  }
  h4{
    margin: 5px 0;
  }
</style>