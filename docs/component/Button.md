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


## 属性
通过设置 Button 的属性来产生不同的按钮样式

  - 按钮的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | type | 类型 | string | primary / success / warning / danger / info  | — |
  | round | 是否圆角按钮 | boolean | — | false |
  | circle | 是否圆形按钮 | boolean | — | false |
  | disabled | 是否禁用状态 | boolean | — | false |
  | icon | 图标类名 | string |  —   | —  |
  | icon-position | 选择图标显示位置 | string | left / right | left |
  | loading | 是否加载中状态(与icon不共存) | boolean |  —   | false |