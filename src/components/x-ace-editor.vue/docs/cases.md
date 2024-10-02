### Display in Form

```vue
<template>
<u-form>
    <u-form-item label="Code Snippet" layout="block" rules="required | minLength(10)">
        <x-ace-editor v-model="value"></x-ace-editor>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            value: 'Ace',
        };
    },
}
</script>
```
