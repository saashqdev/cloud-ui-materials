<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

#UChipFries

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Deletable](#Deletable)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Inline Display**, **Form Validator**

Similar to the label component, it is used to add, delete, modify and check entries.

## Example
### Basic Usage

``` html
<u-chip>Chip</u-chip>
<u-chip editing>Chip</u-chip>
<u-chip editing error>Chip</u-chip>
```

### Deletable

The deletion logic needs to be implemented by yourself using `v-if` and `@remove` events.

``` html
<u-chip removable>Chip</u-chip>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| removable | boolean | | `false` | Whether it can be deleted |
| editing | boolean | | `false` | Whether editing |
| error | boolean | | `false` | Whether to display a red box error prompt |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-remove

Triggered before deletion

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | No parameters |
| senderVM | UChip | Send event instance |

