<template>
  <div class="wrapper">
    <lgm-row>
      <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
      <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
      <lgm-col :phone="{'span': 24}"  :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
      <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
      <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
      <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
        <div class="colBox">col-4</div>
      </lgm-col>
    </lgm-row>
  </div>
</template>

<script>
  import Row from '../../../../src/grid/row';
  import Col from '../../../../src/grid/col';

  export default {
    name: 'grid-demo-5',
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
        .colBox {
          text-align: center;
          padding: .7em 0;
        }

        &:nth-child(2n + 1) {
          .colBox {
            background-color: #a9e999;
          }
        }

        &:nth-child(2n) {
          .colBox{
            background-color: #10d291;
          }
        }
      }
    }
  }
</style>