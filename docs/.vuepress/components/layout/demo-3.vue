<template>
  <div class="wrapper">
    <lgm-layout>
      <lgm-layout>
        <lgm-header>Header</lgm-header>
        <lgm-content>Content</lgm-content>
        <lgm-footer>Footer</lgm-footer>
      </lgm-layout>
      <lgm-sider>Sider</lgm-sider>
    </lgm-layout>
  </div>
</template>

<script>
  import Layout from '../../../../src/layout/layout';
  import Header from '../../../../src/layout/header';
  import Content from '../../../../src/layout/content';
  import Footer from '../../../../src/layout/footer';
  import Sider from '../../../../src/layout/sider';
  export default {
    components: {
      [Layout.name]: Layout,
      [Header.name]: Header,
      [Content.name]: Content,
      [Footer.name]: Footer,
      [Sider.name]: Sider
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
    .lgm-footer,
    .lgm-sider{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lgm-sider{
      background-color: #44e291;
      width: 100px;
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