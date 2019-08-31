<template>
  <div class="wrapper">
    <lgm-layout>
      <lgm-header>Header</lgm-header>
      <lgm-content>Content</lgm-content>
      <lgm-footer>Footer</lgm-footer>
    </lgm-layout>
  </div>
</template>

<script>
  import Layout from '../../../../src/layout/layout';
  import Header from '../../../../src/layout/header';
  import Content from '../../../../src/layout/content';
  import Footer from '../../../../src/layout/footer';
  export default {
    name: 'layout-demo-1',
    components: {
      [Layout.name]: Layout,
      [Header.name]: Header,
      [Content.name]: Content,
      [Footer.name]: Footer
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    .lgm-header,
    .lgm-content,
    .lgm-footer{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lgm-header{
      background-color: #a9e999;
      height: 60px;
    }
    .lgm-content{
      background-color: #10d291;
      height: 120px;
    }
    .lgm-footer{
      background-color: #a9e999;
      height: 60px;
    }
  }
</style>