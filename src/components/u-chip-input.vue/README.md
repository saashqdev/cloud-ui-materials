<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UChipInput Entry Input Box

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Two-Way Binding](#Two-way binding)
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

**Form Validator**

Used to enter a series of entries.

## Example
### Basic Usage

Click the input area to input. After completing an input, you can generate the entry by pressing the <kbd>Tab</kbd>, <kbd>Enter</kbd> key or losing the mouse focus.

``` html
<u-chip-input></u-chip-input>
```

### Two-Way Binding

Generally use `v-model` or `:value.sync` to bind a string array bidirectionally.

``` vue
<template>
<u-chip-input v-model="list"></u-chip-input>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'aaa',
                'bbb',
                'ccc',
            ],
        };
    },
};
</script>
```

### Form Validation

#### Rules for Each Item

By setting rules through `rules`, the entry input box can be connected to the [Cloud UI form validation system](https://kubevue.github.io/cloud-ui/components/cloud-ui/components/u-validator/examples). For various rules, see [UValidator](https://kubevue.github.io/cloud-ui/components/u-validator/rules).

For example, in the following example, the user is required to enter the correct IP address.

``` vue
<template>
<u-form-item label="IP Address" bubble>
    <u-chip-input v-model="list" placeholder="Please enter the IP address" rules="ip # Please enter the correct IP address"></u-chip-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            list: [
                '10.0.10.32',
                '192.168.1.1',
            ],
        };
    },
};
</script>
```

#### Rules for Lists

Use `list-rules` to set validation rules for the entire array, such as the number of list items. For more information, see [UValidator](https://kubevue.github.io/cloud-ui/components/u-validator/rules) for some rules related to arrays.

In the following example, the array cannot be empty, at most 2 items can be added, and there cannot be duplicates.

``` vue
<template>
<u-form-item label="number list" bubble>
    <u-chip-input v-model="list" rules="numeric" list-rules="notEmpty # At least one numeric item must be entered | maxLength(2) # No more than 2 numeric items | noDuplicates"></u-chip-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            list: [],
        };
    },
};
</script>
```

### Delimiters and Copy and Paste

The default separator is `,`. If `,` appears when adding or modifying an entry, the string preceding it will be treated as a completed item and added.

In addition, this component supports the function of pasting multiple entries at a time. If the copied and pasted string includes multiple separators, they will be added one by one.

If an error is found in the middle of adding, the pasting operation will be aborted.

In the example below, you can try copying `2020-02-02,2020-02-29,2019-12-18,2019-02-,2019-02-29` and pasting it into the input box.

``` vue
<template>
<u-form-item label="Date" bubble>
    <u-chip-input v-model="list" separators="," placeholder="Please enter multiple dates" rules="iso8601(true) # Please enter a valid date"></u-chip-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            list: [
                '2019-06-25',
            ],
        };
    },
};
</script>
```

#### Modify the Delimiter

Set the separators by modifying the `separators` property.

For example, in the following example, multiple separators including `,;` are supported. Try to copy `2020-02-02 2020-02-29 2019-12-18;2008-02-18,2003-05-16` and paste it into the input box.

``` vue
<template>
<u-form-item label="Date" bubble>
    <u-chip-input v-model="list" separators=",; " placeholder="Please enter multiple dates" rules="iso8601(true) # Please enter a valid date"></u-chip-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            list: [
                '2019-06-25',
            ],
        };
    },
};
</script>
```

In the single-line input box, characters such as `\n\t` will be automatically converted to spaces. If you need to separate by newline characters, you can do so by setting spaces or `\\s`.

In the example below, try copying the following code into the input box.

```
2024-02-02
2024-02-29
2023-12-18
2023-02-08
2023-02-29
```

``` vue
<template>
<u-form-item label="Date" bubble>
    <u-chip-input v-model="list" separators=" " placeholder="Please enter multiple dates" rules="iso8601(true) # Please enter a valid date"></u-chip-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            list: [
                '2019-06-25',
            ],
        };
    },
};
</script>
```

### Disabled State

``` vue
<template>
<u-chip-input v-model="list" disabled></u-chip-input>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'a-value',
                'b-value',
                'c-value',
            ],
        };
    },
};
</script>
```

### One-Click Clear

Add the `clearable` attribute to enable a one-click clear button.

``` vue
<template>
<u-chip-input v-model="list" clearable></u-chip-input>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'a-value',
                'b-value',
                'c-value',
            ],
        };
    },
};
</script>
```

### Add Icon

Icons can be added using `prefix` and `suffix`.

``` vue
<template>
<u-linear-layout direction="vertical">
    <div><u-chip-input v-model="list" prefix="search"></u-chip-input></div>
    <div><u-chip-input v-model="list" suffix="search"></u-chip-input></div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'a-value',
                'b-value',
                'c-value',
            ],
        };
    },
};
</script>
```

### Modify the Size

Supports several levels of width and height combinations: `normal`, `large`, `huge`, and `full`.

``` vue
<template>
<u-linear-layout direction="vertical">
    <div><u-chip-input size="normal large" v-model="list"></u-chip-input></div>
    <div><u-chip-input size="large" v-model="list"></u-chip-input></div>
    <div><u-chip-input size="huge" v-model="list"></u-chip-input></div>
    <div><u-chip-input size="full" v-model="list"></u-chip-input></div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'aaa',
                'bbb',
                'ccc',
            ],
        };
    },
};
</script>
```

### Comprehensive Example

``` vue
<template>
<u-form ref="form">
    <u-form-item required label="Instance Name" rules="required | alphaNum">
        <u-input v-model="model.name" placeholder="Please enter the instance name"></u-input>
    </u-form-item>
    <u-form-item required label="Port" rules="required | port">
        <u-input v-model="model.port" placeholder="Please enter the port"></u-input>
    </u-form-item>
    <u-form-item required label="Whitelist" layout="block" :bubble="true">
        <u-chip-input size="huge" v-model="model.whitelist" placeholder="Please enter the IP address" rules="ip" list-rules="notEmpty # Enter at least one IP | maxLength(3) # No more than 3 IPs | noDuplicates"></u-chip-input>
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
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array | | `'\[\]'` | List of items |
| placeholder | string | | `'Please enter content'` | Placeholder for the input box |
| rules | string, Array\<Rule\> | | | Validation rules for each item |
| list-rules | string, Array\<Rule\> | | | Validation rules for the entire list |
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
| $event.text | string | Item to be added |
| $event.oldValue | Array | List of old entries |
| senderVM | UChipInput | Send event instance |

#### @add

Triggered after adding

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | The item added |
| $event.value | Array | Current item list |
| senderVM | UChipInput | Send event instance |

#### @before-edit

Trigger before editing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldText | string | The item before editing |
| $event.text | string | The edited item |
| $event.index | number | The index of the edit |
| $event.value | Array | List of items |
| senderVM | UChipInput | Send event instance |

#### @edit

Triggered after editing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | The edited item |
| $event.index | number | The index of the edit |
| $event.value | Array | List of items |
| senderVM | UChipInput | Send event instance |

#### @before-remove

Triggered before deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | Item to be deleted |
| $event.index | number | Index of the item to delete |
| $event.oldValue | Array | List of old entries |
| senderVM | UChipInput | Send event instance |

#### @remove

Triggered after deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | Item to be deleted |
| $event.index | number | Index of the item to delete |
| $event.value | Array | Current item list |
| senderVM | UChipInput | Send event instance |

#### @before-clear

Trigger before clearing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldValue | Array | List of old entries |
| senderVM | UChipInput | Send event instance |

#### @clear

Trigger before clearing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | List of changed items |
| senderVM | UChipInput | Send event instance |

#### @change

Fired after the item list changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.oldValue | Array | List of old entries |
| $event.value | Array | List of changed items |
| senderVM | UChipInput | Send event instance |

Methods

#### edit(index)

Edit an item

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| index | number | | Index of the edit item |

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

Give the input box focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### blur()

Make the input box lose focus.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

Clear all entries in the input box.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

ARIA and Keyboard

| Key | Description |
|--- | ----------- |
| <kdb>Enter</kdb> | Complete the input of the current item |
| <kdb>Tab</kdb> | Complete the input of the current item |
| <kdb>Delete</kdb> | Delete the previous item |
