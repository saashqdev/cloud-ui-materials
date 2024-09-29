### Basic Usage

``` html
<lcap-camera></lcap-camera>
```

### Default Value

```vue
<template>
<lcap-camera list-type="image"
    url="/gateway/lowcode/api/v1/app/upload" v-model="value"
    converter="json">
</lcap-camera>

</template>
<script>
    export default {
        data() {
            return {
                value: '[]',
            };
        },
    };
</script>
```
