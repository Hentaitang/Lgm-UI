# Grid  网格
LgmUI采用标准的24格网格系统，可迅速搭建响应式布局
## 概述
LgmUI的网格系统是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过```lgm-row```在水平方向建立一组column（简写 ```lgm-col```）

- 你的内容应当放置于```lgm-col```内，并且，只有```lgm-col```可以作为```lgm-row```的直接元素

- 网格系统中每一行分为24格，一组```lgm-col```可以自由分配这24个格子

- 如果一个```lgm-row```中的```lgm-col```的格子总和超过 24，那么多余的```lgm-col```会作为一个整体另起一行排列

## Flex 布局
LgmUI的网格化系统基于 Flex 布局来制作，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

## 基础网格
从堆叠到水平排列。

使用单一的一组 ```lgm-row``` 和 ```lgm-col``` 网格组件，就可以创建一个基本的网格系统，所有列（```lgm-col```）必须放在 ```lgm-row``` 内。

<ClientOnly>
 <grid-demo-1></grid-demo-1>
</ClientOnly>

```vue
<lgm-row>
  <lgm-col :span="12">col-12</lgm-col>
  <lgm-col :span="12">col-12</lgm-col>
</lgm-row>
<lgm-row>
  <lgm-col :span="8">col-8</lgm-col>
  <lgm-col :span="8">col-8</lgm-col>
  <lgm-col :span="8">col-8</lgm-col>
</lgm-row>
<lgm-row>
  <lgm-col :span="6">col-6</lgm-col>
  <lgm-col :span="6">col-6</lgm-col>
  <lgm-col :span="6">col-6</lgm-col>
  <lgm-col :span="6">col-6</lgm-col>
</lgm-row>
```

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
 <grid-demo-2></grid-demo-2>
</ClientOnly>

```vue
<lgm-row :gutter="16">
  <lgm-col :span="6">
    <div class="gutter-box">col-6</div>
  </lgm-col>
  <lgm-col :span="6">
    <div class="gutter-box">col-6</div>
  </lgm-col>
  <lgm-col :span="6">
    <div class="gutter-box">col-6</div>
  </lgm-col>
  <lgm-col :span="6">
    <div class="gutter-box">col-6</div>
  </lgm-col>
</lgm-row>
```

## 分栏偏移
支持偏移指定的栏数。

<ClientOnly>
 <grid-demo-3></grid-demo-3>
</ClientOnly>

```vue
<lgm-row>
  <lgm-col :span="8">
    <div class="gutter-box">col-8</div>
  </lgm-col>
  <lgm-col :span="8" :offset="8">
    <div class="gutter-box">col-8 offset-8</div>
  </lgm-col>
</lgm-row>
<lgm-row>
  <lgm-col :span="6" :offset="6">
    <div class="gutter-box">col-6 offset-6</div>
  </lgm-col>
  <lgm-col :span="6" :offset="6">
    <div class="gutter-box">col-6 offset-6</div>
  </lgm-col>
</lgm-row>
<lgm-row>
  <lgm-col :span="12" :offset="6">
    <div class="gutter-box">col-12 offset-6</div>
  </lgm-col>
</lgm-row>
```

## 分栏排序
通过 Flex 布局的 Order 来改变元素的排序。

<ClientOnly>
 <grid-demo-4></grid-demo-4>
</ClientOnly>

```vue
<lgm-row :gutter="16">
  <lgm-col :span="6" order="3">
    <div class="gutter-box">
      col-6 third
    </div>
  </lgm-col>
  <lgm-col :span="6" order="1">
    <div class="gutter-box">
      col-6 first
    </div>
  </lgm-col>
  <lgm-col :span="6" order="4">
    <div class="gutter-box">
      col-6 fourth
    </div>
  </lgm-col>
  <lgm-col :span="6" order="2">
    <div class="gutter-box">
      col-6 second
    </div>
  </lgm-col>
</lgm-row>
```

##  响应式布局
参照手机和电脑预设了六个响应尺寸：phone、miniPad、pad、narrowPc、pc 和 widePc。

<ClientOnly>
 <grid-demo-5></grid-demo-5>
</ClientOnly>

```vue
 <lgm-row>
  <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
  <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
  <lgm-col :phone="{'span': 24}"  :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
  <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
  <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
  <lgm-col :phone="{'span': 24}" :mini-pad="{span: 8}" :pad="{'span': 12}" :pc="{'span': 8}" :wide-pc="{'span': 4}">
    <div class="colBox">col-4</div>
  </lgm-col>
</lgm-row>
```
## 属性
  - ```lgm-row``` 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | gutter | 网格间隔 | number | —  | 0 |
  | justify | 水平排列方式 | string | start/end/center/space-around/space-between | — |
  | align | 垂直排列方式 | string | top/middle/bottom | — |
  
  - ```lgm-col``` 的属性说明如下：
  
    | 参数 | 说明 | 类型 | 可选值 | 默认值 |
    | ---- |:----:|:----:|:----:|:----:|
    | span | 网格占据的列数 | number | —  | 24 |
    | offset | 网格左侧的间隔格数 | number | — | 0 |
    | order | 网格顺序 | string/number | — | — |
    | phone | <576px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) | — | —  |
    | miniPad | ≥576px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) |  —   | —  |
    | pad | ≥768px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) | —  | —  |
    | narrowPc | ≥992px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) |  —   | —  |
    | pc | ≥1200px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) |  —   | —  |
    | widePc | ≥1600px 响应式网格属性对象 | object (例如： {span: 4, offset: 4}) |  —   | —  |