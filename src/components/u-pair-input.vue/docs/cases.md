### Delimiters and Copy-Paste

You need to test the following situations:

```
Correct example: www: 4444, xxx: 5555, yyy: 6666

Add box, edit box key, edit box value:
www: 4444, xxx: 5555, y@yy: 666
www: 4444, xxx: 5555, yyy: 666
www: 4444, xxx: 5555, xxx:
www: 4444, xxx: 5555,
```

```vue
<template>
<u-form-item label="Key-Value Pair" bubble>
    <u-pair-input v-model="pairs" key-rules="alphaNum" value-rules="numeric | minLength(4) # Value must not be less than 4 digits"></u-pair-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            pairs: [
                { key: 'aaaa', value: 1234 },
                { key: 'bbbb', value: 5678 },
                { key: 'cccc', value: 9101 },
            ],
        };
    },
};
</script>
```
