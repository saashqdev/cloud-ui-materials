<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UPairInput key-value pair input box

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Two-Way Binding](#Two-way binding)
    - [Specify Key Value Field Name](#Specify key value field name)
    - [Form Validation](#Form Validation)
    - [Separator and Copy and Paste](#Separator and copy and paste)
    - [Disabled State](#Disabled state)
    - [One-Click Clear](#One-click clear)
    - [Add Icon](#Add Icon)
    - [Change Size](#Change size)
    - [Comprehensive Example](#Comprehensive Example)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
    - [ARIA and Keyboard](#aria-and-keyboard)

Used to input a series of key-value pairs.

## Example
### Basic Usage

Click the input area to enter. After completing the key or value input, you can switch input by pressing the <kbd>Tab</kbd>, <kbd>Enter</kbd> keys or losing the mouse focus.

``` html
<u-pair-input></u-pair-input>
```

### Two-Way Binding

Use `v-model` or `:value.sync` to two-way bind an array.

``` view
<template>
<u-pair-input v-model="pairs"></u-pair-input>
</template>
<script>
export default {
    data() {
        return {
            pairs: [
                { key: 'aaa', value: 'a-value' },
                { key: 'bbb', value: 'b-value' },
                { key: 'ccc', value: 'c-value' },
            ],
        };
    },
};
</script>
```

### Specify the Key Value Field Name

You can use `key-field` and `value-field` to specify the field name.

``` view
<template>
<u-pair-input v-model="pairs" key-field="name" value-field="fingerprinter" key-placeholder="Please enter Name" value-placeholder="Please enter fingerprint"></u-pair-input>
</template>
<script>
export default {
    data() {
        return {
            pairs: [
                { name: 'ssh-name', fingerprinter: '2e:f7:17:a5:c4:41:00:59:dd:46:0d:be:a1:75:a2:86' },
                { name: 'gen-ssh', fingerprinter: '61:36:66:fb:b1:3f:f7:2c:c2:5d:91:45:7a:ed:82:75' },
                { name: 'c163yun', fingerprinter: 'fa:52:8b:7d:34:06:3d:6d:c8:84:ad:4b:a4:b4:dc:c0' },
            ],
        };
    },
};
</script>
```

### Form Validation

#### Key Value Rules

By setting rules through `key-rules` and `value-rules`, the entry input box can be connected to the [Cloud UI form validation system](https://kubevue.github.io/cloud-ui/components/cloud-ui/components/u-validator/examples). For the rules, see [UValidator](https://kubevue.github.io/cloud-ui/components/u-validator/rules).

For example, in the following example, the key can only input letters and numbers, and the value can only input numbers, and must not be less than 4 digits.

``` view
<template>
<u-form-item label="Key-Value Pair" bubble>
    <u-pair-input v-model="pairs" key-rules="alphaNum" value-rules="numeric | minLength(4) # The value must not be less than 4 digits"></u-pair-input>
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

#### Rules for Lists

Use `list-rules` to set the rules for the key-value array. For more information, see [UValidator](https://kubevue.github.io/cloud-ui/components/u-validator/rules) for some rules related to arrays.

In the following example, the array cannot be empty and at most 2 key-value pairs can be added.

``` view
<template>
<u-form-item label="Key-Value Pair" bubble>
    <u-pair-input v-model="pairs" key-rules="alphaNum" value-rules="numeric | minLength(4)" list-rules="notEmpty # You need to enter at least one key-value pair | maxLength(2) # The number of key-value pairs cannot exceed 2"></u-pair-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            pairs: [],
        };
    },
};
</script>
```

### Delimiters and Copy and Paste

The separator between keys and values   is fixed to `:` and cannot be modified.

The separator between key-value pairs is `,`. If `,` appears when adding or modifying, the input before it will be treated as a completed item and added.

In addition, this component supports pasting multiple key-value pairs at a time. If the copied and pasted key-value pair includes multiple separators, they will be added one by one.

If an error is found in the middle of adding, the pasting operation will be aborted.

In the example below, you can try copying `www: 4444, xxx: 5555, yyy: 666, zzz: 7777` and pasting it into the input box.

``` view
<template>
<u-form-item label="Key-Value Pair" bubble>
    <u-pair-input v-model="pairs" key-rules="alphaNum" value-rules="numeric | minLength(4) # The value must not be less than 4 digits"></u-pair-input>
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

#### Modify the Delimiter

Set the separators by modifying the `separators` property.

For example, in the following example, `;` is needed to separate them. Try copying `www: 4444; xxx: 5555; yyy: 666; zzz: 7777` and pasting it into the input box.

``` view
<template>
<u-form-item label="Key-Value Pair" bubble>
    <u-pair-input v-model="pairs" separators=";" key-rules="alphaNum" value-rules="numeric | minLength(4) # The value must not be less than 4 digits"></u-pair-input>
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

### Disabled State

``` view
<template>
<u-pair-input v-model="pairs" disabled></u-pair-input>
</template>
<script>
export default {
    data() {
        return {
            pairs: [
                { key: 'aaa', value: 'a-value' },
                { key: 'bbb', value: 'b-value' },
                { key: 'ccc', value: 'c-value' },
            ],
        };
    },
};
</script>
```

### One-Click Clear

Add the `clearable` attribute to enable a one-click clear button.

``` view
<template>
<u-pair-input v-model="pairs" clearable></u-pair-input>
</template>
<script>
export default {
    data() {
        return {
            pairs: [
                { key: 'aaa', value: 'a-value' },
                { key: 'bbb', value: 'b-value' },
                { key: 'ccc', value: 'c-value' },
            ],
        };
    },
};
</script>
```


### Add Icon

Icons can be added using `prefix` and `suffix`.

``` view
<template>
<u-linear-layout direction="vertical">
    <u-pair-input v-model="list" prefix="search"></u-pair-input>
    <u-pair-input v-model="list" suffix="search"></u-pair-input>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { key: 'aaa', value: 'a-value' },
                { key: 'bbb', value: 'b-value' },
                { key: 'ccc', value: 'c-value' },
            ],
        };
    },
};
</script>
```

### Modify the Size

Supports several levels of width and height combinations: `normal`, `large`, `huge`, and `full`.

``` view
<template>
<u-linear-layout direction="vertical">
    <u-pair-input size="normal large" v-model="list"></u-pair-input>
    <u-pair-input size="large" v-model="list"></u-pair-input>
    <u-pair-input size="huge" v-model="list"></u-pair-input>
    <u-pair-input size="full" v-model="list"></u-pair-input>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { key: 'aaa', value: 'a-value' },
                { key: 'bbb', value: 'b-value' },
                { key: 'ccc', value: 'c-value' },
            ],
        };
    },
};
</script>
```

### Comprehensive Example

``` view
<template>
<u-form ref="form">
    <u-form-item required label="Instance Name" rules="required | alphaNum">
        <u-input v-model="model.name" placeholder="Please enter the instance name"></u-input>
    </u-form-item>
    <u-form-item required label="Port" rules="required | port">
        <u-input v-model="model.port" placeholder="Please enter the port"></u-input>
    </u-form-item>
    <u-form-item required label="Environment Variables" layout="block" :bubble="true">
        <u-pair-input size="huge" v-model="model.whitelist" key-placeholder="Please enter the environment variable name" value-placeholder="Please enter the value of the environment variable" key-rules= "required | alphaNumDash" value-rules="required | alphaNumDash" list-rules="notEmpty # Enter at least one environment variable | maxLength(3) # The number of environment variables cannot exceed 3"></u-pair-input >
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
            model: {
                name: 'abc',
                port: '8002',
                whitelist: [],
            }
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
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array | | `'\[\]'` | List of key-value pairs |
| key-field | string | | `'key'` | Key-field |
| value-field | string | | `'value'` | Value-field |
| key-placeholder | string | | `'Please enter the Key value'` | Placeholder for the key input box |
| value-placeholder | string | | `'Please enter the Value value'` | Placeholder for the value input box |
| key-rules | string, Array\<Rule\> | | | Validation rules for keys |
| value-rules | string, Array\<Rule\> | | | Validation rules for values   |
| list-rules | string, Array\<Rule\> | | | Validation rules for the entire list of key-value pairs |
| separators | string | | `','` | Separator |
| clearable | boolean | | | Whether to display a one-click clear button |
| prefix | enum | `'search'` | | Prefix icon |
| suffix | enum | `'search'` | | Suffix icon |
| size | string | | | A combination of `normal`, `large`, `huge` |
| disabled | boolean | | | Whether to disable |

### Slots

#### (default)

Insert text or HTML.

#### Prefix

Custom prefix content

#### Suffix

Custom suffix content

### Events

#### @before-add

Trigger before adding

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | Item to be added |
| $event.oldValue | Array | Old key-value array |
| senderVM | UPairInput | Send event instance |

#### @add

Triggered after adding

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | The item added |
| $event.value | Array | Current key-value pair array |
| senderVM | UPairInput | Send event instance |

#### @before-edit

Trigger before editing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldItem | { \[keyField\]: string, \[valueField\]: string } | Item before editing |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | The edited item |
| $event.value | Array | Array of key-value pairs |
| $event.index | number | The index of the edit |
| $event.type | 'key' \| 'value' | The type of edit, key or value |
| $event.field | string | The field to edit |
| senderVM | UPairInput | Send event instance |

#### @edit

Triggered after editing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | The edited item |
| $event.value | Array | Array of key-value pairs |
| $event.index | number | The index of the edit |
| $event.type | 'key' \| 'value' | The type of edit, key or value |
| $event.field | string | The field to edit |
| senderVM | UPairInput | Send event instance |

#### @before-remove

Triggered before deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | Item to be deleted |
| $event.oldValue | Array | Old key-value array |
| $event.index | number | Index of the item to delete |
| senderVM | UPairInput | Send event instance |

#### @remove

Triggered after deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Current key-value pair array |
| $event.item | { \[keyField\]: string, \[valueField\]: string } | Item to be deleted |
| $event.index | number | Index of the item to delete |
| senderVM | UPairInput | Send event instance |

#### @clear

Trigger before clearing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldValue | Array | Old key-value array |
| senderVM | UPairInput | Send event instance |

#### @before-clear

Trigger before clearing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | Array of key-value pairs after the change |
| senderVM | UPairInput | Send event instance |

#### @change

Triggered after the key-value array changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldValue | Array | Old key-value array |
| $event.value | Array | Array of key-value pairs after the change |
| senderVM | UPairInput | Send event instance |

Methods

#### edit(index, type)

Edit an item

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| index | number | | Index of the edit item |
| type | enum | | Edit key or value |

#### save(index)

Save the item being edited

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| index | number | | Index of the saved item |

#### remove(index)

Delete an item

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| index | number | | Index of the item to delete |

#### focus()

Let the key-value pair input box get the focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### blur()

Make the key-value input box lose focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

Clear all key-value pairs in the input box.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

### ARIA and Keyboard

| Key | Description |
| --- | ----------- |
| <kdb>Enter</kdb> | Complete the input of the current item |
| <kdb>Tab</kdb> | Complete the input of the current item |
| <kdb>Delete</kdb> | Delete the previous item |
