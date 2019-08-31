<template>
  <div class="wrapper">
    <lgm-input placeholder="请输入内容" v-model="textarea" type="textarea" :rows="2"></lgm-input>
  </div>
</template>

<script>
  import Input from '../../../../src/input/input';

  export default {
    name: "input-demo-5",
    components: {
      [Input.name]: Input
    },
    data() {
      return {
        textarea: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    overflow: hidden;
  }
</style>