<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# LcapRichTextEditor 富文本编辑器

- [示例](#示例)
    - [Basic Usage](#Basic Usage)
    - [只读模式](#只读模式)
    - [可选功能](#可选功能)
    - [表单校验](#表单校验)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Editor**

基于第三方富文本插件Quill Editor进行封装

## Example
### Basic Usage

通过双向绑定输入内容

``` vue
<template>
<div>
    <lcap-rich-text-editor :value.sync="tip" :formula="true" style="margin-bottom: 10px;"></lcap-rich-text-editor>
    <lcap-rich-text-editor :value.sync="tip" :readOnly="bool"></lcap-rich-text-editor>
</div>
</template>

<script>
export default {
    data() {
        return {
            tip: "测试内容",
            bool: true
        }
    }
}
</script>
```

输入提示

``` vue
<template>
<div>
<u-input v-model="tip" placeholder="请输入" style="margin-bottom: 10px;"></u-input>
<lcap-rich-text-editor :placeholder="tip"></lcap-rich-text-editor>
</div>
</template>

<script>
export default {
    data() {
        return {
            tip: ""
        }
    }
}
</script>
```

### 只读模式

只读模式可以作为富文本编辑器的内容展示区，默认隐藏工具栏，通过`readOnly`设置

``` vue
<template>
<div>
    <u-switch v-model="switchToggle" style="margin-bottom: 10px;">Switch</u-switch>
    <lcap-rich-text-editor :readOnly="switchToggle"></lcap-rich-text-editor>
</div>
</template>

<script>
export default {
    data() {
        return {
            switchToggle: false
        }
    }
}
</script>
```

### 可选功能

给`formula`设置`true`可以开启公式输入功能, 给`textSub`设置`true`可以开启文本下标功能, 给`textSuper`设置`true`可以开启文本上标功能

``` vue
<template>
<div>
    <div style="margin-bottom: 10px;">
        <u-switch v-model="showFormula">Switch</u-switch>
        <u-switch v-model="showTextSub">Switch</u-switch>
        <u-switch v-model="showTextSuper">Switch</u-switch>
    </div>
    <lcap-rich-text-editor :formula="showFormula" :textSub="showTextSub" :textSuper="showTextSuper"></lcap-rich-text-editor>
</div>
</template>

<script>
export default {
    data() {
        return {
            showFormula: true,
            showTextSub: true,
            showTextSuper: true
        }
    }
}
</script>
```

### 表单校验

``` vue
<template>
<u-form ref="form" gap="large">
    <u-form-item label-size="large" :required="true" layout="block" rules="required" label="业务口径">
        <lcap-rich-text-editor :readOnly="true" :formula="false" :value.sync="tip"></lcap-rich-text-editor>
    </u-form-item>
    <u-form-item label-size="large" layout="block">
        <u-button @click="onClick">创建</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            tip: '',
            bool: true,
        }
    },
    mounted() {
        setTimeout(() => {
            this.tip = '测试1';
        }, 1000);
    },
    methods: {
        async onClick() {
            const valid = await this.$refs.form.validate();
        },
    },
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync | string |  | `''` | 需要传入的文本内容 |
| readOnly | boolean |  | `false` | 启用只读模式 |
| textSub | boolean |  | `false` | 启用文本下标工具 |
| textSuper | boolean |  | `false` | 启用文本上标工具 |
| formula | boolean |  | `false` | 启用公式输入工具 |
| disablescroll | boolean |  | `false` | 禁用滚动 |
| placeholder | string |  | `''` | 输入提示 |
| imgUploadUrl | string |  | `'/gateway/lowcode/api/v1/app/upload'` | 请填入上传图片的接口路径 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @change

内容修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | 当前输入区域的内容 |

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 当前输入区域的内容 |

