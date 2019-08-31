<template>
  <div class="wrapper">
    <lgm-row :gutter="16">
      <lgm-col :span="6">
        <div class="gutter-box">col-6</div>
      </lgm-col>
      <lgm-col :span="6">
        <div class="gutter-box">col-6</div>
      </lgm-col>
      <lgm-col :span="6">
        <div class="gutter-box">col-6</div>
      </lgm-col>
      <lgm-col :span="6">
        <div class="gutter-box">col-6</div>
      </lgm-col>
    </lgm-row>
  </div>
</template>

<script>
  import Row from '../../../../src/grid/row';
  import Col from '../../../../src/grid/col';

  export default {
    name: 'grid-demo-2',
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

    .lgm-row {
      .lgm-col {
        .gutter-box {
          text-align: center;
          padding: .7em 0;
        }

        &:nth-child(2n + 1) {
          .gutter-box {
            background-color: #a9e999;
          }
        }

        &:nth-child(2n) {
          .gutter-box {
            background-color: #10d291;
          }
        }
      }
    }
  }
</style>