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

## 属性
  - 输入框的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | type | 类型 | string | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)  | text |
  | value / v-model | 绑定值 | string / number | — |  —  |
  | placeholder | 输入框占位文本 | string | — |  —  |
  | disabled | 是否禁用状态 | boolean | — | false |
  | clearable | 是否可清空 | boolean |  —   |false|
  | prefix-icon | 输入框头部图标 | string |   —    |   —    |
  | suffix-icon | 输入框尾部图标 | string |  —   |   —    |
  | rows | 输入框行数，只对 type="textarea" 有效 | number |  —   | 4 |
  | maxlength | 原生属性，最大输入长度 | number |  —   |   —    |
  | minlength | 原生属性，最小输入长度 | number |  —   |   —    |
  | autocomplete | 原生属性，自动补全 | string |on, off|   off    |
  | name | 原生属性 | string |  —   |   —    |
  | readonly | 原生属性，是否只读 | boolean |  —   |false|
  | max | 原生属性，设置最大值 |    —     |  —   |   —    |
  | min | 原生属性，设置最小值 |    —     |  —   |   —    |
  | step | 原生属性，设置输入字段的合法数字间隔 |    —     |  —   |   —    |
  | autofocus | 原生属性，自动获取焦点 | boolean |true, false|false|
  | form | 原生属性 | string |  —   |   —    |