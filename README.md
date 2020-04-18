# y-ui-vue

Y UI component for Vue.js

# Installation
npm install y-ui-vue

# How to use？
```javascript
import YUI from 'y-ui-vue'  
Vue.use(YUI)
```

# License
MIT

# Example
npm install  
npm run serve  
localhost:8080

## Tooltip
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|position|Tooltip出现的位置|string|top/bottom/left/right/topLeft/topRight/bottomLeft/bottomRight|top|
|content|显示的内容，也可以通过 `slot#content` 传入 DOM| string | / | / |
|theme|默认提供的主题|string|Dark/Light|Dark|
|trigger|触发方式|string|click/hover|hover|

## Button
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|size|尺寸|string|large/small/mini|/|
|type|类型|string|primary/success/warning/danger/dashed/text|/|
|loading|是否加载中状态|boolean|/|false|
|disabled|是否禁用状态|boolean|/|false|
|icon|图标类名|string|/|/|

注：如果在button中使用自己的图标`<i></i>`需要自行调整图标的`margin`属性

### ButtonGroup
```html
  <y-button-group>
    <y-button icon="search" type="primary"></y-button>
    <y-button icon="search" type="primary"></y-button>
    <y-button icon="search" type="primary"></y-button>
  </y-button-group>
```

## Tabs
### Tab
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|标签页的主题|string|card|null|
|position|布局方向|string|top/bottom/left/right|top|
|editable|是否编辑|boolean|/|false|
### Tab Event
|事件名称|说明|回调参数|
|-|-|-|
|tab-add|点击tab新增按钮后触发|/|
|tab-selected|tab 被选中时触发|被选中的标签 tab 实例|
|tab-remove|点击 tab 移除按钮后触发|被删除的标签的 label|
### TabPane
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|label|标签页名|string|/|/|
|active|默认选中|boolean|/|false|
|disabled|是否禁用|boolean|/|false|
|icon|图标|string|/|/|


## Input
### Input Attributes
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|类型|string|text/textarea|text|
|value|绑定值|string/number|/|/|
|maxlength|原生属性，最大输入长度|number|/|/|
|minlength|原生属性，最小输入长度|number|/|/|
|placeholder|输入框占位文本|string|/|"请输入内容"|
|disabled|是否禁用|boolean|/|false|
|size|输入框尺寸，只在 `type = "text"` 时生效|string|large/medium/small|large|
|prefix|输入框头部图标|string|/|/|
|suffix|输入框尾部图标|string|/|/|
|name|原生属性|string|/|/|
|max|原生属性，设置最大值|/|/|/|
|min|原生属性，设置最小值|/|/|/|
|step|原生属性，设置输入字段的合法数字间隔|/|/|/|
|autofocus|原生属性，自动获取焦点|boolean|true/false|false|

### Input Slots
|name|说明|
|-|-|
|prefix|输入框头部内容，只对 `type="text"` 有效|
|suffix|输入框尾部内容，只对 `type="text"` 有效|
|prepend|输入框前置内容，只对 `type="text"` 有效|
|append|输入框后置内容，只对 `type="text"` 有效|

### Input Events
|事件名称|说明|回调参数|
|-|-|-|
|blur|在 Input 失去焦点时触发|(event: Event)|
|focus|在 Input 获得焦点时触发|(event: Event)|
|change|在 Input 值改变时触发|(value: string \| number)|
