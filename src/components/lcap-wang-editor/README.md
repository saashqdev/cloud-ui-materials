<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapWangEditor rich text

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Customized Upload Address](#customized upload address)
    - [Read-Only Mode](#read-only mode)
    - [Form Validation](#formvalidation)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Form**

Please add description here

## Example
### Basic Usage

``` html
<lcap-wang-editor value="<p>hello</p><img src='https://p3-passport.byteimg.com/img/user-avatar/834687b5e4137f4d998a95be7330f543~180x180.awebp'>"></lcap-wang-editor>
```

### Custom Upload Address

```html
<lcap-wang-editor value="<p>hello</p><img src='https://p3-passport.byteimg.com/img/user-avatar/834687b5e4137f4d998a95be7330f543~180x180.awebp'" uploadImgServer=" /upload/test"></lcap-wang-editor>
```


### Read-Only Mode

Read-only mode can be used as the content display area of   the rich text editor. The toolbar is hidden by default and can be set through `readOnly`

```vue
<template>
    <div>
        <lcap-wang-editor :readOnly="readOnly" value="<p>hello</p><img src='https://p3-passport.byteimg.com/img/user-avatar/834687b5e4137f4d998a95be7330f543~180x180.awebp'>"></lcap-wang-editor>
        <u-button @click="handleReadOnly">Switch</u-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            readOnly: true
        }
    },
    methods:{
        handleReadOnly() {
            this.readOnly = !this.readOnly;
        },
    }
}
</script>
```

### Form Validation

```vue
<template>
<u-form ref="form" gap="large">
    <u-form-item :required="true" layout="block" rules="required" label="Business Caliber">
        <lcap-wang-editor :value.sync="value" :editorStyle="editorStyle"></lcap-wang-editor>
    </u-form-item>
    <u-form-item layout="block">
        <u-button @click="onClick">Verify</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            editorStyle: 'height: 300px',
        }
    },
    mounted() {
        setTimeout(() => {
            this.value = 'I have content';
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
| scroll | boolean | | `true` | Enable scrolling |
| placeholder | string | | `''` | Input prompt |
| editorStyle | string | | `''` | Editor style CSS |
| uploadImgServer | string | | `''` | Upload image address |

### Events

#### @change

Triggered when content is modified

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | The content of the current input area |
| $event.editor | string | Wangeditor instance |

#### @input

Fires on input

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | string | The content of the current input area |

