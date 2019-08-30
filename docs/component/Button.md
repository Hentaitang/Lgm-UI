# Button  按钮
常用的操作按钮
## 基础用法
按钮的基础用法。
<ClientOnly>
 <button-demo-1></button-demo-1>
</ClientOnly>

```vue
<div>
  <lgm-button>默认按钮</lgm-button>
  <lgm-button type="primary">主要按钮</lgm-button>
  <lgm-button type="success">成功按钮</lgm-button>
  <lgm-button type="info">信息按钮</lgm-button>
  <lgm-button type="warning">警告按钮</lgm-button>
  <lgm-button type="danger">危险按钮</lgm-button>
</div>
<div>
  <lgm-button round>默认按钮</lgm-button>
  <lgm-button type="primary" round>主要按钮</lgm-button>
  <lgm-button type="success" round>成功按钮</lgm-button>
  <lgm-button type="info" round>信息按钮</lgm-button>
  <lgm-button type="warning" round>警告按钮</lgm-button>
  <lgm-button type="danger" round>危险按钮</lgm-button>
</div>
<div>
  <lgm-button icon="i-setting" circle></lgm-button>
  <lgm-button type="primary" icon="i-check" circle></lgm-button>
  <lgm-button type="success" icon="i-check" circle></lgm-button>
  <lgm-button type="info" icon="i-check" circle></lgm-button>
  <lgm-button type="warning" icon="i-check" circle></lgm-button>
  <lgm-button type="danger" icon="i-delete" circle></lgm-button>
</div>
```

## 禁用状态
按钮不可用状态。
<ClientOnly>
 <button-demo-2></button-demo-2>
</ClientOnly>
```vue
<div class="content">
  <lgm-button disabled>默认按钮</lgm-button>
  <lgm-button type="primary" disabled>主要按钮</lgm-button>
  <lgm-button type="success" disabled>成功按钮</lgm-button>
  <lgm-button type="info" disabled>信息按钮</lgm-button>
  <lgm-button type="warning" disabled>警告按钮</lgm-button>
  <lgm-button type="danger" disabled>危险按钮</lgm-button>
</div>
<div class="content">
  <lgm-button round disabled>默认按钮</lgm-button>
  <lgm-button type="primary" round disabled>主要按钮</lgm-button>
  <lgm-button type="success" round disabled>成功按钮</lgm-button>
  <lgm-button type="info" round disabled>信息按钮</lgm-button>
  <lgm-button type="warning" round disabled>警告按钮</lgm-button>
  <lgm-button type="danger" round disabled>危险按钮</lgm-button>
</div>
```

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
<ClientOnly>
 <button-demo-3></button-demo-3>
</ClientOnly>

```vue
<lgm-button type="primary" icon="i-home"></lgm-button>
<lgm-button type="success" icon="i-check"></lgm-button>
<lgm-button type="warning" icon="i-skinning"></lgm-button>
<lgm-button type="info" icon="i-search">搜索</lgm-button>
<lgm-button type="danger" icon="i-delete" icon-position="right">删除</lgm-button>
```

## 按钮组
以按钮组的方式出现，常用于多项类似操作。
<ClientOnly>
 <button-demo-4></button-demo-4>
</ClientOnly>

```vue
<lgm-button-group>
  <lgm-button type="primary" icon="i-left">上一页</lgm-button>
  <lgm-button type="primary" icon="i-right" icon-position="right">下一页</lgm-button>
</lgm-button-group>

<lgm-button-group>
  <lgm-button type="primary" icon="i-search">搜索</lgm-button>
  <lgm-button type="primary">更多</lgm-button>
  <lgm-button type="primary" icon="i-delete">删除</lgm-button>
</lgm-button-group>
```

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<ClientOnly>
 <button-demo-5></button-demo-5>
</ClientOnly>
```vue
<template>
  <!-- `loading` 为 true 或 false -->
  <lgm-button type="primary" :loading="loading" @click="loading = !loading" icon="i-setting">加载中</lgm-button>
</template>
<script>
  export default {
    data() {
      return {
        loading: false
      };
    }
  };
</script>
```

## 属性
通过设置 Button 的属性来产生不同的按钮样式。

  - 按钮的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | type | 类型 | string | primary / success / warning / danger / info  | — |
  | round | 是否圆角按钮 | boolean | — | false |
  | circle | 是否圆形按钮 | boolean | — | false |
  | disabled | 是否禁用状态 | boolean | — | false |
  | icon | 图标类名 | string |  —   | —  |
  | icon-position | 选择图标显示位置 | string | left / right | left |
  | loading | 是否加载中状态 | boolean |  —   | false |