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
    <u-form-item label-size="large" :required="true" layout="block" rules="required" label="Business caliber">
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
