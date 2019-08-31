# Layout  布局
用于布局的容器组件，方便快速搭建页面的基本结构。

## 概述
- ```<lgm-layout>```：外层容器。当子元素中包含 ```<lgm-header>``` 或 ```<lgm-footer>``` 时，全部子元素会垂直上下排列，否则会水平左右排列。

- ```<lgm-header>```：顶栏容器。

- ```<lgm-sider>```：侧边栏容器。

- ```<lgm-content>```：主要区域容器。

- ```<lgm-footer>```：底栏容器。
> 注意：以上组件采用 flex 布局实现，请注意[浏览器兼容性](https://caniuse.com/#search=flex)问题。


## 上中下布局

<ClientOnly>
 <layout-demo-1></layout-demo-1>
</ClientOnly>

```vue
<lgm-layout>
  <lgm-header>Header</lgm-header>
  <lgm-content>Content</lgm-content>
  <lgm-footer>Footer</lgm-footer>
</lgm-layout>
```

## 左侧边栏布局

<ClientOnly>
 <layout-demo-2></layout-demo-2>
</ClientOnly>

```vue
<lgm-layout>
  <lgm-sider>Sider</lgm-sider>
  <lgm-layout>
    <lgm-header>Header</lgm-header>
    <lgm-content>Content</lgm-content>
    <lgm-footer>Footer</lgm-footer>
  </lgm-layout>
</lgm-layout>
```

## 右侧边栏布局

<ClientOnly>
 <layout-demo-3></layout-demo-3>
</ClientOnly>

```vue
<lgm-layout>
  <lgm-layout>
    <lgm-header>Header</lgm-header>
    <lgm-content>Content</lgm-content>
    <lgm-footer>Footer</lgm-footer>
  </lgm-layout>
  <lgm-sider>Sider</lgm-sider>
</lgm-layout>
```


## 内嵌侧边栏布局

<ClientOnly>
 <layout-demo-4></layout-demo-4>
</ClientOnly>

```vue
<lgm-layout>
  <lgm-header>Header</lgm-header>
  <lgm-layout>
    <lgm-sider>Sider</lgm-sider>
    <lgm-content>Content</lgm-content>
  </lgm-layout>
  <lgm-footer>Footer</lgm-footer>
</lgm-layout>
```