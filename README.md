# LGM-UI 

[![Build Status](https://travis-ci.org/Hentaitang/Lgm-UI.svg?branch=master)](https://travis-ci.org/Hentaitang/Lgm-UI)
[![npm](https://img.shields.io/npm/v/lgm-ui)](https://www.npmjs.com/package/lgm-ui)
[![GitHub](https://img.shields.io/github/license/Hentaitang/Lgm-UI)](https://github.com/Hentaitang/Lgm-UI/blob/master/LICENSE)

基于vue 2.x 开发的的UI组件库
## 介绍

这是我为了巩固vue知识做的一个 UI 框架，希望对你有帮助.

本UI库含有以下14个组件:
- icon 图标
- button 按钮
- input 输入框
- select 选择框 (暂未实现)
- switch 开关 (暂未实现)
- radio 单选框 (暂未实现)
- checkbox 多选框 (暂未实现)
- pager 分页 (暂未实现)
- layout 布局
- grid 网格布局
- toast 提示弹框
- popover 气泡卡片
- tabs 标签页
- collapse 折叠面板

本UI库支持 IE10 及以上浏览器

## 文档
[LgmUI Documentation](https://hentaitang.github.io/Lgm-UI/)
## 安装
```$xslt
$ yarn add lgm-ui

// or

$ npm install lgm-ui --save
```
## 引入项目
在main.js文件下添加如下配置:
```$xslt
import LgmUI from 'lgm-ui'
import 'lgm-ui/dist/index.css'

Vue.use(LgmUI)

new Vue({
  render: h => h(App)
}).$mount('#app');
```
## 使用方法
```$xslt
<lgm-button>默认<lgm-button>
<lgm-button type="success">成功<lgm-button>
<lgm-button type="danger" icon="i-loading" circle><lgm-button>
```
通过以上方式我们可以很容易地使用 LGM-UI 写出一个 Hello world 页面。 [在线演示](https://codesandbox.io/s/fptfq)

## 注意
添加 CSS 样式:

本UI库所有组件的盒模型均使用```border-box```，使用本UI库请务必在 css 中开启```border-box```. 
```$xslt
*, *::after, *::before{
    box-sizing: border-box;
}
```

## LICENSE
[MIT](https://github.com/Hentaitang/Lgm-UI/blob/master/LICENSE)
