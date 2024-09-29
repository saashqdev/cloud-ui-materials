<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapCamera Camera

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Default Value](#default value)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Form**

Turn on/off the camera, support screenshots, uploads and other functions

## Example
### Basic Usage

``` html
<lcap-camera></lcap-camera>
```

### Default Value

```vue
<template>
<lcap-camera list-type="image"
    url="/gateway/lowcode/api/v1/app/upload" v-model="value"
    converter="json">
</lcap-camera>

</template>
<script>
    export default {
        data() {
            return {
                value: '[]',
            };
        },
    };
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| width | string | | `800` | Width |
| height | string | | `600` | Height |
| value.sync, v-model | Array | | `[]` | Current file list |
| url | string | | | Upload address |

### Events

#### @send

Triggered when just sent

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.data | object | Progress related information |
| $event.preventDefault | Function | Prevent upload process |
| senderVM | UUploader | Send event object |

#### @progress

Triggered when sending progress changes, used when uploading progress bar

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.data | object | Progress related information |
| senderVM | UUploader | Send event object |

#### @complete

Triggered when upload is complete

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.xml | string | Server response information |
| senderVM | UUploader | Send event object |

#### @success

Triggered when upload is successful

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.data | object | Server returns information object |
| $event.file | object | Upload file information, excluding file body content |
| senderVM | UUploader | Send event object |

#### @error

Triggered when an upload error occurs

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | Custom event object |
| $event.name | string | Error name |
| $event.message | string | Error description |
| $event.extensions | string | Restriction type |
| $event.maxSize | number | Limit size |
| $event.size | number | Current size |
| senderVM | UUploader | Send event object |

Methods

#### open()

Turn on camera

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

Turn off camera

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### snapshot()

Take a screenshot and upload it

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

