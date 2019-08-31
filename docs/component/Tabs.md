# Tabs  标签页
通过鼠标或键盘输入字符
## 基础用法
输入框基础用法。
<ClientOnly>
 <input-demo-1></input-demo-1>
</ClientOnly>

```vue
<lgm-input placeholder="请输入内容" v-model="input"></lgm-input>
<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 禁用状态
输入框禁用状态，添加disabled属性。
<ClientOnly>
 <input-demo-2></input-demo-2>
</ClientOnly>

```vue
<lgm-input placeholder="请输入内容" v-model="input" disabled></lgm-input>
<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 可清空
输入框可清空，添加clearable属性。
<ClientOnly>
 <input-demo-3></input-demo-3>
</ClientOnly>

```vue
<lgm-input placeholder="请输入内容" v-model="input" clearable></lgm-input>
<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```

## 带 icon 的输入框
带有图标标记输入类型，添加prefix-icon/suffix-icon属性。
<ClientOnly>
 <input-demo-4></input-demo-4>
</ClientOnly>

```vue
<lgm-input 
  placeholder="请输入内容" 
  v-model="input1" 
  prefix-icon="i-search"></lgm-input>
<lgm-input 
  placeholder="请输入内容" 
  v-model="input2" 
  suffix-icon="i-loading"></lgm-input>
<script>
  export default {
    data() {
      return {
        input1: '',
        input2: ''
      }
    }
  }
</script>
```

## 文本域
用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
<ClientOnly>
 <input-demo-5></input-demo-5>
</ClientOnly>
```vue
<lgm-input 
  placeholder="请输入内容" 
  v-model="textarea" 
  type="textarea" 
  :rows="2"></lgm-input>
<script>
  export default {
    data() {
      return {
        textarea: ''
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