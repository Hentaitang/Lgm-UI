# LGM-UI 

[![Build Status](https://travis-ci.org/Hentaitang/Lgm-UI.svg?branch=master)](https://travis-ci.org/Hentaitang/Lgm-UI)
[![npm](https://img.shields.io/npm/v/lgm-ui)](https://www.npmjs.com/package/lgm-ui)
[![GitHub](https://img.shields.io/github/license/Hentaitang/Lgm-UI)](https://github.com/Hentaitang/Lgm-UI/blob/master/LICENSE)

基于vue 2.x 开发的的UI组件库
## 介绍

这是我为了深入学习vue做的一个 UI 框架，希望对你有帮助.

本UI库支持 IE10 及以上浏览器

本UI库含有以下9个组件:
- icon 图标
- button 按钮
- input 输入框
- layout 布局
- grid 网格布局
- toast 提示弹框
- popover 气泡卡片
- tabs 标签页
- collapse 折叠面板

## 文档
待发布
## 安装
```$xslt
$ yarn add lgm-ui

// or

$ npm install lgm-ui --save
```
## 引入项目
在main.js文件下添加如下配置:
```$xslt
import LGM from 'lgm-ui'
import 'lgm-ui/dist/index.css'

Vue.use(LGM)

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

## 注意
添加 CSS 样式:

本UI库所有组件的盒模型均使用```border-box```，使用本UI库是务必在 css 中开启```border-box```. 
```$xslt
*, *::after, *::before{
    box-sizing: border-box;
}
```

## LICENSE
[MIT](https://github.com/Hentaitang/Lgm-UI/blob/master/LICENSE)
