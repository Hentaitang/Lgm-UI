---
title: 快速上手
---
# 快速上手
本节将介绍如何在项目中使用 LGM-UI。

## 安装
推荐使用 yarn 的方式安装，它的速度更快(注意在项目中不要npm与yarn混用)。


```$xslt
$ yarn add lgm-ui

// or

$ npm install lgm-ui --save
```

## 引入LGM-UI
你可以引入整个 LGM-UI，或是根据需要仅引入部分组件。
我们先介绍如何引入完整的 LGM-UI。
### 完整引入
在main.js文件下添加如下配置:
```js
import Vue from 'vue';
import LgmUI from 'lgm-ui'
import 'lgm-ui/dist/index.css'
import App from './App.vue';

Vue.use(LgmUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
```
以上代码便完成了 LGM-UI 的引入。需要注意的是，样式文件需要单独引入。
### 按需引入
如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
```js
import Vue from 'vue';
import { Button, Input } from 'lgm-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
button

new Vue({
  el: '#app',
  render: h => h(App)
});
```
完整组件列表和引入方式
```js{4}
import Vue from 'vue';
import {
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Content,
  Footer,
  Sider,
  Toast,
  Tabs,
  TabsHead,
  TabsItem,
  TabsBody,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem
} from 'lgm-ui';

Vue.use(Button);
Vue.use(Icon);
Vue.use(GroupButton);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Layout);
Vue.use(Header);
Vue.use(Content);
Vue.use(Footer);
Vue.use(Sider);
Vue.use(Tabs);
Vue.use(TabsHead);
Vue.use(TabsItem);
Vue.use(TabsBody);
Vue.use(TabsPane);
Vue.use(Popover);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Toast);
```
## 开始使用
```vue
<lgm-button>默认</lgm-button>
<lgm-button type="success">成功</lgm-button>
<lgm-button type="danger" icon="i-loading" circle></lgm-button>
```
i