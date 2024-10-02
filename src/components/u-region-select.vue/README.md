<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# URegionSelect Region selection

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Two-Way Binding](#Two-way binding)
    - [Placeholder](#placeholder)
    - [Hide Empty List](#Hide empty list)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**UI Components**, **Form Controls**, **Block-Level Display**

This component inherits from UCascadeSelect and is only populated with China's administrative district data. Other functions are the same as UCascadeSelect.

## Example
### Basic usage

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select value="Fort Erie, Ontario, Lincoln District"></u-region-select>
</u-linear-layout>
```

### Two-Way Binding

Use `v-model` for two-way binding.

```Vue
<template>
    <u-region-select v-model="address"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '',
        };
    },
};
</script>
```

### Placeholder

``` html
<u-region-select :categories="[
    { label: 'Province', placeholder: 'Please select a province' },
    { label: 'City', placeholder: 'Please select a city' },
    { label: 'District', placeholder: 'Please select a county' },
]"></u-region-select>
```

### Hide Empty Lists

``` html
<u-region-select hide-empty :categories="[
    { label: 'Province', placeholder: 'Please select a province' },
    { label: 'City', placeholder: 'Please select a city' },
    { label: 'District', placeholder: 'Please select a county' },
]"></u-region-select>
```

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> | | `'data'` | Data list |
| value.sync, v-model | any | | | The currently selected value |
| categories | Array\<{ label, key, placeholder }\> | | `'Data'` | Multi-level classification |
| hide-empty | boolean | | `false` | Whether to hide empty lists |
| converter | string, object | | `'join'` | Converter between value and values. Optional values: `'join'` means joining the values   array to become value, `'join.number'` is similar to `join`, except that it will be considered as a number. You can also use `:` to modify the separator, similar to the directive parameter of Vue, `'last-value'` means taking the value of the last item as value. You can also pass in an object containing { get, set } |
| field | string | | `'value'` | Display text field |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |

### Events

#### @input

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Value of the selection |
| senderVM | URegionSelect | Send event instance |

#### @select

Triggered when an item is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | number | The selected level |
| $event.value | any | Changed value |
| $event.values   | Array | An array of each value after the change |
| $event.item | object | Select item related object |
| $event.itemVM | ListViewItem | Select item subcomponent |
| senderVM | URegionSelect | Send event instance |

#### @change

Fired when the selected value changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | Changed value |
| $event.oldValue | any | Old value |
| $event.values   | Array | An array of each value after the change |
| $event.oldValues   | Array | An array of old values   for each item |
| senderVM | URegionSelect | Send event instance |
