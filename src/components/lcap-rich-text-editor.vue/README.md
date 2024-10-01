<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapRichTextEditor rich text editor

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Read-Only Mode](#read-only mode)
    - [OPTIONAL FUNCTIONS](#OPTIONAL FUNCTIONS)
    - [Form Validation](#Form Validation)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Editor**

Encapsulated based on the third-party rich text plug-in Quill Editor

## Example
### Basic Usage

Enter content via two-way binding

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
            tip: "Test content",
            bool: true
        }
    }
}
</script>
```

Input prompt

```vue
<template>
<div>
<u-input v-model="tip" placeholder="Please enter" style="margin-bottom: 10px;"></u-input>
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

### Read-Only Mode

Read-only mode can be used as the content display area of   the rich text editor. The toolbar is hidden by default and can be set through `readOnly`

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

### Optional Features

Setting `true` to `formula` can enable the formula input function, setting `true` to `textSub` can enable the text subscript function, and setting `true` to `textSuper` can enable the text superscript function.

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

### Form Verification

```vue
<template>
<u-form ref="form" gap="large">
    <u-form-item label-size="large" :required="true" layout="block" rules="required" label="Business Caliber">
        <lcap-rich-text-editor :readOnly="true" :formula="false" :value.sync="tip"></lcap-rich-text-editor>
    </u-form-item>
    <u-form-item label-size="large" layout="block">
        <u-button @click="onClick">Create</u-button>
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
            this.tip = 'Test1';
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
| value.sync | string | | `''` | The text content that needs to be passed in |
| readOnly | boolean | | `false` | Enable read-only mode |
| textSub | boolean | | `false` | Enable text subscripting tool |
| textSuper | boolean | | `false` | Enable text superscript tool |
| formula | boolean | | `false` | Enable formula input tool |
| disablescroll | boolean | | `false` | Disable scrolling |
| placeholder | string | | `''` | Input prompt |
| imgUploadUrl | string | | `'/gateway/lowcode/api/v1/app/upload'' | Please fill in the interface path for uploading images |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @change

Triggered when content is modified

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | The content of the current input area |

#### @input

Fires on input

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | The content of the current input area |

