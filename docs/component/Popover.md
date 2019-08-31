# Popover  气泡卡片
点击/鼠标移入元素，弹出气泡式的卡片浮层。
## 基础用法
最简单的用法，浮层的大小由内容区域决定。
<ClientOnly>
 <popover-demo-1></popover-demo-1>
</ClientOnly>

```vue
<lgm-popover>
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button type="success">click me</lgm-button>
</lgm-popover>
```

## 两种触发方式
鼠标移入、点击。
<ClientOnly>
 <popover-demo-2></popover-demo-2>
</ClientOnly>

```vue
<lgm-popover>
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>click me</lgm-button>
</lgm-popover>
<lgm-popover trigger="hover" position="bottom">
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>hover me</lgm-button>
</lgm-popover>
```

## 位置
位置有四个方向。
<ClientOnly>
 <popover-demo-3></popover-demo-3>
</ClientOnly>

```vue
<lgm-popover trigger="hover">
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>Top</lgm-button>
</lgm-popover>
<lgm-popover trigger="hover" position="left">
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>Left</lgm-button>
</lgm-popover>
<lgm-popover trigger="hover" position="bottom">
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>Bottom</lgm-button>
</lgm-popover>
<lgm-popover trigger="hover" position="right">
  <template v-slot:content>
    <h4>标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </template>
  <lgm-button>Right</lgm-button>
</lgm-popover>
```

## 属性
  - Popover的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | title | 标题 | string | — |  —  |
  | trigger | 触发方式| string | click/hover  | click |
  | position | 弹出的位置 | string |top/left/bottom/right|  top  |