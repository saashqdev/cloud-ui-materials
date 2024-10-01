<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapH5TkShare Taikang SDK Share

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Methods](#methods)

**Runtime**

Please add description here

## Example
### Basic Usage

``` html
<lcap-tk-share></lcap-tk-share>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number, string, object | | | The value that needs to be passed in |
| secret | string | | | Secret key, letters or numbers, please leave it blank if not used |
| shareUrl | string | | | Share address (default is the current page address) |
| shareTitle | string | | | FB Moments title (default is the current page title) |
| shareBitmap | image | | | URL to share the image (too large or inaccessible will cause failure) |
| shareIntroduce | string | | | Introduction to Moments |

### Slots

#### (default)

Insert text or HTML.

Methods

#### getMsg()

Get callback information after sharing

#### invoke()

Call up share

