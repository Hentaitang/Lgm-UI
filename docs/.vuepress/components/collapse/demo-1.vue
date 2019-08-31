<template>
  <div class="wrapper">
    <lgm-collapse :selected.sync="selectItems">
      <lgm-collapse-item title="彼得·帕克" name="1">
        <div>616宇宙的蜘蛛侠，他帮助训练迈尔斯·莫拉莱斯正视自己，勇于承担肩上的责任，在这期间也慢慢的找回自我。</div>
      </lgm-collapse-item>
      <lgm-collapse-item title="迈尔斯·莫拉莱斯" name="2">
        <div>终极宇宙里的蜘蛛侠，被一只放射性蜘蛛咬伤，并因此获得了超能力。偶然和其他宇宙的蜘蛛侠相遇，将和他们共同对抗最强反派。</div>
      </lgm-collapse-item>
      <lgm-collapse-item title="潘妮·帕克" name="3">
        <div>14512宇宙的蜘蛛侠，一个来自未来的蜘蛛女孩，还拥有一个机器人助手。</div>
      </lgm-collapse-item>
    </lgm-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../../src/collapse/collapse';
  import CollapseItem from '../../../../src/collapse/collapseItem'
  export default {
    name: "collapse-demo-1",
    components: {
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem
    },
    data(){
      return {
        selectItems: ['1']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1em;
    border: 1px solid #eaeefb;
    padding: 10px 20px;
  }
</style>