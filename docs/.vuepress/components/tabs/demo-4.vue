<template>
  <div class="wrapper">
    <lgm-button-group>
      <lgm-button @click="position = 'top'">Top</lgm-button>
      <lgm-button @click="position = 'left'">Left</lgm-button>
      <lgm-button @click="position = 'bottom'">Bottom</lgm-button>
      <lgm-button @click="position = 'right'">Right</lgm-button>
    </lgm-button-group>
    <lgm-tabs :selected.sync="selectItem" :position="position">
      <lgm-tabs-head>
        <lgm-tabs-item label="Tab1">Tab1</lgm-tabs-item>
        <lgm-tabs-item label="Tab2">Tab2</lgm-tabs-item>
        <lgm-tabs-item label="Tab3">Tab3</lgm-tabs-item>
      </lgm-tabs-head>
      <lgm-tabs-body>
        <lgm-tabs-pane name="Tab1">Content of Tab Pane 1</lgm-tabs-pane>
        <lgm-tabs-pane name="Tab2">Content of Tab Pane 2</lgm-tabs-pane>
        <lgm-tabs-pane name="Tab3">Content of Tab Pane 3</lgm-tabs-pane>
      </lgm-tabs-body>
    </lgm-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../../src/tabs/tabs';
  import TabsHead from '../../../../src/tabs/tabsHead';
  import TabsItem from '../../../../src/tabs/tabsItem';
  import TabsBody from '../../../../src/tabs/tabsBody';
  import TabsPane from '../../../../src/tabs/tabsPane';
  import Button from '../../../../src/button/button';
  import ButtonGroup from '../../../../src/button/button-group';

  export default {
    name: "tabs-demo-4",
    components: {
      [Tabs.name]: Tabs,
      [TabsHead.name]: TabsHead,
      [TabsItem.name]: TabsItem,
      [TabsBody.name]: TabsBody,
      [TabsPane.name]: TabsPane,
      [Button.name]: Button,
      [ButtonGroup.name]: ButtonGroup
    },
    data(){
      return {
        position: 'top',
        selectItem: 'Tab1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
    .lgm-button-group{
      margin-bottom: 1em;
    }
    .lgm-tabs{
      height: 200px;
    }
  }
</style>