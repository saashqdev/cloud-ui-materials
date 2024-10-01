### Basic Form

Click the input area and enter your input. After completing the input, generate a string card by losing focus on the mouse, using the space, comma, or tab key.

``` html
<u-chips placeholder="Please enter the content, press space or comma to end"></u-chips>
```

### Two-Way Binding

Use `v-model` or `:value.sync` for two-way binding.

``` vue
<template>
<u-linear-layout>
    <u-chips v-model="value" placeholder="Please enter the date"></u-chips>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['2019-07-01', '2019-07-02'],
        };
    },
};
</script>
```

### Disable

``` html
<u-linear-layout>
    <u-chips placeholder="disabled" disabled></u-chips>
</u-linear-layout>
```

### Copy and Paste

Copy `2019-01-02 2019-01-03 2019-01-04 2019-02-05` and paste it into the input box.

``` html
<u-linear-layout>
     <u-chips placeholder="Please enter date"></u-chips>
</u-linear-layout>
```

### Input Content Validation

Use the `rules` attribute to define the validation rules for the input string. The specific rule writing method is the same as that in `<u-validator>`.

``` vue
<template>
<u-linear-layout>
    <u-validator>
        <u-chips v-model="value" placeholder="Please enter the IP address" rules="ip"></u-chips>
    </u-validator>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: [],
        };
    },
};
</script>
```

### Quantity Verification and Duplicate Value Detection

Use the `list-rules` attribute to define validation rules for generated items, such as non-empty and quantity limit. The specific rule writing method is the same as that in `<u-validator>`.

``` html
<u-linear-layout>
    <u-validator>
        <u-chips placeholder="Please enter the IP address, up to 3" rules="ip" list-rules="notEmpty | noDuplicates | maxLength(3)"></u-chips>
    </u-validator>
</u-linear-layout>
```

### Separator

Use the `separators` property to define the separators for generated items. By default, both commas and spaces can be used as separators.

``` html
<u-linear-layout>
    <u-validator>
        <u-chips placeholder="Use commas as separators" separators="comma"></u-chips>
    </u-validator>
    <u-validator>
        <u-chips placeholder="Use space as separator" separators="space"></u-chips>
    </u-validator>
</u-linear-layout>
```

### searchInput

When `type='searchInput'`, it will be rendered as a search box.

``` vue
<template>
<u-linear-layout>
    <u-chips v-model="value" placeholder="Multiple search conditions are separated by carriage returns" type="searchInput" list-rules="maxLength(6)"></u-chips>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: [],
        };
    },
};
</script>
```

### Form Submission

Since the validation of `<u-chips>` is now completed by `<u-validator>`, it can be used as a form subcomponent in `<u-form-item>` and validated together with other content when the form is submitted

``` vue
<template>
<u-form ref="form" gap="large">
    <u-form-item required label="Username" rules="alphaNum | required">
        <u-input v-model="name" placeholder="Please enter your username"></u-input>
    </u-form-item>
    <u-form-item required label="Password" rules="alphaNum | required">
         <u-input v-model="password" placeholder="Please enter your password" type="password"></u-input>
    </u-form-item>
    <u-form-item required label="Whitelist" layout="block" :bubble="true">
         <u-chips v-model="list" placeholder="Please enter the IP address, up to three" rules="ip" list-rules="notEmpty | maxLength(3) | noDuplicates"></u-chips>
    </u-form-item>
    <u-form-item>
         <u-button color="primary" @click="submit">Create Now</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            name: 'csr123',
            password: 'csr123',
            list: [],
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
             .then(() => this.$toast.show('Verification passed, submission successful!'))
             .catch(() => this.$toast.show('Verification failed!'));
            },
        },
};
</script>
```