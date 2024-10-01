### Basic Usage

``` vue
<template>
<u-color-picker v-model="color"></u-color-picker>
</template>
<script>
export default {
    data() {
        return {
            color: '#ff5a5a',
        };
    },
};
</script>
```

### Use the Palette Directly

```vue
<template>
<u-pallette v-model="color"></u-pallette>
</template>
<script>
export default {
    data() {
        return {
            color: '#ff5a5a',
        };
    },
};
</script>
```


### Use the Default Value Directly

``` vue
<template>
<u-pallette v-model="color"></u-pallette>
</template>
<script>
export default {
    data() {
        return {
            color: 'white',
        };
    },
};
</script>
```