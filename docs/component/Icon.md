# Icon  图标
借助iconfont，提供了一套常用的图标集合。
## 使用方法
直接通过设置属性为 ```icon="i-iconName"``` 来使用即可。例如：
<ClientOnly>
 <icon-demo-1></icon-demo-1>
</ClientOnly>

```vue
<lgm-icon icon="i-poweroff"></lgm-icon>
<lgm-icon icon="i-cleanup"></lgm-icon>
<lgm-icon icon="i-reload" spin></lgm-icon>
```

## 图标集合
<ClientOnly>
 <icon-demo-2></icon-demo-2>
</ClientOnly>

## 属性
通过设置 Icon 的属性来产生不同的图标。

  - 图标的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | icon | 图标类型 | string | —  | — |
  | spin | 是否有旋转动画 | boolean | — | false |