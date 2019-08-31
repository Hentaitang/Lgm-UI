<template>
  <div class="wrapper">
    <lgm-row>
      <lgm-col :span="12">col-12</lgm-col>
      <lgm-col :span="12">col-12</lgm-col>
    </lgm-row>
    <lgm-row>
      <lgm-col :span="8">col-8</lgm-col>
      <lgm-col :span="8">col-8</lgm-col>
      <lgm-col :span="8">col-8</lgm-col>
    </lgm-row>
    <lgm-row>
      <lgm-col :span="6">col-6</lgm-col>
      <lgm-col :span="6">col-6</lgm-col>
      <lgm-col :span="6">col-6</lgm-col>
      <lgm-col :span="6">col-6</lgm-col>
    </lgm-row>
  </div>
</template>

<script>
  import Row from '../../../../src/grid/row';
  import Col from '../../../../src/grid/col';
  export default {
    name: 'grid-demo-1',
    components: {
      [Row.name]: Row,
      [Col.name]: Col
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    .lgm-row{
      margin-bottom: 1em;
      .lgm-col{
        padding: .7em 0;
        text-align: center;
        &:nth-child(2n + 1){
          background-color: #a9e999;
        }
        &:nth-child(2n){
          background-color: #10d291;
        }
      }
    }
  }
</style>