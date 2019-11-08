# 优先级 C 的规则：推荐 (将选择和认知成本最小化)


## 组件/实例的选项的顺序 <sup data-p="c">推荐</sup>

**组件/实例的选项应该有统一的顺序。**

这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新属性应该放到哪里。

1. **副作用** (触发组件外的影响)
  - `el`

2. **全局感知** (要求组件以外的知识)
  - `name`
  - `parent`

3. **组件类型** (更改组件的类型)
  - `functional`

4. **模板修改器** (改变模板的编译方式)
  - `delimiters`
  - `comments`

5. **模板依赖** (模板内使用的资源)
  - `components`
  - `directives`
  - `filters`

6. **组合** (向选项里合并属性)
  - `extends`
  - `mixins`

7. **接口** (组件的接口)
  - `inheritAttrs`
  - `model`
  - `props`/`propsData`

8. **本地状态** (本地的响应式属性)
  - `data`
  - `computed`

9. **事件** (通过响应式事件触发的回调)
  - `watch`
  - 生命周期钩子 (按照它们被调用的顺序)
    - `beforeCreate`
    - `created`
    - `beforeMount`
    - `mounted`
    - `beforeUpdate`
    - `updated`
    - `activated`
    - `deactivated`
    - `beforeDestroy`
    - `destroyed`

10. **非响应式的属性** (不依赖响应系统的实例属性)
  - `methods`

11. **渲染** (组件输出的声明式描述)
  - `template`/`render`
  - `renderError`



## 元素特性的顺序 <sup data-p="c">推荐</sup>

**元素 (包括组件) 的特性应该有统一的顺序。**

这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义特性和指令应该放到哪里。

1. **定义** (提供组件的选项)
  - `is`

2. **列表渲染** (创建多个变化的相同元素)
  - `v-for`

3. **条件渲染** (元素是否渲染/显示)
  - `v-if`
  - `v-else-if`
  - `v-else`
  - `v-show`
  - `v-cloak`

4. **渲染方式** (改变元素的渲染方式)
  - `v-pre`
  - `v-once`

5. **全局感知** (需要超越组件的知识)
  - `id`

6. **唯一的特性** (需要唯一值的特性)
  - `ref`
  - `key`
  - `slot`

7. **双向绑定** (把绑定和事件结合起来)
  - `v-model`

8. **其它特性** (所有普通的绑定或未绑定的特性)

9. **事件** (组件事件监听器)
  - `v-on`

10. **内容** (覆写元素的内容)
  - `v-html`
  - `v-text`



## 组件/实例选项中的空行 <sup data-p="c">推荐</sup>

**你可能想在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。**

当你的组件开始觉得密集或难以阅读时，在多个属性之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航。


::: tip 好例子

``` js
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

``` js
// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```
:::



## 单文件组件的顶级元素的顺序 <sup data-p="c">推荐</sup>

**[单文件组件](../guide/single-file-components.html)应该总是让 `<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。**


::: danger 反例

``` html
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>
```

``` html
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```
:::


::: tip 好例子

``` html
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

``` html
<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```
:::

