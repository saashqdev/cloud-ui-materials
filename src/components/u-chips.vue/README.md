<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UChips Entry Input

**UI Components**, **Form Classes**

@deprecated Please use the latest UChipInput component. The form input component has some functional extensions based on the `<u-textarea>` control. It can input string cards and can be verified in combination with `<u-validator>`.

## Example
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
            value: ['2023-07-01', '2023-07-02'],
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

Copy `2023-01-02 2023-01-03 2023-01-04 2023-02-05` and paste it into the input box.

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
## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | | | The type of the input box. Currently two types are supported: default and `'searchInput'` |
| value.sync, v-model | Array | | `[]` | Contents of the input box |
| placeholder | string | | | Native property. Compatible with IE9. |
| disabled | boolean | | `false` | Disabled |
| rules | Array | | | Validation rules for each input string |
| list-rules | Array | | | Validation rules for chips, such as quantity range, whether duplicates are allowed, etc. |
| separators | string | | `'all'` | Specifies the separator for input. When set to `'comma'` or `'space'`, it specifies comma or space as the separator respectively |

### Events

#### @change

Triggered when the chip quantity changes.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Value of the input box |
| senderVM | UInput | Send event instance |

#### @validate

Triggered on validation.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.isValid | boolean | Is the current content legal? |
| $event.errMessage | string | Current error message |
| $event.value | string | Current verification content |
| $event.current | number | Index of the current item |