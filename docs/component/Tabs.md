# Tabs  标签页
分隔内容上有关联但属于不同类别的数据集合。
## 基础用法
默认选中第一项。
<ClientOnly>
 <tabs-demo-1></tabs-demo-1>
</ClientOnly>

```vue
<lgm-tabs selected="Tab1">
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
```

## 禁用状态
禁用某一项，添加 disabled 属性。
<ClientOnly>
 <tabs-demo-2></tabs-demo-2>
</ClientOnly>

```vue
<lgm-tabs selected="Tab1">
  <lgm-tabs-head>
    <lgm-tabs-item label="Tab1">Tab1</lgm-tabs-item>
    <lgm-tabs-item label="Tab2" disabled>Tab2</lgm-tabs-item>
    <lgm-tabs-item label="Tab3">Tab3</lgm-tabs-item>
  </lgm-tabs-head>
  <lgm-tabs-body>
    <lgm-tabs-pane name="Tab1">Content of Tab Pane 1</lgm-tabs-pane>
    <lgm-tabs-pane name="Tab2">Content of Tab Pane 2</lgm-tabs-pane>
    <lgm-tabs-pane name="Tab3">Content of Tab Pane 3</lgm-tabs-pane>
  </lgm-tabs-body>
</lgm-tabs>
```

## 图标标签
有图标的标签，添加 icon 属性。
<ClientOnly>
 <tabs-demo-3></tabs-demo-3>
</ClientOnly>

```vue
<lgm-tabs selected="Tab1">
  <lgm-tabs-head>
    <lgm-tabs-item label="Tab1" icon="i-setting">Tab1</lgm-tabs-item>
    <lgm-tabs-item label="Tab2" icon="i-image">Tab2</lgm-tabs-item>
    <lgm-tabs-item label="Tab3" icon="i-phone">Tab3</lgm-tabs-item>
  </lgm-tabs-head>
  <lgm-tabs-body>
    <lgm-tabs-pane name="Tab1">Content of Tab Pane 1</lgm-tabs-pane>
    <lgm-tabs-pane name="Tab2">Content of Tab Pane 2</lgm-tabs-pane>
    <lgm-tabs-pane name="Tab3">Content of Tab Pane 3</lgm-tabs-pane>
  </lgm-tabs-body>
</lgm-tabs>
```

## 标签位置
可以通过 position 设置标签的位置
<ClientOnly>
 <tabs-demo-3></tabs-demo-3>
</ClientOnly>

```vue
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
<script>
  export default{
    data(){
      return {
        position: 'top',
        selectItem: 'Tab1'
      }
    }
  }
</script>
```

## 属性
  - tabs的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | selected | 表示初始选中的tab label值(requried 必需项) | string |  —  |  — |
  | position | tabs的方向 | string |top/right/bottom/left|top|
  
  - tabs-item的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | label | 每个tab的唯一标记，与pane面板的name属性相对应(requried 必需项) | string |   —   |    —    |
  | icon | 是否需要icon | string | — |  —  |
  | disabled | 是否禁用状态 | boolean | — | false |
  
  - tabs-pane的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | name | 每个pane的唯一标记，与tab标签的label属性相对应(requried 必需项) | string |   —    |   —    |