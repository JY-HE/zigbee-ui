# zigbee-ui

# 简介
一个类似于Element UI的个人组件库
# 使用
1、安装
```
npm i zigbee-ui
yarn add zigbee-ui
```

2、全局注册
```javascript
import ZigbeeUI from 'zigbee-ui'
Vue.use(ZigbeeUI)
```

3、按需导入
```javascript
import ZigbeeUI, { Button, Dialog } from 'zigbee-ui'
Vue.use(ZigbeeUI, {
  components: [Button, Dialog]
})
```

4、导入样式
```javascript
import 'zigbee-ui/dist/zigbee-ui.css'
```

<br>

---

<br>

## 组件配置说明
<br>

### 按钮（Button）
#### Attributes

| 参数     | 说明     | 类型               | 可选值                                                                 | 默认值               |
| -------- | -------- | ---------------- | -------------------------------------------------------------------- | ---------------- |
| type     | 类型    | String           | primary / info / success / warning / danger / text | defalut |
| plain    | 是否朴素按钮 | Boolean | —— | false |
| round    | 是否圆角按钮 | Boolean | —— | false |
| circle   | 是否圆形按钮 | Boolean | —— | false |
| mimicry  | 是否拟态按钮（和 plain 不能同时设置，会覆盖 plain） | Boolean | —— | false |
| icon     | 图标类名     | String | ——  | —— |
| disabled | 是否禁用状态 | Boolean | —— | false |

<br>

#### Slot

| 插槽名称  | 说明 |
| ----- | -------- |
| —— | Button 的文本 |

<br>

#### Events

| 事件名称  | 说明      | 回调参数   |
| ----- | -------- | -------- |
| click | 按钮点击的回调 | DOM节点 |

<br>

---

<br>

### 弹框（Dialog）
#### Attributes

| 参数     | 说明     | 类型               | 可选值                                                                 | 默认值               |
| -------- | -------- | ---------------- | -------------------------------------------------------------------- | ---------------- |
| title     | Dialog 的标题，可通过具名 slot 传入    | String           | —— | —— |
| visible    | 是否显示 Dialog，支持 .sync 修饰符 | Boolean | —— | false |
| width    | Dialog 的宽度 | string | —— | 	50% |
| top   | Dialog CSS 中的 margin-top 值 | string | —— | 15vh |
| modal  | 是否需要遮罩层 | Boolean | —— | true |
| closeOnClickModal     | 是否可以通过点击 modal 关闭 Dialog     | Boolean | ——  | true |
| appendToBody | Dialog 自身是否插入至 body 元素上 | Boolean | —— | false |
| mimicry | Dialog 自身是否拟态 | Boolean | —— | false |
| footer | 是否显示 Dialog 的底部按钮，当为 true 时可通过具名 slot 传入 | Boolean | —— | true |
| showClose | 是否显示关闭按钮 | Boolean | —— | true |


<br>

#### Slot

| 插槽名称  | 说明 |
| ----- | -------- |
| —— | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |

<br>

#### Events

| 事件名称  | 说明   | 回调参数   |
| ----- | -------- | -------- |
| close | Dialog 关闭的回调 | —— |
| open | Dialog 打开的回调 | —— |
| determine | Dialog 点击确定按钮的回调 | —— |

<br>

---

<br>