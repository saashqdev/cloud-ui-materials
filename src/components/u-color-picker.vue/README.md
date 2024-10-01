<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UColorPicker Color Picker

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Use the Palette Directly](#Use the palette directly)
    - [Use Default Values Directly](#Use default values   directly)
- [UColorPicker API](#ucolorpicker-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UPallette API](#upallette-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

A component used to select a color.

## Example
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

``` vue
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
## UColorPicker API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | string | | `'#000000'` | Hex color, or rgba() |

### Slots

#### (default)

Insert text or HTML into the palette.

### Events

#### @input



| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Triggered when the color is adjusted |

#### @change

Triggered on modification

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Current color |
| $event.oldValue | string | Old color |

## UPallette API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | string | | `'#000000'` | Hex color, or rgba() |

### Slots

#### (default)

Insert text or HTML into the palette.

### Events

#### @input



| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | Triggered when the color is adjusted |

#### @change

Triggered on modification

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Current color |
| $event.oldValue | string | Old color |

#### @open

Fired when popping up.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Popup color value |
| senderVM | UColorPicker | Send event instance |

#### @close

Fired when hidden.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | Color value when hidden |
| senderVM | UColorPicker | Send event instance |
