# Collapse  折叠面板
通过折叠面板收纳内容区域
## 基础用法
可同时展开多个面板，面板之间不影响
<ClientOnly>
 <collapse-demo-1></collapse-demo-1>
</ClientOnly>

```vue
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
<script>
  export default {
    data() {
      return {
        selectItems: ['1']
      }
    }
  }
</script>
```

## 手风琴效果
每次只能展开一个面板，添加 single 属性
<ClientOnly>
 <collapse-demo-2></collapse-demo-2>
</ClientOnly>

```vue
<lgm-collapse :selected.sync="selectItems" single>
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
<script>
  export default {
    data() {
      return {
        selectItems: ['1']
      }
    }
  }
</script>
```

## 自定义面板标题
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。
<ClientOnly>
 <collapse-demo-3></collapse-demo-3>
</ClientOnly>

```vue
<lgm-collapse :selected.sync="selectItems">
  <lgm-collapse-item name="1">
    <template v-slot:title>
      彼得·帕克
      <lgm-icon icon="i-setting"></lgm-icon>
    </template>
    <div>616宇宙的蜘蛛侠，他帮助训练迈尔斯·莫拉莱斯正视自己，勇于承担肩上的责任，在这期间也慢慢的找回自我。</div>
  </lgm-collapse-item>
  <lgm-collapse-item name="2">
    <template v-slot:title>
      迈尔斯·莫拉莱斯
      <lgm-icon icon="i-label"></lgm-icon>
    </template>
    <div>终极宇宙里的蜘蛛侠，被一只放射性蜘蛛咬伤，并因此获得了超能力。偶然和其他宇宙的蜘蛛侠相遇，将和他们共同对抗最强反派。</div>
  </lgm-collapse-item>
  <lgm-collapse-item title="潘妮·帕克" name="3">
    <div>14512宇宙的蜘蛛侠，一个来自未来的蜘蛛女孩，还拥有一个机器人助手。</div>
  </lgm-collapse-item>
</lgm-collapse>
<script>
  export default {
    data() {
      return {
        selectItems: ['1']
      }
    }
  }
</script>
```

## 属性
  - Collapse 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | selected | 当前激活的面板 | array |  —   |  —  |
  | single | 是否手风琴模式 | boolean | — |  false  |

- CollapseItem 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | title | 面板标题 | string |  —   |   —    |
  | name | 唯一标志符 | string | — |  —  |