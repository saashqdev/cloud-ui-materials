<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# USiderModal Sidebar Pop-Up Window

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Container**

Sidebar popup component

## Example
### Basic Usage

Set location

```vue
<template>
<div>
Position switch<u-switch v-model="switchToggle" style="margin:0 20px 10px 0;">Switch</u-switch>
Upper and lower position settings: <u-input style="margin:0 20px 10px 0;" type="number" v-model="posY"></u-input>
Button text: <u-input style="margin:0 20px 10px 0;" v-model="btnText"></u-input>
<u-button style="margin:0 20px 10px 0;" @click="() => {this.toggle = !this.toggle}">Show/Hide</u-button>
<u-sider-modal :position="posValue" :toggleShow="toggle" :buttonText="btnText" :positionY="posY">
    <div style="height:40px">Content</div>
</u-sider-modal>
</div>
</template>

<script>
    export default {
        data() {
            return {
                posValue: 'left',
                switchToggle: false,
                toggle: false,
                posY: '0',
                btnText: ''
            }
        },
        watch: {
            switchToggle(value) {
                if (value) {
                    this.posValue = 'right';
                } else {
                    this.posValue = 'left';
                }
            }
        }
    }
</script>
```


## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| position | string | `[object Object]`<br/>`[object Object]` | `'right'` | The position where the sidebar pop-up window stops (currently only supports the left and right sides) |
| toggleShow | boolean | | `false` | Whether to display the sidebar pop-up window |
| buttonText | string | | `'Sidebar pop-up window' | The display text of the pop-up window expand/collapse button |
| positionY | string | | `'0'` | The position of the Y axis of the sidebar pop-up window |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-open

Triggered before opening the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

#### @open

Triggered after opening the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

#### @before-close

Triggered before closing the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | Prevent the shutdown process |
| senderVM | UModal | Send event instance |

#### @close

Triggered when closing the pop-up window

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | Send event instance |

