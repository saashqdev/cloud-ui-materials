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
    <u-form-item :required="true" layout="block" rules="required" label="Business caliber">
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
