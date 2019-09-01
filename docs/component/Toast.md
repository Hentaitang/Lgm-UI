# Toast  消息弹出框
常用于主动操作后的反馈提示。
## 基础用法
从顶部出现，3 秒后自动消失。
<ClientOnly>
 <toast-demo-1></toast-demo-1>
</ClientOnly>

```vue
<lgm-button @click="infoShow">打开消息提示</lgm-button>
<lgm-button @click="HTMLShow">使用 HTML 片段</lgm-button>
<script>
  export default {
    methods: {
      infoShow() {
        this.$toast({message: '这是一条消息提示'})
      },
      HTMLShow() {
        this.$toast({
          message: `
            <strong>内容可以是 
              <span style="color: #eb7070;">HTML</span>
            </strong>`,
          dangerouslyUseHTMLString: true
        })
      }
    }
  }
</script>
```

> message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。

## 不同状态
用来显示「消息、成功、错误、警告」类的操作反馈。
<ClientOnly>
 <toast-demo-2></toast-demo-2>
</ClientOnly>

```vue
<lgm-button @click="infoShow">消息</lgm-button>
<lgm-button @click="successShow">成功</lgm-button>
<lgm-button @click="errorShow">错误</lgm-button>
<lgm-button @click="warningShow">警告</lgm-button>
<script>
  export default {
    methods: {
      infoShow() {
        this.$toast({message: '这是一条消息提示'})
      },
      successShow() {
        this.$toast({message: '恭喜你，这是一条成功消息', type: 'success'})
      },
      errorShow() {
        this.$toast({message: '错了哦，这是一条错误消息', type: 'error'})
      },
      warningShow() {
        this.$toast({message: '警告哦，这是一条警告消息', type: 'warning'})
      }
    }
  }
</script>
```

## 可关闭
可以添加关闭按钮。
<ClientOnly>
 <toast-demo-3></toast-demo-3>
</ClientOnly>

```vue
<lgm-button @click="infoShow">消息</lgm-button>
<lgm-button @click="successShow">成功</lgm-button>
<lgm-button @click="errorShow">错误</lgm-button>
<lgm-button @click="warningShow">警告</lgm-button>
<script>
  export default {
    methods: {
      infoShow() {
        this.$toast({
          message: '这是一条消息提示', 
          showClose: true
        })
      },
      successShow() {
        this.$toast({
          message: '恭喜你，这是一条成功消息', 
          type: 'success', 
          showClose: true
        })
      },
      errorShow() {
        this.$toast({
          message: '错了哦，这是一条错误消息', 
          type: 'error', 
          showClose: true
        })
      },
      warningShow() {
        this.$toast({
          message: '警告哦，这是一条警告消息', 
          type: 'warning', 
          showClose: true
        })
      }
    }
  }
</script>
```

## 位置
可以通过 position 设置toast的位置
<ClientOnly>
 <toast-demo-4></toast-demo-4>
</ClientOnly>

```vue
<lgm-button @click="leftShow">左侧</lgm-button>
<lgm-button @click="middleShow">居中</lgm-button>
<lgm-button @click="rightShow">右侧</lgm-button>
<script>
  export default {
    methods: {
      leftShow() {
        this.$toast({
          message: '这是一条消息提示', 
          position: 'left'
        })
      },
      middleShow() {
        this.$toast({
          message: '恭喜你，这是一条成功消息', 
          type: 'success', 
          position: 'middle'
        })
      },
      rightShow() {
        this.$toast({
          message: '错了哦，这是一条错误消息', 
          type: 'error', 
          position: 'right'
        })
      }
    }
  }
</script>
```

## 全局方法
LgmUI 为 Vue.prototype 添加了全局方法 $toast。因此在 vue 实例中可以采用本页面中的方式调用 Toast，如 this.$toast(options)

## 单独引用
单独引入 Toast：
```js
import { Toast } from 'lgm-ui';
```
此时调用方法为Toast.use(options)

## 属性
  - 消息弹出框的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | message | 消息文字 | string / HTML | — |  —  |
  | type | 主题 | string | success/warning/info/error  | info |
  | showClose | 是否显示关闭按钮 | boolean | — |false|
  | duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
  | offset | Toast 距离窗口顶部的偏移量 | number |  —   |20|
  | noPrefix | 是否展示前置icon | boolean |   —    |false|
  | icon | 自定义图标 | string |  —   |   —    |
  | position | 位置 | string |left/middle/right|   middle   |
  | onClose | 关闭时的回调函数, 参数为被关闭的 toast 实例  | function |  —   | — |
  
  - 注意：
  
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | dangerouslyUseHTMLString | 是否将 toast 属性作为 HTML 片段处理 | boolean |  —   |   false    |